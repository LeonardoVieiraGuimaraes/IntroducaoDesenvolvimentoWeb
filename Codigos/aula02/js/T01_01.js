alert("Olá, mundo!");
// Função para verificar se um número é par ou ímpar
function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        return numero + " é um número PAR.";
    } else {
        return numero + " é um número ÍMPAR.";
    }
}

// Exemplo de uso da função
var numero1 = 4;
var resultado1 = verificarParOuImpar(numero1);
console.log(resultado1);

var numero2 = 7;
var resultado2 = verificarParOuImpar(numero2);
console.log(resultado2);