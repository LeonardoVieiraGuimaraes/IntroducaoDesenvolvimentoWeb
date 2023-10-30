// Criar um Map
const video = new Map();
console.log('[1] O tamanho do map é video =', video.size); // retorna 0
const texto = new Map([
['nome', 'Guia Bootstrap 5'],
['tipo', 'livro'],
['autor', 'João da Silva'],
]);
console.log('[2] O tamanho do map é texto =', texto.size); // retorna 3
//Adicionar valores a um Map
video.set('nome', 'Efeito Borboleta');
video.set('tipo', 'Filme');
video.set('autor', 'João Silva');
console.log('[3] O tamanho do map é video =', video.size); // retorna 3
//Obter valores de um Map Vídeo
console.log('[4] Nome video', video.get('nome')); // retorna Efeito Borboleta
//Obter valores de um Map Texto
console.log('[5] Nome texto', texto.get('nome')); // retorna Guia Bootstrap 5
//Excluir elementos
texto.set('type', 'film'); // inclui o elemento com chave "type".
// Propriedade de um Map
console.log('[6] O tamanho do map é', texto.size); // O tamanho do map é 4
console.log('[7] Existe a chave tipo',video.has('tipo')); //retorna Existe a chave tipo true
texto.delete('type'); // remove o elemento com chave "type".
console.log('[8] Existe a chave type',video.has('type')); //Existe a chave type false
//MapInterator
console.log('[9] Texto',texto.keys()); // [Map Iterator] {'nome', 'tipo', 'autor'}
console.log('[10] Texto',texto.values()); //[Map Iterator] {'Guia Bootstrap 5', 'livro', 'João da Silva'}
console.log('[11] Texto',texto.entries()); //[Map Entries] {['nome', 'Guia Bootstrap 5'],['tipo', 'livro'],['autor','João da Silva']
//Excluir elementos
texto.delete('tipo'); // remove o elemento com chave "tipo".
video.clear(); // limpa o map, removendo todos os elementos
//MapInterator
console.log('[12] Texto',texto.keys()); // [Map Iterator] {'nome', 'autor'}
console.log('[13] Texto',texto.values()); // [Map Iterator] {'Guia Bootstrap 5', 'João da Silva' }
console.log('[14] Texto',texto.entries()); //[Map Entries] { [ 'nome', 'Guia Bootstrap 5' ], [ 'autor', 'João da Silva' ] }
//ForEach
texto.forEach(function(value, key) {
console.log(key + ' = ' + value)
})
// retorna lista de valores (um em cada linha): nome = Guia Bootstrap 5, autor = João da
Silva
// Interação no array nome
for (let t of texto ) { // loop igual ao for (var i = 0; i < texto.size; i++) {
console.log("Elementos:", t);
}