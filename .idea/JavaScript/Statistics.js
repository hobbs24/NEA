let graph = 1
let gapX = 0
let gapY = 0
let startX = 0
let startY = 0
let extWidth = 0
let extHeight = 0
let numberOfLines = 0
let line = []
let ctx = 0
let maximum = 0
let colour = 0
// Decide which aren't needed
function initialiser(){
    if(sessionStorage.p1MetalPerTurn.length>sessionStorage.p2MetalPerTurn.length){
        document.getElementById("header").innerHTML = "Congratulations Player 1 for killing Player 2's Command Unit"
    }
    else{
        document.getElementById("header").innerHTML = "Congratulations Player 2 for killing Player 1's Command Unit"
    }
}