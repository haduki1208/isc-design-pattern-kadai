import Observer from "./Observer";

export default abstract class Subject {
  public observers: Observer[];

  constructor() {
    this.observers = [];
  }

  public attach(o: Observer) {
    this.observers.push(o);
  }

  public detach(o: Observer) {
    this.observers = this.observers.filter((item: Observer) => item !== o);
  }

  public tsuuchi() {
    for (const observer of this.observers) {
      observer.update(this);
    }
  }
}
