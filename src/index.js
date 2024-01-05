import readlineSync from "readline-sync";

export const names = readlineSync.question("May I have your name? ");
console.log(`Hello, ${names}`);

export const playGame = (playRound, names) => {
  for (let i = 0; i < 3; i++) {
    const isCorrect = playRound();
    if (!isCorrect) {
      return;
    }
  }
  console.log(`Congratulations, ${names}!`);
};

export const getNumb = (min = 1, max = 50) =>
  Math.floor(min + Math.random() * (max + 1 - min));
