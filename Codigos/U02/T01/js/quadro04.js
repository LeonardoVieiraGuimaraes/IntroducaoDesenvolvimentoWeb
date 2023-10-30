// FUNÇÕES
// RETORNO DE FUNÇÕES
function factorial(numero) { // Declaração da função fatorial
    var x = numero;
    while (x > 1) {
    numero *= x-1;
    x--;
    }
    return numero; // Retorno da Função
   }