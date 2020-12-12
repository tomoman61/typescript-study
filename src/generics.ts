export { };

const echo = <T>(arg: T): T => {
  return arg;
}
// console.log(echo<number>(100));
// console.log(echo<string>("aaaaaaaa"));
// console.log(echo<boolean>(true));

// let name: any = "inoue";

// let length = (name as string).length;
// length = 'foo';
// console.log(length);

let name = "tomoman";
name = 'ino';

let nickname = "tomo" as const;
// nickname = "tom";

// インデックスシグネチャー
// How to write index sigunetures
// {[ index: typeForIndex ]: typeForValue}
interface profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: profile = {name: "ham",  underTwenty: false };

profile.name = "Ham";
profile.age = 24;
profile.nationality = "Japan";
