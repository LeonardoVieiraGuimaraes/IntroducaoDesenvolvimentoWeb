<!DOCTYPE html>
<html>
<head>
    <title>Cadastro de Usuários</title>
</head>
<body>
    <h1>Cadastro de Usuários</h1>
    
    <form method="post" action="processar.php">
        <label for="nome">Nome:</label>
        <input type="text" name="nome" required><br><br>
        
        <label for="email">Email:</label>
        <input type="email" name="email" required><br><br>
        
        <label for="idade">Idade:</label>
        <input type="number" name="idade" required><br><br>
        
        <input type="submit" value="Cadastrar">
    </form>
    
    <h2>Usuários Cadastrados:</h2>
    <?php
    include 'conexao.php';

    // Consulta para selecionar todos os usuários
    $query = "SELECT * FROM usuarios";
    $result = mysqli_query($conexao, $query);

    // Exibir os usuários em uma tabela
    echo "<table border='1'>";
    echo "<tr><th>ID</th><th>Nome</th><th>Email</th><th>Idade</th></tr>";
    while ($row = mysqli_fetch_assoc($result)) {
        echo "<tr>";
        echo "<td>" . $row['id'] . "</td>";
        echo "<td>" . $row['nome'] . "</td>";
        echo "<td>" . $row['email'] . "</td>";
        echo "<td>" . $row['idade'] . "</td>";
        echo "</tr>";
    }
    echo "</table>";

    // Fechar a conexão
    mysqli_close($conexao);
    ?>

    </body>
</html>
