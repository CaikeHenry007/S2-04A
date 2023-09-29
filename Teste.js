// Importe o módulo Cheerio
const cheerio = require('cheerio');

// HTML de exemplo
const html = '<h1>Bom dia sala!</h1><p>Este é um exemplo com Cheerio.</p>';

// Carregue o HTML com Cheerio
const $ = cheerio.load(html);

// Use o $ para selecionar elementos e fazer manipulações
const titulo = $('h1').text();
const paragrafo = $('p').text();

// Exiba os resultados
console.log('Título:', titulo);
console.log('Parágrafo:', paragrafo);





