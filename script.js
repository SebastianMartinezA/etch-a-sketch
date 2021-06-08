const container = document.getElementById("grid-container");
console.log(container);

function makeGrid(rowNum, colNum){
    for(let i = 0; i<rowNum; i++){
        let row = document.createElement("div");
        row.className = "row";
        for(let j = 0; j<colNum; j++){
            var col = document.createElement("div");
            col.className = "col";
            row.appendChild(col);
        }
        container.appendChild(row);
    }
}

makeGrid(16,16);