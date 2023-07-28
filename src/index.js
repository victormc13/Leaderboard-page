import './style.css';
import displayScores from './modules/displayScores.js';
import { postScore } from './modules/fetchData.js';

const refresBtn = document.querySelector('.refresh-btn');
refresBtn.addEventListener('click', () => {
  displayScores();
});

const form = document.querySelector('.form');
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  await postScore();
  form.reset();
});

window.load = displayScores();