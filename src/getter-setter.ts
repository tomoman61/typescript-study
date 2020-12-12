export { };

// * owner
// 　* 所有者
// 　＊　初期化時に設定できる
// 　＊　途中で変更できない
// 　＊　参照できる
// ＊ secretNumber
// 　* 個人番号
// 　＊　初期化時に設定できる
// 　＊　途中で変更できる
// 　＊　参照できない

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;
  constructor(_owner: string, _secretNumber: number) {
    this._owner = _owner;
    this._secretNumber = _secretNumber;
  };
  get owner() {
    return this._owner;
  };
  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  };

}
let card = new MyNumberCard("tomo", 24);
console.log(card.owner);
// card.owner = "aaaa";
console.log({card});
card.secretNumber = 25;
console.log(card.secretNumber);
console.log({card});

