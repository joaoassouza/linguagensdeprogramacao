let numeros = [10, 20, 30, 40, 50];

function somaArray(numeros) {    
    let resultado=0;
    for (let i = 0; i < numeros.length; i++) {
        resultado = resultado+numeros[i];
    }
    return resultado;
}

console.log("A soma do array é igual a: "+somaArray(numeros));