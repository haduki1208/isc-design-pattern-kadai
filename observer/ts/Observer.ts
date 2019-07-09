import Subject from "./Subject";

export default interface Observer {
  update(s: Subject): void;
}
