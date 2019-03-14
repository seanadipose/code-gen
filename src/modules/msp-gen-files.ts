import {
  IUser,
  IMspSigningAuthority,
  IMspOrganization,
  IMspGroupNumbers,
  UserTitle
} from "src/interface";
import * as Chance from "chance";
import { Helpers } from "../app/gen-files";
import { IMspAccessAdmin } from "src/interface/i-msp-access-admins";

namespace Msp {
  const chance = new Chance.Chance();
  function yesNo() {
    if (chance.bool) return "yes";
    return "no";
  }
  export function generateUser(): IUser {
    return {
      userTitle: chance.prefix() as UserTitle,
      firstName: chance.first(),
      initial: chance.character(),
      lastName: chance.last(),
      jobTitle: chance.profession(),
      emailAddress: chance.email(),
      phone: chance.phone(),
      ext: Helpers.genExt(chance),
      fax: chance.phone(),
      administeringFor: ""
    };
  }

  export function generateOrganization(): IMspOrganization {
    return {
      name: chance.company(),
      address: chance.address(),
      city: chance.city(),
      province: chance.province(),
      postalCode: chance.postal(),
      thirdParty: chance.company(),
      blueCross: chance.bool(),
      administeringFor: yesNo()
    };
  }

  export function generateSA(): IMspSigningAuthority {
    const sa = generateUser() as IMspSigningAuthority;
    sa.alsoAdmin = chance.bool();
    sa.directAccess = chance.bool();
    return sa;
  }

  export function generateAccessAdmin(): IMspAccessAdmin {
    const aa = generateUser() as IMspSigningAuthority;
    aa.directAccess = chance.bool();
    return aa;
  }

  export function generateGroupNumbers(): IMspGroupNumbers[] {
    const num = chance.integer({ min: 1, max: 3 });
    let arr = [];
    for (let i = 0; i <= num; i++) {
      arr.push({ groupNumber: chance.word({ length: 7 }) });
    }
    return arr;
  }
}

export default Msp;
