import Dog from './Dog';
import DogState from './DogState';
import ByoukiState from './ByoukiState';
import TanoshiiState from './TanoshiiState';

export default class IrairaState extends DogState {
  private static s: IrairaState = new IrairaState();

  public static getInstance(): DogState {
    return this.s;
  }

  public tukareta(moto: Dog): void {
    moto.changeState(ByoukiState.getInstance());
  }

  public tabeta(moto: Dog): void {
    moto.changeState(TanoshiiState.getInstance());
  }

  public toString(): string {
    return 'いらいら状態';
  }
}
