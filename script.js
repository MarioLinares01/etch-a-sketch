document.addEventListener('DOMContentLoaded', (event) => {
    defaultGrid();
});

// Create the inital board: 16x16
function createGrid(size = 16) {
    let gridSize = size * size
    let board = document.querySelector('.board'); 
    board.style.gridTemplateColumns = "repeat(" + size + ", 1fr)";
    board.style.gridTemplateRows = "repeat(" + size + ", 1fr)";
    for (let i = 0; i < gridSize; i++) {
        let grid = document.createElement('div');
        grid.style.border = '1px solid #9f9f9f';
        board.appendChild(grid);
    }
}

// Resize grid
