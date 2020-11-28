export {};

type Mojiretu = string;

let moji: Mojiretu = "aaa";

type Profile = {
  id: number;
  name: string;
  age: number;
};

const example1: Profile = {
  id: 1,
  name: "inoue",
  age: 24
}

type example2 = typeof example1;

const example2: Profile = {
  id: 2,
  name: "tomoman",
  age: 42
}

console.log(example2);
