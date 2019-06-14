import TanoshiiState from './TanoshiiState';

export default class Dog {
  private myState;

  constructor() {
    this.myState = TanoshiiState.getInstance();
  }

  public roudou(): void {
    this.myState.tukareta(this);
  }

  public shokuji(): void {
    this.myState.tabeta(this);
  }

  public changeState(d): void {
    this.myState = d;
  }

  public print(): void {
    console.log(`現在、わたしは「${this.myState.toString()}」です。`);
  }
}
