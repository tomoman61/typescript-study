// モジュール解決
export { };

// Personクラス
class Person {

  // プロパティ
  private name: string;
  public age: number;
  protected natinality: string;

  // コンストラクタ
  constructor(name: string, age: number, natinality: string) {
    this.name = name;
    this.age = age;
    this.natinality = natinality;
  };

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`
  };

  getName() {
    return this.name;
  };

  setName(name: string) {
    this.name = name;
  };

};

class Child extends Person {
  constructor(name: string, age: number, natinality: string) {
    super(name, age, natinality);
  }

  profile(): string {
    return `name: ${this.getName()}, age: ${this.age}, natinality: ${this.natinality}`;
  };
};


// インスタンス生成
let taro = new Person("Taro", 24, "日本");
let child = new Child("inoue", 30, "Japan");

console.log(taro.profile());
console.log(child.profile());

