import Dog from './Dog';
import DogState from './DogState';
import FutsuuState from './FutsuuState';

export default class TanoshiiState extends DogState {
  private static s: TanoshiiState = new TanoshiiState();

  public static getInstance(): DogState {
    return this.s;
  }

  public tukareta(moto: Dog): void {
    moto.changeState(FutsuuState.getInstance());
  }

  public tabeta(moto: Dog): void {}

  public toString(): string {
    return '楽しい状態';
  }
}
