import {Juice, OrangeJuice, TomatoJuice} from './juice';

export interface JuiceHandler {
  handleJuice(juice: Juice);
}

export class OrangeJuiceHandler implements JuiceHandler {
  handleJuice(juice: OrangeJuice) {
    juice.drink();
    juice.drinkWithPie();
  }
}

export class TomatoJuiceHandler implements JuiceHandler {
  handleJuice(juice: TomatoJuice) {
    juice.drink();
    juice.drinkWithPotato();
  }
}
