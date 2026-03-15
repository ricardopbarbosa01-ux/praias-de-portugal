#!/usr/bin/env node
/* ===================================================================
   Build script — minifica CSS + JS e copia tudo para dist/
   =================================================================== */

const fs   = require('fs');
const path = require('path');

const SRC  = __dirname;
const DIST = path.join(__dirname, 'dist');

// ── Ficheiros a copiar sem transformação
const COPY_FILES = [
  'index.html',
  'manifest.json',
  '_redirects',
  'sw.js',
  'icon-192.png',
  'icon-512.png',
];

async function build() {
  // Limpar dist/ preservando a pasta images/ se já existir
  const imgDistPath = path.join(DIST, 'images');
  let savedImages = null;
  if (fs.existsSync(imgDistPath)) {
    savedImages = fs.readdirSync(imgDistPath).map(f => ({
      name: f,
      data: fs.readFileSync(path.join(imgDistPath, f)),
    }));
  }
  if (fs.existsSync(DIST)) fs.rmSync(DIST, { recursive: true });
  fs.mkdirSync(DIST, { recursive: true });
  // Restaurar images/ se não existir pasta de origem
  if (savedImages && savedImages.length && !fs.existsSync(path.join(SRC, 'images'))) {
    fs.mkdirSync(imgDistPath, { recursive: true });
    for (const { name, data } of savedImages) {
      fs.writeFileSync(path.join(imgDistPath, name), data);
    }
    console.log(`Restored images/ from previous dist (${savedImages.length} files)`);
  }

  // ── Minificar JS
  console.log('Minifying app.js...');
  const { minify } = await import('terser');
  const jsSource   = fs.readFileSync(path.join(SRC, 'app.js'), 'utf8');
  const jsResult   = await minify(jsSource, {
    compress: { drop_console: false, passes: 2 },
    mangle:   true,
    format:   { comments: false },
  });
  fs.writeFileSync(path.join(DIST, 'app.js'), jsResult.code, 'utf8');
  const jsSrc  = Buffer.byteLength(jsSource,       'utf8');
  const jsDist = Buffer.byteLength(jsResult.code,  'utf8');
  console.log(`  app.js: ${kb(jsSrc)} → ${kb(jsDist)} (${pct(jsSrc, jsDist)}% smaller)`);

  // ── Minificar CSS
  console.log('Minifying style.css...');
  const CleanCSS  = require('clean-css');
  const cssSource = fs.readFileSync(path.join(SRC, 'style.css'), 'utf8');
  const cssResult = new CleanCSS({ level: 2 }).minify(cssSource);
  if (cssResult.errors.length) { console.error('CSS errors:', cssResult.errors); process.exit(1); }
  fs.writeFileSync(path.join(DIST, 'style.css'), cssResult.styles, 'utf8');
  const cssSrc  = Buffer.byteLength(cssSource,       'utf8');
  const cssDist = Buffer.byteLength(cssResult.styles,'utf8');
  console.log(`  style.css: ${kb(cssSrc)} → ${kb(cssDist)} (${pct(cssSrc, cssDist)}% smaller)`);

  // ── Copiar restantes
  console.log('Copying static files...');
  for (const file of COPY_FILES) {
    const src = path.join(SRC, file);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, path.join(DIST, file));
      console.log(`  ${file}`);
    } else {
      console.warn(`  WARNING: ${file} not found — skipped`);
    }
  }

  // ── Converter imagens .jfif → .jpg com sharp (recodificação real)
  const sharp = require('sharp');
  const IMAGE_MAP = {
    'Praia de Moledo Caminha.jfif':      'moledo.jpg',
    'Praia de Ofir Esposende.jfif':      'ofir.jpg',
    'Praia de Matosinhos.jfif':          'matosinhos.jpg',
    'Praia de Espinho.jfif':             'espinho.jpg',
    'Praia da Figueira da Foz.jfif':     'figueira.jpg',
    'Praia de Buarcos.jfif':             'buarcos.jpg',
    'Praia de S\u00e3o Pedro de Moel.jfif': 'spedrodeamoel.jpg',
    'Praia da Nazar\u00e9 ondas.jfif':   'nazare.jpg',
    'Costa de Caparica.jfif':            'caparica.jpg',
    'Praia de Cascais.jfif':             'cascais.jpg',
    'Praia de Sesimbra.jfif':            'sesimbra.jpg',
    'Praia de Set\u00fabal Arr\u00e1bida.jfif': 'setubal.jpg',
    'Praia da Comporta.jfif':            'comporta.jpg',
    'Porto Covo praia.jfif':             'portocovo.jpg',
    'Vila Nova de Milfontes praia.jfif': 'milfontes.jpg',
    'Praia de Almograve.jfif':           'almograve.jpg',
    'Praia de Odeceixe.jfif':            'odeceixe.jpg',
    'Meia Praia Lagos.jfif':             'meiapraia.jpg',
    'Praia da Rocha Portim\u00e3o.jfif': 'rocha.jpg',
    'Praia de Benagil gruta.jfif':       'benagil.jpg',
    'Praia da Marinha Algarve.jfif':     'marinha.jpg',
    'Praia do Camilo Lagos.jfif':        'camilo.jpg',
    'Praia de Vilamoura.jfif':           'vilamoura.jpg',
    'Praia do Vau Portim\u00e3o.jfif':   'vau.jpg',
    'Praia de Peniche surf.jfif':        'peniche.jpg',
  };
  // Fonte: dist/images/ (restaurada no topo) ou project-root images/
  const imgSrc  = fs.existsSync(path.join(SRC, 'images'))
    ? path.join(SRC, 'images')
    : path.join(DIST, 'images');
  const imgDist = path.join(DIST, 'images');
  fs.mkdirSync(imgDist, { recursive: true });
  console.log('Converting images (.jfif → JPEG)...');
  let converted = 0;
  for (const [orig, dest] of Object.entries(IMAGE_MAP)) {
    const srcFile  = path.join(imgSrc,  orig);
    const destFile = path.join(imgDist, dest);
    if (fs.existsSync(srcFile)) {
      await sharp(srcFile).resize({ width: 800, withoutEnlargement: true }).jpeg({ quality: 70 }).toFile(destFile);
      converted++;
    } else {
      console.warn(`  WARNING: ${orig} not found`);
    }
  }
  console.log(`  images/ (${converted}/25 converted)`);

  // ── Resumo
  console.log('\n✓ Build complete → dist/');
  const files = fs.readdirSync(DIST);
  let total = 0;
  files.forEach(f => {
    const fPath = path.join(DIST, f);
    const stat  = fs.statSync(fPath);
    if (stat.isDirectory()) {
      let dirSize = 0;
      fs.readdirSync(fPath).forEach(sub => { dirSize += fs.statSync(path.join(fPath, sub)).size; });
      total += dirSize;
      console.log(`  ${f.padEnd(22)} ${kb(dirSize)}`);
    } else {
      total += stat.size;
      console.log(`  ${f.padEnd(22)} ${kb(stat.size)}`);
    }
  });
  console.log(`  ${'TOTAL'.padEnd(22)} ${kb(total)}`);
}

const kb  = b   => (b / 1024).toFixed(1) + ' KB';
const pct = (s, d) => Math.round((1 - d / s) * 100);

build().catch(err => { console.error(err); process.exit(1); });
