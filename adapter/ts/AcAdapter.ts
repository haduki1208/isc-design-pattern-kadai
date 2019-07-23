import Dengen from './Dengen';
import JapaneseConsent from './JapaneseConsent';

export default class AcAdapter implements Dengen {
  private japaneseConsent: JapaneseConsent = new JapaneseConsent();

  kyuuden(): number {
    return this.japaneseConsent.power() * 0.16;
  }
}
