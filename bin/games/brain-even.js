#!/usr/bin/env node
/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
import readlineSync from 'readline-sync';
// eslint-disable-next-line import/extensions
import { playGame, names, getNumb } from '../../src/index.js';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const playRound = () => {
  const newNumb = getNumb();
  const numbCheck = (newNumb) => (newNumb % 2 === 0 ? 'yes' : 'no');

  const question = readlineSync.question(`Question: ${newNumb} `);

  if (numbCheck(newNumb).toString() === question.toLowerCase()) {
    console.log('Correct!');
    return true;
  }
  console.log(
    `'${question}' is wrong answer ;(. Correct answer was '${numbCheck(
      newNumb,
    )}'.`,
  );
  console.log(`Let's try again, ${names}!`);
};

playGame(playRound, names);
