document.addEventListener('DOMContentLoaded', (event) => {
    createBoard();
    resizeBoard();
});

// Create the inital board: 16x16
function createBoard(size = 16) {
    let gridSize = size * size
    let board = document.querySelector('.board'); 
    board.style.gridTemplateColumns = "repeat(" + size + ", 1fr)";
    board.style.gridTemplateRows = "repeat(" + size + ", 1fr)";
    for (let i = 0; i < gridSize; i++) {
        let grid = document.createElement('div');
        grid.style.border = '1px solid #9f9f9f';
        grid.style.height = '100%';
        board.appendChild(grid);
    }
}

// Function to resize the Grid
function resizeBoard() {
    const resizeButton = document.querySelector('.resize-button');
    let board = document.querySelector('.board'); 
    resizeButton.addEventListener('click', function(e) {
        let boardSize = prompt("How many grids per row and column would you like?")
        while (board.firstChild) {
            board.removeChild(board.firstChild);
        }
        createBoard(boardSize);
    }) 
}