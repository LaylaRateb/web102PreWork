// use reduce() to count the number of total contributions by summing the backers
const totalContributors = games.reduce((acc, game)=>
{
    return acc + game.backers;
}, 0);
console.log(`Total Contributors: ${totalContributors}`);
// set the inner HTML using a template literal and toLocaleString to get a number with commas
contributionsCard.innerHTML = `
    <p>${totalContributors.toLocaleString('en-US')}</p>
    `;
// grab the amount raised card, then use reduce() to find the total amount raised
const raisedCard = document.getElementById("total-raised");
const totalMoney = games.reduce((acc, game)=>
{
    return acc + game.pledged;
}, 0);
// set inner HTML using template literal
raisedCard.innerHTML = `
<p>$${totalMoney.toLocaleString('en-US')}</p>
`;

