#!/usr/bin/env node
/* eslint-disable no-console */
import readlineSync from "readline-sync";
import { playGame, names } from "../src/index.js";
console.log("Welcome to the Brain Games!");
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

playGame(playRound, names);
