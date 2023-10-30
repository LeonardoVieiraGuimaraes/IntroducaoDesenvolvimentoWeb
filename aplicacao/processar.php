<?php
include 'conexao.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $idade = $_POST["idade"];

    // Inserir os dados no banco de dados
    $query = "INSERT INTO usuarios (nome, email, idade) VALUES ('$nome', '$email', $idade)";
    
    if (mysqli_query($conexao, $query)) {
        echo "Cadastro realizado com sucesso!";
    } else {
        echo "Erro ao cadastrar: " . mysqli_error($conexao);
    }

    // Fechar a conexão
    mysqli_close($conexao);
}
?>
