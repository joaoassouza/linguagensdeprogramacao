let numeros = [-100, 1, 330, 600, 4000, 999999]

function encontrarMaior(array = []) {
    let maior = [0];
    array.forEach(a => {
        if (a > maior){
            maior = a;
        }
    });
    return maior;
}

console.log("O maior número do Array é: " + encontrarMaior(numeros));