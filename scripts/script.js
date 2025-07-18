const CELL_DIMENSION = "50px";
const GRID_DIMENSION = 16;


const container = document.querySelector("#container");

container.style.display = "flex";

let grid = [];

function createColumn() {
    let column = document.createElement("div");
    column.style.display = "flex";
    column.style.flexDirection = "column";

    return column;
}

function createCell() {
    let cell = document.createElement("div");
    cell.style.width = CELL_DIMENSION;
    cell.style.height = CELL_DIMENSION;
    cell.style.border = "1px solid black";

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
