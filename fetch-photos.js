// Script temporário para buscar fotos Unsplash para as 55 novas praias
// Executar: node fetch-photos.js

const CLIENT_ID = 'Tm22jG6wIqTuv7njC7dQnDUmc6zibAIA33jQ6D-sTOQ';

const beaches = [
  // Norte
  { id: 'cabedelo',         query: 'Cabedelo Viana do Castelo praia portugal' },
  { id: 'vila-praia-ancora',query: 'Vila Praia de Âncora praia portugal' },
  { id: 'caxinas',          query: 'Caxinas Vila do Conde praia portugal' },
  { id: 'leca-palmeira',    query: 'Leça da Palmeira praia portugal' },
  { id: 'apulia',           query: 'Apúlia praia portugal' },
  { id: 'esposende',        query: 'Esposende praia portugal' },
  { id: 'furadouro',        query: 'Furadouro praia portugal' },
  { id: 'esmoriz',          query: 'Esmoriz praia portugal' },
  // Centro
  { id: 'praia-da-barra',   query: 'Praia da Barra Aveiro portugal' },
  { id: 'costa-nova',       query: 'Costa Nova praia portugal' },
  { id: 'vagueira',         query: 'Praia da Vagueira portugal' },
  { id: 'praia-de-mira',    query: 'Praia de Mira portugal' },
  { id: 'praia-da-tocha',   query: 'Praia da Tocha portugal' },
  { id: 'torreira',         query: 'Praia da Torreira Murtosa portugal' },
  { id: 'murtinheira',      query: 'Murtinheira praia portugal' },
  { id: 'praia-da-vieira',  query: 'Praia da Vieira Marinha Grande portugal' },
  { id: 'pedrogao',         query: 'Praia do Pedrógão Leiria portugal' },
  { id: 'foz-do-arelho',    query: 'Foz do Arelho praia portugal' },
  { id: 'sao-martinho-porto',query: 'São Martinho do Porto praia portugal' },
  { id: 'areia-branca',     query: 'Areia Branca Lourinhã praia portugal' },
  // Oeste / Lisboa
  { id: 'ericeira',         query: 'Ericeira praia portugal surf' },
  { id: 'ribeira-dilhas',   query: 'Ribeira d\'Ilhas Ericeira surf portugal' },
  { id: 'praia-grande',     query: 'Praia Grande Sintra portugal' },
  { id: 'praia-das-macas',  query: 'Praia das Maçãs Sintra portugal' },
  { id: 'carcavelos',       query: 'Carcavelos praia Cascais portugal' },
  { id: 'guincho',          query: 'Praia do Guincho Cascais portugal' },
  { id: 'sao-pedro-estoril',query: 'São Pedro do Estoril praia portugal' },
  { id: 'fonte-da-telha',   query: 'Fonte da Telha praia Almada portugal' },
  { id: 'lagoa-albufeira',  query: 'Lagoa de Albufeira praia portugal' },
  { id: 'praia-do-meco',    query: 'Praia do Meco Sesimbra portugal' },
  { id: 'portinho-arrabida',query: 'Portinho da Arrábida praia portugal' },
  // Alentejo / Costa Vicentina
  { id: 'sao-torpes',       query: 'São Torpes praia Sines portugal' },
  { id: 'troia',            query: 'Tróia praia Setúbal portugal' },
  { id: 'carvalhal',        query: 'Praia do Carvalhal Grândola portugal' },
  { id: 'zambujeira',       query: 'Zambujeira do Mar praia portugal' },
  { id: 'arrifana',         query: 'Praia da Arrifana Aljezur portugal' },
  { id: 'praia-do-amado',   query: 'Praia do Amado Costa Vicentina portugal' },
  { id: 'monte-clerigo',    query: 'Monte Clérigo praia Aljezur portugal' },
  // Algarve
  { id: 'sagres',           query: 'Sagres praia portugal' },
  { id: 'praia-da-luz',     query: 'Praia da Luz Lagos Algarve portugal' },
  { id: 'alvor',            query: 'Alvor praia Portimão portugal' },
  { id: 'carvoeiro',        query: 'Carvoeiro praia Lagoa Algarve portugal' },
  { id: 'ferragudo',        query: 'Ferragudo praia Portimão portugal' },
  { id: 'senhora-da-rocha', query: 'Senhora da Rocha praia Algarve portugal' },
  { id: 'armacao-de-pera',  query: 'Armação de Pêra praia Algarve portugal' },
  { id: 'praia-da-gale',    query: 'Praia da Galé Albufeira Algarve portugal' },
  { id: 'praia-do-peneco',  query: 'Praia do Peneco Albufeira Algarve portugal' },
  { id: 'praia-da-falesia', query: 'Praia da Falésia Albufeira Algarve portugal' },
  { id: 'praia-de-faro',    query: 'Praia de Faro Algarve portugal' },
  { id: 'ilha-da-culatra',  query: 'Ilha da Culatra Faro portugal' },
  { id: 'praia-verde',      query: 'Praia Verde Castro Marim Algarve portugal' },
  { id: 'altura',           query: 'Altura praia Castro Marim Algarve portugal' },
  // Madeira & Porto Santo
  { id: 'porto-santo',      query: 'Porto Santo praia Madeira portugal' },
  { id: 'faja-da-areia',    query: 'Fajã da Areia São Jorge Madeira portugal' },
  { id: 'seixal-madeira',   query: 'Seixal praia Madeira portugal' },
  { id: 'jardim-do-mar',    query: 'Jardim do Mar Madeira surf portugal' },
  { id: 'paul-do-mar',      query: 'Paul do Mar Madeira portugal' },
];

async function fetchPhoto(beach) {
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(beach.query)}&per_page=1&orientation=landscape&client_id=${CLIENT_ID}`;
  try {
    const res = await fetch(url);
    const json = await res.json();
    const photo = json.results?.[0]?.urls?.regular;
    return { id: beach.id, photo: photo || null };
  } catch (e) {
    return { id: beach.id, photo: null };
  }
}

async function main() {
  console.log('A buscar fotos Unsplash para', beaches.length, 'praias...\n');
  const results = {};

  // Fetch em lotes de 5 para não sobrecarregar a API
  for (let i = 0; i < beaches.length; i += 5) {
    const batch = beaches.slice(i, i + 5);
    const batchResults = await Promise.all(batch.map(fetchPhoto));
    batchResults.forEach(r => {
      results[r.id] = r.photo;
      console.log(`${r.id}: ${r.photo ? '✓' : '✗ (sem foto)'}`);
    });
    if (i + 5 < beaches.length) {
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }

  console.log('\n// ===== RESULTADO — colar no app.js =====');
  console.log('const BEACH_PHOTOS = ' + JSON.stringify(results, null, 2) + ';');
}

main().catch(console.error);
