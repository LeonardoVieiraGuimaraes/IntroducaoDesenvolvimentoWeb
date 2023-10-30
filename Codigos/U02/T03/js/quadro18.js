// Criação do Set
var meuConjunto = new Set();
console.log("[1] Meu Conjunto Vazio:", meuConjunto.size); // retorna 0
// Povoando o Set
meuConjunto.add(1);
meuConjunto.add("2");
meuConjunto.add("texto");
meuConjunto.add(1);
console.log("[2] Tamanho Meu Conjunto:", meuConjunto.size); // retorna 3
console.log("[3] Meu Conjunto:", meuConjunto); //retorna Set(3) { 1, '2', 'texto' }
//incluindo um objeto no set
var numero = {a: 1, b: 2};
meuConjunto.add(numero);
meuConjunto.add({a: 1, b: 2}); // o está referenciando outro objeto
console.log("[4] Meu Conjunto:", meuConjunto); // retorna Set(5) { 1, '2', 'texto', { a: 1, b: 2 }, { a: 1, b: 2 } }
//Verificar a existência de um valor
console.log("[5] Tem o numero 1:", meuConjunto.has(1)); // retorna true
console.log("[6] Tem o numero 2:", meuConjunto.has("2")); // retorna true
console.log("[7] Tem o numero objeto:", meuConjunto.has({a: 1, b: 2})); // retorna false
console.log("[8] Tem o objeto numero:", meuConjunto.has(numero)); // retorna true
//Excluir elementos do Set
meuConjunto.delete("2"); // remove string 2 do set
console.log("[9] Tem o string 2:", meuConjunto.has("2")); // retorna false, 2 já foi removido
console.log("[10] Tamanho do meuConjunto:",meuConjunto.size); // retorna 4, nós simplesmente removemos um valor
console.log("[11] Meu Conjunto:", meuConjunto); // retorna Set(4) { 1, 'texto', { a: 1, b: 2 }, { a: 1, b: 2 } }
for (let item of meuConjunto) console.log("[12] Item do Meu Conjunto:",item);
// retorna os valores em ordem (um em cada linha) :1, texto, { a: 1, b: 2 }, { a: 1, b: 2 }
for (let item of meuConjunto.keys()) console.log("[13] Keys do Meu Conjunto:",item);
// retorna os valores em ordem (um em cada linha) : 1, texto, { a: 1, b: 2 }, { a: 1, b: 2 }
for (let item of meuConjunto.values()) console.log("[14] Values do Meu Conjunto:",item);
// retorna os valores em ordem (um em cada linha) : 1, texto, { a: 1, b: 2 }, { a: 1, b: 2 }
for (let [key, value] of meuConjunto.entries()) console.log("[15] Entries do Meu Conjunto:",key);
// retorna os valores em ordem (um em cada linha) : 1, texto, { a: 1, b: 2 }, { a: 1, b: 2 }
const meunumero = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5] // cria um array
console.log("[16] Tamanho meunumero", meunumero.length); // retorna 19
var novoArray = [...new Set(meunumero)]; // Converte o Set para Array
console.log("[17] Novo Array", novoArray); // retorna [2, 3, 4, 5, 6, 7, 32]
console.log("[18] Tamanho Novo Array", novoArray.length); // retorna 7
// Iterar entradas set com forEach
meunumero.forEach(function(value) {
console.log("[19-forEach] Itens Meunumero",value);
});
// retorna os valores em ordem (um em cada linha): 2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5