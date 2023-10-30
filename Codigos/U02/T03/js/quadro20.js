//Função construtora de carro
function carro(cor, modelo, ano, dono) {
    this.cor = cor;
    this.modelo = modelo;
    this.ano = ano;
    this.dono = dono;
}
//Função construtora de Pessoa
function pessoa(nome, cpf) {
    this.nome = nome;
    this.cpf = cpf;
}
var ana = new pessoa("Ana ", "123456789 "); // Objeto pessoa
// uma propriedade pode ser um objeto, dono recebe o objeto pessoa.
var veiculo = new carro("branco ", "Nissan March ", "2019 ", "ana");