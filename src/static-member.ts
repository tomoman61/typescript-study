export { };
class Me {
  static isProgramer: boolean = true;
  static firstName: string = "tomo";
  static lastName: string = "ino";

  static work(): string {
    return `Hey, ${this.firstName}! Are you intersted TypeScript?`;
  }
}
// let me = new Me();
// console.log({me});
console.log(Me.lastName);
console.log(Me.work());
