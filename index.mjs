import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const accBob  =
  await stdlib.newTestAccount(startingBalance);

const accAlice = await stdlib.newTestAccount(stdlib.parseCurrency(6000));

console.log('Hello, Alice and Bob!');

console.log('Launching...');
const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

const getBalance = async (Who) => stdlib.formatCurrency((await stdlib.balanceOf(Who)));

console.log(`Alice's account balance before is ${await getBalance(accAlice)}`);

console.log(`Bob's account balance before is ${await getBalance(accBob)}`);


const countDown = () => ({
  showCountDown: (time) => {
    console.log(time);
  }
})


console.log('Starting backends...');
await Promise.all([
  backend.Alice(ctcAlice, {
    ...stdlib.hasRandom,
    ...countDown(),
    inherit: stdlib.parseCurrency(5000),
    getAction: () => {
      // const action = Math.floor(Math.random() * 2);
      // action == 0 ? console.log('I am not here') : console.log('I am here');
      const res = await ask.ask(
        `Are you here`,
        ask.yesno
      )
      return (res == yes ? true : false);
    }
    // implement Alice's interact object here
  }),
  backend.Bob(ctcBob, {
    ...stdlib.hasRandom,
    ...countDown(),
   
    boolTerms: (num) => {
      const accepted = await ask.ask(
        `Do you accept the terms`,
        ask.yesno
      )
      if (accepted) {
        console.log(`Bob accepts the terms of the Vault for ${stdlib.formatCurrency(num)}`);
        return true;
      } else {
        process.exit(0);
      }
     
    }
    // implement Bob's interact object here
  }),
]);

console.log(`Alice's account balance after is ${await getBalance(accAlice)}`);

console.log(`Bob's account balance after is ${await getBalance(accBob)}`);

console.log('Goodbye, Alice and Bob!');
