class Automovel {
    codigo = 0;
    marca = "";
    modelo = "";

    constructor(a, b, c) {
        this.codigo = a;
        this.marca = b;
        this.modelo = c;
    }

    get codigo() {
        return this.codigo;
    }

    imprimirAutomovel() {
        return "Codigo: " + this.codigo + " Marca: " + this.marca + " Modelo: " + this.modelo;
    }

}