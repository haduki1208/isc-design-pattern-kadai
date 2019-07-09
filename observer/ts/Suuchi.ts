import Subject from "./Subject";

export default class Suuchi extends Subject {
  suuchiState: number = 0;
  atai: number = 0;

  public getState(): number {
    return this.suuchiState;
  }

  public putValue(atai: number): void {
    if (atai > this.atai) {
      this.atai = atai;
      this.tsuuchi();
    } else {
      console.log("確認用メッセージ: 更新してません");
    }
  }

  public getValue(): number {
    return this.atai;
  }
}
