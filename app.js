// DOM Objects

//const size = document.querySelector('#size');
const people = document.querySelector('#people');
const technique = document.querySelector('#technique');
const pricedisplay = document.querySelector('#pricedisplay');
const sampleimage = document.querySelector('#sampleimage');

let price;

// Prices in SEK
const basePrice = 1100;
const perPerson = 1200;
const pencil = 750;
const watercolorBw = 750;
const watercolorFullcolor = 750;

// Event listeners
/* document
  .querySelector('#technique')
  .addEventListener('change', updateSampleImage(), false); */

document.querySelector('#size').addEventListener('input', updatePrice());

people.addEventListener('click', hjalmar());

function updateSampleImage() {
  console.log(technique.value);
  sampleimage.src = 'pix/sampleimage-' + technique.value + '.jpg';
}

function updatePrice() {
  price = basePrice + perPerson * people.value;
  pricedisplay.innerHTML = price + ' SEK.';
  console.log('Estimated price ' + price + ' SEK.');
}

function hjalmar() {
  console.log('Hjall!');
}
