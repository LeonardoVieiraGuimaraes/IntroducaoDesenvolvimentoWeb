// Definição da função que será um método após atribuição
function dadosCarro() {
    var car = "Dados do veículo -> Modelo: " + this.modelo + "; Cor: " + this.cor + "; Ano: "
        + this.ano;
    console.log(car);
}
function dadosProprietario() {
    var p = "Proprietário do veículo " + this.modelo + " é ";
    console.log(p, this.dono.dadosPessoais());
}
// Definindo atribuindo a função a propriedade do objeto para criar o método.
function carro(cor, modelo, ano, dono) {
    this.cor = cor;
    this.modelo = modelo;
    this.ano = ano;
    this.dono = dono;
    this.dadosCarro = dadosCarro;
    this.dadosProprietario = dadosProprietario;
}
// Definindo o método diretamente na criação do objeto
var pessoa = {
    nome: "Ana",
    cpf: "12345678",
    dadosPessoais: function () {
        return "Dados Pessoais: " + this.nome + " - CPF: " +
            this.cpf;
    }
};
//Chamada dos métodos dos objetos
var veiculo = new carro("branco", "Nissan March", "2019", pessoa);
console.log("Proprietário: :", veiculo.dono);
veiculo.dadosCarro();
veiculo.dadosProprietario();