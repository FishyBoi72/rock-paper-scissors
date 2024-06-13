const hands = ['rock', 'paper', 'scissors'];
function getHand() {
    return hands[parseInt(Math.random() * 10) % 3];
}

const player1 = {
    name: 'Player1',
    getHand: getHand
};

const player2 = {
    name: 'Player2',
    getHand: getHand
};

function playRound(player1, player2) {
    const hand1 = player1.getHand();
    const hand2 = player2.getHand();

    console.log(`${player1.name} played ${hand1}`);
    console.log(`${player2.name} played ${hand2}`);

    if (hand1 === hand2) {
        console.log(`Both players played ${hand1}. It's a tie!`);
        return null;
}

let winner = null;
if (
    (hand1 === 'rock' && hand2 === 'scissors') ||
        (hand1 === 'scissors' && hand2 === 'paper') ||
        (hand1 === 'paper' && hand2 === 'rock')
    ) {
        winner = player1;
    } else {
        winner = player2;
    }

    console.log(`${winner.name} wins!`);
    return winner;
}

playRound(player1, player2);