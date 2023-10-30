// Criação de um objeto chamado "pessoa" com propriedades
var pessoa = {
    // Propriedade "nome" que armazena o nome da pessoa
    nome: "João",

    // Propriedade "idade" que armazena a idade da pessoa
    idade: 30,

    // Método "apresentar" que exibe uma mensagem de apresentação
    apresentar: function() {
        console.log("Olá, meu nome é " + this.nome + " e tenho " + this.idade + " anos.");
    }
};

// Acessando as propriedades e métodos do objeto

// Acessando a propriedade "nome"
console.log("Nome: " + pessoa.nome);

// Acessando a propriedade "idade"
console.log("Idade: " + pessoa.idade);

// Chamando o método "apresentar" do objeto
pessoa.apresentar();
