import Observer from "./Observer";
import Subject from "./Subject";
import Suuchi from "./Suuchi";

export default class NishinHyouji implements Observer {
  public update(s: Subject): void {
    this.print((<Suuchi>s).getValue());
  }

  private print(n: number) {
    console.log(`${n} to bin: ${n.toString(2)}`);
  }
}
