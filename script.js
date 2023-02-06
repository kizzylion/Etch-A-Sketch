
//Get the documents elements from html
let layout = document.getElementById("layout");
let gridDisplay = document.getElementById("gridDisplay");
let colorPicker = document.getElementById("colorPicker");
colorPicker.setAttribute('value', `${getRandomColor()}`)
// let color = colorPicker.value;
let btnContainer= document.getElementById("buttons");
let btns = document.querySelectorAll(".btn");
let cellColor = ""



//style the layout width, make it responsive to different screen size
// layout.style.width = "50vw"
// layout.style.height = layout.style.width;
// layout.style.border = "4px solid #808080";

//make the layout a display grid
layout.style.display = "grid";

//Get the range input #range and let rowNumber equal the value
let range = document.getElementById("range");
let rowNumber = range.value;
let columnNumber =  rowNumber;


//style the selected buttons to : listen for clicks on the botton indicate tbe selected buttons

for(i=0;i<btns.length; i++){
    btns[i].addEventListener("click",addSelectedBtn)

}

function addSelectedBtn(e){
    //get the previously selected button
    let current = document.querySelector(".selected");
    //remove the select ui indicator from the previously selected button
    current.classList.remove('selected')
    // add the indicated to the currently clicked button
    this.classList.add("selected")
}

function createNewGrid(e){
    rowNumber=""
    rowNumber=range.value
    for(i=1; i<=(rowNumber**2); i++){
        //Create a div
        
        let div = document.createElement("div");
        div.classList.add('cell')
        let cell = document.querySelectorAll(".cell")
    
        for(i=0; i<cell.length; i++){
            cell[i].style.backgroundColor ="";
        } 
        
        
        layout.appendChild(div) 

        if (colorModeBtn.classList.contains("selected")){
            
            Array.from(cell).forEach(function(e){
                e.addEventListener("click",function(){
                    this.style.backgroundColor=colorPicker.value;
                })
            })
        }
    
        
    }
    //style the layout container using the rowNumber value to create the numbers of rows and columns on the layout container.
    layout.style.gridTemplateRows=`repeat(${rowNumber}, 1fr)`;
    layout.style.gridTemplateColumns=`repeat(${rowNumber},1fr)`;
    gridDisplay.innerText=`${rowNumber}/${rowNumber}`
    
}




// Create grid 
function createGrid(){
    //Get the the number of grid to be created from the range value input
    rowNumber=range.value
    
    // the number of div created should be the square of the value collected
    for(i=1; i<=(rowNumber**2); i++){
        
        //create the divs
        let div = document.createElement("div");
        
        //add a className : cell to each div created
        div.classList.add('cell')
        
        //add each div into the grid container
        layout.appendChild(div)

    }
    layout.style.gridTemplateRows=`repeat(${rowNumber}, 1fr)`;
    layout.style.gridTemplateColumns=`repeat(${rowNumber},1fr)`;
    gridDisplay.innerText=`${rowNumber} x ${rowNumber}`
}
// run the createGrid function
createGrid()

//add an event listener to range that creates a new grid


range.addEventListener("change", createNewGrid);








//function fillColor 
function fillColor(e){
    e.target.style.backgroundColor = `${colorPicker.value}`
}


let colorModeBtn = document.querySelector("#colorMode")

let eraseBtn = document.querySelector("#eraser")

let randomColorBtn = document.querySelector("#randomMode")

let clearBtn = document.querySelector("#clear")


if (colorModeBtn.classList.contains("selected")){
    let cell = document.querySelectorAll(".cell")
    cell.forEach(function(e){
        e.addEventListener("click",function(){
            this.style.backgroundColor=colorPicker.value;
        })
    })
}


colorModeBtn.addEventListener("click", function(){
    let cell = document.querySelectorAll(".cell")
    if (colorModeBtn.classList.contains("selected")){
        cell.forEach(function(e){
            e.addEventListener("click",function(){
                this.style.backgroundColor=colorPicker.value;
            })
        })
    }
})







eraseBtn.addEventListener("click", function(){
    let cell = document.querySelectorAll(".cell")
    if (eraseBtn.classList.contains("selected")){
        cell.forEach(function(e){
            e.addEventListener("click",function(){
                this.style.backgroundColor="";
            })
        })
    }
})

randomColorBtn.addEventListener("click", function(){
    let cell = document.querySelectorAll(".cell")
    if (randomColorBtn.classList.contains("selected")){
        cell.forEach(function(e){
            e.addEventListener("click",function(){
                this.style.backgroundColor= getRandomColor();
            })
        })
    }
})

function getRandomColor(){

    const letters = "0123456789ABCDEF";
    let color = "#"
    for (let i=0; i<6; i++){
        color += letters[Math.floor(Math.random()*16)]
    }
    return color;
}

clearBtn.addEventListener("click", function(){
    let cell = document.querySelectorAll(".cell")
   
    cell.forEach(element => {
        element.style.backgroundColor = "";
    });   
    
})


// touchesMove
// The event listener iterates over all the cells, 
//forEach loop, set the background color of a cell if-
//the touch position is within the boundaries of the cell, using getBoundingClientRect().
//the cells that are not touched will not have their background color changed.

layout.addEventListener("touchmove", (event)=>{
    event.preventDefault()
    let cells=document.querySelectorAll(".cell");
    
    if (colorModeBtn.classList.contains("selected")){
        cells.forEach((cell)=>{
        
            const rect = cell.getBoundingClientRect();
            const x = event.touches[0].clientX;
            const y = event.touches[0].clientY;
            if (x >= rect.left && x<= rect.right && y >= rect.top && y <= rect.bottom){
                cell.style.backgroundColor = colorPicker.value;
            }
        })        
    }

    if (randomColorBtn.classList.contains("selected")){
        cells.forEach((cell)=>{
        
            const rect = cell.getBoundingClientRect();
            const x = event.touches[0].clientX;
            const y = event.touches[0].clientY;
            if (x >= rect.left && x<= rect.right && y >= rect.top && y <= rect.bottom){
                cell.style.backgroundColor = getRandomColor();
            }
        })        
    }

    if (eraseBtn.classList.contains("selected")){
        cells.forEach((cell)=>{
        
            const rect = cell.getBoundingClientRect();
            const x = event.touches[0].clientX;
            const y = event.touches[0].clientY;
            if (x >= rect.left && x<= rect.right && y >= rect.top && y <= rect.bottom){
                cell.style.backgroundColor = "";
            }
        })        
    }

});


