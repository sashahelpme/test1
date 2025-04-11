function test(){
const axios = require('axios');
const cheerio = require('cheerio');

(async () => {
  const url = 'https://about.pumb.ua/en/info/currency_converter';
  const response = await axios.get(url);
  const $ = cheerio.load(response.data);

  const rows = $('#single-page-rate-2 table tbody tr');

  const rates = [];

  rows.each((i, row) => {
    const cells = $(row).find('td');
    const pair = $(cells[0]).text().trim();
    const buy = $(cells[1]).text().trim();
    const sell = $(cells[2]).text().trim();

    rates.push({ pair, buy, sell });
  });

  console.log(rates);
})();
}

module.exports = { test };
