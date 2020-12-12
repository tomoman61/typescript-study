export { };

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string){}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string){}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) { }
  }
}

const person = new Japanese.Tokyo.Person("tomo");
const person2 = new Japanese.Osaka.Person("man");
const person1 = new English.Person("ino", "ue", "tomo");
console.log(person.name);
console.log({person1});
console.log({person2});
