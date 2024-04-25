let button = document.getElementById("btn1");
console.log(button);

//trará ou por elemento, classe, se usado "." ou ID, se usado "#"
let img = document.querySelector("#myImg");

//innerhtml -------------------------------
let titulo = document.querySelector("#titulo");
//retorna o ceteúdo do HTML
console.log(titulo.innerHTML);
//alterar html pelo JS
titulo.innerHTML = "novo título 123 123";
console.log(titulo.innerHTML);

//alterando todos os elemento de tag = p (parágrafos)
document.querySelector("p").innerHTML = "novo parágravo";

//alterando atributos do js ------------
let imagem = document.querySelector(".myImg");
imagem.src = "imagens/horse.png";

//eventos podem se chamador por meio da tag "onclick" no html chamando a função abaixo
function mudarImagem() {
  let imagem2 = document.querySelector(".myImg");
  imagem2.src = "imagens/cat.png";
}

document.querySelector("#btn3").onclick = function () {
  document.querySelector("#titulo").innerHTML = "titulo novo";
  document.querySelector("h2").classList.add("novoTitulo");
};

//ou o evento pode ser chamado direto do js somente pela tag do html

document.querySelector("#btn1").onclick = function () {
  document.querySelector("p").innerHTML = "paragrafo novíssimo 123 123 ";
};

//mudar o css :
document.querySelector("p").style.color = "red";


//tocar audio:
document.querySelector("#tocarAu").onclick = function (){
    document.querySelector('#myAudio').play();
}

let buttons = document.querySelectorAll('btn0');

buttons.forEach(function (x) {
    x.onclick.querySelector('#resposta').innerHTML = x.innerHTML; 
});


buttons.forEach(function (x) {
    x.onclick = function() {
      document.querySelector('#resposta').innerHTML = x.innerHTML;  
    }
});          