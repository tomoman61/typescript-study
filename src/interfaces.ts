export {};

// type-alias
type ObjType = {
  name: string;
  age: number;
};

let obj: ObjType = {
  name: "tomoman",
  age: 24
}

console.log(obj);

// interface
interface ObjInterface {
  name: string;
  age: number;
};

let obj2: ObjInterface = {
  name: "tomo",
  age: 2
}
