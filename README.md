# Praias de Portugal — Portugal Beaches

Website de condições das praias em tempo real para todo o Portugal continental.

## Funcionalidades

- **25 praias** em 5 regiões (Norte, Centro, Lisboa e Setúbal, Alentejo Litoral, Algarve)
- **Dados em tempo real** via Open-Meteo API (sem chave de API necessária)
- **Rating de surf** (1-5 estrelas) baseado em ondas, vento e orientação da praia
- **Índice UV** com recomendações de proteção solar
- **Marés** (modelo sinusoidal simplificado)
- **Melhor hora** para surf e banho (próximas 12h)
- **Mapa interativo** com Leaflet.js e OpenStreetMap
- **Filtro por região** com animação
- **Geolocalização** — destaca a praia mais próxima
- **Bilingue** Português / English
- **PWA** — instalável como app no telemóvel, funciona offline

## Build para produção

```bash
npm install
npm run build
# → Gera a pasta dist/ com CSS e JS minificados
```

Resultados da minificação:
| Ficheiro    | Original | Minificado | Redução |
|-------------|----------|------------|---------|
| `app.js`    | 33.4 KB  | 21.5 KB    | 35%     |
| `style.css` | 13.5 KB  | 10.6 KB    | 21%     |

## Deploy no Netlify (grátis)

### Opção 1 — Via GitHub (recomendado)

1. Fazer upload do projeto para um repositório GitHub
   *(a pasta `dist/` não é necessária — o Netlify faz o build automaticamente)*
2. Em [netlify.com](https://netlify.com): **"Add new site" → "Import an existing project"**
3. Ligar ao repositório GitHub
4. Build settings (já estão no `netlify.toml`):
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Clicar **"Deploy site"**

### Opção 2 — Arrastar e largar

1. Correr `npm run build` localmente
2. Criar conta gratuita em [netlify.com](https://netlify.com)
3. No dashboard: **"Add new site" → "Deploy manually"**
4. Arrastar a pasta `dist/` (não a raiz do projeto) para a área de drop

### Opção 3 — Netlify CLI

```bash
npm install -g netlify-cli
netlify login
npm run build
netlify deploy --prod --dir dist
```

## Estrutura de ficheiros

```
meu-projeto/
├── index.html          # HTML principal
├── style.css           # Estilos (azul + laranja)
├── app.js              # Lógica, API calls, mapa
├── sw.js               # Service Worker (PWA / offline)
├── manifest.json       # Manifesto PWA
├── icon-192.png        # Ícone PWA 192×192
├── icon-512.png        # Ícone PWA 512×512
├── _redirects          # SPA routing Netlify
├── netlify.toml        # Configuração Netlify + headers
├── package.json        # Dependências de build
├── build.js            # Script de build (minificação)
├── .gitignore          # node_modules/ + dist/
└── README.md           # Este ficheiro

dist/                   # ← pasta gerada por npm run build
├── index.html
├── app.js              # minificado
├── style.css           # minificado
├── sw.js
├── manifest.json
├── icon-192.png
├── icon-512.png
└── _redirects
```

## APIs utilizadas

| API | URL | Custo |
|-----|-----|-------|
| Open-Meteo Weather | api.open-meteo.com | Gratuita |
| Open-Meteo Marine | marine-api.open-meteo.com | Gratuita |
| OpenStreetMap tiles | tile.openstreetmap.org | Gratuita |
| Leaflet.js | unpkg.com/leaflet | Gratuita |

Nenhuma chave de API é necessária.
