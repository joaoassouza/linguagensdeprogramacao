class Pessoa {
    codigoUser = 0;
    Nome = "";
    Automoveis = [];

    constructor(a, b) {
        this.codigoUser = a;
        this.Nome = b;
    }

    get codigo() {
        return this.codigo;
    }

    inserirAutomovel(codigoUser, codigo, marca, modelo) {
        const Automovel = new Automovel(codigo, marca, modelo);
        Automovel.codigoUser = codigoUser;
        this.Automoveis.push(Automovel);
    }

    removerAutomovelByCodigo(codigo) {
        for (let i = 0; i < this.Automoveis.length; i++) {
            if (codigo === this.Automoveis[i]) {
                return this.Automoveis.splice(i, 1);
                break;
            }
        }
    }

    getAutomovel(codigo) {

        for (let i = 0; i < this.Automoveis.length; i++) {
            const automovelSearch = this.Automovel
            if (codigo = this.Automoveis[i]) {
                return automovelSearch;
            }
            else
                return null;
        }
    }
    imprimir() {
        return "Pessoa\nCodigo da pessoa: " + this.codigoUser + " Nome: " + this.Nome;
    }
    imprimirCompleto() {
        return "Pessoa\nCodigo da pessoa: " + this.codigoUser + " Nome: " + this.Nome + "Automoveis\n"+
        this.Automoveis.forEach(element => {
            element.imprimirAutomovel;
        });
    }





}