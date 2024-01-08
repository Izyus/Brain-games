#!/usr/bin/env node
/* eslint-disable no-console */
import readlineSync from 'readline-sync';
import { playGame, names, getNumb } from '../../src/index.js';

console.log('What number is missing in the progression?');
const playRound = () => {
  const increaseCount = getNumb(1, 10);
  const arr = [];
  for (let i = 0; i <= 9; i += 1) {
    arr[i] = i * increaseCount + increaseCount;
  }
  const randomIndex = getNumb(1, 9);
  const temp = arr[randomIndex];
  arr[randomIndex] = '..';
  const question = readlineSync.question(`Question: ${arr.join(' ')} `);
  if (question === temp) {
    console.log('Correct!');
    return true;
  }
  console.log(
    `'${question}' is wrong answer ;(. Correct answer was '${temp}'.`,
  );
  console.log(`Let's try again, ${names}!`);
};

playGame(playRound, names);
