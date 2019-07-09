import Observer from "./Observer";
import Subject from "./Subject";
import Suuchi from "./Suuchi";

export default class JyuurokushinHyouji implements Observer {
  public update(s: Subject): void {
    this.print((<Suuchi>s).getValue());
  }

  private print(n: number) {
    console.log(`${n} to hex: ${n.toString(16)}`);
  }
}
