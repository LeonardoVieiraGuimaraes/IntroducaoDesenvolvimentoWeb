var ana = new pessoa("Ana", "123456789"); // Objeto pessoa (função criada no quadro anterior)
// uma propriedade pode ser um objeto, dono recebe o objeto pessoa.
var veiculo = new carro("branco", "Nissan March", "2019", ana); // (função criada no quadro anterior)
//Descobrir o dono do veículo
console.log("Proprietario: ", veiculo.dono);
// Para alterar uma propriedade já definida
console.log("Cor: ", veiculo.cor);
veiculo.cor = "preto";
console.log("Cor: ", veiculo.cor);