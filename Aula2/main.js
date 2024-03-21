// função normal

function funcao(a, b = 0) {
    return a + b;
}
console.log(funcao(3, 2));


// função anônima atribuida à uma variável

let soma = function (a, b) {
    return a + b;
}
console.log(sonma(1, 3));

// Arrow function

let subtracao = (a, b) => a - b;