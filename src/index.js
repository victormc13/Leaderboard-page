import './style.css';
import { displayScores } from './modules/displayScores';
import { postScore } from './modules/fetchData';

const refresBtn = document.querySelector('.refresh-btn');
refresBtn.addEventListener('click', () => {
  displayScores();
});

const submitBtn = document.querySelector('.form');
submitBtn.addEventListener('submit', async (e) => {
  e.preventDefault();

  await postScore();
  user.value = '';
  score.value = '';
  displayScores();
});

window.load = displayScores();