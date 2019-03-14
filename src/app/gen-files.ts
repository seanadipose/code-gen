import * as Chance from "chance";

export class Helpers {
  static genExt = (chance: Chance.Chance): string => {
    const random = chance.integer({ min: 111, max: 9999 });
    return random.toString();
  };

  static randomNum = (max: number, chance: Chance.Chance): number => {
    const num = chance.integer({ min: 1, max: max });
    return num;
  };

  *generator(int: number): Iterable<any> {
    // const reset = yield current;
    const chance = new Chance();
    const name = chance.name();
    yield 1;
    yield* [2, 3];
  }

  constructor() {
    this.generator(3);
  }
}

const Helper = new Helpers();
export default Helper;
export function* generatorX(num: number, fn: () => any): Iterable<any> {
  let index = 0;
  while (index < num) yield fn();
}
