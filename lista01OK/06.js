
let a = prompt("Insira um valor: ");
dobro (a);

function dobro(a) {
    if (a <= 0) {
        console.log ("So aceito número positivos maiores que zero.");
    } else {
        console.log ("O dobro do número inserido é: "+a*2);
    }  
}