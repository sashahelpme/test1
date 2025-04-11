function test(input){
const fetch = require('node-fetch');
  fetch('https://about.pumb.ua/en/info/currency_converter')
  .then(res => res.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const tableRow = doc.querySelector('#single-page-rate-2 tbody tr:nth-child(2)');
    
    const currency = tableRow.children[0].textContent.trim();
    const purchase = tableRow.children[1].textContent.trim();
    const sale = tableRow.children[2].textContent.trim();

    const res = ({ currency, purchase, sale });
  });
return res;
}

module.exports = { test };
