const body = document.querySelector("body");
const mainDiv = document.createElement("div");
const mainDockerSize = 900;
mainDiv.id = "main-docker"

const numBtn = document.querySelector("#type-in-num-btn");


numBtn.addEventListener("click", () => {
    const userNum = prompt("Type in the size of the grid(No bigger than 100): ", 16);
    if (userNum > 100 || userNum <= 0) {
        alert("Invalid number");
    } else {
        renderGrid(userNum);
    }

})

function renderGrid(gridSize) {
    mainDiv.innerHTML = "";
    gridSize = parseInt(gridSize);
    const squareWidth = mainDockerSize / gridSize;
    for (let i = 1; i < gridSize + 1; i++) {
        const subDiv = document.createElement("div");
        subDiv.id = "div-row" + i;
        subDiv.classList.add("row");
        subDiv.style.width = mainDockerSize + "px";
        subDiv.style.height = squareWidth + "px";
        for (let j = 1; j < gridSize + 1; j++) {
            const div = document.createElement("div");
            div.id = "square-" + i + "-" + j;
            div.classList.add("square");
            div.style.height = squareWidth + "px";
            div.style.width = squareWidth + "px";
            div.addEventListener("mouseover", function () {
                this.style.backgroundColor = "black";
            });
            subDiv.appendChild(div);
        }
        mainDiv.appendChild(subDiv);
    }
    body.appendChild(mainDiv);
}