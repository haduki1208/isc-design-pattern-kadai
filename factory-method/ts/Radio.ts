import Seihin from "./Seihin";
import Counter from "./Counter";

export default class Radio extends Seihin {
  private radioSerialNumber: number;

  public numberring(): void {
    this.radioSerialNumber = Counter.getRadioNumber();
  }

  public print(): void {
    console.log("このラジオに関する情報:");
    console.log("製造番号:" + this.radioSerialNumber);
  }
}
