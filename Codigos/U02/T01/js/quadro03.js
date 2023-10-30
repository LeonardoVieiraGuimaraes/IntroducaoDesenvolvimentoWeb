// FUNÇÕES
// ESCOPO E SHADOWING

const x = 1; // todas as funções têm acesso
// Chamadas das funções
primeiraFuncao();
segundaFuncao();
imprimir("Imprimir X:" + x); // vai imprimir valor 1 e não o valor x da primeiraFuncao
function primeiraFuncao() { // Declaração da primeira função
    const y = 2, x = 4;
    imprimir("Imprimir Y: " + y);
    imprimir("Imprimir X: " + x); // vai imprimir valor 4 e não valor 1 da constante global
    imprimir(z); // ERRO: a primeiraFuncao não tem acesso a constantes z
}
function segundaFuncao() { // Declaração da segunda Função
    const z = 3;
    imprimir("Imprimir Z: " + z);
    imprimir("Imprimir X: " + x); // vai imprimir o valor 1 da constante global
    imprimir(y); // ERRO: a segundaFuncao não tem acesso a y
}
// Valores são passados como parâmetro para função imprimir, pois não tem acesso
function imprimir(valor) { // a função imprimir não tem acesso as constantes y e z
    console.log("Valor: " + valor);
}
