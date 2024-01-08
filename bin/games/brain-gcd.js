#!/usr/bin/env node
/* eslint-disable no-console */
import readlineSync from "readline-sync";
import { playGame, names, getNumb } from "../../src/index.js";

console.log("Find the greatest common divisor of given numbers.");
const playRound = () => {
  const firstNumber = getNumb();
  const secondNumber = getNumb();

  const numbCheck = (firstNumber, secondNumber) => {
    if (secondNumber > firstNumber) return numbCheck(secondNumber, firstNumber);
    if (!secondNumber) return firstNumber;
    return numbCheck(secondNumber, firstNumber % secondNumber);
  };

  const question = readlineSync.question(
    `Question: ${firstNumber} ${secondNumber} `
  );

  if (numbCheck(firstNumber, secondNumber) === question.toLowerCase()) {
    console.log("Correct!");
    return true;
  }
  console.log(
    `'${question}' is wrong answer ;(. Correct answer was '${numbCheck(
      firstNumber,
      secondNumber
    )}'.`
  );
  console.log(`Let's try again, ${names}!`);
};

playGame(playRound, names);
