const aluno = {
    NOME: "João",
    IDADE: "18",
    CURSO: "ADS",
    MATRICULA: "0001",

    mostrarInformacoes : function () {
        return `Nome: ${this.NOME}\nIdade: ${this.IDADE}\n`+
            `Curso: ${this.CURSO}\nMATRICULA: ${this.MATRICULA}`
    }

};

console.log(aluno.mostrarInformacoes());