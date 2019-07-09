import Koujyou from "./Koujyou";
import Seihin from "./Seihin";
import Radio from "./Radio";

export default class RadioKoujyou extends Koujyou {
  /**
   * Radioのインスタンスを返す
   */
  public factoryMethod(): Seihin {
    return new Radio();
  }

  public touroku(s: Seihin) {
    const r: Radio = <Radio>s;
    r.numberring();
  }
}
