export { };
class VisaCard {
  // readonly owner: string;
  constructor(public readonly owner: string) {
    // this.owner = owner;
  }
}
let myVisaCard = new VisaCard("tomo");
console.log(myVisaCard.owner);
// myVisaCard.owner = "lll";