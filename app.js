const player1 = 'X';
const player2 = 'O';

let currentTurn = 1;
let movesMade = 0;

const winnerContainer = $('.winner');

const sqr = $('.square');


sqr.on('click', (e) => {
    movesMade++;
    if (currentTurn % 2 === 1) {
        event.target.innerHTML = player1;
        event.target.style.color = "red";
        currentTurn++;
    } else {
        event.target.innerHTML = player2;
        event.target.style.color = "green";
        currentTurn--;
    }

    if (checkForWinner()) {
        theWinner = currentTurn == 1 ? player2 : player1;
        declareWinner(theWinner);
    } else if (!checkForWinner() && movesMade ==9){
		winnerContainer.css('display', "block");
    	winnerContainer.html("Draw");
    }
    
});


function declareWinner(winner) {
    winnerContainer.css('display', "block");
    winner = winner === player1 ? 'Player1' : 'Player2';
    winnerContainer.html(`${winner} Wins!`);
}

function checkForWinner() {
    if (movesMade > 4) {
        const sqr = $('.square');
        
        const moves = Array.prototype.slice.call($(".square"));
        const results = moves.map(square => square.innerHTML);
        //console.log(results)
        const winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        return winningCombos.find(combo => {
        	if (results[combo[0]] !== "" && results[combo[1]] !== "" && results[combo[2]] !== "" && results[combo[0]] === results[combo[1]] && results[combo[1]] === results[combo[2]]) {
                //console.log(combo[0])
                //console.log("---"+combo[1])
                //console.log("+++"+combo[2])
                return true;
            } else {
                return false;
            }
        });
    }
}
