class Animal {
    nome;
    idade;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

}

const animais = [];
let animal0 = new Animal("xique-xique", 3);
let animal1 = new Animal("lala", 6);
let animal2 = new Animal("dadu", 9);
let animal3 = new Animal("lula", 5);
let animal4 = new Animal("prume", 4);

animais.push(animal0);
animais.push(animal1);
animais.push(animal2);
animais.push(animal3);
animais.push(animal4);

let animaisMaior5 = animais.filter(_animal => _animal.idade > 5);
console.log(animaisMaior5);