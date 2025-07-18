const GRID_WIDTH = 700;  // in pixels (px)
let grid_dimensions = 16; // number of cells


const container = document.querySelector("#container");
const grid_width_px = `${GRID_WIDTH}px`;
container.style = `--container_width: ${grid_width_px}`;

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

    let opacityIntervalId;

    function addColor() {
        // Random color in range (0-255): Math.floor(Math.random() * (max - min + 1)) + min;
        const colorR = Math.floor(Math.random() * (256));
        const colorG = Math.floor(Math.random() * (256));
        const colorB = Math.floor(Math.random() * (256));
        console.log(`>>> ${colorR}, ${colorG}, ${colorB}`)
        cell.style.backgroundColor = `rgb(${colorR}, ${colorG}, ${colorB})`;

        cell.style.opacity = 0.2;
        let opacity = 1;
        opacityIntervalId = setInterval(() => {
            if (opacity >= 10) {
                clearInterval();
            } else {
                opacity++;
                cell.style.opacity = opacity / 10;
            }
        }, 5);
    }

    function removeColor() {
        clearInterval(opacityIntervalId);
        setTimeout(() => {
            cell.style.opacity = 1;
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