let totalOfVoters = document.getElementById('voters-input');
let whiteVotes = document.getElementById('white-votes-input');
let nullVotes = document.getElementById('null-votes-input');
let validVotes = document.getElementById('valid-votes-input');
let showStatisticsArea = document.getElementById('show-statistics-area');
showStatisticsArea.style.display = 'none';

let showStatisticsButton = document.getElementById('statistics-button');
showStatisticsButton.addEventListener('click', calculateVotesStatistics);

function calculateVotesStatistics() {
  let percentage1 = whiteVotes.value / (totalOfVoters.value / 100);
  let percentage2 = nullVotes.value / (totalOfVoters.value / 100);
  let percentage3 = validVotes.value / (totalOfVoters.value / 100);

  showVotesStatistics(percentage1, percentage2, percentage3);
}

function showVotesStatistics(percentage1, percentage2, percentage3) {
  showStatisticsArea.style.display = 'block';
  showStatisticsArea.innerHTML = `
  <legend>Resultado das estatísticas</legend>
  <ul>
    <li>Percentual de votos brancos: ${percentage1}%</li>
    <li>Percentual de votos nulos: ${percentage2}%</li>
    <li>Percentual de votos válidos: ${percentage3}%</li>
  </ul>
  `;
}