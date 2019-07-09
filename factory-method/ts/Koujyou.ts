import Seihin from "./Seihin";

export default abstract class Koujyou {
  /**
   * 指定されたSeihinのインスタンスを返す
   */
  public create(): Seihin {
    const seihin = this.factoryMethod();
    this.touroku(seihin);
    return seihin;
  }

  public abstract factoryMethod(): Seihin;
  public abstract touroku(s: Seihin): void;
}
