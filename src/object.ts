export {};

let obj: object = {
  id: 1,
  name: "inoue"
}
let obj2: { id: number; } = {
  id: 2
}

obj2 = { id: 3 };

console.log(obj2);
