import readlineSync from 'readline-sync';

const askNameAndGreet = () => {
  const name = readlineSync.question('May I have your name? ');

  // eslint-disable-next-line no-console
  console.log(`Hello, ${name}!`);
};

// eslint-disable-next-line import/prefer-default-export
export { askNameAndGreet };
