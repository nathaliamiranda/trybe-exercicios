let n = 5;
let espacoBranco = "";
let padrao = (n + 1)/2;
let dir = padrao;
let esq = padrao;
 
for (let linha = 1; linha <= padrao; linha+=1) {
    for (let coluna = 1; coluna <= n; coluna+=1) {
        if (coluna >= esq && coluna <= dir ){
            espacoBranco = espacoBranco + "*";
        } else {
            espacoBranco = espacoBranco + " ";
        }
    }
console.log (espacoBranco);   
esq -= 1;
dir +=1;
espacoBranco = "";
} 

