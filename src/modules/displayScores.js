import { getScores } from './fetchData.js';

const displayScores = async () => {
  const scores = await getScores();
  const scoresList = document.querySelector('.score-list');
  scoresList.innerHTML = '';

  scores.forEach((score) => {
    const scoreItem = `<li class='flex-row'>${score.user}: <span>${score.score}</span></li>`;
    scoresList.insertAdjacentHTML('beforeend', scoreItem);
  });
};

export default displayScores;