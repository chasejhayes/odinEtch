const container = document.querySelector("#container");
container.style.display = "flex";

function createGrid() {
    for (let i = 0; i < 16; i++) {
        line = document.createElement("div");
        container.appendChild(line);
        for (let j = 0; j < 16; j++) {
            div = document.createElement("div");
            div.style.cssText = "background-color: red; height: 10px; width: 10px; margin: 2px;";
            line.appendChild(div)
        }
    }
}



// function createGrid() {
//     for (let i = 0; i < 16; i++) {
//         div = document.createElement("div");
//         div.style.cssText = "background-color: red; height: 10px; width: 10px; margin: 2px;";
//         line.appendChild(div)
//     }
// }

createGrid();



// I want a function that makes 16 containers
// Then a second function that fills each container with divs