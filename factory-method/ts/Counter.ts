export default class Counter {
  private static tvNum: number = 100;
  private static radioNum: number = 76;

  public static getTvNumber(): number {
    return this.tvNum++;
  }

  public static getRadioNumber(): number {
    return this.radioNum++;
  }
}
