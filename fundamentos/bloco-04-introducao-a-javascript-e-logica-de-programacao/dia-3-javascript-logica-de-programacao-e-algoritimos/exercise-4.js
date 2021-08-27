let size = 5;
let asteristico = "*";
let entradaDoAsteristico = "";
let position = size;
for (let entradaIndex = 0; entradaIndex < size; entradaIndex += 1) {
    for (let columnIndex = 0; columnIndex <= size; columnIndex += 1){
        if (columnIndex < position) {
        entradaDoAsteristico = entradaDoAsteristico + " ";
    } else {
        entradaDoAsteristico = entradaDoAsteristico + asteristico;
    }
}
    console.log (entradaDoAsteristico);
    entradaDoAsteristico = "";
    position -= 1;
}