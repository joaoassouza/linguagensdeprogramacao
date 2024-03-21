let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function impares(array) {
    let resultado = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            resultado.push(array[i]);
        }
    
    }
    return resultado;
}

console.log(impares(numeros));