let board = Array(9).fill(null);
let currentPlayer = 'X';

document.querySelectorAll('.cell').forEach((cell, i) => {
    cell.addEventListener('click', () => {
        if (!cell.textContent && !checkWin(board)) {
            cell.textContent = currentPlayer;
            board[i] = currentPlayer;
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            if (checkWin(board)) {
                setTimeout(() => {
                    alert(`Player ${checkWin(board)} wins!`);
                    document.querySelectorAll('.cell').forEach(cell => cell.textContent = '');
                    board = Array(9).fill(null);
                    currentPlayer = 'X';
                }, 100);
            }
        }
    });
});

function checkWin(board) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let line of lines) {
        if (board[line[0]] && board[line[0]] === board[line[1]] && board[line[0]] === board[line[2]]) {
            return board[line[0]];
        }
    }
    return null;
}