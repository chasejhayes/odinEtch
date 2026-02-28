const button = document.querySelector("#button");

const promptButton = document.createElement("button");
promptButton.style.cssText = "height: 25px; width: auto; background-color: gray; color: white";
promptButton.textContent = "Press to Play";
button.appendChild(promptButton);

const container = document.querySelector("#container");
container.style.display = "flex";
container.style.maxWidth = "50px";
container.style.maxHeight = "500px";



let numberOfDivs = 0;

promptButton.addEventListener("click", () => {
    numberOfDivs = Number(prompt("Enter number:"));
    function playEtch(numberOfDivs) {
        function createGrid() {
            document.getElementById("container").innerHTML = "";
            if (numberOfDivs > 50) {
                return alert("Must be 50 or less")
            } else {
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


// set a standard total space for the canvas 
// set a limit for amount of squares the user can imput 


