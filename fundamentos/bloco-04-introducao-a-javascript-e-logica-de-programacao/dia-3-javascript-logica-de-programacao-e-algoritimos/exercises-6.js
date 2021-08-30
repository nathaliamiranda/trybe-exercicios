let divisor = 0;
let numeroTestado = 31;

for (let numero = 1; numero <= numeroTestado; numero += 1) {
  if (numeroTestado % numero === 0) divisor += 1;
}

if (divisor === 2) {
  console.log(numeroTestado + ' é primo');
} else {
  console.log(numeroTestado + ' não é primo'); };