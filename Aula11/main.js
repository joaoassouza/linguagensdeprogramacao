// callbacks, funções encadeadas. No caso abaixo, quando uma termina ela chama a segunda. O que mostra o resutado é a primeira e quem realiza o cálculo é a segunda

// function displayResult(result) {
//   console.log(result);
// }

// function calcula(a, b) {
//   soma = a + b;
//   displayResult(soma);
// }

// calcula(5, 5);

// //semelhante a sobrecarga de métodos, você pode utilizar o callback, como na função calcula, pode-se receber e chamar a função de modo genérico e, assim quando chamar a função (linha 25 e 26), pode-se escolher qual função quer executar.--------

// function displayMobile(result) {
//   console.log("mobile: " + result);
// }

// function calcula(a, b, callBack) {
//   soma = a + b;
//   callBack(soma);
// }

// calcula(2, 2, displayResult);
// calcula(2, 2, displayMobile);

//JS Assíncrono são funções funcionando de forma assíncrona, não seguindo a ordem do código. E isso pode ser utilizado junto com os callbacks functions, o qual pode-se exercutar uma função ""atemporal"""
// function passouTempo() {
//   console.log("passou-se: 2 segundos");
// }

// setInterval(passouTempo, 2000);

// setInterval(loop, 1000);

// function relógio() {
//   let date = new date();
// }

//fetch api, como pegar dados do banco de dados??

// async function getData(file) {
//     let meuObjeto = await fetch(file);
//     let meuJson = await meuObjeto.json();

//     console.log(meuJson);
// }

//chamando a função que pega do arquivo.
// getData('db.txt');

// console.log("fim do código");

//fetch o jeito mais atualizado:
// fetch("db.json")
//   .then((myVar) => myVar.json())
//   .then((myjson => console.log(myjson)));

//na linha 57 pode se tratar como json, blob (imagens), text

fetch("https://663c040017145c4d8c34f84e.mockapi.io/cliente")
  .then((response) => response.json())
  .then((data) => trataData(data));

function trataData(data) {
    document.querySelector('#cliente').innerHTML = 
    `Nome: ${data[9].nome} (${data[9].idade}) - ${data[9].sexo}`;

}

//post, subir dados no bd pelo código js