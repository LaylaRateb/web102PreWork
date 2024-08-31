

function addGamesToPage(games) {
  // Get the container element from the DOM
  const gamesContainer = document.getElementById('games-container');

  // Step 1: Loop over each game in the array
  for (let i = 0; i < games.length; i++) {
    const game = games[i];

    // Step 2: Create a new div element for the game card
    const gameCard = document.createElement('div');
    gameCard.classList.add('game-card');

    // Step 3: Set the inner HTML of the div to display the game information
    gameCard.innerHTML = `
      <img src="${game.image}" alt="${game.name}" class="game-img" />
      <h3>${game.name}</h3>
      <p>${game.description}</p>
      <p>Contributors: ${game.contributors}</p>
    `;

    // Step 4: Append the new game card to the games container
    gamesContainer.appendChild(gameCard);
  }
}

// Step 5: Call the addGamesToPage function with the correct variable
addGamesToPage(GAMES_JSON);
