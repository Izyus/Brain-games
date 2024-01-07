import readlineSync from "readline-sync";
const askNameAndGreet = () => {
  const name = readlineSync.question("May I have your name? ");

  console.log(`Hell, ${name}`);
};

export { askNameAndGreet };
