const gameId = 'zIxacV2ear1zNxuGwtAi';
const scoreURL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;

export const getScores = async () => {
  try {
    const response = await fetch(scoreURL);
    const data = await response.json();
    const scores = data.result;
    const sortedScores = scores.sort((a, b) => b.score - a.score);
    return sortedScores;
  } catch (error) {
    throw new Error('Failed to get scores', error);
  }
};

export const postScore = async () => {
  const user = document.getElementById('user').value;
  const score = document.getElementById('score').value;

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user, score }),
  };

  try {
    const response = await fetch(scoreURL, requestOptions);
    const data = await response.json();
    user.value = '';
    score.value = '';
    return data;
  } catch (error) {
    throw new Error('Failes to post score', error);
  }
};