export { };

class Animal {
  constructor(
    public name: string,
    // public speed: number
  ) { }
  run(): string {
    return "I can run";
  }
}

class Lion extends Animal {
  public speed: number;
  constructor(name: string, speed: number) {
    super(name);
    this.speed = speed;
  }
  run(): string {
    return `${super.run()} ${this.speed}km/h.`
  }
}
let lion = new Lion("lion", 80);
console.log(lion.run());
