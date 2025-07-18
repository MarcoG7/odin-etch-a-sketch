const CELL_DIMENSION = "50px";
const GRID_DIMENSION = 16;


const container = document.querySelector("#container");


function createColumn() {
    let column = document.createElement("div");
    column.classList.add("column");
    return column;
}

function createCell() {
    let cell = document.createElement("div");
    cell.style = `--CELL_DIMENSION: ${CELL_DIMENSION}`
    cell.classList.add("cell");

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

drawGrid(GRID_DIMENSION);