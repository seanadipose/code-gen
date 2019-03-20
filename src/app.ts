import Helper, { generatorData } from './app/gen-files';
import Msp from './modules/msp-gen-files';
import { Chance } from 'chance';

const chance = new Chance();

const gens = [
  () => Msp.generateSA(),
  () => Msp.generateUser(),
  () => Msp.generateAccessAdmin(),
  () => Msp.generateGroupNumbers(),
  () => Msp.generateOrganization()
];

for (let fn of gens) {
  const num = chance.integer({ min: 1, max: 3 });
  const arr = new Array(num);
  const gen = generatorData(num, fn);
  // @ts-ignore
  gen.next();
  for (let item of arr) {
    // @ts-ignore

    console.log(gen.next());
  }
}
