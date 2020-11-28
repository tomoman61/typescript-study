export {};

type Pitcher1 = {
  throwingSpeed: number;
};
type Batter1 = {
  battingAverage: number;
};

const sasaki: Pitcher1 = {
  throwingSpeed: 154
};
const otiai: Batter1 = {
  // throwingSpeed: 154,
  battingAverage: 0.367
};

// 重要
type TwoWayPlayer = Pitcher1 & Batter1;

const outani: TwoWayPlayer = {
  throwingSpeed: 154,
  battingAverage: 0.367
}

// type TwoPlayer = {
//   throwingSpeed: number;
//   battingAverage: number;
// };
