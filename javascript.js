const container = document.querySelector("#container");
container.style.display = "flex";

function createGrid() {
    for (let i = 0; i < 16; i++) {
        line = document.createElement("div");
        container.appendChild(line);
        for (let j = 0; j < 16; j++) {
            div = document.createElement("div");
            div.classList.add("colorBox")
            div.style.cssText = "background-color: red; height: 10px; width: 10px; margin: 2px;";
            line.appendChild(div)
        }
    }
}

createGrid();

function changeColor(test){
    test.style.color = "peach"

}

const colorBox = document.querySelectorAll(".colorBox");

colorBox.forEach(box => {
    box.addEventListener("mouseover", ()=> {
        box.style.backgroundColor = "aqua";
    })
})



