export interface Juice {
  drink();
}

export class TomatoJuice implements Juice {
  drink() {
    console.log('beeee');
  }

  drinkWithPotato() {
    console.log('nice');
  }
}

export class SpicyTomatoJuice extends TomatoJuice {

}

export class OrangeJuice implements Juice {
  drink() {
    console.log('mmmmmmmmmmm');
  }

  drinkWithPie() {
    console.log('very good');
  }
}
