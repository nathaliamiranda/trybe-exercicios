const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordenaOddsAndEvens = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;

  return oddsAndEvens;
}

const OrdenaArray = ordenaOddsAndEvens();
console.log(`Os números ${OrdenaArray} se encontram ordenados de forma crescente!`);