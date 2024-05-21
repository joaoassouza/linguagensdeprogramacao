p = prompt("insira uma palavra: ");
console.log("A palavra inversa é um palíndromo?\n" + inverterPalavra(p));

/*mesma função utilizada anteriormente para inverter a palavra*/
function inverterPalavra(p) {
    let validar = true;
    let palavra = Array.from(p);
    let inversa = Array(palavra.length);
    let j = 0;
    for (let i = palavra.length - 1; i >= 0; i--) {
        inversa[j] = palavra[i];
        j++;
    }
    /*verificar se a palavra inserida é um palíndromo*/
    for (let i = 0; i < palavra.length; i++) {
        if(inversa[i] !== palavra[i]){
            validar = false;
        }
    }
    return validar;
}