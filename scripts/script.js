const GRID_WIDTH = 960;  // in pixels (px)
let grid_dimensions = 16; // number of cells


const container = document.querySelector("#container");

const newGridButton = document.querySelector("#new-grid");
newGridButton.addEventListener("click", () => {
    grid_dimensions = 0;
    
    do {
        grid_dimensions = +prompt("Size of new grid (1-100): ");
    } while (grid_dimensions > 100 || grid_dimensions < 1);
    
    container.replaceChildren();
    drawGrid(grid_dimensions);
});


function createColumn() {
    let column = document.createElement("div");
    column.classList.add("column");
    return column;
}

function createCell() {
    let cell = document.createElement("div");
    const cell_dimension = `${GRID_WIDTH / grid_dimensions}px`;
    cell.style = `--cell_dimension: ${cell_dimension}`

    cell.classList.add("cell");

    cell.addEventListener("mouseenter", addColor);
    cell.addEventListener("mouseleave", removeColor);

    function addColor() {
        cell.style.backgroundColor = "gray";
    }

    function removeColor() {
        setTimeout(() => {
            cell.style.backgroundColor = "white";
        }, 300);
    }

    return cell;
}

function drawGrid(size) {
    for (let i = 0; i < size; i++) {
        let column = createColumn();
        for (let j = 0; j < size; j++) {
            let cell = createCell();
            column.appendChild(cell);
        }
        container.appendChild(column);
    }
}

drawGrid(grid_dimensions);