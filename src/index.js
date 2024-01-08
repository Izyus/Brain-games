import readlineSync from 'readline-sync';

export const names = readlineSync.question('May I have your name? ');
// eslint-disable-next-line no-console
console.log(`Hello, ${names}`);

// eslint-disable-next-line no-shadow
export const playGame = (playRound, names) => {
  for (let i = 0; i < 3; i += 1) {
    const isCorrect = playRound();
    if (!isCorrect) {
      return;
    }
  }
  // eslint-disable-next-line no-console
  console.log(`Congratulations, ${names}!`);
};

export const getNumb = (min = 1, max = 50) => Math.floor(min + Math.random() * (max + 1 - min));
