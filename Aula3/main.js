//Criar classes em JS.
// class cliente {
//     //construtor:
//     constructor() {
//         //quando instanciadas no próprio construtor, já são dados como públicas. (HARDCODE)
//         this.nome = "joão";
//         this.idade = "10";
//     }
//     //criando um método:
//     mostrar () {
//         return this.nome + " " +this.idade;
//     }

// }

//Criando um objeto.
const pessoa = new cliente();
console.log(pessoa.idade);
//Chamando um método da função
console.log(pessoa.mostrar());


//maneira certa de criar uma classe.

// class cliente2 {
//     //construtor:
//     constructor(_nome, _idade) {
//         //quando os atibutos são dados no próprio construtor, já são dados como públicas. (HARDCODE)
//         this.nome = _nome;
//         this.idade = _idade;
//     }
//     //criando um método:
//     mostrar () {
//         return this.nome + " " +this.idade;
//     }
// }

//Instanciando um objeto passando os atributos.
const pessoa2 = new cliente2("lucas", "11");

console.log(pessoa2.mostrar());