email = prompt("insira o seu email: ");
console.log("O seu email é: " + validarEmail(email));

function validarEmail(email) {
    let validar = true;
/*O recuros "email.includes" irá verificar se numa string contem uma substring indicada nos parâmetros,
no caso o operador lógico irá inverter o valor.*/ 
    if (!email.includes("@") || !email.includes(".")) {
        validar = false;
    }
    return validar;
}