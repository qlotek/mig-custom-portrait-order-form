//  SETTINGS ######################################################
const hourlyRateSEK = 400;
const hourlyRateEuro = 20;
const hourlyRateUSD = 25;

const hoursPencil = 15;
const hoursWatercolorBw = 11;
const hoursWatercolorFullcolor = 19;

// Multipliers for extra people
const singlePerson = 1;
const twoPeople = 1.5;
const threePeople = 1.9;
const fourPeople = 2.2;
const fivePeople = 2.4;
const moreThanFivePeople = 3;

// Multipliers for paper size
const a5Extra = 0.9;
const a4Extra = 1;
const a3Extra = 1.2;
const axExtra = 1;

// Defaults
const defaultSize = 'a4';
const defaultTechnique = 'watercolor-bw';

// Messages
const apprxPriceDisclaimerMsg =
  'FYI: Since you have custom specifications, this is a very rough estimate.';

// ###################################################################

// DOM Objects
const fullName = document.querySelector('#fullName');
const email = document.querySelector('#email');
const size = document.querySelector('#size');
const people = document.querySelector('#people');
const technique = document.querySelector('#technique');
const instructions = document.querySelector('#instructions');
const pricedisplay = document.querySelector('#pricedisplay');
const currencyDisplay = document.querySelector('#currency-display');
const currency = document.querySelector('#currency');
/* const sampleimage = document.querySelector('#sampleimage');
 */
const apprxPriceDisclaimer = document.querySelector('#apprx-price-disclaimer');
const quotedPrice = document.querySelector('#quoted-price');

// Misc variables used
let thereAreCustomRequests = false;
let customSizeRequested = false;
let price;
let selectedSize = defaultSize;
let sizeMultiplier = 1;
let peopleMultiplier = 1;
let selectedTechnique = defaultTechnique;
let approximatePrice = false;

// Select elements that affect price
let priceInputs;

// Event listeners
document.onload = updatePrice();

document.querySelectorAll('input[name="technique"]').forEach((radioButton) => {
  radioButton.addEventListener('change', function (event) {
    var item = event.target.value;
    //console.log(item);
    //console.log('selectedTechnique: ' + item);
    selectedTechnique = item;
    updatePrice();
  });
});

size.addEventListener('change', updatePrice);
people.addEventListener('change', updatePrice);
instructions.addEventListener('input', updatePrice);
currency.addEventListener('change', updatePrice);

// UPDATE PRICE FUNCTION
function updatePrice() {
  let totalHours;
  selectedSize = size.value;

  // Set price for selected technique based on Settings
  switch (selectedTechnique) {
    case 'pencil':
      totalHours = hoursPencil;
      break;
    case 'watercolor-bw':
      totalHours = hoursWatercolorBw;
      break;
    case 'watercolor-color':
      totalHours = hoursWatercolorFullcolor;
      break;
    default:
      totalHours = hoursWatercolorBw;
  }

  // Adjust price for selected size based on Settings
  switch (selectedSize) {
    case 'a5':
      sizeMultiplier = a5Extra;
      break;
    case 'a4':
      sizeMultiplier = a4Extra;
      break;
    case 'a3':
      sizeMultiplier = a3Extra;
      break;
    case 'other':
      sizeMultiplier = a3Extra;
      break;
    default:
      sizeMultiplier = axExtra;
  }

  // Adjust price for numuber of peole based on Settings
  switch (people.value) {
    case '1':
      peopleMultiplier = singlePerson;
      break;
    case '2':
      peopleMultiplier = twoPeople;
      break;
    case '3':
      peopleMultiplier = threePeople;
      break;
    case '4':
      peopleMultiplier = fourPeople;
      break;
    case '5':
      peopleMultiplier = fivePeople;
      break;
    case 'more':
      peopleMultiplier = moreThanFivePeople;
      break;

    default:
      console.log('Default size');
      peopleMultiplier = axExtra;
  }

  // Calculate and update Price
  let hourlyRate;
  let currencySymbol;
  switch (currency.value) {
    case 'USD':
      hourlyRate = hourlyRateUSD;
      currencySymbol = '$';
      break;
    case 'EUR':
      hourlyRate = hourlyRateEuro;
      currencySymbol = '€';
      break;
    case 'SEK':
      hourlyRate = hourlyRateSEK;
      currencySymbol = 'SEK';
      break;
  }

  let price = totalHours * peopleMultiplier * sizeMultiplier * hourlyRate;
  pricedisplay.innerHTML = Math.floor(price);

  // Update displayed currency
  currencyDisplay.innerHTML = currencySymbol;

  // Add "Approximate price" disclaimer if specs may be unclear
  if (
    instructions.value != '' ||
    size.value === 'other' ||
    people.value === 'more'
  ) {
    apprxPriceDisclaimer.innerHTML = apprxPriceDisclaimerMsg;
    pricedisplay.innerHTML = Math.floor(price) + '?';
    quotedPrice.value = Math.floor(price) + currency.value;
    console.log(Math.floor(price) + currency.value);
  }

  /*   console.log(' people.value= ' + people.value);
  console.log(' peopleMultiplier= ' + peopleMultiplier);
  console.log(' size.value= ' + size.value);
  console.log(' selectedSize= ' + selectedSize);
  console.log(' selectedTechnique= ' + selectedTechnique);
  console.log(' thereAreCustomRequests= ' + thereAreCustomRequests);
  console.log(' customSizeRequested= ' + customSizeRequested); */
  console.log('••••••••••••••••••');
}

// Validate

/* let formValid;

function validateForm() {
  let formValid;
  if (fullName.value != '' && email.value != '') {
    formValid = true;
  } else {
    formValid = false;
  }
  console.log('•••••• formValid= ' + formValid);
} */
