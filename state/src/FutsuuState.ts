import Dog from './Dog';
import DogState from './DogState';
import TanoshiiState from './TanoshiiState';
import IrairaState from './IrairaState';

export default class FutsuuState extends DogState {
  private static s: FutsuuState = new FutsuuState();

  public static getInstance(): DogState {
    return this.s;
  }

  public tukareta(moto: Dog): void {
    moto.changeState(IrairaState.getInstance());
  }

  public tabeta(moto: Dog): void {
    moto.changeState(TanoshiiState.getInstance());
  }

  public toString(): string {
    return '普通状態';
  }
}
