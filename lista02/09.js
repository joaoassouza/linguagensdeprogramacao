const endereco = {
    rua: "Joao pedro",
    número: "123",
    bairro: "Vila martin",
    cidade: "Xique-Xique",
}

for (let prop in endereco) {
    console.log(prop+":" + " " + endereco[prop])
};