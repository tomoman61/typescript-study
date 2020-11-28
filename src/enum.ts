export {};

enum Months {
  January = 1,
  Febrary,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December
}

console.log(Months.April);
console.log(Months.December);

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BLUE = '#0000FF',
  BLACK = '#000000',
  // YELLOW = '#FF0000'
}

let green = COLORS.GREEN;
console.log({ green });

enum COLORS {
  YELLOW = '#FF00000',
  GRAY = '#808080'
}
COLORS.YELLOW;
COLORS.GRAY;