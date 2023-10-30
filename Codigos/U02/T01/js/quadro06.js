// FUNÇÕES
// FUNÇÃO ANÔNIMA E FUNÇÃO FLECHA
function comprimentar(nome) { // declaração da função
    return 'Olá, ' + nome +'!';
    }
    var comprimentar2 = function (nome) { // declaração de função anônima
    return 'Olá, ' + nome +'!';
    }
    var comprimentar3 = (nome) => 'Olá, ' + nome +'!'; //declaração da função flecha
    // chamada das funções
    console.log(comprimentar('Ana'));
    console.log(comprimentar2('Joao'));
    console.log(comprimentar3('Maria'));