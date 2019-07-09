import Seihin from "./Seihin";
import Counter from "./Counter";

export default class Television extends Seihin {
  private tvSerialNumber: number;
  private date: string;

  public numberring(): void {
    this.tvSerialNumber = Counter.getTvNumber();
  }

  public setDate(date: string): void {
    this.date = date;
  }

  public print(): void {
    console.log("このテレビに関する情報:");
    console.log("製造番号:" + this.tvSerialNumber);
    console.log("製造年月日:" + this.date);
  }
}
