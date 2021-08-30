let divisor = 1;
let numeroTestado = 31;

for (let numero = 2; numero <= numeroTestado; numero += 1) {
  if (numeroTestado % numero === 0) divisor += 1;
}

if (divisor === 2) console.log(numeroTestado + ' é primo');
else console.log(numeroTestado + ' não é primo');