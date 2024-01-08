#!/usr/bin/env node
/* eslint-disable no-shadow */
/* eslint-disable no-console */
import readlineSync from 'readline-sync';
// eslint-disable-next-line import/extensions
import { playGame, names, getNumb } from '../../src/index.js';

console.log('What is the result of the expression?');
// eslint-disable-next-line import/prefer-default-export, consistent-return
export const playRound = () => {
  const newNumb1 = getNumb();
  const newNumb2 = getNumb();
  const operation = ['+', '-', '*'];
  const randomOperator = operation[getNumb(0, 2)];
  const numbCheck = (newNumb1, newNumb2, randomOperator) => {
    if (randomOperator === '+') {
      return newNumb1 + newNumb2;
    } if (randomOperator === '-') {
      return newNumb1 - newNumb2;
    }
    return newNumb1 * newNumb2;
  };
  const question = readlineSync.question(
    `Question: ${newNumb1} ${randomOperator} ${newNumb2} `,
  );
  if (numbCheck(newNumb1, newNumb2, randomOperator).toString() === question.toLowerCase()) {
    console.log('Correct!');
    return true;
  }
  console.log(
    `'${question}' is wrong answer ;(. Correct answer was '${numbCheck(
      newNumb1,
      newNumb2,
    )}'.`,
  );
  console.log(`Let's try again, ${names}!`);
};
playGame(playRound, names);
