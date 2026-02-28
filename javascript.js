const button = document.querySelector("#button");

const promptButton = document.createElement("button");
promptButton.style.cssText = "height: 25px; width: auto; background-color: gray; color: white";
promptButton.textContent = "Press to Play";
button.appendChild(promptButton);

const container = document.querySelector("#container");
container.style.display = "flex";


let numberOfDivs = 0;

promptButton.addEventListener("click", () => {
    // assigns player entered number to variable "numberOfDivs"
    numberOfDivs = Number(prompt("Enter number:"));
    // creates function to play game
    function playEtch(numberOfDivs) {
        // creates function to create grid
        function createGrid() {
            // clears previous grid
            document.getElementById("container").innerHTML = "";
            // stop loop if number higher than 50 is entered
            if (numberOfDivs > 50) {
                return alert("Must be 50 or less")
            } else {
                // runs a loop that's based on player entered number
                for (let i = 0; i < numberOfDivs; i++) {
                    // every loop creates a group of empty divs
                    let line = document.createElement("div");
                    line.style.display = "flex";
                    line.style.flexDirection = "column";
                    line.style.flex = "1";

                    // puts that div onto the container
                    container.appendChild(line);
                    // then runs another loop that fills empty divs with colored box divs
                    for (let j = 0; j < numberOfDivs; j++) {
                        let div = document.createElement("div");
                        div.classList.add("colorBox")
                        div.style.cssText = "background-color: red; margin: 1px";
                        div.style.flex = "1"
                        line.appendChild(div)
                    }
                }
                // what I need to do:
                // 
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


