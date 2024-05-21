p = prompt("insira uma palavra: ");

console.log("A palavra inversa da inserida é igual a: " + inverterPalavra(p));

function inverterPalavra(p) {
    /*O método "array.from" irá criar um array com as letras da palavra inserida*/
    let palavra = Array.from(p);
    /*Criando um outro array com o mesmo tamanho do primeiro e criando uma string para armazenar a palavra*/
    let inversa = Array(palavra.length);
    let m = "";
    let j = 0;
    /*loop para ler o primeiro array e armazenar inversamente no segundo array*/
    for (let i = palavra.length - 1; i >= 0; i--) {
        inversa[j] = palavra[i];
        j++;
    }
    /*loop para armazenar cada letra na string*/
    for (let x = 0; x <= inversa.length; x++) {
        m += inversa[x];
    }
    return m;
}