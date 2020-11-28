export {};

const func = (): number => 24;

let num: any = func();
let numUnknown: unknown = func();

let sumAny = num + 10;
// console.log(typeof numUnknown);
if (typeof numUnknown === 'number') {
  let sumUnknown = numUnknown + 10;
  console.log(sumUnknown);
}
