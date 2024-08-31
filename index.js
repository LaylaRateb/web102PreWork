const GAMES_JSON = [
    // Example game data
    { name: "Game A", amountRaised: 20000 },
    { name: "Game B", amountRaised: 15000 },
    { name: "Game C", amountRaised: 10000 },
    // Add more games as needed
];

// Step 1: Calculate top 2 funded games
const sortedGames = [...GAMES_JSON].sort((a, b) => b.amountRaised - a.amountRaised);
const [topGame, secondTopGame] = sortedGames;

// Secret key components
const firstWordTopGame = topGame.name.split(' ')[0]; // Component 1
const firstWordSecondTopGame = secondTopGame.name.split(' ')[0]; // Component 2

console.log(firstWordTopGame); // zoohow (Example)
console.log(firstWordSecondTopGame); // zoohow (Example)

// Function to display the top 2 funded games
function displayTopGames() {
    const firstGameContainer = document.getElementById('firstGameContainer');
    const secondGameContainer = document.getElementById('secondGameContainer');

    const firstGameElement = document.createElement('p');
    firstGameElement.textContent = `Top Game: ${topGame.name}`;
    firstGameContainer.appendChild(firstGameElement);

    const secondGameElement = document.createElement('p');
    secondGameElement.textContent = `Second Top Game: ${secondTopGame.name}`;
    secondGameContainer.appendChild(secondGameElement);
}

// Call function to display top games
displayTopGames();

// Secret key components
const numbers = [1, 2, 3, 4, 5, 6];
const [one, two, ...rest] = numbers;
console.log(rest); // Secret key component 3: [3, 4, 5, 6]
