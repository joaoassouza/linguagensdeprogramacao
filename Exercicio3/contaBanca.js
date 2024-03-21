class contaBancaria {
    #saldo;
    constructor(valorInicial) {
        this.#saldo = valorInicial;
    }

    depositar(valor) {
       this.#saldo = this.#saldo + valor;
    }

    sacar(valor) {
        if (valor <= this.#saldo) {
            return this.#saldo = this.#saldo- valor;
        }
        else
            return console.log("Saldo insuficiente");
    }

    saldoAtual(){
        return console.log("Seu saldo atual é: "+this.#saldo);
    }

    set saldo(newSaldo) {
        this.#saldo = newSaldo;
    }
    get saldo() {
        return this.#saldo;
    }

}