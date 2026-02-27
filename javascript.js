const container = document.querySelector("#container");
container.style.display = "flex";

const promptButton = document.createElement("button");
promptButton.style.cssText = "height: 25px; width: auto; background-color: gray; color: white";
promptButton.textContent = "Press to Play";
container.appendChild(promptButton);

let numberOfDivs = 0;

promptButton.addEventListener("click", () => {
    numberOfDivs = Number(prompt("Enter number:"));
    function playEtch(numberOfDivs) {
        function createGrid() {
            for (let i = 0; i < numberOfDivs; i++) {
                let line = document.createElement("div");
                container.appendChild(line);
                for (let j = 0; j < numberOfDivs; j++) {
                    let div = document.createElement("div");
                    div.classList.add("colorBox")
                    div.style.cssText = "background-color: red; height: 10px; width: 10px; margin: 2px;";
                    line.appendChild(div)
                }
            }
        }
        createGrid();
        const colorBox = document.querySelectorAll(".colorBox");

        colorBox.forEach(box => {
            box.addEventListener("mouseover", () => {
                box.style.backgroundColor = "aqua";
            })
        })
    }
    playEtch(numberOfDivs);
});


// function playEtch(numberOfDivs) {
//     function createGrid() {
//         for (let i = 0; i < numberOfDivs; i++) {
//             line = document.createElement("div");
//             container.appendChild(line);
//             for (let j = 0; j < numberOfDivs; j++) {
//                 div = document.createElement("div");
//                 div.classList.add("colorBox")
//                 div.style.cssText = "background-color: red; height: 10px; width: 10px; margin: 2px;";
//                 line.appendChild(div)
//             }
//         }
//     }

//     createGrid();

//     const colorBox = document.querySelectorAll(".colorBox");

//     colorBox.forEach(box => {
//         box.addEventListener("mouseover", () => {
//             box.style.backgroundColor = "aqua";
//         })
//     })
// }

// playEtch(playerSelection);


