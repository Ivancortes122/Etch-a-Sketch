const container = document.getElementById("container");

function createGrid(rows, columns) {
    let total = (rows * columns);
    for (let i = 0; i < total; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
    }
};
createGrid(16, 16);

const squares = document.getElementsByClassName("square")[0];
function mouseEnter () {
    Array.from(square).forEach((square) => {
        square.addEventListener('mousein', () => {
            square.classList.add('.hover');
            console.log('hover');
        });
    });
}

