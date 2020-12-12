// モジュール解決
export { };

// Personクラス
class Person {

  // プロパティ
  name: string;
  age: number;

  // コンストラクタ
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`
  }

};

// インスタンス生成
let taro = new Person("Taro", 24);
console.log(taro.profile());
