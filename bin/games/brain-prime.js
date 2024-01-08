#!/usr/bin/env node
/* eslint-disable no-console */
import readlineSync from "readline-sync";
import { playGame, names, getNumb } from "../../src/index.js";
console.log(`Answer "yes" if given number is prime. Otherwise answer "no".`);
const playRound = () => {
  const number = getNumb(1, 100);
  const question = readlineSync.question(`Question: ${number} `);
  function isPrime(number) {
    var x = "";
    if (number < 2) {
      x = "Число должно быть больше 1";
    } else if (number === 2) {
      x = "yes";
    }
    let i = 2;
    const limit = Math.sqrt(number);
    while (i <= limit) {
      i += 1;
      if (number % i == 0) {
        x = "no";
      }
    }
    return x;
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
