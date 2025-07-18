const CELL_DIMENSION = "50px";


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