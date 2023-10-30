// Criação de array com elementos
var nome = new Array("Ana", "João", "Maria");
console.log("Tamanho Nome", nome.length); // retorna 3
var sobrenome = Array("Silva", "Santos", "Prado");
console.log("Tamanho Sobrenome", sobrenome.length); // retorna 3
var idade = ["10", "42", "92"]; // Array literal
console.log("Tamanho Idade", nome.length); // retorna 3
// Criação de array sem elementos
var pessoa = new Array(6); // cria um array para 3 elementos
console.log("Tamanho pessoa", pessoa.length); // retorna 6
var estudante = Array(9); //quando é apenas um número cria um array para 3 elementos
console.log("Tamanho estudante", estudante.length); // retorna 9
var funcionario = [15]; //cria um array com um elemento número 15
console.log("Tamanho funcionario", funcionario.length); // retorna 1
// produzem exatamente o mesmo efeito dos demais
var chefe = []; //cria um array sem elementos
chefe.length = 5; // define o tamanho do array
console.log("Tamanho chefe", chefe.length); // retorna 5
// Cria um array com um elemento
chefe = [20]; //cria um array com o elemento 20
console.log("Tamanho chefe", chefe.length); // retorna 1
// Povoando um array carro
var carro = [];
carro[0] = "March";
carro[1] = "Kicks";
carro[2] = "Tiida";
carro[3] = "Logan";
console.log("Tamanho carro", carro.length); // retorna 4
carro = 0;
console.log("Tamanho carro", carro.length); // retorna undefined
// Interação no array nome
for (let n of nome) { // loop igual ao for (var i = 0; i < nome.length; i++) {
    console.log("Valor Nome:", n);
}
sobrenome.forEach(function (fun) { // loop forEach
    console.log("Valor Sobrenome:", fun);
});
idade.forEach(fun => console.log("Valor Idade:", fun)); // função arrow
//Métodos
// concat()
nomesobrenome = nome.concat(sobrenome);
nomesobrenome.forEach(p => console.log("Valor Pessoas:", p));