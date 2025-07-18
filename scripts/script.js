const container = document.querySelector("#container");

container.style.display = "flex";

let grid = [];

function createColumn() {
    let column = document.createElement("div");
    column.style.display = "flex";
    column.style.flexDirection = "column";

    return column;
}