let diegosAge = document.getElementById('diegos-age');
let gabrielsAge = document.getElementById('gabriels-age');
let grazisAge = document.getElementById('grazis-age');
let amandasAge = document.getElementById('amandas-age');

let showResultsButton = document.getElementById('show-results-button');
showResultsButton.addEventListener('click', calculateAgeCombinations);

let showResultsArea = document.getElementById('show-results-area');
showResultsArea.style.display = 'none';

function calculateAgeCombinations() {
  let sumOfAges = 0;
  let productOfAges = 0;
  if (diegosAge.value > gabrielsAge.value && grazisAge.value > amandasAge.value) {
    sumOfAges = Number(diegosAge.value) + Number(amandasAge.value);
    productOfAges = Number(gabrielsAge.value) * Number(grazisAge.value);
    showAgeCombinations(sumOfAges, productOfAges);
  }
  if (diegosAge.value > gabrielsAge.value && grazisAge.value < amandasAge.value) {
    sumOfAges = Number(diegosAge.value) + Number(grazisAge.value);
    productOfAges = Number(gabrielsAge.value) * Number(amandasAge.value);
    showAgeCombinations(sumOfAges, productOfAges);
  }
  if (diegosAge.value < gabrielsAge.value && grazisAge.value > amandasAge.value) {
    sumOfAges = Number(gabrielsAge.value) + Number(amandasAge.value);
    productOfAges = Number(diegosAge.value) * Number(grazisAge.value);
    showAgeCombinations(sumOfAges, productOfAges);
  }
  if (diegosAge.value < gabrielsAge.value && grazisAge.value < amandasAge.value) {
    sumOfAges = Number(gabrielsAge.value) + Number(grazisAge.value);
    productOfAges = Number(diegosAge.value) * Number(amandasAge.value);
    showAgeCombinations(sumOfAges, productOfAges);
  }
}

function showAgeCombinations(sumOfAges, productOfAges) {
  showResultsArea.style.display = 'block';
  showResultsArea.innerHTML = `
    <p>A soma das idades do homem 
    mais velho com a mulher mais nova é: ${sumOfAges}</p>
    <p>O produto das idades do homem mais novo
    com a mulher mais velha é: ${productOfAges}</p>
  `;
  return;
}
 
