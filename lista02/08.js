const produto = {
    nome: "Celular",
    preco: 1400,
    quantidade: 3,

    calcularTotal(preco, quantidade) {
        return preco * quantidade;
    }
}

console.log("O valor total do produto é: " + produto.calcularTotal(produto.preco, produto.quantidade));