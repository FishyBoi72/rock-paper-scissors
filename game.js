// Defines the hands array
const hands = ['rock', 'paper', 'scissors'];
// Defines the getHand function
function getHand() {
    return hands[parseInt(Math.random() * 10) % 3];
}

// Defines 4 player objects
const player1 = {
    name: 'Player1',
    getHand: getHand
};

const player2 = {
    name: 'Player2',
    getHand: getHand
};

const player3 = {
    name: 'Player 3',
    getHand: getHand
};

const player4 = {
    name: 'Player 4',
    getHand: getHand
};

// playRound function that allows player 1 and 2 to get their "hands"
function playRound(player1, player2) {
    const hand1 = player1.getHand();
    const hand2 = player2.getHand();

    console.log(`${player1.name} played ${hand1}`);
    console.log(`${player2.name} played ${hand2}`);

    // If both hands equal, it's a draw
    if (hand1 === hand2) {
        console.log(`Both players played ${hand1}. It's a tie!`);
        return null;
}

// decides winner based on which hand is played
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
    // Logs the winner's name
    console.log(`${winner.name} wins!`);
    return winner;
}
 // Made another playGame function
function playGame(player1, player2, playUntil) {
    let player1Wins = 0;
    let player2Wins = 0;
 // Plays rounds until the required wins are met
    while (player1Wins < playUntil && player2Wins < playUntil) {
        const winner = playRound(player1, player2);
        if (winner) {
            if (winner === player1) {
                player1Wins++;
            } else {
                player2Wins++;
            }
        }
        // Logs the winner with the scores at the end
        console.log(`Score: ${player1.name} ${player1Wins} - ${player2.name} ${player2Wins}`);
    }
    //function gameWinner where it determines which player wins
    const gameWinner = player1Wins === playUntil ? player1 : player2;
    console.log(`${gameWinner.name} wins the game!`);
    return gameWinner;
}
//Plays the game until a player gets 3 wins
playGame(player1, player2, 3);

// Made the playTournament function
function playTournament(player1, player2, player3, player4, playUntil) {
    //plays player1 and player2, and player3 and player4 against each other until one wins
    const semiFinal1Winner = playGame(player1, player2, playUntil);
    const semiFinal2Winner = playGame(player3, player4, playUntil);
    //plays the winners of the semi round until one wins
    const tournamentWinner = playGame(semiFinal1Winner, semiFinal2Winner, playUntil);

    console.log(`${tournamentWinner.name} is the world champion!`);
    return tournamentWinner;
}
//plays the tournament where each player needs to get 3 wins to move on
playTournament(player1, player2, player3, player4, 3);