
let sequencia = "";
for (let i = 1; i <= 10; i++) {
    sequencia += i;
    if (i < 10) {
        sequencia += "-";
    }
}

console.log("A squência de números é:\n"+sequencia);

/*O código concatena tudo na string "sequencia" para depois exibi-la*/