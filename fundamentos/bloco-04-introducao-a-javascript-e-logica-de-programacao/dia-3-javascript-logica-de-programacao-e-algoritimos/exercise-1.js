let valores = [3, 4, 10, 1, 12];
let sum = 0;
for (let index = 0; index < valores.length; index+=1) {
    sum += valores[index];
}
    if (sum > 15) {
    console.log (sum);
    } else {
        console.log ("Valor menor que 16");
    }
