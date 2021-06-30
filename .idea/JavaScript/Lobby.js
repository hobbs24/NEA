// Comments are below what they're talking about
// sessionStorage was used rather than localStorage as it is removed after the user leaves the site
function pageLoad(){
// This function executes when as soon as the Lobby web page is loaded
    document.getElementById("settings").addEventListener("submit", prevent)
// This creates an event listener that waits until the submit button on the web page is
// clicked to execute the function prevent
    sessionStorage.map=0
// This sets sessionStorage.map to 0 to ensure a map gets chosen in a later function
// Session Storage is used here to easily allow for the transfer of data between JS files
}
function prevent(){
// This function executes once the submit button on the webpage has been clicked
    event.preventDefault()
// This prevents the submit button's default action so that the data submitted can be used
    sessionStorage.playerColour=document.getElementById("playerColour").value
    sessionStorage.enemyColour=document.getElementById("enemyColour").value
    sessionStorage.playerMetal=document.getElementById("playerMetal").value
    sessionStorage.playerPower=document.getElementById("playerPower").value
    sessionStorage.enemyMetal=document.getElementById("enemyMetal").value
    sessionStorage.enemyPower=document.getElementById("enemyPower").value
// The above lines just store variables into Session Storage using data submitted from the web page
// The colour and starting resources of the player and enemy are stored here
    console.log(sessionStorage.playerColour)
    console.log(sessionStorage.enemyColour)
    console.log(sessionStorage.playerMetal)
    console.log(sessionStorage.playerPower)
    console.log(sessionStorage.enemyMetal)
    console.log(sessionStorage.enemyPower)
// The above just output the values that were just stored (used for testing)
    if(sessionStorage.playerColour==sessionStorage.enemyColour){
// Ensures the player and enemy don't start with the same colour as you won't be able to tell your units apart
        alert("You and the enemy require different colours before playing.")
// An appropriate message is displayed
    }
    else if(5000<sessionStorage.playerMetal || 5000<sessionStorage.enemyMetal){
// Ensures that neither the player or enemy start with too much Metal
        alert("You and the enemy can have at a maximum 5000 metal at the start.")
    }
    else if(sessionStorage.playerMetal<50 || sessionStorage.enemyMetal<50){
// Ensures the player and enemy start with enough Metal to build resource generators
        alert("You and the enemy require at least 50 metal at the start.")
    }
    else if(7500<sessionStorage.playerPower || 7500<sessionStorage.enemyPower){
// Ensures that neither the player or enemy start with too much Power
        alert("You and the enemy can have at a maximum 7500 power at the start.")
    }
    else if(sessionStorage.playerPower<50 || sessionStorage.enemyPower<50){
// Ensures the player and enemy start with enough Power to build resource generators
        alert("You and the enemy require at least 80 power at the start.")
    }
    else if(sessionStorage.map == 0){
// Ensures a map is selected by comparing to the default value of 0
        alert("Please select a map.")
    }
    else{
        location="Game.html"
// If all conditions are met, the web page moves onto the Game page
    }
}
function mapSelect(){
// This function executes as soon as the player selects a different map option
    sessionStorage.map = document.getElementById("mapSelection").value
// Stores the map slected into Session Storage
    console.log(sessionStorage.map)
// Displays the map choice (used for testing)
    if(sessionStorage.map == "1"){
        document.getElementById('maps').src=".idea/Maps/ForgottenIslands.PNG"
    }
    else if(sessionStorage.map == "2"){
        document.getElementById('maps').src=".idea/Maps/DesertStorm.PNG"
    }
    else if(sessionStorage.map == "3"){
        document.getElementById('maps').src=".idea/Maps/GreenPlains.PNG"
    }
}
