let currentPlayerSymbol = 'x'


let gameHeader = document.getElementById('game-status');
let newGameButton = document.getElementById('new-game');
let giveUpButton = document.getElementById('give-up');
let squareValues = ['', '', '', '', '', '', '', '', ''];

let gameStatus = '';




window.addEventListener('DOMContentLoaded', (event) => {


  if (localStorage.length) {
    getSquareValues = localStorage.getItem('tic-tac-toe-state')
    let parsedSquareValues = JSON.parse(getSquareValues)
    squareValues = parsedSquareValues;

    // loop through the squarevalues array
    for (let i = 0; i < squareValues.length; i++) {
      // grab square based on i
      let square = document.getElementById(`square-${i}`)
      // create img element
      let img = document.createElement('img')
      // set a conditional to set image src to either X img or O img
      if (squareValues[i] === 'x') {
        img.src = 'https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg'
      } else if (squareValues[i] === 'o') {
        img.src = 'https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg'
      }
      // append img to square based on i
      square.appendChild(img)
    }
  }


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
      gameHeader.innerHTML = `Winner: ${gameStatus}`
      newGameButton.disabled = false;
      // giveUpButton.setAttribute('disabled', 'true');
      giveUpButton.disabled = true;
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

    saveGameState();
  })


  newGameButton.addEventListener('click', event => {
    currentPlayerSymbol = 'x';
    squareValues = ['', '', '', '', '', '', '', '', ''];
    gameStatus = '';
    gameHeader.innerHTML = '';

    for (let i = 0; i <= 8; i++) {
      let square = document.getElementById(`square-${i}`)
      square.innerHTML = '';
    }
    newGameButton.disabled = true;
    giveUpButton.disabled = false;
  })

  giveUpButton.addEventListener('click', event => {
    if (currentPlayerSymbol === 'x') {
      gameStatus = 'O'
    } else if (currentPlayerSymbol === 'o') {
      gameStatus = 'X'
    }

    gameHeader.innerHTML = `Winner: ${gameStatus}`
    newGameButton.disabled = false;
    giveUpButton.disabled = true;

  })


  function saveGameState() {
    // get current state of game (squareArray)
    // set current state into local storage
    // change game into saved state from local storage

    let serializedSquareValues = JSON.stringify(squareValues);
    localStorage.setItem('tic-tac-toe-state', serializedSquareValues)
    // let getSquareValues = localStorage.getItem('tic-tac-toe-state')
    // let parsedSquareValues = JSON.parse(getSquareValues)
    // squareValues = parsedSquareValues;
  }


})
