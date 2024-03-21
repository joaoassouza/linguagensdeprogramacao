const myArray = [1, 4, 66, 109, -102, 500];

//metodo find recebe uma função e retorna true or false. Ele irá parar assim que achar
// let num18 = myArray.find(findFunction);
//Todavia, pode-se tranformar a função em uma arrow function e reduzir ainda mais o
// function findFunction(value){
//     return value > 18;
// }
let num18 = myArray.find(a => a > 18);
//Passa-se para o .find uma arrow function que retorna true para o primeiro nome que incluir a, já o .filter irá retornar todos que tem a.
//já . length irá retornar quesito ao tamanho
const nomes = [pedro, robero, kaike, ludmila];
let nomeComA = nomes.find(_nome = _nome.includes('a'));

const animais = [];
let animal0 = new Animala ();


