class main {
    Pessoas = [];
    constructor() {
        this.Pessoas;
    }

    addPessoa(pessoa) {
        this.Pessoas.push(pessoa);
    }
    addPessoaAutomovelPessoa(codigoUser, codigo, marca, modelo) {
        for (let i = 0; i < this.Pessoas.length; i++) {
            if (codigoUser == this.Pessoas[i]) {
                this.Pessoas[i].automoveis.push(codigo, marca, modelo);
            }
        }
    }

    transfereAutomovel(codPessoaOrigem, codPessoaDestino, codAutomovel) {
        let PessoaOrigem;
        let PessoaDestino;
        let AutomovelS;

        for (let i = 0; i < this.Pessoas.length; i++) {
            if (codPessoaOrigem == this.Pessoas[i].codigoUser) {
                this.Pessoas[i] = PessoaOrigem;
            }
        }

        for (let i = 0; i < this.Pessoas.length; i++) {
            if (codPessoaDestino == this.Pessoas[i].codigoUser) {
                this.Pessoas[i] = PessoaDestino;
            }
        }

        for (let i = 0; i < PessoaOrigem.automoveis.length; i++) {
            if (PessoaOrigem.automoveis[i].codigo == codigo) {
                AutomovelS = PessoaOrigem.automoveis[i];
                PessoaDestino.automoveis.push(AutomovelS);
                PessoaOrigem.automoveis.splice(i, 1);
            }
        }

    }

    mostrarTodasAsPessoas() {
       this.Pessoas.forEach(pessoa => {
            pessoa.imprimirCompleto();
        });
    }
}

const main0 = new main();
main0.addPessoaAutomovelPessoa(1, 1, "Fiat", "Uno");
main0.addPessoaAutomovelPessoa(1, 2, "Volkswagens", "Fusca");
console.log(main0.mostrarTodasAsPessoas()); 