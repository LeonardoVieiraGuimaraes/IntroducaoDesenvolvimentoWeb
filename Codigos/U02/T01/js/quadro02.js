// FUNÇÕES

function ola(nome = 'Ana') { // Declaração da Função ola com valor Ana default
    console.log('Olá ' + nome + '!');
}
// Chamada da função ola com passagem de parâmetros
ola('Maria'); // Saída no console -> Olá Maria!
// Chamada da função ola, sem passagem de parâmetro e uso do parâmetro padrão
ola(); // Saída no console -> Hello Ana!