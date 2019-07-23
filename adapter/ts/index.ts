import Dengen from './Dengen';
import AcAdapter from './AcAdapter';

const d: Dengen = new AcAdapter();
const denatsu = d.kyuuden();
console.log(`${denatsu}Vで給電されています。`);
