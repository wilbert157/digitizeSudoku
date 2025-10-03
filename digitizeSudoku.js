let numSelected = null;
let tileSelected = null;

let board = [
    "---------",
    "---------",
    "---------",
    "---------",
    "---------",
    "---------",
    "---------",
    "---------",
    "---------"
]

window.onload = function() {
    setGame();
}

function setGame() {
    //Sudoku board creation - 9x9
    for (let r=0; r<9; r++){
        for (let c=0; c<9; c++){
            tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();

            //Assing classes based upon conditions to format board. 
            switch (r) {
                case 0:
                    tile.classList.add("Row-0");
                    tile.classList.add("horizontalLine-outsideTop");
                    break;
                case 1:
                    tile.classList.add("Row-1");
                    break;
                case 2:
                    tile.classList.add("Row-2");
                    tile.classList.add("horizontalLine-bottom");
                    break;
                case 3:
                    tile.classList.add("Row-3");
                    tile.classList.add("horizontalLine-top");
                    break;
                case 4:
                    tile.classList.add("Row-4");
                    break;
                case 5:
                    tile.classList.add("Row-5");
                    tile.classList.add("horizontalLine-bottom");
                    break;
                case 6:
                    tile.classList.add("Row-6");
                    tile.classList.add("horizontalLine-top");
                    break;
                case 7:
                    tile.classList.add("Row-7");
                    break;
                case 8:
                    tile.classList.add("Row-8");
                    tile.classList.add("horizontalLine-outsideBottom");
                    break;
            }
            
            switch (c) {
                case 0:
                    tile.classList.add("Col-0");
                    tile.classList.add("verticalLine-outsideLeft");
                    break;
                case 1:
                    tile.classList.add("Col-1");
                    break;
                case 2:
                    tile.classList.add("Col-2");
                    tile.classList.add("verticalLine-right");
                    break;
                case 3:
                    tile.classList.add("Col-3");
                    tile.classList.add("verticalLine-left");
                    break;
                case 4:
                    tile.classList.add("Col-4");
                    break;
                case 5:
                    tile.classList.add("Col-5");
                    tile.classList.add("verticalLine-right");
                    break;
                case 6:
                    tile.classList.add("Col-6");
                    tile.classList.add("verticalLine-left");
                    break;
                case 7:
                    tile.classList.add("Col-7");
                    break;
                case 8:
                    tile.classList.add("Col-8");
                    tile.classList.add("verticalLine-outsideRight");
                    break;
            }
            tile.addEventListener("click", selectedTile);

            //adding tile-board class to each tile
            tile.classList.add("tile-board");
            document.getElementById("sudokuBoard").append(tile);
            
        }
    }
}

//Function to hightlight the tile you clicked on
function selectedTile() {
    //Removes the "tile-slected" class from the previously clicked tile
    if (tileSelected != null) {
        tileSelected.classList.remove("tile-selected");
    }

    // Adds the "tile-selected" class to the tile you clicked on
    tileSelected = this;
    tileSelected.classList.add("tile-selected");

    //Adds keyboard inputs to the selected cell
    document.addEventListener("keyup", (e) => {
        if ("Digit1" <= e.code && e.code <= "Digit9") {
            tileSelected.innerText = e.code[5];
        }
        else if ("Numpad1" <= e.code && e.code <= "Numpad9") {
            tileSelected.innerText = e.code[6];
        }
        else if (e.code == "Backspace" || e.code == "Delete"){
            tileSelected.innerText = "";
        }
    })
    //Calls the function to highlight the row and column tiles
    highlightTiles();
}

//Function to highlight all tiles in the same column & row
function highlightTiles() {
    //This section is used to pull the row and column # from Div ID
    let selectedId = tileSelected.id;
    let selectedIdArray = selectedId.split("-");
    let rowSelected = selectedIdArray[0];
    let colSelected = selectedIdArray[1];

    //This is taking the row/col # of the selected tile and putting into a format that matches the Row/Col classes
    let divRow = "Row-" + rowSelected;
    let divCol = "Col-" + colSelected;

    //This is getting all Div elements with the class that matches the currently selected Row and Column #s
    let divRowSearch = document.getElementsByClassName(divRow);
    let divColSearch = document.getElementsByClassName(divCol);
   
    // This checks if there is any div with class "tile-selected" and removes it before you switch to another tile.
    let divList = document.querySelectorAll(".tile-selected");
    for (let i=0; i < divList.length; i++) {
        divList[i].classList.remove("tile-selected");
    }

    //This adds the class "tile-selected" to any tiles that is in the same row or column as seleced tile
    for (let i=0; i < divRowSearch.length; i++) {
        divRowSearch[i].classList.add("tile-selected");
    }
    for (let i=0; i < divColSearch.length; i++) {
        divColSearch[i].classList.add("tile-selected");
    }
}