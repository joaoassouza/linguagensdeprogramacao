let palavra = prompt("insira uma palavra: ");
console.log("A quantidade de vogais minúsculas na palavra inserida é: "+contadorVogais(palavra));

function contadorVogais(palavra) {
    let contador = 0;
    let vogais = Array.from(palavra);

    for (let i = 0; i <= vogais.length - 1; i++) {
        if (vogais[i] === "a" || vogais[i] === "e" || vogais[i] === "o" || vogais[i] === "u") {
            contador++
        }
    }
    return contador;
}

