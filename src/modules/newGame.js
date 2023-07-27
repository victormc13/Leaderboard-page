const newGame = async () => {
  const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
  const gameName = 'Call of Coding';

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: gameName }),
  };

  try {
    const response = await fetch(baseURL, requestOptions);
    const data = await response.json();
    const gameId = data.result.split(': ')[1];
    return gameId; // console.log(gameName, 'game created with ID:', gameId);
  } catch (error) {
    throw new Error('Failed to create game', error);
  }
};

export default newGame;