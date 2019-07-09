import TvKoujyou from "./TvKoujyou";
import RadioKoujyou from "./RadioKoujyou";
import Seihin from "./Seihin";

const koujyou1 = new TvKoujyou();
const koujyou2 = new RadioKoujyou();
const seihinArray: Seihin[] = new Array(3);

seihinArray[0] = koujyou1.create();
seihinArray[1] = koujyou2.create();
seihinArray[2] = koujyou1.create();

for (const seihin of seihinArray) {
  seihin.print();
}
