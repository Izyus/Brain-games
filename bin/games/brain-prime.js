#!/usr/bin/env node
/* eslint-disable no-console */
import readlineSync from "readline-sync";
import { playGame, names, getNumb } from "../../src/index.js";
console.log(`Answer "yes" if given number is prime. Otherwise answer "no".`);
const playRound = () => {
  const number = getNumb(1, 10);
  const question = readlineSync.question(`Question: ${number} `);
  function isPrime(number) {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return "no";
      } else if (number !== 1) {
        return "yes";
      }
    }
  }

  if (question == isPrime(number)) {
    console.log("Correct!");
    return true;
  } else {
    console.log(
      `'${question}' is wrong answer ;(. Correct answer was '${isPrime(
        number
      )}'.`
    );
    console.log(`Let's try again, ${names}!`);
  }
};

playGame(playRound, names);
