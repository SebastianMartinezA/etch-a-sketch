const container = document.getElementById("grid-container");
const resetButton = document.getElementById("reset-button");

resetButton.addEventListener("click", changeSize);

window.addEventListener("load", defaultGrid);

function defaultGrid(){
    makeGrid2(5,5);
}

function makeGrid2(rowNum, colNum){
    container.style.setProperty('--grid-rows', rowNum);
    container.style.setProperty('--grid-cols', colNum);
    for(let i = 0; i < (rowNum*colNum); i++){
        let cell = document.createElement("div");
        cell.addEventListener("mouseover", changeColor);
        container.appendChild(cell).className = "grid-item";
    }
}

function clearGrid(){
    const gridArray = Array.from(container.childNodes);
    gridArray.forEach((element) => {
        container.removeChild(element);
    });
}

function changeSize(){
    let newSize = prompt("Enter size");

    if(newSize !== null){
        newSize = parseInt(newSize)
        if(newSize < 1 || newSize > 100 || !Number.isInteger(newSize)){
            alert("Number must be between 1 and 100");
            changeSize();
        }
        else {
            clearGrid();
            makeGrid2(newSize, newSize);
        }
    }
}

function changeColor(e){
    e.target.style.backgroundColor = '#' + Math.random().toString(16).substr(-6);
}
