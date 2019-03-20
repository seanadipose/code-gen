import * as Chance from 'chance';

export class Helpers {
  static genExt = (chance: Chance.Chance): string => {
    const random = chance.integer({ min: 111, max: 9999 });
    return random.toString();
  };

  static randomNum = (max: number, chance: Chance.Chance): number => {
    const num = chance.integer({ min: 1, max: max });
    return num;
  };

  constructor() {}
}

const Helper = new Helpers();
export default Helper;
export function* generatorData(num: number, fn: () => any): Iterable<any> {
  let index = 0;
  while (index < num) yield fn();
}
