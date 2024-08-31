const GAMES_JSON = [
    // Your games data here
];

// Function to add games to the page
function addGamesToPage(games) {
    // Implementation for adding games to the page
}

// Function to filter unfunded games
function filterUnfundedOnly() {
    const unfundedGames = GAMES_JSON.filter(game => game.amountRaised < game.goalAmount);
    console.log(unfundedGames.length); // Secret key component 1
    addGamesToPage(unfundedGames);
    return unfundedGames;
}

// Function to filter funded games
function filterFundedOnly() {
    const fundedGames = GAMES_JSON.filter(game => game.amountRaised >= game.goalAmount);
    console.log(fundedGames.length); // Secret key component 2
    addGamesToPage(fundedGames);
    return fundedGames;
}

// Function to show all games
function showAllGames() {
    addGamesToPage(GAMES_JSON);
}

// Function to delete child elements
function deleteChildElements(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

// Event listeners for buttons
document.getElementById('unfundedBtn').addEventListener('click', () => {
    deleteChildElements(document.getElementById('descriptionContainer'));
    filterUnfundedOnly();
});

document.getElementById('fundedBtn').addEventListener('click', () => {
    deleteChildElements(document.getElementById('descriptionContainer'));
    filterFundedOnly();
});

document.getElementById('showAllBtn').addEventListener('click', () => {
    deleteChildElements(document.getElementById('descriptionContainer'));
    showAllGames();
});

// Step 1: Calculate unfunded games count
const unfundedGamesCount = GAMES_JSON.filter(game => game.amountRaised < game.goalAmount).length;

// Step 2: Create and append paragraph with summary
const descriptionContainer = document.getElementById('descriptionContainer');
const para = document.createElement('p');
const totalRaised = GAMES_JSON.reduce((acc, game) => acc + game.amountRaised, 0);
const totalGames = GAMES_JSON.length;
para.textContent = `Total amount raised: ${totalRaised.toLocaleString()} for ${totalGames} games. There ${unfundedGamesCount === 1 ? 'is' : 'are'} ${unfundedGamesCount} game${unfundedGamesCount === 1 ? '' : 's'} unfunded.`;
descriptionContainer.appendChild(para);

// Example ternary operator usage
const isLoggedIn = true; // Example user login status
const user = { name: 'John' };
console.log(isLoggedIn ? `Hello ${user.name}` : "Hello!"); // Secret key component 3

// Function to return fee based on membership status
function getFee(isMember) {
    return (isMember ? '$2.00' : '$10.00');
}
console.log(getFee(true)); // Secret key component 4
