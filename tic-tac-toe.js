let currentPlayerSymbol = 'x'
const squareValues = ['', '', '', '', '', '', '', '', ''];

let gameStatus = '';


window.addEventListener('DOMContentLoaded', (event) => {

  const checkGameStatus = () => {
    if (squareValues[0] === squareValues[1] && squareValues[1] === squareValues[2] && squareValues[2] !== '') {
      //top row
      gameStatus = currentPlayerSymbol.toUpperCase();
    }
    if (squareValues[3] === squareValues[4] && squareValues[4] === squareValues[5] && squareValues[5] !== '') {
      //middle row
      gameStatus = currentPlayerSymbol.toUpperCase();
    }
    if (squareValues[6] === squareValues[7] && squareValues[7] === squareValues[8] && squareValues[8] !== '') {
     //bottom
      gameStatus = currentPlayerSymbol.toUpperCase();
    }
    if (squareValues[0] === squareValues[3] && squareValues[3] === squareValues[6] && squareValues[6] !== '') {
         //left column
      gameStatus = currentPlayerSymbol.toUpperCase();
    }
    if (squareValues[1] === squareValues[4] && squareValues[4] === squareValues[7] && squareValues[7] !== '') {
        //middle column
      gameStatus = currentPlayerSymbol.toUpperCase();
    }
    if (squareValues[2] === squareValues[5] && squareValues[5] === squareValues[8] && squareValues[8] !== '') {
      //right column
      gameStatus = currentPlayerSymbol.toUpperCase();
    }
    if (squareValues[0] === squareValues[4] && squareValues[4] === squareValues[8] && squareValues[8] !== '') {
      //diagonal 1
      gameStatus = currentPlayerSymbol.toUpperCase();
    }
    if (squareValues[2] === squareValues[4] && squareValues[4] === squareValues[6] && squareValues[6] !== '') {
          //diagonal 2
      gameStatus = currentPlayerSymbol.toUpperCase();
    }

    if (gameStatus === '') {
      if (!(squareValues.includes(''))) {
        gameStatus = 'None'
      }
    }

    if (gameStatus !== '') {
      document.getElementById('game-status').innerHTML = `Winner: ${gameStatus}`

    }





}


  let board = document.getElementById('tic-tac-toe-board');



  board.addEventListener('click', (event) => {

    if (gameStatus !== '') {
      return;
    }

    let img = document.createElement('img');
    if (currentPlayerSymbol === 'x') {
      img.src = 'https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg'

    } else {
      img.src = 'https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg'
    }
    event.target.appendChild(img);

    const targetID = event.target.id
    if (targetID.includes('square-')) {
      let number = Number.parseInt(targetID.slice(7))
      if (squareValues[number] === '') {
        squareValues[number] = currentPlayerSymbol;
        console.log(squareValues);
      }
    } else {
      event.preventDefault();
    }

    checkGameStatus();

    if (currentPlayerSymbol === 'x') {
      currentPlayerSymbol = 'o';
    } else {
      currentPlayerSymbol = 'x';
    }




  })








})
