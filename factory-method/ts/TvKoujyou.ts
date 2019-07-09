import Koujyou from "./Koujyou";
import Seihin from "./Seihin";
import Television from "./Television";
import MyDate from "./MyDate";

export default class TvKoujyou extends Koujyou {
  /**
   * Televisionのインスタンスを返す
   */
  public factoryMethod(): Seihin {
    return new Television();
  }

  public touroku(s: Seihin) {
    const t: Television = <Television>s;
    t.numberring();
    t.setDate(MyDate.today());
  }
}
