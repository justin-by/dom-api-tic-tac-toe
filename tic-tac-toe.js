let currentPlayerSymbol = 'x'
const squareValues = ['', '', '', '', '', '', '', '', ''];

window.addEventListener('DOMContentLoaded', (event) => {

  let board = document.getElementById('tic-tac-toe-board');

  board.addEventListener('click', (event) => {

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

    if (currentPlayerSymbol === 'x') {
      currentPlayerSymbol = 'o';
    } else {
      currentPlayerSymbol = 'x';
    }




  })








})
