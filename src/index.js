import './style.css';
import displayScores from './modules/displayScores.js';
import { postScore } from './modules/fetchData.js';

const refresBtn = document.querySelector('.refresh-btn');
refresBtn.addEventListener('click', () => {
  displayScores();
});

const submitBtn = document.querySelector('.form');
submitBtn.addEventListener('submit', async (e) => {
  e.preventDefault();

  await postScore();
  displayScores();
});

window.load = displayScores();