#!/usr/bin/env node
/* eslint-disable no-console */
import readlineSync from "readline-sync";
console.log("Welcome to the Brain Games!");
const names = readlineSync.question("May I have your name? ");
console.log(`Hello, ${names}`);
console.log(`What is the result of the expression?`);

const playRound = () => {
  const getNumb = (min = 1, max = 50) =>
    Math.floor(min + Math.random() * (max + 1 - min));
  const newNumb1 = getNumb();
  const newNumb2 = getNumb();
  const operation = ["+", "-", "*"];
  const randomOperator = operation[getNumb(0, 2)];
  const numbCheck = (newNumb1, newNumb2, randomOperator) => {
    if (randomOperator == "+") {
      return newNumb1 + newNumb2;
    } else if (randomOperator == "-") {
      return newNumb1 - newNumb2;
    } else {
      return newNumb1 * newNumb2;
    }
  };

  const question = readlineSync.question(
    `Question: ${newNumb1} ${randomOperator} ${newNumb2} `
  );

  if (numbCheck(newNumb1, newNumb2, randomOperator) == question.toLowerCase()) {
    console.log("Correct!");
    return true;
  } else {
    console.log(
      `'${question}' is wrong answer ;(. Correct answer was '${numbCheck(
        newNumb1,
        newNumb2
      )}'.`
    );
    console.log(`Let's try again, ${names}!`);
  }
};
const playGame = () => {
  for (let i = 0; i < 3; i++) {
    const isCorrect = playRound();
    if (!isCorrect) {
      return;
    }
  }
  console.log(`Congratulations, ${names}!`);
};
playGame();
