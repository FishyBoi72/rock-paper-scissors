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

//playRound(player1, player2);

function playGame(player1, player2, playUntil) {
    let player1Wins = 0;
    let player2Wins = 0;

    while (player1Wins < playUntil && player2Wins < playUntil) {
        const winner = playRound(player1, player2);
        if (winner) {
            if (winner === player1) {
                player1Wins++;
            } else {
                player2Wins++;
            }
        }

        console.log(`Score: ${player1.name} ${player1Wins} - ${player2.name} ${player2Wins}`);
    }

    const gameWinner = player1Wins === playUntil ? player1 : player2;
    console.log(`${gameWinner.name} wins the game!`);
    return gameWinner;
}

playGame(player1, player2, 3);
