let workedHours = document.getElementById('hours-input');
let hourlyWage = document.getElementById('wage-input');
let totalWage = 0;
let showResultsArea = document.getElementById('show-results-area');
let showResultsButton = document.getElementById('show-results-button');

showResultsButton.addEventListener('click', calculateWage);
showResultsArea.style.display = 'none';

function calculateWage() {
  if (workedHours.value <= 160) {
    totalWage = workedHours.value * hourlyWage.value;
    showTotalWage();
  }
  if (workedHours.value > 160) {
    let bonusWage = workedHours.value - 160;
    bonusWage *= hourlyWage.value * 1.5;
    totalWage = 160 * hourlyWage.value + bonusWage;
    showTotalWage();
  }
}

function showTotalWage() {
  showResultsArea.style.display = 'block';
  showResultsArea.innerHTML = `
    <legend>Salário total:</legend>
    <p>O salário total do funcionário é: ${totalWage}</p>
  `;
}
