document.addEventListener('DOMContentLoaded', (event) => {
    createBoard();
    resizeBoard();
    toogleGrid();
});

// Create the inital board: 16x16
function createBoard(size = 16, gridsVissible = false) {
    let gridSize = size * size
    let board = document.querySelector('.board'); 
    board.style.gridTemplateColumns = "repeat(" + size + ", 1fr)";
    board.style.gridTemplateRows = "repeat(" + size + ", 1fr)";
    for (let i = 0; i < gridSize; i++) {
        let grid = document.createElement('div');
        if (gridsVissible == false) {
            grid.style.border = '0px solid #9f9f9f';
        } else {
            grid.style.border = '1px solid #9f9f9f';
        }
        grid.style.height = '100%';
        board.appendChild(grid);
    }
}

// Function to resize the Grid
function resizeBoard() {
    const resizeButton = document.querySelector('.resize-button');
    let board = document.querySelector('.board'); 
    resizeButton.addEventListener('click', function(e) {
        let boardSize = prompt("How many grids per row and column would you like? (MAX:100)")
        if (boardSize == null || boardSize == "") {
            return
        }
        while (boardSize > 100) {
            boardSize = prompt("The max grids per row and column is 100. Please renter a number less than or equal to 100.");
        }
        while (board.firstChild) {
            board.removeChild(board.firstChild);
        }
        //grid_on = false
        createBoard(boardSize, grid_on);
    }) 
}

// Function to toogle the grid lines
let grid_on = false;
function toogleGrid() {
    const gridButton = document.querySelector('.grid-button');
    let board_grids = document.querySelector('.board').childNodes;
    let x = document.getElementsByClassName('.grid-button').value;
    gridButton.addEventListener('click', function(e) {
        if (!grid_on ) {
            board_grids.forEach((node) => node.style.border = '1px solid #9f9f9f');
        } else {
            board_grids.forEach((node) => node.style.border = '0px solid #9f9f9f');
        }
        grid_on = !grid_on;
    });
}
