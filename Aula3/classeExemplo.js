class cliente2 {
    //construtor:
    constructor(_nome, _idade) {
        //quando os atibutos são dados no próprio construtor, já são dados como públicas. (HARDCODE), para criar propriedades privada utiliza-se a hastag fora do construtor
        this.nome = _nome;
        this.idade = _idade;
    }
    //criando um método:
    mostrar() {
        return this.nome + " " + this.idade;
    }
}