import Helper, { generatorData } from './app/gen-files';
import Msp from './modules/msp-gen-files';
import { Chance } from 'chance';
// TODO: save the data to JSON files or the DB of choice.
const chance = new Chance();

/*
  The functions to generate data based on.
  They're added to ann array of items, and the generator will generate a random spread of the appropriate type of data.
  Some data is singleton for this - I didn't quite fix that properly, and the data in this instance isn't dependent on anything
  other than it's output.. but the generator could be modified appropriately to achieve that by using a class
  for the data with an input function (ie.. () => new Msp.generateUser.bind(this, val))
*/
const gens = [
  () => Msp.generateSA(),
  () => Msp.generateUser(),
  () => Msp.generateAccessAdmin(),
  () => Msp.generateGroupNumbers(),
  () => Msp.generateOrganization()
];

// for each of the functions in the array of generators
for (let fn of gens) {
  // generate a random number (this can be weighted as well which makes it slightly better over a math.random)
  const num = chance.integer({ min: 1, max: 3 });
  // create an array of random size
  const arr = new Array(num);
  // input the function into the generator.
  const gen = generatorData(num, fn);
  // @ts-ignore
  gen.next();
  for (let item of arr) {
    // @ts-ignore

    console.log(gen.next());
  }
}
