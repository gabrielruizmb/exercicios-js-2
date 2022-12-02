let accountNumber = document.getElementById('client-account');
let accountBalance = document.getElementById('account-balance');
let accountDebit = document.getElementById('account-debit');
let accountCredit = document.getElementById('account-credit');

let showResultsButton = document.getElementById('show-results-button');
showResultsButton.addEventListener('click', calculateCurrentBalance);

let showResultsArea = document.getElementById('show-results-area');
showResultsArea.style.display = 'none';

function calculateCurrentBalance() {
  let currentBalance = Number(accountBalance.value) - 
  Number(accountDebit.value) + Number(accountCredit.value);
  let balanceStatus = currentBalance >= 0 ? 'Saldo positivo' : 'Saldo negativo';
  showCurrentBalance(currentBalance, balanceStatus);
}

function showCurrentBalance(currentBalance, balanceStatus) {
  showResultsArea.style.display = 'block';
  showResultsArea.innerHTML = `
    <legend>Saldo atual</legend>
    <p>Seu saldo atual é: ${currentBalance}</p>  
    <p>${balanceStatus}!</p>
  `;
}