let control = document.querySelector("#control")
let setButton = document.createElement("button");
setButton.textContent = "Grid setup"
let resetButton = document.createElement("button");
resetButton.textContent = "Reset"
control.appendChild(setButton);
control.appendChild(resetButton);

function createGrid(size){
    let container = document.querySelector("#container");
    container.style.height = "600px";
    container.style.width = "600px";

    container.innerHTML="";

    const rowSize = Math.floor(600/size);
    const cellSize = Math.floor((600 / size)-2); 

    for( let i=0; i<size; i++){
        let row = document.createElement("div");
        row.classList.add("row");
        row.style.height = rowSize + "px";
        row.style.width =  "600px";
        row.style.display = "flex";
        row.style.flex = "1";
        row.style.flexDirection = "row";

        for( let j=1; j<=size; j++){
            let column = document.createElement("div");
            column.classList.add("column");
            column.style.backgroundColor = "grey";
            column.style.width = cellSize + "px";
            column.style.border = "1px solid black";
            column.style.margin = "1px";
            column.style.padding = "1px";
            column.style.display = "flex";
            column.style.flex = "1";

            column.addEventListener("mouseenter", (event)=>{
                let colors = ["green", "blue", "red", "yellow", "purple", "black"];
                let random_colors = colors[Math.floor(Math.random() * colors.length)];
                column.style.backgroundColor = random_colors;
            })
            row.appendChild(column);
        }
        container.appendChild(row);
    }
    gridCreated = true;
}
setButton.addEventListener("click", (event)  =>{
    number = prompt("Please enter a number between 2 and 100", "16");
    number = parseInt(number);

    if (number > 100){
        alert("Your number is greater than 100!!");
    }
    else if (number < 2){
        alert("Your number is smaller than 2!!");
    }
    else if(isNaN(number)){
        alert("Enter valid number!")
    }
    else{
        container.innerHTML="";
        createGrid(number);
    }
})

resetButton.addEventListener("click", (event)=>{
    container.innerHTML="";        
})





