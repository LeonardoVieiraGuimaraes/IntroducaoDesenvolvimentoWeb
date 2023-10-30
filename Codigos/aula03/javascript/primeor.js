// exemplo de condição em javascript
// exibe se o número é primo ou não
// Autor: Fábio Guimarães

var nome = "leonardo"
function verificar() {
    var num = Number(document.getElementById('num').value);
    var res = document.getElementById('res');
   
        if (num % 2 == 0) {
            res.innerHTML = `O número ${num} é par ${nome}`;
        }
        else
            res.innerHTML = `O número ${num} é primo`;
}

function limpar() {
    document.getElementById('num').value = "";
    document.getElementById('res').innerHTML = "";
}
// execultar as funções
document.getElementById('verificar').onclick = verificar;
document.getElementById('limpar').onclick = limpar;
