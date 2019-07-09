import Suuchi from "./Suuchi";
import NishinHyouji from "./NishinHyouji";
import JyuurokushinHyouji from "./JyuurokushinHyouji";

const s = new Suuchi();
const o1 = new NishinHyouji();
const o2 = new JyuurokushinHyouji();

s.attach(o1);
s.attach(o2);

// s.detach(o1);
// s.detach(o2);

for (let i = 1; i < 100; i += Math.floor(Math.random() * 30)) {
  s.putValue(i);
}
