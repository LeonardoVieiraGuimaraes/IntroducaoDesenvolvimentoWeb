<?php
$hostname = "localhost"; // Endereço do servidor MySQL
$username = "root"; // Nome de usuário do MySQL
$password = "270414"; // Senha do MySQL
$database = "exemplo"; // Nome do banco de dados

// Conectar ao banco de dados
$conexao = mysqli_connect($hostname, $username, $password, $database);

// Verificar a conexão
if (!$conexao) {
    die("Erro na conexão com o banco de dados: " . mysqli_connect_error());
}
?>
