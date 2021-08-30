let n = 5;
let espacoBranco = ""
let numero = n;

for (let linha = 1; linha <= n; linha +=1){
    for (let coluna = 1; coluna <= n; coluna +=1){
if (coluna < numero) { 
espacoBranco = espacoBranco + " ";

} else {
espacoBranco = espacoBranco + "*";
}
    }
    console.log(espacoBranco);
    numero -=1;
    espacoBranco = "";

    }
