import { createInterface } from 'readline';
import arrayFlatten from './arrayFlatten';

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const run = (): void => {
  readline.question(`Enter a complex array to be flattened (Example: [1,2,[3,4,[5]]])`, input => {
    try {
      const array = JSON.parse(input);
      console.log("Alright!, Let's try ", array);
      console.log('Done! \n', arrayFlatten(array));
      readline.close();
    } catch (e) {
      console.log('Invalid input, try something like [1,2,[3,4,[5]]] ');
      readline.close();
      run();
    }
  });
};

run();
