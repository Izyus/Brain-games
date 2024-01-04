#!/usr/bin/env node
import readlineSync from "readline-sync";
console.log("Welcome to the Brain Games!");
const names = readlineSync.question("May I have your name? ");
console.log(`Hello, ${names}`);
console.log(`Answer "yes" if the number is even, otherwise answer "no".`);

const playRound = () => {
  const getNumb = (min = 1, max = 15) =>
    Math.floor(min + Math.random() * (max + 1 - min));
  const newNumb = getNumb();
  const numbCheck = (newNumb) => (newNumb % 2 == 0 ? "yes" : "no");

  const question = readlineSync.question(`Question: ${newNumb} `);

  if (numbCheck(newNumb) === question.toLowerCase()) {
    console.log("Correct!");
    return true;
  } else {
    console.log(
      `'${question}' is wrong answer ;(. Correct answer was '${numbCheck(
        newNumb
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
