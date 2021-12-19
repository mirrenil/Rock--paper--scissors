const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  let moves = 0;
};

const playGame = () => {
  const rockBtn = document.querySelector(".rock");
  const paperBtn = document.querySelector("paper");
  const scissorBtn = document.querySelector("scissor");
  const playerOptions = [rockBtn, paperBtn, scissorBtn];
  const computerOptions = ["rock", "paper", "scissors"];

  playerOptions.forEach((option) => {
    option.addEventListener('click', function () {
      const movesLeft = document.querySelector(".movesLeft");
      moves++;
      movesLeft.innerText = `Moves Left: ${10 - moves}`;

      const choiceNumber = Math.floor(Math.random() * 3);
      const computerChoice = computerOptions[choiceNumber];

      winner(this.innerText, computerChoice);

      if (moves == 10) {
        gamesOver(playerOptions, movesLeft);
      }
    });
  });
};

const winner = (player,computer) => {
  const result = document.querySelector('.result');
  const playerScoreBoard = document.querySelector('.playerCount');
  const computerScoreBoard = document.querySelector('.computerCount');
  player = player.toLowerCase();
  computer = computer.toLowerCase();
  if (player === computer) {
    result.textContent = "It's a tie!"
  } else if (player == 'rock') {
    if (computer == 'paper') {
      result.textContent = "The computer won!";
      computerScore++;
      computerScoreBoard.textContent = computerScore;
    } else {
      result.textContent = "You won!";
      playerScore++;
      playerScoreBoard.textContent = playerScore;
    }
  } else if(player == 'scissors') {
    if(computer == 'rock') {
      result.textContent = 'The computer won!';
      computerScore++;
      computerScoreBoard.textContent = computerScore;
    } else {
      result.textContent = "You won!";
      playerScore++;
      playerScoreBoard.textContent = playerScore;
    }
  } else if(player == 'paper') {
    if(computer == 'scissors') {
      result.textContent = "The Computer won!";
      computerScore++;
      computerScoreBoard.textContent = computerScore;
    } else {
      result.textContent = 'You won!';
      playerScore++;
      playerScoreBoard.textContent = playerScore;
    }
  }
}

const gameOver = (playerOptions,movesLeft) => {
  const chooseMove = document.querySelector('.move');
  const result = document.querySelector('.result');
  const reloadBtn = document.querySelector('.reload');

  playerOptions.forEach(option => {
    option.style.display = 'none';
  })
  chooseMove.innerText = 'Game Over!';
  movesLeft.style.display = 'none';

  if (playerScore > computerScore) {
    result.style.fontSize = '2rem';
    result.style.color = '#308D46';
    result.innerText = 'Congratulations, you have defeated the Computer!';
  } else if (playerScore < computerScore) {
    result.style.fontSize = '2rem';
    result.style.color = 'red';
    result.innerText = 'You lost the game!';
  } else {
    result.style.fontSize = '2rem';
    result.style.color = 'grey';
    result.innerText = "It's a tie!";
  }
  reloadBtn.innerText = 'Play again';
  reloadBtn.style.display = 'flex';
  reloadBtn.addEventListener('click', () => {
    window.location.reload();
  })
}

playGame();

game();