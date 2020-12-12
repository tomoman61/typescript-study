export { };

class Person {
  // TypeScriptではプロパティを省略できる
  // public name: string;
  // public age: number;
  constructor(public name: string, protected age: number) {
    // TypeScriptではプロパティを省略できる
    // this.name = name;
    // this.age = age;
  }
}

const me = new Person("tomoman", 24);
console.log({me});
