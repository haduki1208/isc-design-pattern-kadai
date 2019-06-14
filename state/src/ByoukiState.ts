import Dog from './Dog';
import DogState from './DogState';
import FutsuuState from './FutsuuState';

export default class ByoukiState extends DogState {
  private static s: ByoukiState = new ByoukiState();

  public static getInstance(): DogState {
    return this.s;
  }

  public tukareta(moto: Dog): void {}

  public tabeta(moto: Dog): void {
    moto.changeState(FutsuuState.getInstance());
  }

  public toString(): string {
    return '病気状態';
  }
}
