var numSelected = null;
var tileSelected = null;

var board = [
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
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();

            //Adding borders to separate out 3x3 blocks
            if (r==2 || r==5){
                tile.classList.add("horizontalLine-bottom");
            }
            if (r==3 || r==6){
                tile.classList.add("horizontalLine-top");
            }
            if (c==2 || c==5){
                tile.classList.add("verticalLine-right");
            }
            if (c==3 || c==6){
                tile.classList.add("verticalLine-left");
            }

            //adding tile-board class to each tile
            tile.classList.add("tile-board");
            document.getElementById("sudokuBoard").append(tile);
        }
    }
}
