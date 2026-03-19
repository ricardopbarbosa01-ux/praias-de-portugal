/* ===================================================================
   Praias de Portugal — app.js
   =================================================================== */ 

/* ===== Beach Data — 25 praias ===== */
const BEACHES = [
  // ── Norte ──  face = beach orientation (degrees toward sea)
  { id: 'moledo',         namePT: 'Praia de Moledo',                  nameEN: 'Praia de Moledo',                  town: 'Caminha',         region: 'norte',          lat: 41.8453, lon: -8.8734, gh: 'gh-1', pop: 1, face: 315, photo: 'images/moledo.jpg' },
  { id: 'ofir',           namePT: 'Praia de Ofir',                    nameEN: 'Praia de Ofir',                    town: 'Esposende',       region: 'norte',          lat: 41.5333, lon: -8.7833, gh: 'gh-2', pop: 2, face: 270, photo: 'images/ofir.jpg' },
  { id: 'matosinhos',     namePT: 'Praia de Matosinhos',              nameEN: 'Praia de Matosinhos',              town: 'Porto',           region: 'norte',          lat: 41.1833, lon: -8.6833, gh: 'gh-3', pop: 3, face: 270, surfSpot: true, windyCamUrl: 'https://embed.windy.com/embed2.html?lat=41.185&lon=-8.699&zoom=11&overlay=webcams', photo: 'images/matosinhos.jpg' },
  { id: 'espinho',        namePT: 'Praia de Espinho',                 nameEN: 'Praia de Espinho',                 town: 'Espinho',         region: 'norte',          lat: 41.0167, lon: -8.6500, gh: 'gh-4', pop: 2, face: 270, photo: 'images/espinho.jpg' },
  // ── Centro ──
  { id: 'figueira',       namePT: 'Praia da Figueira da Foz',        nameEN: 'Praia da Figueira da Foz',        town: 'Figueira da Foz', region: 'centro',         lat: 40.1500, lon: -8.8667, gh: 'gh-5', pop: 2, face: 270, windyCamUrl: 'https://embed.windy.com/embed2.html?lat=40.149&lon=-8.868&zoom=11&overlay=webcams', photo: 'images/figueira.jpg' },
  { id: 'buarcos',        namePT: 'Praia de Buarcos',                 nameEN: 'Praia de Buarcos',                 town: 'Figueira da Foz', region: 'centro',         lat: 40.1667, lon: -8.8833, gh: 'gh-6', pop: 1, face: 270, photo: 'images/buarcos.jpg' },
  { id: 'sao-pedro-moel', namePT: 'Praia de S. Pedro de Moel',       nameEN: 'Praia de S. Pedro de Moel',       town: 'Marinha Grande',  region: 'centro',         lat: 39.7500, lon: -9.0333, gh: 'gh-7', pop: 1, face: 270, photo: 'images/spedrodeamoel.jpg' },
  { id: 'nazare',         namePT: 'Praia da Nazar\u00e9',            nameEN: 'Praia da Nazar\u00e9',            town: 'Nazar\u00e9',     region: 'centro',         lat: 39.6012, lon: -9.0640, gh: 'gh-1', pop: 3, face: 270, surfSpot: true, windyCamUrl: 'https://embed.windy.com/embed2.html?lat=39.601&lon=-9.071&zoom=11&overlay=webcams', photo: 'images/nazare.jpg' },
  { id: 'peniche',        namePT: 'Praia de Peniche',                 nameEN: 'Praia de Peniche',                 town: 'Peniche',         region: 'centro',         lat: 39.3567, lon: -9.3833, gh: 'gh-2', pop: 3, face: 270, surfSpot: true, windyCamUrl: 'https://embed.windy.com/embed2.html?lat=39.356&lon=-9.381&zoom=11&overlay=webcams', photo: 'images/peniche.jpg' },
  { id: 'costa-caparica', namePT: 'Praia da Costa de Caparica',      nameEN: 'Praia da Costa de Caparica',      town: 'Almada',          region: 'oeste',          lat: 38.6333, lon: -9.2333, gh: 'gh-3', pop: 3, face: 270, beachcam: 'https://www.beachcam.pt/livecams/costa-da-caparica/', photo: 'images/caparica.jpg' },
  // ── Lisboa e Setúbal ──
  { id: 'cascais',        namePT: 'Praia de Cascais',                 nameEN: 'Praia de Cascais',                 town: 'Cascais',         region: 'lisboa-setubal', lat: 38.6979, lon: -9.4215, gh: 'gh-4', pop: 2, face: 225, windyCamUrl: 'https://embed.windy.com/embed2.html?lat=38.697&lon=-9.421&zoom=11&overlay=webcams', photo: 'images/cascais.jpg' },
  { id: 'sesimbra',       namePT: 'Praia de Sesimbra',                nameEN: 'Praia de Sesimbra',                town: 'Sesimbra',        region: 'lisboa-setubal', lat: 38.4437, lon: -9.1007, gh: 'gh-5', pop: 2, face: 180, beachcam: 'https://www.beachcam.pt/livecams/sesimbra/', photo: 'images/sesimbra.jpg' },
  { id: 'setubal',        namePT: 'Praia de Set\u00fabal',           nameEN: 'Praia de Set\u00fabal',           town: 'Set\u00fabal',    region: 'lisboa-setubal', lat: 38.5244, lon: -8.8882, gh: 'gh-6', pop: 1, face: 225, photo: 'images/setubal.jpg' },
  { id: 'comporta',       namePT: 'Praia da Comporta',                nameEN: 'Praia da Comporta',                town: 'Alc\u00e1cer do Sal', region: 'lisboa-setubal', lat: 38.3833, lon: -8.7667, gh: 'gh-7', pop: 2, face: 270, photo: 'images/comporta.jpg' },
  // ── Alentejo Litoral ──
  { id: 'porto-covo',     namePT: 'Praia de Porto Covo',              nameEN: 'Praia de Porto Covo',              town: 'Sines',           region: 'alentejo',       lat: 37.8500, lon: -8.7833, gh: 'gh-1', pop: 1, face: 270, photo: 'images/portocovo.jpg' },
  { id: 'milfontes',      namePT: 'Praia de Vila Nova de Milfontes',  nameEN: 'Praia de Vila Nova de Milfontes',  town: 'Odemira',         region: 'alentejo',       lat: 37.7167, lon: -8.7833, gh: 'gh-2', pop: 2, face: 270, photo: 'images/milfontes.jpg' },
  { id: 'almograve',      namePT: 'Praia do Almograve',               nameEN: 'Praia do Almograve',               town: 'Odemira',         region: 'alentejo',       lat: 37.6500, lon: -8.8000, gh: 'gh-3', pop: 1, face: 270, photo: 'images/almograve.jpg' },
  { id: 'odeceixe',       namePT: 'Praia de Odeceixe',                nameEN: 'Praia de Odeceixe',                town: 'Aljezur',         region: 'alentejo',       lat: 37.4333, lon: -8.7833, gh: 'gh-4', pop: 2, face: 270, photo: 'images/odeceixe.jpg' },
  // ── Algarve ──
  { id: 'meia-praia',         namePT: 'Meia Praia',         nameEN: 'Meia Praia',         town: 'Lagos',     region: 'algarve', lat: 37.1167, lon: -8.6833, gh: 'gh-5', pop: 1, face: 180, beachcam: 'https://www.beachcam.pt/livecams/meia-praia/', photo: 'images/meiapraia.jpg' },
  { id: 'praia-da-rocha',     namePT: 'Praia da Rocha',     nameEN: 'Praia da Rocha',     town: 'Portim\u00e3o', region: 'algarve', lat: 37.1167, lon: -8.5333, gh: 'gh-6', pop: 3, face: 180, beachcam: 'https://www.beachcam.pt/livecams/praia-da-rocha/', photo: 'images/rocha.jpg' },
  { id: 'praia-de-benagil',   namePT: 'Praia de Benagil',   nameEN: 'Praia de Benagil',   town: 'Lagoa',     region: 'algarve', lat: 37.0833, lon: -8.4167, gh: 'gh-7', pop: 3, face: 180, photo: 'images/benagil.jpg' },
  { id: 'praia-da-marinha',   namePT: 'Praia da Marinha',   nameEN: 'Praia da Marinha',   town: 'Lagoa',     region: 'algarve', lat: 37.0833, lon: -8.4000, gh: 'gh-1', pop: 2, face: 180, photo: 'images/marinha.jpg' },
  { id: 'praia-do-camilo',    namePT: 'Praia do Camilo',    nameEN: 'Praia do Camilo',    town: 'Lagos',     region: 'algarve', lat: 37.0833, lon: -8.6667, gh: 'gh-2', pop: 2, face: 180, photo: 'images/camilo.jpg' },
  { id: 'praia-de-vilamoura', namePT: 'Praia de Vilamoura', nameEN: 'Praia de Vilamoura', town: 'Vilamoura', region: 'algarve', lat: 37.0667, lon: -8.1167, gh: 'gh-3', pop: 2, face: 180, photo: 'images/vilamoura.jpg' },
  { id: 'praia-do-vau',       namePT: 'Praia do Vau',       nameEN: 'Praia do Vau',       town: 'Portim\u00e3o', region: 'algarve', lat: 37.1167, lon: -8.5667, gh: 'gh-4', pop: 2, face: 180, photo: 'images/vau.jpg' },

  // ── Norte (novos) ──
  { id: 'cabedelo',          namePT: 'Praia do Cabedelo',              nameEN: 'Praia do Cabedelo',              town: 'Viana do Castelo', region: 'norte',   lat: 41.6845, lon: -8.8395, gh: 'gh-5', pop: 2, face: 270, beachcam: 'https://www.beachcam.pt/livecams/viana-do-castelo-cabedelo/',   photo: 'https://images.unsplash.com/photo-1526568717785-b530e8613bde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 'vila-praia-ancora', namePT: 'Vila Praia de \u00c2ncora',      nameEN: 'Vila Praia de \u00c2ncora',      town: 'Caminha',          region: 'norte',   lat: 41.8089, lon: -8.8712, gh: 'gh-6', pop: 1, face: 270, beachcam: 'https://www.beachcam.pt/livecams/vila-praia-de-ancora/',        photo: 'https://images.unsplash.com/photo-1635550047656-03f7b494c9c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 'caxinas',           namePT: 'Praia das Caxinas',              nameEN: 'Praia das Caxinas',              town: 'Vila do Conde',    region: 'norte',   lat: 41.3567, lon: -8.7456, gh: 'gh-7', pop: 1, face: 270, beachcam: 'https://www.beachcam.pt/livecams/caxinas-macaco-17/',           photo: 'https://images.unsplash.com/photo-1663313991553-6bb40f655023?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 'leca-palmeira',     namePT: 'Praia de Le\u00e7a da Palmeira', nameEN: 'Praia de Le\u00e7a da Palmeira', town: 'Matosinhos',       region: 'norte',   lat: 41.2034, lon: -8.7012, gh: 'gh-1', pop: 2, face: 270, beachcam: 'https://www.beachcam.pt/livecams/leca-da-palmeira/',           photo: 'https://images.unsplash.com/photo-1663602656480-c96f6f0a6f91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 'apulia',            namePT: 'Praia de Ap\u00falia',           nameEN: 'Praia de Ap\u00falia',           town: 'Esposende',        region: 'norte',   lat: 41.5123, lon: -8.7834, gh: 'gh-2', pop: 1, face: 270, beachcam: 'https://www.beachcam.pt/livecams/apulia/',                    photo: 'https://images.unsplash.com/photo-1584994434781-24fca0627b0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTU5MjB8MHwxfHNlYXJjaHwyfHxBcHVsaWElMjBiZWFjaCUyMFBvcnR1Z2FsJTIwRXNwb3NlbmRlfGVufDB8MHx8fDE3NzM1Njk0MDR8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'esposende-praia',   namePT: 'Praia de Esposende',            nameEN: 'Praia de Esposende',            town: 'Esposende',        region: 'norte',   lat: 41.5312, lon: -8.7823, gh: 'gh-3', pop: 2, face: 270, beachcam: 'https://www.beachcam.pt/livecams/esposende/',                 photo: 'https://images.unsplash.com/photo-1683549812226-f5904550ebf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 'furadouro',         namePT: 'Praia do Furadouro',            nameEN: 'Praia do Furadouro',            town: 'Ovar',             region: 'norte',   lat: 40.8912, lon: -8.6678, gh: 'gh-4', pop: 1, face: 270, beachcam: 'https://www.beachcam.pt/livecams/furadouro/',                 photo: 'https://images.unsplash.com/photo-1745481026259-62754c61f5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 'esmoriz',           namePT: 'Praia de Esmoriz',              nameEN: 'Praia de Esmoriz',              town: 'Ovar',             region: 'norte',   lat: 40.9423, lon: -8.6534, gh: 'gh-5', pop: 1, face: 270, beachcam: 'https://www.beachcam.pt/livecams/esmoriz/',                  photo: 'https://images.unsplash.com/photo-1635777253239-a30c19e79316?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },

  // ── Centro (novos) ──
  { id: 'praia-da-barra',    namePT: 'Praia da Barra',                nameEN: 'Praia da Barra',                town: 'Aveiro',           region: 'centro',  lat: 40.6334, lon: -8.7456, gh: 'gh-6', pop: 2, face: 270, beachcam: 'https://www.beachcam.pt/livecams/praia-da-barra/',            photo: 'https://images.unsplash.com/photo-1756661433934-b30c5353af2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 'costa-nova',        namePT: 'Praia da Costa Nova',           nameEN: 'Praia da Costa Nova',           town: 'Aveiro',           region: 'centro',  lat: 40.6012, lon: -8.7423, gh: 'gh-7', pop: 3, face: 270, beachcam: 'https://www.beachcam.pt/livecams/costa-nova/',                photo: 'https://images.unsplash.com/photo-1675112747580-56d36def89f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 'vagueira',          namePT: 'Praia da Vagueira',             nameEN: 'Praia da Vagueira',             town: 'Vagos',            region: 'centro',  lat: 40.5534, lon: -8.7312, gh: 'gh-1', pop: 1, face: 270, beachcam: 'https://www.beachcam.pt/livecams/vagueira/',                  photo: 'https://images.unsplash.com/photo-1617040595396-28ca74b5f0e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 'praia-de-mira',     namePT: 'Praia de Mira',                 nameEN: 'Praia de Mira',                 town: 'Mira',             region: 'centro',  lat: 40.4334, lon: -8.7934, gh: 'gh-2', pop: 1, face: 270, beachcam: 'https://www.beachcam.pt/livecams/praia-de-mira/',             photo: 'https://images.unsplash.com/photo-1581080628455-b3be8c8b39f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTU5MjB8MHwxfHNlYXJjaHwyfHxiZWFjaCUyMEF0bGFudGljJTIwUG9ydHVnYWwlMjBzdXJmJTIwc2FuZHxlbnwwfDB8fHwxNzczNTY5NzIzfDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'praia-da-tocha',    namePT: 'Praia da Tocha',                nameEN: 'Praia da Tocha',                town: 'Cantanhede',       region: 'centro',  lat: 40.3212, lon: -8.8023, gh: 'gh-3', pop: 1, face: 270, beachcam: 'https://www.beachcam.pt/livecams/praia-da-tocha/',            photo: 'https://images.unsplash.com/photo-1730764638413-9c22c1dc1f5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTU5MjB8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMEF0bGFudGljJTIwUG9ydHVnYWwlMjBzdXJmJTIwc2FuZHxlbnwwfDB8fHwxNzczNTY5NzIzfDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'torreira',          namePT: 'Praia da Torreira',             nameEN: 'Praia da Torreira',             town: 'Murtosa',          region: 'centro',  lat: 40.7512, lon: -8.7023, gh: 'gh-4', pop: 1, face: 270, beachcam: 'https://www.beachcam.pt/livecams/praia-da-torreira/',          photo: 'https://images.unsplash.com/photo-1644247042828-35671d6366ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTU5MjB8MHwxfHNlYXJjaHwzfHxiZWFjaCUyMEF0bGFudGljJTIwUG9ydHVnYWwlMjBzdXJmJTIwc2FuZHxlbnwwfDB8fHwxNzczNTY5NzIzfDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'murtinheira',       namePT: 'Praia da Murtinheira',          nameEN: 'Praia da Murtinheira',          town: 'Montemor-o-Velho', region: 'centro',  lat: 40.2334, lon: -8.8812, gh: 'gh-5', pop: 1, face: 270, beachcam: 'https://www.beachcam.pt/livecams/murtinheira/',               photo: 'https://images.unsplash.com/photo-1759964711214-7b6e0243af49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 'praia-da-vieira',   namePT: 'Praia da Vieira',               nameEN: 'Praia da Vieira',               town: 'Marinha Grande',   region: 'centro',  lat: 39.8934, lon: -8.9023, gh: 'gh-6', pop: 1, face: 270, beachcam: 'https://www.beachcam.pt/livecams/praia-da-vieira/',           photo: 'https://images.unsplash.com/photo-1745594151312-ace72cc39f88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 'pedrogao',          namePT: 'Praia do Pedr\u00f3g\u00e3o',  nameEN: 'Praia do Pedr\u00f3g\u00e3o',  town: 'Leiria',           region: 'centro',  lat: 39.9712, lon: -8.9134, gh: 'gh-7', pop: 1, face: 270, beachcam: 'https://www.beachcam.pt/livecams/praia-do-pedrogao/',          photo: 'https://images.unsplash.com/photo-1751711157233-651fc0d1806e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 'foz-do-arelho',     namePT: 'Praia da Foz do Arelho',        nameEN: 'Praia da Foz do Arelho',        town: 'Caldas da Rainha', region: 'centro',  lat: 39.4334, lon: -9.2123, gh: 'gh-1', pop: 2, face: 270, beachcam: 'https://www.beachcam.pt/livecams/foz-do-arelho/',            photo: 'https://images.unsplash.com/photo-1674585714925-c096ba706a97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTU5MjB8MHwxfHNlYXJjaHwxfHxQb3J0dWdhbCUyMGJlYWNoJTIwZHVuZXMlMjBvY2VhbiUyMHdlc3QlMjBjb2FzdHxlbnwwfDB8fHwxNzczNTY5NjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'sao-martinho-porto',namePT: 'Praia de S\u00e3o Martinho do Porto', nameEN: 'S\u00e3o Martinho do Porto Beach', town: 'Alco\u00e7a', region: 'centro', lat: 39.5234, lon: -9.1423, gh: 'gh-2', pop: 2, face: 225, beachcam: 'https://www.beachcam.pt/livecams/sao-martinho-do-porto/', photo: 'https://images.unsplash.com/photo-1724172455733-f774050a4f49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 'areia-branca',      namePT: 'Praia da Areia Branca',         nameEN: 'Praia da Areia Branca',         town: 'Lourinha\u0303',   region: 'centro',  lat: 39.2534, lon: -9.2934, gh: 'gh-3', pop: 1, face: 270, beachcam: 'https://www.beachcam.pt/livecams/areia-branca/',             photo: 'https://images.unsplash.com/photo-1602327692112-7e593fd83dd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTU5MjB8MHwxfHNlYXJjaHwzfHxBcmVpYSUyMEJyYW5jYSUyMExvdXJpbmhhJTIwYmVhY2glMjBQb3J0dWdhbHxlbnwwfDB8fHwxNzczNTY5NDEwfDA&ixlib=rb-4.1.0&q=80&w=1080' },

  // ── Oeste / Lisboa (novos) ──
  { id: 'ericeira',          namePT: 'Praia de Ericeira',             nameEN: 'Praia de Ericeira',             town: 'Mafra',            region: 'oeste',   lat: 38.9634, lon: -9.4134, gh: 'gh-4', pop: 3, face: 270, surfSpot: true, beachcam: 'https://www.beachcam.pt/livecams/ericeira-praia-do-sul/', photo: 'https://images.unsplash.com/photo-1700277656815-9fe0cf2a8bf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 'ribeira-dilhas',    namePT: 'Ribeira d\'Ilhas',              nameEN: 'Ribeira d\'Ilhas',              town: 'Mafra',            region: 'oeste',   lat: 38.9812, lon: -9.4212, gh: 'gh-5', pop: 2, face: 270, surfSpot: true, beachcam: 'https://www.beachcam.pt/livecams/ribeira-dilhas/',       photo: 'https://images.unsplash.com/photo-1677962555220-7138710333b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 'praia-grande',      namePT: 'Praia Grande',                  nameEN: 'Praia Grande',                  town: 'Sintra',           region: 'oeste',   lat: 38.8334, lon: -9.4723, gh: 'gh-6', pop: 2, face: 270, surfSpot: true, beachcam: 'https://www.beachcam.pt/livecams/praia-grande/',         photo: 'https://images.unsplash.com/photo-1707340247005-3b3deebe89aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 'praia-das-macas',   namePT: 'Praia das Ma\u00e7\u00e3s',    nameEN: 'Praia das Ma\u00e7\u00e3s',    town: 'Sintra',           region: 'oeste',   lat: 38.8134, lon: -9.4634, gh: 'gh-7', pop: 2, face: 270, beachcam: 'https://www.beachcam.pt/livecams/praia-das-macas/',         photo: 'https://images.unsplash.com/photo-1745629036402-90ff542bc26e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 'carcavelos',        namePT: 'Praia de Carcavelos',           nameEN: 'Praia de Carcavelos',           town: 'Cascais',          region: 'oeste',   lat: 38.6834, lon: -9.3323, gh: 'gh-1', pop: 3, face: 225, surfSpot: true, beachcam: 'https://www.beachcam.pt/livecams/praia-de-carcavelos/',  photo: 'https://images.unsplash.com/photo-1653771178031-2d00dd35d574?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 'guincho',           namePT: 'Praia do Guincho',              nameEN: 'Praia do Guincho',              town: 'Cascais',          region: 'oeste',   lat: 38.7234, lon: -9.4712, gh: 'gh-2', pop: 2, face: 270, surfSpot: true, beachcam: 'https://www.beachcam.pt/livecams/praia-do-guincho/',     photo: 'https://images.unsplash.com/photo-1726508513578-fc9fad850a3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 'sao-pedro-estoril', namePT: 'Praia de S. Pedro do Estoril', nameEN: 'Praia de S. Pedro do Estoril', town: 'Cascais',          region: 'oeste',   lat: 38.7012, lon: -9.3834, gh: 'gh-3', pop: 1, face: 225, beachcam: 'https://www.beachcam.pt/livecams/sao-pedro-do-estoril/',    photo: 'https://images.unsplash.com/photo-1762144062409-86fc8b23201c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 'fonte-da-telha',    namePT: 'Praia da Fonte da Telha',       nameEN: 'Praia da Fonte da Telha',       town: 'Almada',           region: 'oeste',   lat: 38.5334, lon: -9.1823, gh: 'gh-4', pop: 1, face: 270, beachcam: 'https://www.beachcam.pt/livecams/fonte-da-telha/',           photo: 'https://images.unsplash.com/photo-1617277775103-58f6f6cf980c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 'lagoa-albufeira',   namePT: 'Lagoa de Albufeira',            nameEN: 'Lagoa de Albufeira',            town: 'Sesimbra',         region: 'oeste',   lat: 38.5112, lon: -9.1634, gh: 'gh-5', pop: 1, face: 270, beachcam: 'https://www.beachcam.pt/livecams/lagoa-de-albufeira/',       photo: 'https://images.unsplash.com/photo-1754221716927-45c7e49088b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 'praia-do-meco',     namePT: 'Praia do Meco',                 nameEN: 'Praia do Meco',                 town: 'Sesimbra',         region: 'oeste',   lat: 38.4712, lon: -9.1534, gh: 'gh-6', pop: 2, face: 270, beachcam: 'https://www.beachcam.pt/livecams/praia-do-meco/',            photo: 'https://images.unsplash.com/photo-1746289724690-fd134865ccc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 'portinho-arrabida', namePT: 'Portinho da Arr\u00e1bida',     nameEN: 'Portinho da Arr\u00e1bida',     town: 'Set\u00fabal',     region: 'oeste',   lat: 38.4834, lon: -8.9823, gh: 'gh-7', pop: 3, face: 180, beachcam: 'https://www.beachcam.pt/livecams/portinho-da-arrabida/',    photo: 'https://images.unsplash.com/photo-1720351454314-6209b5e2a031?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },

  // ── Alentejo / Costa Vicentina (novos) ──
  { id: 'troia',             namePT: 'Praia de Tr\u00f3ia',           nameEN: 'Praia de Tr\u00f3ia',           town: 'Set\u00fabal',     region: 'alentejo', lat: 38.4934, lon: -8.8934, gh: 'gh-1', pop: 2, face: 270, beachcam: 'https://www.beachcam.pt/livecams/troia/',                  photo: 'https://images.unsplash.com/photo-1680214075621-32cdef76681c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 'sao-torpes',        namePT: 'Praia de S\u00e3o Torpes',      nameEN: 'Praia de S\u00e3o Torpes',      town: 'Sines',            region: 'alentejo', lat: 37.9334, lon: -8.8023, gh: 'gh-2', pop: 1, face: 270, beachcam: 'https://www.beachcam.pt/livecams/praia-de-sao-torpes/',     photo: 'https://images.unsplash.com/photo-1634071133713-37264540e43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTU5MjB8MHwxfHNlYXJjaHwyfHxQb3J0dWdhbCUyMGJlYWNoJTIwZHVuZXMlMjBvY2VhbiUyMHdlc3QlMjBjb2FzdHxlbnwwfDB8fHwxNzczNTY5NjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'carvalhal',         namePT: 'Praia do Carvalhal',            nameEN: 'Praia do Carvalhal',            town: 'Gr\u00e2ndola',    region: 'alentejo', lat: 38.2312, lon: -8.8234, gh: 'gh-3', pop: 1, face: 270, beachcam: 'https://www.beachcam.pt/livecams/praia-do-carvalhal/',       photo: 'https://images.unsplash.com/photo-1579184410476-d4021beff617?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 'zambujeira',        namePT: 'Zambujeira do Mar',             nameEN: 'Zambujeira do Mar',             town: 'Odemira',          region: 'alentejo', lat: 37.5234, lon: -8.7923, gh: 'gh-4', pop: 2, face: 270, beachcam: 'https://www.beachcam.pt/livecams/zambujeira-do-mar/',       photo: 'https://images.unsplash.com/photo-1602880938195-c5aa0ebb1cba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTU5MjB8MHwxfHNlYXJjaHwxfHxaYW1idWplaXJhJTIwZG8lMjBNYXIlMjBiZWFjaCUyMEFsZW50ZWpvJTIwUG9ydHVnYWx8ZW58MHwwfHx8MTc3MzU2OTQxMnww&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'arrifana',          namePT: 'Praia da Arrifana',             nameEN: 'Praia da Arrifana',             town: 'Aljezur',          region: 'alentejo', lat: 37.2934, lon: -8.8634, gh: 'gh-5', pop: 2, face: 270, surfSpot: true, beachcam: 'https://www.beachcam.pt/livecams/arrifana/',     photo: 'https://images.unsplash.com/photo-1565636167429-7ceb7f007a0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 'praia-do-amado',    namePT: 'Praia do Amado',                nameEN: 'Praia do Amado',                town: 'Aljezur',          region: 'alentejo', lat: 37.2112, lon: -8.8712, gh: 'gh-6', pop: 2, face: 270, surfSpot: true, beachcam: 'https://www.beachcam.pt/livecams/praia-do-amado/',photo: 'https://images.unsplash.com/photo-1672933914980-40663b85ed6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 'monte-clerigo',     namePT: 'Praia de Monte Cl\u00e9rigo',   nameEN: 'Praia de Monte Cl\u00e9rigo',   town: 'Aljezur',          region: 'alentejo', lat: 37.3234, lon: -8.8634, gh: 'gh-7', pop: 1, face: 270, surfSpot: true, beachcam: 'https://www.beachcam.pt/livecams/monte-clerigo/',photo: 'https://images.unsplash.com/photo-1763578473047-d7d26a02ea93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTU5MjB8MHwxfHNlYXJjaHwxfHxBbGdhcnZlJTIwUG9ydHVnYWwlMjBiZWFjaCUyMHJvY2t5JTIwY29hc3R8ZW58MHwwfHx8MTc3MzU2OTcyNHww&ixlib=rb-4.1.0&q=80&w=1080' },

  // ── Algarve (novos) ──
  { id: 'sagres',            namePT: 'Praia de Sagres',               nameEN: 'Praia de Sagres',               town: 'Vila do Bispo',    region: 'algarve',  lat: 36.9934, lon: -8.9412, gh: 'gh-1', pop: 2, face: 225, surfSpot: true, beachcam: 'https://www.beachcam.pt/livecams/sagres/',            photo: 'https://images.unsplash.com/photo-1772012403912-13599e06c1ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 'praia-da-luz',      namePT: 'Praia da Luz',                  nameEN: 'Praia da Luz',                  town: 'Lagos',            region: 'algarve',  lat: 37.0834, lon: -8.7234, gh: 'gh-2', pop: 2, face: 180, beachcam: 'https://www.beachcam.pt/livecams/praia-da-luz/',            photo: 'https://images.unsplash.com/photo-1635619608953-b6eb0bf24bba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 'alvor',             namePT: 'Praia de Alvor',                nameEN: 'Praia de Alvor',                town: 'Portim\u00e3o',    region: 'algarve',  lat: 37.1234, lon: -8.6434, gh: 'gh-3', pop: 2, face: 180, beachcam: 'https://www.beachcam.pt/livecams/alvor/',                  photo: 'https://images.unsplash.com/photo-1549474750-8cd9887d3e47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 'carvoeiro',         namePT: 'Praia de Carvoeiro',            nameEN: 'Praia de Carvoeiro',            town: 'Lagoa',            region: 'algarve',  lat: 37.0934, lon: -8.4712, gh: 'gh-4', pop: 3, face: 180, beachcam: 'https://www.beachcam.pt/livecams/carvoeiro/',              photo: 'https://images.unsplash.com/photo-1767772903275-443390eb7dd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTU5MjB8MHwxfHNlYXJjaHwyfHxBbGdhcnZlJTIwUG9ydHVnYWwlMjBiZWFjaCUyMHJvY2t5JTIwY29hc3R8ZW58MHwwfHx8MTc3MzU2OTcyNHww&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'ferragudo',         namePT: 'Praia de Ferragudo',            nameEN: 'Praia de Ferragudo',            town: 'Lagoa',            region: 'algarve',  lat: 37.1134, lon: -8.5334, gh: 'gh-5', pop: 2, face: 180, beachcam: 'https://www.beachcam.pt/livecams/ferragudo/',              photo: 'https://images.unsplash.com/photo-1655987271145-ca500924995d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 'senhora-da-rocha',  namePT: 'Praia da Senhora da Rocha',     nameEN: 'Praia da Senhora da Rocha',     town: 'Lagoa',            region: 'algarve',  lat: 37.0812, lon: -8.4234, gh: 'gh-6', pop: 1, face: 180, beachcam: 'https://www.beachcam.pt/livecams/senhora-da-rocha-praia-nova/', photo: 'https://images.unsplash.com/photo-1486571698588-a2204703bec8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 'armacao-de-pera',   namePT: 'Praia de Arma\u00e7\u00e3o de P\u00eara', nameEN: 'Arma\u00e7\u00e3o de P\u00eara Beach', town: 'Silves', region: 'algarve', lat: 37.0934, lon: -8.3534, gh: 'gh-7', pop: 3, face: 180, beachcam: 'https://www.beachcam.pt/livecams/armacao-de-pera/', photo: 'https://images.unsplash.com/photo-1706179242144-ecc50996c987?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 'praia-da-gale',     namePT: 'Praia da Gal\u00e9',           nameEN: 'Praia da Gal\u00e9',           town: 'Albufeira',        region: 'algarve',  lat: 37.0812, lon: -8.2934, gh: 'gh-1', pop: 2, face: 180, beachcam: 'https://www.beachcam.pt/livecams/praia-da-gale/',            photo: 'https://images.unsplash.com/photo-1681297158191-bab1ed61fbbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTU5MjB8MHwxfHNlYXJjaHwxfHxQcmFpYSUyMGRhJTIwR2FsZSUyMGJlYWNoJTIwQWxidWZlaXJhJTIwQWxnYXJ2ZXxlbnwwfDB8fHwxNzczNTY5NDE2fDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'praia-do-peneco',   namePT: 'Praia do Peneco',               nameEN: 'Praia do Peneco',               town: 'Albufeira',        region: 'algarve',  lat: 37.0912, lon: -8.2512, gh: 'gh-2', pop: 2, face: 180, beachcam: 'https://www.beachcam.pt/livecams/praia-do-peneco/',          photo: 'https://images.unsplash.com/photo-1715535820232-912d4e1f000f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTU5MjB8MHwxfHNlYXJjaHwxfHxQcmFpYSUyMGRvJTIwUGVuZWNvJTIwQWxidWZlaXJhJTIwQWxnYXJ2ZXxlbnwwfDB8fHwxNzczNTY5NDE3fDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'praia-da-falesia',  namePT: 'Praia da Fal\u00e9sia',        nameEN: 'Praia da Fal\u00e9sia',        town: 'Albufeira',        region: 'algarve',  lat: 37.0834, lon: -8.1234, gh: 'gh-3', pop: 3, face: 180, beachcam: 'https://www.beachcam.pt/livecams/praia-da-falesia/',         photo: 'https://images.unsplash.com/photo-1501928273014-b17d1c641913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 'praia-de-faro',     namePT: 'Praia de Faro',                 nameEN: 'Praia de Faro',                 town: 'Faro',             region: 'algarve',  lat: 36.9934, lon: -7.9712, gh: 'gh-4', pop: 2, face: 180, beachcam: 'https://www.beachcam.pt/livecams/faro/',                  photo: 'https://images.unsplash.com/photo-1651237052605-8571a3127df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 'ilha-da-culatra',   namePT: 'Ilha da Culatra',               nameEN: 'Ilha da Culatra',               town: 'Faro',             region: 'algarve',  lat: 37.0112, lon: -7.8934, gh: 'gh-5', pop: 1, face: 180, beachcam: 'https://www.beachcam.pt/livecams/ilha-do-farol-culatra/',    photo: 'https://images.unsplash.com/photo-1651237052605-8571a3127df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 'praia-verde',       namePT: 'Praia Verde',                   nameEN: 'Praia Verde',                   town: 'Castro Marim',     region: 'algarve',  lat: 37.1734, lon: -7.4634, gh: 'gh-6', pop: 1, face: 180, beachcam: 'https://www.beachcam.pt/livecams/praia-verde/',             photo: 'https://images.unsplash.com/photo-1583919062391-40251621ee76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 'altura',            namePT: 'Praia da Altura',               nameEN: 'Praia da Altura',               town: 'Castro Marim',     region: 'algarve',  lat: 37.1912, lon: -7.4234, gh: 'gh-7', pop: 1, face: 180, beachcam: 'https://www.beachcam.pt/livecams/praia-da-alagoa/',          photo: 'https://images.unsplash.com/photo-1764077299993-fba51e858b03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTU5MjB8MHwxfHNlYXJjaHwzfHxBbGdhcnZlJTIwUG9ydHVnYWwlMjBiZWFjaCUyMHJvY2t5JTIwY29hc3R8ZW58MHwwfHx8MTc3MzU2OTcyNHww&ixlib=rb-4.1.0&q=80&w=1080' },

  // ── Madeira & Porto Santo (novos) ──
  { id: 'porto-santo',       namePT: 'Praia de Porto Santo',          nameEN: 'Praia de Porto Santo',          town: 'Porto Santo',      region: 'madeira',  lat: 33.0634, lon: -16.3334, gh: 'gh-1', pop: 3, face: 180, beachcam: 'https://www.beachcam.pt/livecams/porto-santo/',            photo: 'https://images.unsplash.com/photo-1631126844568-3b73c41b67d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTU5MjB8MHwxfHNlYXJjaHwxfHxQb3J0byUyMFNhbnRvJTIwaXNsYW5kJTIwYmVhY2glMjBNYWRlaXJhfGVufDB8MHx8fDE3NzM1Njk0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'faja-da-areia',     namePT: 'Faj\u00e3 da Areia',           nameEN: 'Faj\u00e3 da Areia',           town: 'S\u00e3o Jorge',   region: 'madeira',  lat: 32.8234, lon: -17.2334, gh: 'gh-2', pop: 1, face: 0,   beachcam: 'https://www.beachcam.pt/livecams/faja-da-areia/',          photo: 'https://images.unsplash.com/photo-1572106293012-82465414818d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 'seixal-madeira',    namePT: 'Praia do Seixal',               nameEN: 'Praia do Seixal',               town: 'Seixal',           region: 'madeira',  lat: 32.8134, lon: -17.1134, gh: 'gh-3', pop: 1, face: 0,   beachcam: 'https://www.beachcam.pt/livecams/seixal/',                 photo: 'https://images.unsplash.com/photo-1725442224865-5c653c25fdb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 'jardim-do-mar',     namePT: 'Jardim do Mar',                 nameEN: 'Jardim do Mar',                 town: 'Calheta',          region: 'madeira',  lat: 32.7234, lon: -17.2234, gh: 'gh-4', pop: 2, face: 270, surfSpot: true, beachcam: 'https://www.beachcam.pt/livecams/madeira-jardim-do-mar/', photo: 'https://images.unsplash.com/photo-1575199341312-3fbd5bdf4a9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTU5MjB8MHwxfHNlYXJjaHwxfHxKYXJkaW0lMjBkbyUyME1hciUyMGJlYWNoJTIwTWFkZWlyYXxlbnwwfDB8fHwxNzczNTY5NDE0fDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'paul-do-mar',       namePT: 'Paul do Mar',                   nameEN: 'Paul do Mar',                   town: 'Calheta',          region: 'madeira',  lat: 32.7534, lon: -17.2012, gh: 'gh-5', pop: 1, face: 270, surfSpot: true, beachcam: 'https://www.beachcam.pt/livecams/madeira-paul-do-mar/',   photo: 'https://images.unsplash.com/photo-1762814407325-1c7548365c84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
];

/* ===== Fishing Data ===== */
const FISHING = {
  'moledo':             { tipo: 'Surf casting',                 especies: 'Robalo/Sargo',            epoca: 'Primavera-Outono',  nivel: 'Interm\u00e9dio' },
  'ofir':               { tipo: 'Surf casting',                 especies: 'Robalo/Linguado',          epoca: 'Todo o ano',        nivel: 'Iniciante'  },
  'matosinhos':         { tipo: 'Rocha+Embarcada',              especies: 'Robalo/Carapau',           epoca: 'Todo o ano',        nivel: 'Iniciante'  },
  'espinho':            { tipo: 'Surf casting',                 especies: 'Robalo/Sargo',             epoca: 'Outono-Inverno',    nivel: 'Interm\u00e9dio' },
  'figueira':           { tipo: 'Surf casting',                 especies: 'Robalo/Linguado',          epoca: 'Todo o ano',        nivel: 'Iniciante'  },
  'buarcos':            { tipo: 'Rocha',                        especies: 'Sargo/Pargo',              epoca: 'Primavera-Ver\u00e3o', nivel: 'Interm\u00e9dio' },
  'sao-pedro-moel':     { tipo: 'Rocha+Surf casting',           especies: 'Robalo/Corvina',           epoca: 'Todo o ano',        nivel: 'Interm\u00e9dio' },
  'nazare':             { tipo: 'Surf casting+Embarcada',       especies: 'Robalo/Atum',              epoca: 'Outono-Inverno',    nivel: 'Avan\u00e7ado' },
  'peniche':            { tipo: 'Surf casting+Rocha+Embarcada', especies: 'Robalo/Atum/Corvina',      epoca: 'Todo o ano',        nivel: 'Avan\u00e7ado' },
  'costa-caparica':     { tipo: 'Surf casting',                 especies: 'Robalo/Linguado/Tamboril', epoca: 'Todo o ano',        nivel: 'Iniciante'  },
  'cascais':            { tipo: 'Rocha+Embarcada',              especies: 'Sargo/Robalo/Pargo',       epoca: 'Todo o ano',        nivel: 'Interm\u00e9dio' },
  'sesimbra':           { tipo: 'Rocha+Embarcada',              especies: 'Sargo/Cherne/Pargo',       epoca: 'Todo o ano',        nivel: 'Avan\u00e7ado' },
  'setubal':            { tipo: 'Embarcada',                    especies: 'Robalo/Dourada',           epoca: 'Primavera-Ver\u00e3o', nivel: 'Interm\u00e9dio' },
  'comporta':           { tipo: 'Surf casting',                 especies: 'Robalo/Dourada/Linguado',  epoca: 'Todo o ano',        nivel: 'Iniciante'  },
  'porto-covo':         { tipo: 'Rocha',                        especies: 'Sargo/Pargo/Mero',         epoca: 'Todo o ano',        nivel: 'Avan\u00e7ado' },
  'milfontes':          { tipo: 'Surf casting+Rocha',           especies: 'Robalo/Sargo',             epoca: 'Todo o ano',        nivel: 'Interm\u00e9dio' },
  'almograve':          { tipo: 'Rocha',                        especies: 'Sargo/Pargo',              epoca: 'Primavera-Ver\u00e3o', nivel: 'Avan\u00e7ado' },
  'odeceixe':           { tipo: 'Surf casting+Rocha',           especies: 'Robalo/Sargo',             epoca: 'Todo o ano',        nivel: 'Interm\u00e9dio' },
  'meia-praia':         { tipo: 'Surf casting',                 especies: 'Dourada/Linguado',         epoca: 'Ver\u00e3o',        nivel: 'Iniciante'  },
  'praia-da-rocha':     { tipo: 'Rocha+Embarcada',              especies: 'Sargo/Robalo',             epoca: 'Todo o ano',        nivel: 'Interm\u00e9dio' },
  'praia-de-benagil':   { tipo: 'Rocha',                        especies: 'Sargo/Pargo',              epoca: 'Primavera-Ver\u00e3o', nivel: 'Avan\u00e7ado' },
  'praia-da-marinha':   { tipo: 'Rocha',                        especies: 'Sargo/Pargo',              epoca: 'Todo o ano',        nivel: 'Avan\u00e7ado' },
  'praia-do-camilo':    { tipo: 'Rocha',                        especies: 'Sargo/Pargo',              epoca: 'Todo o ano',        nivel: 'Interm\u00e9dio' },
  'praia-de-vilamoura': { tipo: 'Embarcada',                    especies: 'Atum/Peixe-espada',        epoca: 'Todo o ano',        nivel: 'Avan\u00e7ado' },
  'praia-do-vau':       { tipo: 'Rocha+Surf casting',           especies: 'Sargo/Robalo',             epoca: 'Todo o ano',        nivel: 'Interm\u00e9dio' },
};

/* ===== Beach Info Data ===== */
const BEACH_INFO = {
  'moledo':             { surfLevel: 'Avan\u00e7ado',             fundo: 'Areia',        risco: 'M\u00e9dio', nadador: 'Jun-Set',    afluencia: 'Muito frequentada ver\u00e3o',  parking: 'Gratuito/Limitado',     comercio: false,    bar: false,      wc: false, duche: false },
  'ofir':               { surfLevel: 'Iniciante',                 fundo: 'Areia',        risco: 'Baixo',      nadador: 'Jun-Set',    afluencia: 'Moderada',                      parking: 'Gratuito',               comercio: false,    bar: 'Sazonal',  wc: false, duche: false },
  'matosinhos':         { surfLevel: 'Interm\u00e9dio',           fundo: 'Areia',        risco: 'M\u00e9dio', nadador: 'Todo o ano', afluencia: 'Muito frequentada',             parking: 'Pago',                   comercio: true,     bar: true,       wc: true,  duche: false },
  'espinho':            { surfLevel: 'Interm\u00e9dio',           fundo: 'Areia',        risco: 'M\u00e9dio', nadador: 'Jun-Set',    afluencia: 'Moderada',                      parking: 'Gratuito',               comercio: false,    bar: 'Sazonal',  wc: false, duche: false },
  'figueira':           { surfLevel: 'Interm\u00e9dio',           fundo: 'Areia',        risco: 'M\u00e9dio', nadador: 'Jun-Set',    afluencia: 'Muito frequentada',             parking: 'Gratuito/Pago',          comercio: true,     bar: false,      wc: false, duche: false },
  'buarcos':            { surfLevel: 'Iniciante',                 fundo: 'Areia',        risco: 'Baixo',      nadador: 'Jun-Set',    afluencia: 'Moderada',                      parking: 'Gratuito',               comercio: false,    bar: 'Sazonal',  wc: false, duche: false },
  'sao-pedro-moel':     { surfLevel: 'Interm\u00e9dio',           fundo: 'Areia+Pedra',  risco: 'M\u00e9dio', nadador: 'Jun-Set',    afluencia: 'Tranquila',                     parking: 'Gratuito',               comercio: false,    bar: 'Sazonal',  wc: false, duche: false },
  'nazare':             { surfLevel: 'Profissional',              fundo: 'Areia',        risco: 'Alto',       nadador: 'Jun-Set',    afluencia: 'Superlotada ver\u00e3o',        parking: 'Pago',                   comercio: true,     bar: true,       wc: false, duche: false },
  'peniche':            { surfLevel: 'Avan\u00e7ado',             fundo: 'Areia+Recife', risco: 'Alto',       nadador: 'Jun-Set',    afluencia: 'Muito frequentada',             parking: 'Gratuito',               comercio: true,     bar: false,      wc: false, duche: false },
  'costa-caparica':     { surfLevel: 'Iniciante-Interm\u00e9dio', fundo: 'Areia',        risco: 'M\u00e9dio', nadador: 'Todo o ano', afluencia: 'Superlotada ver\u00e3o',        parking: 'Pago',                   comercio: true,     bar: true,       wc: true,  duche: false },
  'cascais':            { surfLevel: 'Iniciante',                 fundo: 'Areia+Pedra',  risco: 'Baixo',      nadador: 'Todo o ano', afluencia: 'Muito frequentada',             parking: 'Pago',                   comercio: true,     bar: true,       wc: false, duche: false },
  'sesimbra':           { surfLevel: 'N\u00e3o recomendado',      fundo: 'Areia',        risco: 'Baixo',      nadador: 'Todo o ano', afluencia: 'Moderada-Alta ver\u00e3o',      parking: 'Pago',                   comercio: true,     bar: false,      wc: false, duche: false },
  'setubal':            { surfLevel: 'N\u00e3o recomendado',      fundo: 'Areia',        risco: 'Baixo',      nadador: 'Jun-Set',    afluencia: 'Moderada',                      parking: 'Gratuito',               comercio: false,    bar: false,      wc: false, duche: false },
  'comporta':           { surfLevel: 'Iniciante',                 fundo: 'Areia',        risco: 'Baixo',      nadador: 'Jun-Set',    afluencia: 'Tranquila',                     parking: 'Pago',                   comercio: false,    bar: false,      wc: false, duche: false },
  'porto-covo':         { surfLevel: 'Interm\u00e9dio',           fundo: 'Pedra+Areia',  risco: 'M\u00e9dio', nadador: 'Jun-Set',    afluencia: 'Tranquila',                     parking: 'Gratuito',               comercio: false,    bar: false,      wc: false, duche: false },
  'milfontes':          { surfLevel: 'Interm\u00e9dio',           fundo: 'Areia',        risco: 'M\u00e9dio', nadador: 'Jun-Set',    afluencia: 'Moderada',                      parking: 'Gratuito',               comercio: true,     bar: false,      wc: false, duche: false },
  'almograve':          { surfLevel: 'Avan\u00e7ado',             fundo: 'Pedra',        risco: 'Alto',       nadador: 'N\u00e3o tem', afluencia: 'Tranquila',                   parking: 'Gratuito/Dif\u00edcil',  comercio: false,    bar: false,      wc: false, duche: false },
  'odeceixe':           { surfLevel: 'Interm\u00e9dio',           fundo: 'Areia',        risco: 'M\u00e9dio', nadador: 'Jun-Set',    afluencia: 'Moderada',                      parking: 'Pago',                   comercio: false,    bar: false,      wc: false, duche: false },
  'meia-praia':         { surfLevel: 'Iniciante',                 fundo: 'Areia',        risco: 'Baixo',      nadador: 'Jun-Set',    afluencia: 'Muito frequentada',             parking: 'Pago',                   comercio: true,     bar: true,       wc: false, duche: false },
  'praia-da-rocha':     { surfLevel: 'N\u00e3o recomendado',      fundo: 'Areia+Pedra',  risco: 'M\u00e9dio', nadador: 'Todo o ano', afluencia: 'Superlotada ver\u00e3o',        parking: 'Pago',                   comercio: true,     bar: true,       wc: true,  duche: false },
  'praia-de-benagil':   { surfLevel: 'N\u00e3o recomendado',      fundo: 'Pedra',        risco: 'Alto',       nadador: 'Jun-Set',    afluencia: 'Muito frequentada',             parking: 'Dif\u00edcil',          comercio: false,    bar: false,      wc: false, duche: false },
  'praia-da-marinha':   { surfLevel: 'N\u00e3o recomendado',      fundo: 'Pedra',        risco: 'M\u00e9dio', nadador: 'Jun-Set',    afluencia: 'Muito frequentada',             parking: 'Limitado',               comercio: false,    bar: false,      wc: false, duche: false },
  'praia-do-camilo':    { surfLevel: 'N\u00e3o recomendado',      fundo: 'Areia+Pedra',  risco: 'Baixo',      nadador: 'Jun-Set',    afluencia: 'Moderada',                      parking: 'Limitado',               comercio: false,    bar: false,      wc: false, duche: false },
  'praia-de-vilamoura': { surfLevel: 'N\u00e3o recomendado',      fundo: 'Areia',        risco: 'Baixo',      nadador: 'Todo o ano', afluencia: 'Muito frequentada',             parking: 'Pago',                   comercio: true,     bar: true,       wc: true,  duche: false },
  'praia-do-vau':       { surfLevel: 'Iniciante',                 fundo: 'Areia+Pedra',  risco: 'Baixo',      nadador: 'Jun-Set',    afluencia: 'Moderada',                      parking: 'Pago',                   comercio: false,    bar: false,      wc: false, duche: false },
  // Norte (novos)
  'cabedelo':           { surfLevel: 'Avan\u00e7ado',             fundo: 'Areia',        risco: 'M\u00e9dio', nadador: 'Jun-Set',    afluencia: 'Moderada',                      parking: 'Gratuito',               comercio: false,    bar: 'Sazonal',  wc: false, duche: false },
  'vila-praia-ancora':  { surfLevel: 'Iniciante',                 fundo: 'Areia',        risco: 'Baixo',      nadador: 'Jun-Set',    afluencia: 'Moderada',                      parking: 'Gratuito',               comercio: false,    bar: 'Sazonal',  wc: false, duche: false },
  'caxinas':            { surfLevel: 'Iniciante',                 fundo: 'Areia',        risco: 'M\u00e9dio', nadador: 'Jun-Set',    afluencia: 'Moderada',                      parking: 'Gratuito',               comercio: false,    bar: false,      wc: false, duche: false },
  'leca-palmeira':      { surfLevel: 'Interm\u00e9dio',           fundo: 'Areia+Pedra',  risco: 'M\u00e9dio', nadador: 'Jun-Set',    afluencia: 'Muito frequentada',             parking: 'Pago',                   comercio: true,     bar: true,       wc: true,  duche: false },
  'apulia':             { surfLevel: 'Interm\u00e9dio',           fundo: 'Areia',        risco: 'M\u00e9dio', nadador: 'Jun-Set',    afluencia: 'Moderada',                      parking: 'Gratuito',               comercio: false,    bar: 'Sazonal',  wc: false, duche: false },
  'esposende-praia':    { surfLevel: 'Iniciante',                 fundo: 'Areia',        risco: 'Baixo',      nadador: 'Jun-Set',    afluencia: 'Moderada',                      parking: 'Gratuito',               comercio: false,    bar: 'Sazonal',  wc: false, duche: false },
  'furadouro':          { surfLevel: 'Interm\u00e9dio',           fundo: 'Areia',        risco: 'M\u00e9dio', nadador: 'Jun-Set',    afluencia: 'Moderada',                      parking: 'Gratuito',               comercio: false,    bar: 'Sazonal',  wc: false, duche: false },
  'esmoriz':            { surfLevel: 'Iniciante',                 fundo: 'Areia',        risco: 'Baixo',      nadador: 'Jun-Set',    afluencia: 'Tranquila',                     parking: 'Gratuito',               comercio: false,    bar: false,      wc: false, duche: false },
  // Centro (novos)
  'praia-da-barra':     { surfLevel: 'Avan\u00e7ado',             fundo: 'Areia',        risco: 'Alto',       nadador: 'Jun-Set',    afluencia: 'Muito frequentada ver\u00e3o',  parking: 'Gratuito',               comercio: true,     bar: true,       wc: false, duche: false },
  'costa-nova':         { surfLevel: 'Iniciante',                 fundo: 'Areia',        risco: 'Baixo',      nadador: 'Jun-Set',    afluencia: 'Muito frequentada ver\u00e3o',  parking: 'Gratuito',               comercio: true,     bar: true,       wc: false, duche: false },
  'vagueira':           { surfLevel: 'Interm\u00e9dio',           fundo: 'Areia',        risco: 'M\u00e9dio', nadador: 'Jun-Set',    afluencia: 'Moderada',                      parking: 'Gratuito',               comercio: false,    bar: 'Sazonal',  wc: false, duche: false },
  'praia-de-mira':      { surfLevel: 'Iniciante',                 fundo: 'Areia',        risco: 'Baixo',      nadador: 'Jun-Set',    afluencia: 'Moderada',                      parking: 'Gratuito',               comercio: false,    bar: 'Sazonal',  wc: false, duche: false },
  'praia-da-tocha':     { surfLevel: 'Iniciante',                 fundo: 'Areia',        risco: 'Baixo',      nadador: 'Jun-Set',    afluencia: 'Tranquila',                     parking: 'Gratuito',               comercio: false,    bar: false,      wc: false, duche: false },
  'torreira':           { surfLevel: 'Iniciante',                 fundo: 'Areia',        risco: 'Baixo',      nadador: 'Jun-Set',    afluencia: 'Moderada',                      parking: 'Gratuito',               comercio: false,    bar: 'Sazonal',  wc: false, duche: false },
  'murtinheira':        { surfLevel: 'Avan\u00e7ado',             fundo: 'Pedra+Areia',  risco: 'Alto',       nadador: 'N\u00e3o tem', afluencia: 'Tranquila',                   parking: 'Gratuito/Dif\u00edcil',  comercio: false,    bar: false,      wc: false, duche: false },
  'praia-da-vieira':    { surfLevel: 'Interm\u00e9dio',           fundo: 'Areia',        risco: 'M\u00e9dio', nadador: 'Jun-Set',    afluencia: 'Moderada',                      parking: 'Gratuito',               comercio: false,    bar: 'Sazonal',  wc: false, duche: false },
  'pedrogao':           { surfLevel: 'Interm\u00e9dio',           fundo: 'Areia',        risco: 'M\u00e9dio', nadador: 'Jun-Set',    afluencia: 'Moderada',                      parking: 'Gratuito',               comercio: false,    bar: 'Sazonal',  wc: false, duche: false },
  'foz-do-arelho':      { surfLevel: 'Iniciante',                 fundo: 'Areia',        risco: 'Baixo',      nadador: 'Jun-Set',    afluencia: 'Moderada',                      parking: 'Gratuito',               comercio: false,    bar: 'Sazonal',  wc: false, duche: false },
  'sao-martinho-porto': { surfLevel: 'N\u00e3o recomendado',      fundo: 'Areia',        risco: 'Baixo',      nadador: 'Jun-Set',    afluencia: 'Muito frequentada ver\u00e3o',  parking: 'Pago',                   comercio: true,     bar: true,       wc: false, duche: false },
  'areia-branca':       { surfLevel: 'Interm\u00e9dio',           fundo: 'Areia',        risco: 'M\u00e9dio', nadador: 'Jun-Set',    afluencia: 'Moderada',                      parking: 'Gratuito',               comercio: false,    bar: 'Sazonal',  wc: false, duche: false },
  // Oeste / Lisboa (novos)
  'ericeira':           { surfLevel: 'Avan\u00e7ado',             fundo: 'Areia+Pedra',  risco: 'M\u00e9dio', nadador: 'Jun-Set',    afluencia: 'Muito frequentada',             parking: 'Pago',                   comercio: true,     bar: true,       wc: false, duche: false },
  'ribeira-dilhas':     { surfLevel: 'Avan\u00e7ado',             fundo: 'Pedra+Recife', risco: 'Alto',       nadador: 'Jun-Set',    afluencia: 'Moderada',                      parking: 'Limitado',               comercio: false,    bar: false,      wc: false, duche: false },
  'praia-grande':       { surfLevel: 'Avan\u00e7ado',             fundo: 'Areia',        risco: 'M\u00e9dio', nadador: 'Jun-Set',    afluencia: 'Moderada',                      parking: 'Pago',                   comercio: false,    bar: 'Sazonal',  wc: false, duche: false },
  'praia-das-macas':    { surfLevel: 'Iniciante',                 fundo: 'Areia',        risco: 'Baixo',      nadador: 'Jun-Set',    afluencia: 'Muito frequentada ver\u00e3o',  parking: 'Pago',                   comercio: true,     bar: true,       wc: false, duche: false },
  'carcavelos':         { surfLevel: 'Iniciante-Interm\u00e9dio', fundo: 'Areia',        risco: 'M\u00e9dio', nadador: 'Todo o ano', afluencia: 'Superlotada ver\u00e3o',        parking: 'Pago',                   comercio: true,     bar: true,       wc: true,  duche: false },
  'guincho':            { surfLevel: 'Avan\u00e7ado',             fundo: 'Areia',        risco: 'Alto',       nadador: 'Jun-Set',    afluencia: 'Moderada',                      parking: 'Pago',                   comercio: false,    bar: false,      wc: false, duche: false },
  'sao-pedro-estoril':  { surfLevel: 'Iniciante',                 fundo: 'Areia+Pedra',  risco: 'Baixo',      nadador: 'Jun-Set',    afluencia: 'Moderada',                      parking: 'Pago',                   comercio: false,    bar: 'Sazonal',  wc: false, duche: false },
  'fonte-da-telha':     { surfLevel: 'Iniciante',                 fundo: 'Areia',        risco: 'M\u00e9dio', nadador: 'Jun-Set',    afluencia: 'Moderada',                      parking: 'Pago',                   comercio: false,    bar: 'Sazonal',  wc: false, duche: false },
  'lagoa-albufeira':    { surfLevel: 'N\u00e3o recomendado',      fundo: 'Areia',        risco: 'Baixo',      nadador: 'Jun-Set',    afluencia: 'Moderada',                      parking: 'Gratuito',               comercio: false,    bar: false,      wc: false, duche: false },
  'praia-do-meco':      { surfLevel: 'Interm\u00e9dio',           fundo: 'Areia',        risco: 'M\u00e9dio', nadador: 'Jun-Set',    afluencia: 'Moderada',                      parking: 'Pago',                   comercio: false,    bar: false,      wc: false, duche: false },
  'portinho-arrabida':  { surfLevel: 'N\u00e3o recomendado',      fundo: 'Areia',        risco: 'Baixo',      nadador: 'Jun-Set',    afluencia: 'Muito frequentada ver\u00e3o',  parking: 'Pago',                   comercio: false,    bar: false,      wc: false, duche: false },
  // Alentejo / Costa Vicentina (novos)
  'troia':              { surfLevel: 'Iniciante',                 fundo: 'Areia',        risco: 'Baixo',      nadador: 'Jun-Set',    afluencia: 'Muito frequentada ver\u00e3o',  parking: 'Pago',                   comercio: true,     bar: true,       wc: true,  duche: false },
  'sao-torpes':         { surfLevel: 'Interm\u00e9dio',           fundo: 'Areia',        risco: 'M\u00e9dio', nadador: 'Jun-Set',    afluencia: 'Moderada',                      parking: 'Gratuito',               comercio: false,    bar: 'Sazonal',  wc: false, duche: false },
  'carvalhal':          { surfLevel: 'Iniciante',                 fundo: 'Areia',        risco: 'Baixo',      nadador: 'Jun-Set',    afluencia: 'Tranquila',                     parking: 'Gratuito',               comercio: false,    bar: false,      wc: false, duche: false },
  'zambujeira':         { surfLevel: 'Avan\u00e7ado',             fundo: 'Areia+Pedra',  risco: 'M\u00e9dio', nadador: 'Jun-Set',    afluencia: 'Tranquila',                     parking: 'Gratuito',               comercio: false,    bar: false,      wc: false, duche: false },
  'arrifana':           { surfLevel: 'Avan\u00e7ado',             fundo: 'Pedra+Recife', risco: 'Alto',       nadador: 'Jun-Set',    afluencia: 'Tranquila',                     parking: 'Gratuito/Dif\u00edcil',  comercio: false,    bar: false,      wc: false, duche: false },
  'praia-do-amado':     { surfLevel: 'Avan\u00e7ado',             fundo: 'Areia',        risco: 'M\u00e9dio', nadador: 'Jun-Set',    afluencia: 'Moderada',                      parking: 'Gratuito',               comercio: false,    bar: 'Sazonal',  wc: false, duche: false },
  'monte-clerigo':      { surfLevel: 'Avan\u00e7ado',             fundo: 'Pedra+Areia',  risco: 'Alto',       nadador: 'N\u00e3o tem', afluencia: 'Tranquila',                   parking: 'Gratuito/Dif\u00edcil',  comercio: false,    bar: false,      wc: false, duche: false },
  // Algarve (novos)
  'sagres':             { surfLevel: 'Avan\u00e7ado',             fundo: 'Areia',        risco: 'M\u00e9dio', nadador: 'Jun-Set',    afluencia: 'Moderada',                      parking: 'Gratuito',               comercio: false,    bar: 'Sazonal',  wc: false, duche: false },
  'praia-da-luz':       { surfLevel: 'Iniciante',                 fundo: 'Areia',        risco: 'Baixo',      nadador: 'Jun-Set',    afluencia: 'Muito frequentada',             parking: 'Pago',                   comercio: true,     bar: true,       wc: false, duche: false },
  'alvor':              { surfLevel: 'Iniciante',                 fundo: 'Areia',        risco: 'Baixo',      nadador: 'Jun-Set',    afluencia: 'Muito frequentada ver\u00e3o',  parking: 'Pago',                   comercio: true,     bar: true,       wc: false, duche: false },
  'carvoeiro':          { surfLevel: 'N\u00e3o recomendado',      fundo: 'Areia+Pedra',  risco: 'Baixo',      nadador: 'Jun-Set',    afluencia: 'Muito frequentada',             parking: 'Pago',                   comercio: true,     bar: true,       wc: false, duche: false },
  'ferragudo':          { surfLevel: 'N\u00e3o recomendado',      fundo: 'Areia',        risco: 'Baixo',      nadador: 'Jun-Set',    afluencia: 'Moderada',                      parking: 'Pago',                   comercio: false,    bar: 'Sazonal',  wc: false, duche: false },
  'senhora-da-rocha':   { surfLevel: 'N\u00e3o recomendado',      fundo: 'Areia+Pedra',  risco: 'M\u00e9dio', nadador: 'Jun-Set',    afluencia: 'Moderada',                      parking: 'Limitado',               comercio: false,    bar: false,      wc: false, duche: false },
  'armacao-de-pera':    { surfLevel: 'N\u00e3o recomendado',      fundo: 'Areia',        risco: 'Baixo',      nadador: 'Jun-Set',    afluencia: 'Superlotada ver\u00e3o',        parking: 'Pago',                   comercio: true,     bar: true,       wc: true,  duche: false },
  'praia-da-gale':      { surfLevel: 'N\u00e3o recomendado',      fundo: 'Areia',        risco: 'Baixo',      nadador: 'Jun-Set',    afluencia: 'Muito frequentada',             parking: 'Pago',                   comercio: true,     bar: true,       wc: false, duche: false },
  'praia-do-peneco':    { surfLevel: 'N\u00e3o recomendado',      fundo: 'Areia',        risco: 'Baixo',      nadador: 'Jun-Set',    afluencia: 'Muito frequentada',             parking: 'Pago',                   comercio: true,     bar: true,       wc: true,  duche: false },
  'praia-da-falesia':   { surfLevel: 'N\u00e3o recomendado',      fundo: 'Areia',        risco: 'Baixo',      nadador: 'Jun-Set',    afluencia: 'Muito frequentada',             parking: 'Pago',                   comercio: true,     bar: true,       wc: false, duche: false },
  'praia-de-faro':      { surfLevel: 'Iniciante',                 fundo: 'Areia',        risco: 'Baixo',      nadador: 'Jun-Set',    afluencia: 'Muito frequentada',             parking: 'Pago',                   comercio: true,     bar: true,       wc: true,  duche: false },
  'ilha-da-culatra':    { surfLevel: 'N\u00e3o recomendado',      fundo: 'Areia',        risco: 'Baixo',      nadador: 'Jun-Set',    afluencia: 'Moderada',                      parking: 'N/A (ferryboat)',         comercio: false,    bar: 'Sazonal',  wc: false, duche: false },
  'praia-verde':        { surfLevel: 'Iniciante',                 fundo: 'Areia',        risco: 'Baixo',      nadador: 'Jun-Set',    afluencia: 'Tranquila',                     parking: 'Gratuito',               comercio: false,    bar: false,      wc: false, duche: false },
  'altura':             { surfLevel: 'Iniciante',                 fundo: 'Areia',        risco: 'Baixo',      nadador: 'Jun-Set',    afluencia: 'Moderada',                      parking: 'Gratuito',               comercio: false,    bar: 'Sazonal',  wc: false, duche: false },
  // Madeira & Porto Santo (novos)
  'porto-santo':        { surfLevel: 'Iniciante',                 fundo: 'Areia',        risco: 'Baixo',      nadador: 'Todo o ano', afluencia: 'Muito frequentada ver\u00e3o',  parking: 'Gratuito',               comercio: true,     bar: true,       wc: true,  duche: true  },
  'faja-da-areia':      { surfLevel: 'Avan\u00e7ado',             fundo: 'Areia+Pedra',  risco: 'Alto',       nadador: 'N\u00e3o tem', afluencia: 'Tranquila',                   parking: 'Gratuito/Dif\u00edcil',  comercio: false,    bar: false,      wc: false, duche: false },
  'seixal-madeira':     { surfLevel: 'Avan\u00e7ado',             fundo: 'Areia+Pedra',  risco: 'Alto',       nadador: 'Jun-Set',    afluencia: 'Tranquila',                     parking: 'Gratuito/Dif\u00edcil',  comercio: false,    bar: false,      wc: false, duche: false },
  'jardim-do-mar':      { surfLevel: 'Profissional',              fundo: 'Pedra+Recife', risco: 'Alto',       nadador: 'N\u00e3o tem', afluencia: 'Tranquila',                   parking: 'Limitado',               comercio: false,    bar: false,      wc: false, duche: false },
  'paul-do-mar':        { surfLevel: 'Avan\u00e7ado',             fundo: 'Pedra+Areia',  risco: 'M\u00e9dio', nadador: 'Jun-Set',    afluencia: 'Tranquila',                     parking: 'Limitado',               comercio: false,    bar: 'Sazonal',  wc: false, duche: false },
};

/* ===== Regions ===== */
const REGION_KEYS   = ['all', 'norte', 'centro', 'lisboa-setubal', 'oeste', 'alentejo', 'algarve', 'madeira'];
const REGION_LABELS = {
  PT: { all: 'Todas', norte: 'Norte', centro: 'Centro', 'lisboa-setubal': 'Lisboa e Set\u00fabal', oeste: 'Oeste/Lisboa', alentejo: 'Alentejo Litoral', algarve: 'Algarve', madeira: 'Madeira' },
  EN: { all: 'All',   norte: 'North', centro: 'Centre', 'lisboa-setubal': 'Lisbon & Set\u00fabal',  oeste: 'West/Lisbon',  alentejo: 'Alentejo Coast',   algarve: 'Algarve', madeira: 'Madeira' },
};

/* ===== i18n ===== */
const T = {
  PT: {
    siteTitle:    'Praias de Portugal',
    siteSubtitle: 'Condições em tempo real',
    langBtn:      'PT',
    airTemp:      'Temp. do Ar',
    waterTemp:    'Temp. da Água',
    seaState:     'Estado do Mar',
    wind:         'Vento',
    occupancy:    'Lotação *',
    updatedAt:    'Atualizado às',
    error:        'Erro ao carregar dados',
    disclaimer:   '* Lotação estimada · Marés aproximadas (modelo simplificado)',
    footerData:   'Dados meteorológicos: <a href="https://open-meteo.com" target="_blank" rel="noopener">Open-Meteo API</a>',
    footerNote:   'Lotação e marés são estimativas e podem não refletir condições reais',
    beachesWord:  'praias',
    allRegions:   'todas as regiões',
    nearest:      'Mais próxima',
    viewCards:    'Cards',
    viewMap:      'Mapa', 
    surfSpot:     'Surf Spot',
    surfLabels:   { 1: 'Sem condições', 2: 'Fraco', 3: 'Razoável', 4: 'Bom', 5: 'Épico' },
    uvLabel:      'UV',
    uvLabels:     { low: 'Baixo', moderate: 'Moderado', high: 'Alto', 'very-high': 'Muito Alto', extreme: 'Extremo' },
    uvRecs:       { low: 'Sem proteção especial', moderate: 'Protetor solar recomendado', high: 'SPF 30+ obrigatório', 'very-high': 'Evitar 12h-16h', extreme: 'Proteção máxima' },
    tideLabel:    'Maré',
    tideNextHigh: 'Alta às',
    tideNextLow:  'Baixa às',
    bestSurf:     'Surf',
    bestSwim:     'Banho',
    seaStates:    { calm: 'Calmo', light: 'Ligeiro', moderate: 'Moderado', rough: 'Agitado' },
    flags:        { green: 'Verde', yellow: 'Amarela', red: 'Vermelha' },
    occ:          { quiet: 'Tranquila', moderate: 'Moderada', busy: 'Cheia' },
    liveText:       'AO VIVO',
    camError:       'Câmera temporariamente indisponível',
    camOpenBrowser: 'Abrir diretamente no browser',
    windyBtn:       '🌊 Windy',
    camBtn:         '📷 Câmera',
    camUnavailable: 'Sem câmera disponível',
    windyTitle:     'Ver condições Windy',
    camTitle:       'Ver câmera ao vivo',
    camBtn2:        'Câmera',
    camerasBtn:     'Câmeras',
    fishingTitle:   '🎣 Pesca',
    fishingType:    'Tipo',
    fishingSpecies: 'Espécies',
    fishingSeason:  'Época',
    fishingLevel:   'Nível',
    infoBtn:        'ℹ️ Info',
    infoTitle:      'Ficha da Praia',
    infoSurf:       '🏄 Surf',
    infoSafety:     '🌊 Segurança',
    infoCrowd:      '👥 Frequência',
    infoAccess:     '🅿️ Acesso',
    infoInfra:      '🛍️ Infraestrutura',
    infoSurfLevel:  'Nível surf',
    infoSeabed:     'Fundo',
    infoRisk:       'Risco',
    infoLifeguard:  'Nadador-Salvador',
    infoCrowdLevel: 'Afluência',
    infoParking:    'Estacionamento',
    infoCommerce:   'Área Comercial',
    infoBar:        'Bar/Restaurante',
    infoWC:         'WC',
    infoShower:     'Chuveiros',
    infoYes:        'Sim',
    infoNo:         'Não',
    infoSeasonal:   'Sazonal',
    nearMeBtn:       'Perto de mim',
    viewAll:         'Ver todas',
    noLocation:      'Localização não disponível',
    searchPlaceholder: 'Pesquisar praia ou região...',
    noResults:       'Nenhuma praia encontrada',
    searchActive:    'pesquisa',
  },
  EN: {
    siteTitle:    'Portugal Beaches',
    siteSubtitle: 'Real-time conditions',
    langBtn:      'EN',
    airTemp:      'Air Temp.',
    waterTemp:    'Water Temp.',
    seaState:     'Sea State',
    wind:         'Wind',
    occupancy:    'Occupancy *',
    updatedAt:    'Updated at',
    error:        'Error loading data',
    disclaimer:   '* Occupancy estimated · Tides approximated (simplified model)',
    footerData:   'Weather data: <a href="https://open-meteo.com" target="_blank" rel="noopener">Open-Meteo API</a>',
    footerNote:   'Occupancy and tides are estimates and may not reflect real conditions',
    beachesWord:  'beaches',
    allRegions:   'all regions',
    nearest:      'Nearest',
    viewCards:    'Cards',
    viewMap:      'Map',
    surfSpot:     'Surf Spot',
    surfLabels:   { 1: 'No conditions', 2: 'Poor', 3: 'Fair', 4: 'Good', 5: 'Epic' },
    uvLabel:      'UV',
    uvLabels:     { low: 'Low', moderate: 'Moderate', high: 'High', 'very-high': 'Very High', extreme: 'Extreme' },
    uvRecs:       { low: 'No special protection', moderate: 'Sunscreen recommended', high: 'SPF 30+ required', 'very-high': 'Avoid 12h-16h', extreme: 'Max protection' },
    tideLabel:    'Tide',
    tideNextHigh: 'High at',
    tideNextLow:  'Low at',
    bestSurf:     'Surf',
    bestSwim:     'Swim',
    seaStates:    { calm: 'Calm', light: 'Light', moderate: 'Moderate', rough: 'Rough' },
    flags:        { green: 'Green', yellow: 'Yellow', red: 'Red' },
    occ:          { quiet: 'Quiet', moderate: 'Moderate', busy: 'Busy' },
    liveText:       'LIVE',
    camError:       'Camera temporarily unavailable',
    camOpenBrowser: 'Open directly in browser',
    windyBtn:       '🌊 Windy',
    camBtn:         '📷 Camera',
    camUnavailable: 'No camera available',
    windyTitle:     'View Windy conditions',
    camTitle:       'View live camera',
    camBtn2:        'Camera',
    camerasBtn:     'Cameras',
    fishingTitle:   '🎣 Fishing',
    fishingType:    'Type',
    fishingSpecies: 'Species',
    fishingSeason:  'Season',
    fishingLevel:   'Level',
    infoBtn:        'ℹ️ Info',
    infoTitle:      'Beach Profile',
    infoSurf:       '🏄 Surf',
    infoSafety:     '🌊 Safety',
    infoCrowd:      '👥 Crowd',
    infoAccess:     '🅿️ Access',
    infoInfra:      '🛍️ Facilities',
    infoSurfLevel:  'Surf level',
    infoSeabed:     'Seabed',
    infoRisk:       'Risk',
    infoLifeguard:  'Lifeguard',
    infoCrowdLevel: 'Attendance',
    infoParking:    'Parking',
    infoCommerce:   'Commerce',
    infoBar:        'Bar/Restaurant',
    infoWC:         'WC',
    infoShower:     'Showers',
    infoYes:        'Yes',
    infoNo:         'No',
    infoSeasonal:   'Seasonal',
    nearMeBtn:       'Near me',
    viewAll:         'View all',
    noLocation:      'Location unavailable',
    searchPlaceholder: 'Search beach or region...',
    noResults:       'No beaches found',
    searchActive:    'search',
  },
};

/* ===== State ===== */
let lang            = 'PT';
let activeRegion    = 'all';
let currentView     = 'cards';
let cache           = {};
let nearestBeachId  = null;
let leafletMap      = null;
let mapMarkers      = {};
let camTimer        = null;
let nearbyMode      = false;
let nearbyDistances = {};   // beach.id → km (integer)
let nearbyTop10     = [];   // sorted top-10 beach IDs
let searchQuery     = '';

/* =====================================================================
   LANGUAGE
   ===================================================================== */
function toggleLanguage() {
  lang = lang === 'PT' ? 'EN' : 'PT';
  applyLangTexts();
  rerenderAllCards();
  updateMapMarkers();
}

function applyLangTexts() {
  const t = T[lang];
  document.getElementById('site-title').textContent    = t.siteTitle;
  document.getElementById('site-subtitle').textContent = t.siteSubtitle;
  document.getElementById('lang-toggle').textContent   = t.langBtn;
  document.getElementById('disclaimer').textContent    = t.disclaimer;
  document.getElementById('footer-data').innerHTML     = t.footerData;
  document.getElementById('footer-note').textContent   = t.footerNote;
  document.documentElement.lang = lang === 'PT' ? 'pt' : 'en';

  document.getElementById('btn-cards').textContent = `\u229E ${t.viewCards}`;
  document.getElementById('btn-map').textContent   = `\uD83D\uDDFA ${t.viewMap}`;
  document.getElementById('cameras-btn-text').textContent = t.camerasBtn;

  if (cache._updatedAt) {
    document.getElementById('last-updated').textContent = `${t.updatedAt} ${cache._updatedAt}`;
  }
  const si = document.getElementById('search-input');
  if (si) si.placeholder = t.searchPlaceholder;
  const nr = document.getElementById('no-results');
  if (nr) nr.textContent = t.noResults;
  renderRegionFilter();
  updateCounter();
}

/* =====================================================================
   VIEW TOGGLE (Cards / Map)
   ===================================================================== */
function setView(view) {
  currentView = view;
  const isCards = view === 'cards';
  const isMap   = view === 'map';
  const isCams  = view === 'cameras';
  document.getElementById('beaches-grid').style.display   = isCards ? '' : 'none';
  document.getElementById('region-filter').style.display  = isCards ? '' : 'none';
  document.getElementById('search-bar').style.display     = isCards ? '' : 'none';
  document.getElementById('disclaimer').style.display     = isCards ? '' : 'none';
  document.getElementById('map-container').style.display  = isMap   ? '' : 'none';
  document.getElementById('cameras-grid').style.display   = isCams  ? '' : 'none';
  document.getElementById('btn-cards').classList.toggle('active',   isCards);
  document.getElementById('btn-map').classList.toggle('active',     isMap);
  document.getElementById('btn-cameras').classList.toggle('active', isCams);

  if (isMap) {
    initLeafletMap();
    updateMapMarkers();
    setTimeout(() => leafletMap && leafletMap.invalidateSize(), 150);
  }
  if (isCams) renderCamerasGrid();
}

function initLeafletMap() {
  if (leafletMap) return;

  leafletMap = L.map('map').setView([39.5, -8.2], 6);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://openstreetmap.org">OpenStreetMap</a>',
    maxZoom: 18,
  }).addTo(leafletMap);

  BEACHES.forEach(b => {
    const marker = L.circleMarker([b.lat, b.lon], circleOpts('#1e88e5', 9, false));
    marker.bindPopup(mapPopupHTML(b, null), { maxWidth: 220 });
    marker.addTo(leafletMap);
    mapMarkers[b.id] = marker;
  });
}

function circleOpts(fillColor, radius, isNearest) {
  return {
    radius,
    color:       isNearest ? '#ff6f20' : '#fff',
    weight:      isNearest ? 3 : 2,
    fillColor,
    fillOpacity: 0.88,
  };
}

function updateMapMarkers() {
  if (!leafletMap) return;
  BEACHES.forEach(b => {
    if (!mapMarkers[b.id]) return;
    const data     = cache[b.id];
    const rating   = data ? getSurfRating(b, data) : 0;
    const color    = data ? surfRatingColor(rating) : '#1e88e5';
    const isNearest = b.id === nearestBeachId;
    mapMarkers[b.id].setStyle(circleOpts(color, isNearest ? 13 : 9, isNearest));
    mapMarkers[b.id].setPopupContent(mapPopupHTML(b, data));
  });
}

function mapPopupHTML(beach, data) {
  const t    = T[lang];
  const name = lang === 'PT' ? beach.namePT : beach.nameEN;
  if (!data) {
    return `<div class="map-popup"><div class="map-popup-title">${name}</div><div class="map-popup-town">${beach.town}</div><div style="font-size:.72rem;color:#999;margin-top:4px;">${lang==='PT'?'A carregar...':'Loading...'}</div></div>`;
  }
  const rating   = getSurfRating(beach, data);
  const uvStr    = data.uvIndex != null ? `\u2600\uFE0F UV ${data.uvIndex}` : '';
  const ratingColor = surfRatingColor(rating);
  return `
    <div class="map-popup">
      <div class="map-popup-title">${name}</div>
      <div class="map-popup-town">${beach.town}</div>
      <div style="margin:5px 0;font-size:.83rem;">${starsHTML(rating)} <span style="font-size:.7rem;font-weight:700;color:${ratingColor}">${t.surfLabels[rating]}</span></div>
      <div class="map-popup-grid">
        <span>\uD83C\uDF0A ${data.waveHeight != null ? data.waveHeight+'m' : '\u2014'}</span>
        <span>\uD83C\uDF21\uFE0F ${data.airTemp}\u00B0C</span>
        <span>${uvStr}</span>
        <span>\uD83D\uDCA8 ${data.windSpeed} km/h</span>
      </div>
    </div>`;
}

function surfRatingColor(r) {
  return { 5: '#f39c12', 4: '#27ae60', 3: '#e67e22', 2: '#95a5a6', 1: '#e74c3c' }[r] || '#1e88e5';
}

/* =====================================================================
   REGION FILTER
   ===================================================================== */
function renderRegionFilter() {
  const labels = REGION_LABELS[lang];
  const t      = T[lang];
  const regionBtns = REGION_KEYS.map(rk => `
    <button class="region-btn${activeRegion === rk && !nearbyMode ? ' active' : ''}" onclick="setRegion('${rk}')">${labels[rk]}</button>
  `).join('');
  const nearbyBtnLabel = nearbyMode
    ? `\uD83D\uDCCD ${t.nearMeBtn} &middot; ${t.viewAll}`
    : `\uD83D\uDCCD ${t.nearMeBtn}`;
  const nearbyBtn = `<button class="region-btn nearby-btn${nearbyMode ? ' active' : ''}" id="nearby-btn" onclick="${nearbyMode ? 'deactivateNearby()' : 'activateNearby()'}">` + nearbyBtnLabel + `</button>`;
  document.getElementById('region-filter').innerHTML = regionBtns + nearbyBtn;
}

function setRegion(region) {
  if (nearbyMode) {
    nearbyMode = false;
    nearbyDistances = {};
    nearbyTop10 = [];
    restoreGridOrder();
  }
  searchQuery = '';
  const si = document.getElementById('search-input');
  if (si) { si.value = ''; }
  document.getElementById('search-clear').style.display = 'none';
  activeRegion = region;
  renderRegionFilter();
  applyFilter(true);
  updateCounter();
}

function shouldShowCard(beach) {
  if (searchQuery) {
    const q  = searchQuery;
    const rPT = (REGION_LABELS.PT[beach.region] || '').toLowerCase();
    const rEN = (REGION_LABELS.EN[beach.region] || '').toLowerCase();
    return beach.namePT.toLowerCase().includes(q) ||
           beach.nameEN.toLowerCase().includes(q) ||
           beach.town.toLowerCase().includes(q)   ||
           rPT.includes(q) || rEN.includes(q);
  }
  if (nearbyMode) return nearbyTop10.includes(beach.id);
  return activeRegion === 'all' || beach.region === activeRegion || beach.id === nearestBeachId;
}

function applyFilter(animate) {
  let visible = 0;
  BEACHES.forEach(beach => {
    const el = document.getElementById('card-' + beach.id);
    if (!el) return;
    if (shouldShowCard(beach)) {
      visible++;
      el.style.display = '';
      requestAnimationFrame(() => el.classList.remove('is-hiding'));
    } else {
      el.classList.add('is-hiding');
      if (animate) {
        setTimeout(() => { if (el.classList.contains('is-hiding')) el.style.display = 'none'; }, 260);
      } else {
        el.style.display = 'none';
      }
    }
  });
  const nr = document.getElementById('no-results');
  if (nr) nr.style.display = (visible === 0 && searchQuery) ? '' : 'none';
}

function updateCounter() {
  const t      = T[lang];
  const labels = REGION_LABELS[lang];
  let visible, regionLabel;
  if (searchQuery) {
    visible     = BEACHES.filter(b => shouldShowCard(b)).length;
    regionLabel = t.searchActive;
  } else if (nearbyMode) {
    visible     = nearbyTop10.length;
    regionLabel = t.nearMeBtn;
  } else if (activeRegion === 'all') {
    visible     = BEACHES.length;
    regionLabel = t.allRegions;
  } else {
    const inRegion   = BEACHES.filter(b => b.region === activeRegion).length;
    const nearestExt = nearestBeachId && BEACHES.find(b => b.id === nearestBeachId && b.region !== activeRegion);
    visible     = inRegion + (nearestExt ? 1 : 0);
    regionLabel = labels[activeRegion];
  }
  document.getElementById('beach-counter').textContent = `${visible} ${t.beachesWord} \u00B7 ${regionLabel}`;
}

/* =====================================================================
   GEOLOCATION
   ===================================================================== */
function haversine(lat1, lon1, lat2, lon2) {
  const R    = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a    = Math.sin(dLat / 2) ** 2 +
               Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
               Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function tryGeolocation() {
  if (!navigator.geolocation) return;
  navigator.geolocation.getCurrentPosition(pos => {
    const { latitude: lat, longitude: lon } = pos.coords;
    let minDist = Infinity;
    BEACHES.forEach(b => {
      const d = haversine(lat, lon, b.lat, b.lon);
      if (d < minDist) { minDist = d; nearestBeachId = b.id; }
    });
    const nearest = BEACHES.find(b => b.id === nearestBeachId);
    if (nearest && cache[nearest.id]) updateCard(nearest, cache[nearest.id], 'ok');
    applyFilter(false);
    updateCounter();
    updateMapMarkers();
  }, () => { /* permission denied */ });
}

/* =====================================================================
   TIDAL APPROXIMATION  (simplified sinusoidal — not scientifically exact)
   ===================================================================== */
function getTidalInfo(lat, lon) {
  const PERIOD_MS = 44700 * 1000; // M2 tidal constituent ~12h 25min
  // Phase offset derived from coordinates to give each beach a different phase
  const raw         = Math.abs(Math.round((lat * 1731 + lon * 1091) * 100));
  const phaseOffset = raw % PERIOD_MS;

  const now       = Date.now();
  const elapsed   = (now + phaseOffset) % PERIOD_MS;
  const angle     = (elapsed / PERIOD_MS) * 2 * Math.PI;

  const height   = Math.sin(angle);       // -1 (low) → +1 (high)
  const rising   = Math.cos(angle) > 0;
  const pct      = Math.round(((height + 1) / 2) * 100);

  const msPerRad = PERIOD_MS / (2 * Math.PI);
  const toHigh   = ((Math.PI / 2       - angle + 4 * Math.PI) % (2 * Math.PI)) * msPerRad;
  const toLow    = ((3 * Math.PI / 2   - angle + 4 * Math.PI) % (2 * Math.PI)) * msPerRad;

  const fmt = ms => new Date(now + ms).toLocaleTimeString('pt-PT', {
    hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Lisbon',
  });

  return { pct, rising, nextHigh: fmt(toHigh), nextLow: fmt(toLow) };
}

/* =====================================================================
   SURF RATING
   ===================================================================== */
function isOffshoreWind(windDirDeg, beachFaceDeg) {
  // Offshore = wind comes from land side = (beachFace + 180°)
  const offshoreDir = (beachFaceDeg + 180) % 360;
  const diff        = Math.abs(windDirDeg - offshoreDir);
  return (diff > 180 ? 360 - diff : diff) < 60;
}

function getSurfRating(beach, data) {
  const wh  = data.waveHeight ?? 0;
  const wp  = data.wavePeriod ?? 0;
  const ws  = data.windSpeed  ?? 0;
  const wd  = data.windDirDeg ?? 0;
  const off = isOffshoreWind(wd, beach.face);

  if (wh > 3.5 || ws > 60)                                   return 1; // dangerous
  if (wh >= 1.5 && wh <= 3.0 && wp > 12 && off && ws < 20)  return 5; // epic
  if (wh >= 1.0 && wh <= 2.0 && wp > 10 && ws < 30)         return 4; // good
  if (wh >= 0.5 && wh <= 1.5 && wp > 8)                      return 3; // fair
  return 2;                                                              // poor
}

function starsHTML(rating) {
  return Array.from({ length: 5 }, (_, i) =>
    `<span class="${i < rating ? 'star-on' : 'star-off'}">\u2605</span>`
  ).join('');
}

/* =====================================================================
   UV INDEX
   ===================================================================== */
function getUVLevel(uv) {
  if (uv == null) return null;
  if (uv <= 2)   return { key: 'low',       color: '#2ecc71' };
  if (uv <= 5)   return { key: 'moderate',  color: '#f1c40f' };
  if (uv <= 7)   return { key: 'high',      color: '#e67e22' };
  if (uv <= 10)  return { key: 'very-high', color: '#e74c3c' };
  return               { key: 'extreme',   color: '#9b59b6' };
}

/* =====================================================================
   BEST TIMES FOR SURF / SWIM
   ===================================================================== */
function lisbonHourStr() {
  const now   = new Date();
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Lisbon',
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', hourCycle: 'h23',
  }).formatToParts(now);
  const get = type => parts.find(p => p.type === type)?.value ?? '00';
  return `${get('year')}-${get('month')}-${get('day')}T${get('hour')}`;
}

function getBestTimes(hourly, beach) {
  if (!hourly || hourly.length === 0) return { surf: null, swim: null };

  const daytime = hourly.filter(h => {
    const hr = parseInt(h.time.slice(11, 13), 10);
    return hr >= 6 && hr <= 20;
  });
  if (!daytime.length) return { surf: null, swim: null };

  let bestSurf = null, bestSurfScore = -1;
  let bestSwim = null, bestSwimScore = -1;

  daytime.forEach(h => {
    const wh  = h.waveHeight ?? 0;
    const wp  = h.wavePeriod ?? 0;
    const ws  = h.windSpeed  ?? 0;
    const uv  = h.uvIndex    ?? 0;
    const hr  = parseInt(h.time.slice(11, 13), 10);
    const pad = n => String(n).padStart(2, '0');

    // Surf score
    let ss = 0;
    if (wh >= 1.0 && wh <= 3.0) ss += 4;
    else if (wh >= 0.5)         ss += 2;
    if (wp >= 10) ss += 3; else if (wp >= 8) ss += 1;
    if (ws <= 20) ss += 3; else if (ws <= 30) ss += 1;
    if (ss > bestSurfScore) {
      bestSurfScore = ss;
      bestSurf = `${pad(hr)}h-${pad(Math.min(hr + 3, 22))}h`;
    }

    // Swim score
    let sw = 0;
    if (uv >= 2 && uv <= 7) sw += 3;
    if (ws <= 15) sw += 3; else if (ws <= 25) sw += 1;
    if (wh <= 0.8) sw += 3; else if (wh <= 1.2) sw += 1;
    if (sw > bestSwimScore) {
      bestSwimScore = sw;
      bestSwim = `${pad(hr)}h-${pad(Math.min(hr + 3, 22))}h`;
    }
  });

  return { surf: bestSurf, swim: bestSwim };
}

/* =====================================================================
   GENERAL HELPERS
   ===================================================================== */
function windDeg2Dir(deg) {
  const dirs = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  return dirs[Math.round(deg / 45) % 8];
}

function getSeaState(wh) {
  const s = T[lang].seaStates;
  if (wh < 0.3) return s.calm;
  if (wh < 0.8) return s.light;
  if (wh < 1.5) return s.moderate;
  return s.rough;
}

function getFlag(wh, ws) {
  if (wh > 1.5 || ws > 50) return 'red';
  if (wh > 0.5 || ws > 25) return 'yellow';
  return 'green';
}

function getOccupancy(beach, airTemp) {
  const now  = new Date();
  const hour = now.getHours(), dow = now.getDay();
  let score  = 0;
  if (hour >= 10 && hour <= 18) score += 2;
  if (hour >= 11 && hour <= 16) score += 1;
  if (dow === 0 || dow === 6)   score += 2;
  if (airTemp > 28) score += 2;
  else if (airTemp > 22) score += 1;
  score += beach.pop;
  score += (beach.id.charCodeAt(0) + now.getDate()) % 3;
  if (score <= 4) return 'quiet';
  if (score <= 7) return 'moderate';
  return 'busy';
}

/* =====================================================================
   API FETCH
   ===================================================================== */
async function fetchBeachData(beach) {
  const base  = 'https://api.open-meteo.com/v1/forecast';
  const mbase = 'https://marine-api.open-meteo.com/v1/marine';
  const tz    = 'Europe/Lisbon';

  const [wRes, mRes] = await Promise.all([
    fetch(`${base}?latitude=${beach.lat}&longitude=${beach.lon}` +
          `&current=temperature_2m,wind_speed_10m,wind_direction_10m` +
          `&hourly=uv_index,wind_speed_10m,precipitation,weather_code` +
          `&forecast_days=2&wind_speed_unit=kmh&timezone=${tz}`),
    fetch(`${mbase}?latitude=${beach.lat}&longitude=${beach.lon}` +
          `&current=wave_height,wave_direction,sea_surface_temperature,wave_period` +
          `&hourly=wave_height,wave_period&forecast_days=2`),
  ]);

  if (!wRes.ok || !mRes.ok) throw new Error('API error');

  const w  = await wRes.json();
  const m  = await mRes.json();
  const wc = w.current;
  const mc = m.current;

  // Find start of current Lisbon hour in the hourly arrays
  const curHour  = lisbonHourStr();
  const wTimes   = w.hourly?.time ?? [];
  const mTimes   = m.hourly?.time ?? [];
  const startIdx = Math.max(0, wTimes.findIndex(t => t >= curHour));

  // UV, weather code and precipitation for current hour
  const uvIndex     = w.hourly?.uv_index?.[startIdx]     != null ? Math.round(w.hourly.uv_index[startIdx])    : null;
  const weatherCode = w.hourly?.weather_code?.[startIdx] ?? null;
  const precip      = w.hourly?.precipitation?.[startIdx] ?? 0;

  // Build next-12h hourly forecast
  const endIdx = Math.min(startIdx + 12, wTimes.length, mTimes.length);
  const hourly = [];
  for (let i = startIdx; i < endIdx; i++) {
    hourly.push({
      time:       wTimes[i],
      windSpeed:  Math.round(w.hourly.wind_speed_10m?.[i]  ?? 0),
      uvIndex:    Math.round(w.hourly.uv_index?.[i]         ?? 0),
      waveHeight: parseFloat((m.hourly.wave_height?.[i]     ?? 0).toFixed(1)),
      wavePeriod: m.hourly.wave_period?.[i]                 ?? 0,
    });
  }

  return {
    airTemp:    Math.round(wc.temperature_2m),
    windSpeed:  Math.round(wc.wind_speed_10m),
    windDir:    windDeg2Dir(wc.wind_direction_10m),
    windDirDeg: wc.wind_direction_10m,
    waveHeight: mc.wave_height    != null ? parseFloat(mc.wave_height.toFixed(1))   : null,
    wavePeriod: mc.wave_period    != null ? parseFloat(mc.wave_period.toFixed(1))   : null,
    waterTemp:  mc.sea_surface_temperature != null ? Math.round(mc.sea_surface_temperature) : null,
    uvIndex,
    weatherCode,
    precip,
    hourly,
  };
}

/* =====================================================================
   RENDER
   ===================================================================== */
function getWeatherIcon(code, precip) {
  if (code === null || code === undefined) return null;
  if (code === 0)                          return { icon: '\u2600\uFE0F', pt: 'C\u00e9u limpo',          en: 'Clear sky' };
  if (code <= 3)                           return { icon: '\uD83C\uDF24\uFE0F', pt: 'Parcialmente nublado', en: 'Partly cloudy' };
  if (code === 45 || code === 48)          return { icon: '\uD83C\uDF2B\uFE0F', pt: 'Nevoeiro',             en: 'Fog' };
  if (code >= 51 && code <= 67)            return { icon: '\uD83C\uDF27\uFE0F', pt: 'Chuva',                en: 'Rain' };
  if (code >= 71 && code <= 77)            return { icon: '\uD83C\uDF28\uFE0F', pt: 'Neve',                 en: 'Snow' };
  if (code >= 80 && code <= 82)            return { icon: '\uD83C\uDF26\uFE0F', pt: 'Aguaceiros',           en: 'Showers' };
  if (code >= 95 && code <= 99)            return { icon: '\u26C8\uFE0F',       pt: 'Trovoada',             en: 'Thunderstorm' };
  return null;
}

function cardHTML(beach, data, state) {
  const name      = lang === 'PT' ? beach.namePT : beach.nameEN;
  const isNearest = beach.id === nearestBeachId;
  const t         = T[lang];

  /* — Photo section (shared across all states) — */
  const wh0  = state === 'ok' ? (data.waveHeight ?? 0) : 0;
  const ws0  = state === 'ok' ? (data.windSpeed  ?? 0) : 0;
  const flag = state === 'ok' ? getFlag(wh0, ws0) : null;

  const locParts = [beach.town];
  if (isNearest)    locParts.push(`\uD83D\uDCCD ${t.nearest}`);
  if (beach.surfSpot) locParts.push(`\uD83C\uDFC4 ${t.surfSpot}`);
  if (nearbyMode && nearbyDistances[beach.id] != null) locParts.push(`${nearbyDistances[beach.id]} km`);

  const photo = `
    <div class="card-photo-wrapper">
      <img class="card-photo" src="${beach.photo}" alt="${name}" loading="lazy"
           onerror="this.style.display='none'">
      <div class="card-photo-overlay"></div>
      ${(beach.cam || beach.beachcam || beach.windyCamUrl) ? `<div class="live-badge"><div class="live-dot"></div>LIVE</div>` : ''}
      <div class="cam-btns">
        <button class="cam-btn cam-btn--windy" onclick="openWindy('${beach.id}')" title="${t.windyTitle}">&#127754; Windy</button>
        ${camBtnHTML(beach, t)}
      </div>
      <div class="card-photo-info">
        <div class="card-photo-text">
          <div class="card-photo-name">${name}</div>
          <div class="card-photo-location">${locParts.join(' \u00B7 ')}</div>
        </div>
        ${flag ? `<div class="flag-wrap f-${flag}"><div class="flag-pole"></div><span class="flag-name">${t.flags[flag]}</span></div>` : ''}
      </div>
    </div>`;

  /* — Loading — */
  if (state === 'loading') {
    return photo + `
      <div class="card-body">
        <div class="skeleton" style="height:62px;margin-bottom:.6rem;border-radius:12px;"></div>
        <div class="skeleton" style="height:34px;margin-bottom:.6rem;border-radius:12px;"></div>
        <div class="skeleton" style="height:62px;margin-bottom:.6rem;border-radius:12px;"></div>
        <div class="skeleton" style="height:34px;margin-bottom:.6rem;border-radius:12px;"></div>
        <div class="skeleton" style="height:24px;border-radius:10px;"></div>
      </div>`;
  }

  /* — Error — */
  if (state === 'error') {
    return photo + `
      <div class="card-body">
        <div class="error-state"><span class="err-icon">&#9888;</span>${t.error}</div>
      </div>`;
  }

  /* — Full data — */
  const wh         = wh0;
  const ws         = ws0;
  const sea        = getSeaState(wh);
  const occ        = getOccupancy(beach, data.airTemp);
  const surfRating = getSurfRating(beach, data);
  const uvLevel    = getUVLevel(data.uvIndex);
  const tide       = getTidalInfo(beach.lat, beach.lon);
  const bestTimes  = getBestTimes(data.hourly, beach);

  /* Wave period sub-text */
  const waveSub = [
    data.waveHeight != null ? data.waveHeight + ' m' : null,
    data.wavePeriod != null ? data.wavePeriod + ' s' : null,
  ].filter(Boolean).join(' · ') || '\u2014';

  /* UV cell */
  const uvCell = uvLevel
    ? `<div class="data-cell">
         <div class="lbl">&#9728;&#65039; ${t.uvLabel}</div>
         <div class="uv-row">
           <span class="uv-dot" style="background:${uvLevel.color}"></span>
           <span class="val" style="font-size:1rem;">${data.uvIndex}</span>
           <span style="font-size:.68rem;color:var(--text-muted);margin-left:.1rem;">${t.uvLabels[uvLevel.key]}</span>
         </div>
         <div class="sub">${t.uvRecs[uvLevel.key]}</div>
       </div>`
    : `<div class="data-cell"><div class="lbl">&#9728;&#65039; ${t.uvLabel}</div><div class="val">\u2014</div></div>`;

  /* Tide cell */
  const tideArrow   = tide.rising ? '\u2191' : '\u2193';
  const tideNextLbl = tide.rising ? t.tideNextHigh : t.tideNextLow;
  const tideNextVal = tide.rising ? tide.nextHigh   : tide.nextLow;
  const tideCell    = `
    <div class="data-cell">
      <div class="lbl">&#127754; ${t.tideLabel} ${tideArrow} ${tide.pct}%</div>
      <div class="tide-bar"><div class="tide-fill" style="width:${tide.pct}%"></div></div>
      <div class="sub">${tideNextLbl}: ${tideNextVal}</div>
    </div>`;

  /* Best times */
  const surfStr = bestTimes.surf ? `&#127940; ${t.bestSurf}: ${bestTimes.surf}` : `&#127940; \u2014`;
  const swimStr = bestTimes.swim ? `&#127958;&#65039; ${t.bestSwim}: ${bestTimes.swim}` : `&#127958;&#65039; \u2014`;

  return photo + `
    <div class="card-body">

      <!-- Info button -->
      <div class="info-pill-row">
        <button class="info-pill-btn" onclick="openInfo('${beach.id}')">${t.infoBtn}</button>
      </div>

      <!-- Weather data grid -->
      <div class="data-grid">
        <div class="data-cell">
          <div class="lbl">${t.airTemp}</div>
          <div class="val v-air">${data.airTemp}&deg;C</div>
          ${(() => { const w = getWeatherIcon(data.weatherCode, data.precip); return w ? `<div class="weather-condition"><span>${w.icon} ${lang === 'PT' ? w.pt : w.en}</span>${data.precip > 0 ? `<span class="rain-amount">\u00B7 ${data.precip}mm/h</span>` : ''}</div>` : ''; })()}
        </div>
        <div class="data-cell">
          <div class="lbl">${t.waterTemp}</div>
          <div class="val v-water">${data.waterTemp != null ? data.waterTemp + '&deg;C' : '\u2014'}</div>
        </div>
        <div class="data-cell">
          <div class="lbl">${t.seaState}</div>
          <div class="val">${sea}</div>
          <div class="sub">${waveSub}</div>
        </div>
        <div class="data-cell">
          <div class="lbl">${t.wind}</div>
          <div class="val">${data.windSpeed} km/h</div>
          <div class="sub">${data.windDir}</div>
        </div>
      </div>

      <!-- Surf rating -->
      <div class="surf-row">
        <div class="surf-stars">${starsHTML(surfRating)}</div>
        <span class="surf-label surf-lbl-${surfRating}">${t.surfLabels[surfRating]}</span>
      </div>

      <!-- UV + Tide -->
      <div class="data-grid">
        ${uvCell}
        ${tideCell}
      </div>

      <!-- Best times -->
      <div class="best-times">
        <div class="bt-item bt-surf">${surfStr}</div>
        <div class="bt-item bt-swim">${swimStr}</div>
      </div>

      <!-- Occupancy -->
      <div class="occ-section">
        <div class="occ-header">
          <span class="lbl">${t.occupancy}</span>
          <span class="occ-badge ${occ}">${t.occ[occ]}</span>
        </div>
        <div class="occ-bar"><div class="occ-fill ${occ}"></div></div>
      </div>

      <!-- Fishing collapsible -->
      ${FISHING[beach.id] ? `
      <div class="fish-section">
        <div class="fish-header" onclick="toggleFishing('${beach.id}')">
          <span>${t.fishingTitle}</span>
          <span id="fish-arrow-${beach.id}" class="fish-arrow">\u25B6</span>
        </div>
        <div id="fish-body-${beach.id}" class="fish-body" style="display:none">
          <div class="fish-grid">
            <div class="fish-item fish-item--full"><span class="fish-lbl">${t.fishingType}</span><span class="fish-val">${FISHING[beach.id].tipo}</span></div>
            <div class="fish-item fish-item--full"><span class="fish-lbl">${t.fishingSpecies}</span><span class="fish-val">${FISHING[beach.id].especies}</span></div>
            <div class="fish-item"><span class="fish-lbl">${t.fishingSeason}</span><span class="fish-val">${FISHING[beach.id].epoca}</span></div>
            <div class="fish-item"><span class="fish-lbl">${t.fishingLevel}</span><span class="fish-val fish-level-${FISHING[beach.id].nivel}">${FISHING[beach.id].nivel}</span></div>
          </div>
        </div>
      </div>` : ''}

    </div>`;
}

function updateCard(beach, data, state) {
  const el = document.getElementById('card-' + beach.id);
  if (!el) return;
  el.innerHTML = cardHTML(beach, data, state);
  if (state === 'ok' && data) {
    el.classList.toggle('surf-epic', getSurfRating(beach, data) >= 4);
  } else {
    el.classList.remove('surf-epic');
  }
}

function rerenderAllCards() {
  BEACHES.forEach(b => { if (cache[b.id]) updateCard(b, cache[b.id], 'ok'); });
}

/* =====================================================================
   LIVECAM
   ===================================================================== */
function windyUrl(beach) {
  return `https://embed.windy.com/embed2.html?lat=${beach.lat}&lon=${beach.lon}&zoom=11&level=surface&overlay=waves&product=ecmwf&menu=&message=&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=km%2Fh&metricTemp=%C2%B0C`;
}

/* Helper: returns HTML for the 📷 camera button */
function camBtnHTML(beach, t) {
  // Beachcam ou cam → abre em nova tab (beachcam.pt bloqueia iframes)
  if (beach.beachcam || beach.cam) {
    const url = beach.beachcam || beach.cam;
    return `<a class="cam-btn cam-btn--camera" href="${url}" target="_blank" rel="noopener noreferrer" title="${t.camTitle}">&#128247; ${t.camBtn2}</a>`;
  }
  // Windy webcam → modal interno (permite iframe)
  if (beach.windyCamUrl) {
    return `<button class="cam-btn cam-btn--camera" onclick="openCamera('${beach.id}')" title="${t.camTitle}">&#128247; ${t.camBtn2}</button>`;
  }
  // Sem câmera → desativado
  return `<button class="cam-btn cam-btn--disabled" disabled title="${t.camUnavailable}">&#128247; ${t.camBtn2}</button>`;
}
}

/* Generic modal opener used by openWindy + openCamera */
function openModal(url, beachName) {
  const t       = T[lang];
  const modal   = document.getElementById('cam-modal');
  const iframe  = document.getElementById('cam-iframe');
  const loading = document.getElementById('cam-loading');
  const error   = document.getElementById('cam-error');

  iframe.className      = 'cam-iframe';
  iframe.src            = '';
  loading.style.display = '';
  error.style.display   = 'none';

  document.getElementById('cam-modal-title').textContent = beachName;
  document.getElementById('cam-live-text').textContent   = t.liveText;
  document.getElementById('cam-error-msg').textContent   = t.camError;
  document.getElementById('cam-open-link').textContent   = t.camOpenBrowser;
  document.getElementById('cam-open-link').href          = url;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  clearTimeout(camTimer);
  camTimer = setTimeout(() => {
    loading.style.display = 'none';
    error.style.display   = '';
  }, 5000);

  iframe.onload = () => {
    clearTimeout(camTimer);
    loading.style.display = 'none';
    iframe.classList.add('loaded');
  };
  iframe.src = url;
}

/* Botão 🌊 — Windy mapa de condições */
function openWindy(beachId) {
  const beach = BEACHES.find(b => b.id === beachId);
  if (!beach) return;
  openModal(windyUrl(beach), lang === 'PT' ? beach.namePT : beach.nameEN);
}

/* Botão 📷 — abre câmera em modal interno (beachcam ou windy) */
function openCamera(beachId) {
  const beach = BEACHES.find(b => b.id === beachId);
  if (!beach) return;
  const url = beach.beachcam || beach.cam || beach.windyCamUrl;
  if (!url) return;
  openModal(url, lang === 'PT' ? beach.namePT : beach.nameEN);
}

function closeCam() {
  const modal  = document.getElementById('cam-modal');
  const iframe = document.getElementById('cam-iframe');
  clearTimeout(camTimer);
  modal.classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => { iframe.src = ''; }, 300);
}

/* =====================================================================
   FISHING COLLAPSIBLE
   ===================================================================== */
function toggleFishing(beachId) {
  const body  = document.getElementById('fish-body-'  + beachId);
  const arrow = document.getElementById('fish-arrow-' + beachId);
  if (!body) return;
  const isOpen = body.style.display !== 'none';
  body.style.display = isOpen ? 'none' : '';
  if (arrow) arrow.classList.toggle('open', !isOpen);
}

/* =====================================================================
   CAMERAS GRID
   ===================================================================== */
function renderCamerasGrid() {
  const t = T[lang];
  const camBeaches = BEACHES.filter(b => b.cam || b.windyCamUrl || b.beachcam);
  const grid = document.getElementById('cameras-grid');
  grid.innerHTML = camBeaches.map(b => {
    const name = lang === 'PT' ? b.namePT : b.nameEN;
    const data = cache[b.id];
    const weatherStr = data ? `${data.airTemp}\u00B0C \u00B7 ${data.waveHeight != null ? data.waveHeight + 'm' : '\u2014'} \u00B7 ${data.windSpeed}km/h` : '';
    return `
      <div class="cam-card">
        <div class="card-photo-wrapper" style="height:160px;border-radius:0">
          <img class="card-photo" src="${b.photo}" alt="${name}" loading="lazy" style="height:160px"
               onerror="this.style.display='none'">
          <div class="card-photo-overlay"></div>
          <div class="cam-btns">
            <button class="cam-btn cam-btn--windy" onclick="openWindy('${b.id}')" title="${t.windyTitle}">&#127754; Windy</button>
            ${camBtnHTML(b, t)}
          </div>
          <div class="card-photo-info">
            <div class="card-photo-text">
              <div class="card-photo-name">${name}</div>
              <div class="card-photo-location">${b.town}</div>
            </div>
          </div>
        </div>
        ${weatherStr ? `<div class="cam-card-footer"><span>${weatherStr}</span></div>` : ''}
      </div>`;
  }).join('');
}

/* =====================================================================
   BEACH INFO MODAL
   ===================================================================== */
function openInfo(beachId) {
  const beach = BEACHES.find(b => b.id === beachId);
  const info  = BEACH_INFO[beachId];
  if (!beach || !info) return;
  const t    = T[lang];
  const name = lang === 'PT' ? beach.namePT : beach.nameEN;
  document.getElementById('info-modal-title').textContent = name;
  document.getElementById('info-modal-body').innerHTML    = buildInfoHTML(info, t);
  document.getElementById('info-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeInfo() {
  document.getElementById('info-modal').classList.remove('open');
  document.body.style.overflow = '';
}

function buildInfoHTML(info, t) {
  const riskColor = { 'Baixo': '#27ae60', 'M\u00e9dio': '#e67e22', 'Alto': '#e74c3c' }[info.risco] || '#7f8c8d';
  const boolCell  = v => v === true      ? `<span style="color:#27ae60;font-weight:600">\u2713 ${t.infoYes}</span>`
                       : v === 'Sazonal' ? `<span style="color:#e67e22;font-weight:600">\u29D6 ${t.infoSeasonal}</span>`
                       :                   `<span style="color:#95a5a6">\u2013 ${t.infoNo}</span>`;
  return `
    <div class="info-section">
      <div class="info-section-title">${t.infoSurf}</div>
      <div class="info-grid">
        <div class="info-item"><span class="info-lbl">${t.infoSurfLevel}</span><span class="info-val">${info.surfLevel}</span></div>
        <div class="info-item"><span class="info-lbl">${t.infoSeabed}</span><span class="info-val">${info.fundo}</span></div>
      </div>
    </div>
    <div class="info-section">
      <div class="info-section-title">${t.infoSafety}</div>
      <div class="info-grid">
        <div class="info-item"><span class="info-lbl">${t.infoRisk}</span><span class="info-val" style="color:${riskColor}">${info.risco}</span></div>
        <div class="info-item"><span class="info-lbl">${t.infoLifeguard}</span><span class="info-val">${info.nadador}</span></div>
      </div>
    </div>
    <div class="info-section">
      <div class="info-section-title">${t.infoCrowd}</div>
      <div class="info-grid">
        <div class="info-item info-item--full"><span class="info-lbl">${t.infoCrowdLevel}</span><span class="info-val">${info.afluencia}</span></div>
      </div>
    </div>
    <div class="info-section">
      <div class="info-section-title">${t.infoAccess}</div>
      <div class="info-grid">
        <div class="info-item info-item--full"><span class="info-lbl">${t.infoParking}</span><span class="info-val">${info.parking}</span></div>
      </div>
    </div>
    <div class="info-section">
      <div class="info-section-title">${t.infoInfra}</div>
      <div class="info-grid">
        <div class="info-item"><span class="info-lbl">${t.infoCommerce}</span><span class="info-val">${boolCell(info.comercio)}</span></div>
        <div class="info-item"><span class="info-lbl">${t.infoBar}</span><span class="info-val">${boolCell(info.bar)}</span></div>
        <div class="info-item"><span class="info-lbl">${t.infoWC}</span><span class="info-val">${boolCell(info.wc)}</span></div>
        <div class="info-item"><span class="info-lbl">${t.infoShower}</span><span class="info-val">${boolCell(info.duche)}</span></div>
      </div>
    </div>`;
}

/* =====================================================================
   NEARBY MODE
   ===================================================================== */
function activateNearby() {
  const btn = document.getElementById('nearby-btn');
  if (btn) btn.textContent = '\u231B\uFE0F\u2026';

  if (!navigator.geolocation) { _showGeoError(); return; }

  navigator.geolocation.getCurrentPosition(pos => {
    const { latitude: lat, longitude: lon } = pos.coords;

    BEACHES.forEach(b => {
      nearbyDistances[b.id] = Math.round(haversine(lat, lon, b.lat, b.lon));
    });

    nearbyTop10 = BEACHES.slice()
      .sort((a, b) => nearbyDistances[a.id] - nearbyDistances[b.id])
      .slice(0, 10)
      .map(b => b.id);

    nearbyMode   = true;
    activeRegion = 'all';
    searchQuery  = '';
    const si = document.getElementById('search-input');
    if (si) si.value = '';
    document.getElementById('search-clear').style.display = 'none';

    rerenderAllCards();       // refresh distance badges
    renderRegionFilter();
    applyFilter(true);
    sortGridByDistance();
    updateCounter();
  }, _showGeoError);
}

function deactivateNearby() {
  nearbyMode      = false;
  nearbyDistances = {};
  nearbyTop10     = [];
  rerenderAllCards();         // remove distance badges
  restoreGridOrder();
  renderRegionFilter();
  applyFilter(true);
  updateCounter();
}

function sortGridByDistance() {
  const grid = document.getElementById('beaches-grid');
  nearbyTop10.forEach(id => {
    const card = document.getElementById('card-' + id);
    if (card) grid.appendChild(card);
  });
}

function restoreGridOrder() {
  const grid = document.getElementById('beaches-grid');
  BEACHES.forEach(b => {
    const card = document.getElementById('card-' + b.id);
    if (card) grid.appendChild(card);
  });
}

function _showGeoError() {
  nearbyMode = false;
  renderRegionFilter();
  const t   = T[lang];
  const btn = document.getElementById('nearby-btn');
  if (btn) {
    btn.textContent = t.noLocation;
    btn.classList.remove('active');
    setTimeout(() => renderRegionFilter(), 3000);
  }
}

/* =====================================================================
   SEARCH
   ===================================================================== */
function handleSearch(value) {
  searchQuery = value.trim().toLowerCase();
  document.getElementById('search-clear').style.display = searchQuery ? '' : 'none';

  if (nearbyMode) {
    nearbyMode      = false;
    nearbyDistances = {};
    nearbyTop10     = [];
    restoreGridOrder();
    rerenderAllCards();
    renderRegionFilter();
  }

  applyFilter(false);
  updateCounter();
}

function clearSearch() {
  const si = document.getElementById('search-input');
  if (si) { si.value = ''; si.focus(); }
  handleSearch('');
}

/* =====================================================================
   LOAD ALL BEACHES
   ===================================================================== */

async function loadAllBeaches() {
  const grid       = document.getElementById('beaches-grid');
  const refreshBtn = document.getElementById('refresh-btn');
  refreshBtn.classList.add('spinning');

  grid.innerHTML = BEACHES.map(b => `<div class="beach-card" id="card-${b.id}"></div>`).join('');
  BEACHES.forEach(b => updateCard(b, null, 'loading'));
  applyFilter(false);

  await Promise.all(BEACHES.map(async b => {
    try {
      const data  = await fetchBeachData(b);
      cache[b.id] = data;
      updateCard(b, data, 'ok');
      if (currentView === 'map') updateMapMarkers();
    } catch (err) {
      console.error(`[${b.id}]`, err);
      updateCard(b, null, 'error');
    }
  }));

  const now = new Date();
  const ts  = now.toLocaleTimeString(lang === 'PT' ? 'pt-PT' : 'en-GB', { hour: '2-digit', minute: '2-digit' });
  cache._updatedAt = ts;
  document.getElementById('last-updated').textContent = `${T[lang].updatedAt} ${ts}`;
  refreshBtn.classList.remove('spinning');
  updateMapMarkers();
}

/* =====================================================================
   INIT
   ===================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  applyLangTexts();
  loadAllBeaches();
  tryGeolocation();
  setInterval(loadAllBeaches, 30 * 60 * 1000);
  registerSW();

  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', e => handleSearch(e.target.value));
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeCam(); closeInfo(); clearSearch(); }
  });
});

/* =====================================================================
   SERVICE WORKER (PWA)
   ===================================================================== */
function registerSW() {
  if (!('serviceWorker' in navigator)) return;
  navigator.serviceWorker.register('/sw.js')
    .then(reg => {
      // Check for updates every hour
      setInterval(() => reg.update(), 60 * 60 * 1000);
    })
    .catch(err => console.warn('[SW] Registration failed:', err));
}
