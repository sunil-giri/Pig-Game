'use strict';

let player = 'player1',
  player1Score = 0,
  player2Score = 0,
  totalScore1 = 0,
  totalScore2 = 0;
const imgArray = [
  'dice-1.png',
  'dice-2.png',
  'dice-3.png',
  'dice-4.png',
  'dice-5.png',
  'dice-6.png',
];
const diceRoll = () => {
  const randomDice = Math.floor(Math.random() * 6);
  document.querySelector('.dice').src = imgArray[randomDice];
  if (randomDice == 0) {
    switchSides();
  } else {
    if (player == 'player1') {
      player1Score = player1Score + randomDice + 1;
      document.querySelector('#current--0').textContent = player1Score;
    } else {
      player2Score = player2Score + randomDice + 1;
      document.querySelector('#current--1').textContent = player2Score;
    }
  }
};

const hold = () => {
  if (player == 'player1') {
    player = 'player2';
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.add('player--active');
    totalScore1 += player1Score;
    document.querySelector('#score--0').textContent = totalScore1;
  } else {
    player = 'player1';
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    totalScore2 += player2Score;
    document.querySelector('#score--1').textContent = totalScore2;
  }
};

const switchSides = () => {
  if (player == 'player1') {
    player = 'player2';
    player1Score = 0;
    document.querySelector('#current--0').textContent = player1Score;
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.add('player--active');
  } else {
    player = 'player1';
    player2Score = 0;
    document.querySelector('#current--1').textContent = player2Score;
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
  }
};

const newGame = () => {
  (player = 'player1'),
    (player1Score = 0),
    (player2Score = 0),
    (totalScore1 = 0),
    (totalScore2 = 0);
  document.querySelector('#current--0').textContent = player1Score;
  document.querySelector('#current--1').textContent = player2Score;
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
  document.querySelector('#score--0').textContent = totalScore1;
  document.querySelector('#score--1').textContent = totalScore2;
  document.querySelector('.dice').src = 'dice-5.png';
};
document.querySelector('.btn--roll').addEventListener('click', diceRoll);
document.querySelector('.btn--hold').addEventListener('click', hold);
document.querySelector('.btn--new').addEventListener('click', newGame);
