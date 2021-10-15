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
    let error1=""
    let error2=""
    let error3=""
    let error4=""
    let error5=""
    let error6=""
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
        error1="You and the enemy require different colours before playing."
// An appropriate message is displayed
    }
    if(100<sessionStorage.playerMetal || 100<sessionStorage.enemyMetal){
// Ensures that neither players earn too much Metal from the start
        error2="You and the enemy can earn a maximum of 100 metal without controlling metal zones."
    }
    if(sessionStorage.playerMetal<1 || sessionStorage.enemyMetal<1){
// Ensures the players both earn enough Metal to build resource generators
        error3="You and the enemy must earn at least one metal per turn."
    }
    if(120<sessionStorage.playerPower || 120<sessionStorage.enemyPower){
// Ensures that neither player earns too much Power from the start
        error4="You and the enemy can earn a maximum of 120 power without building power plants."
    }
    if(sessionStorage.playerPower<1 || sessionStorage.enemyPower<1){
// Ensures the players both earn enough Power to build resource generators
        error5="You and the enemy must earn at least one power per turn."
    }
    if(sessionStorage.map == "0"){
// Ensures a map is selected by comparing to the default value of 0
        error6="Please select a map."
    }
    if(error1==""&&error2==""&&error3==""&&error4==""&&error5==""&&error6==""){
        location="Game.html"
// If all conditions are met, the web page moves onto the Game page
    }
    else{
        document.getElementById("error1").innerText = error1
        document.getElementById("error2").innerText = error2
        document.getElementById("error3").innerText = error3
        document.getElementById("error4").innerText = error4
        document.getElementById("error5").innerText = error5
        document.getElementById("error6").innerText = error6
    }
}
function mapSelect(){
// This function executes as soon as the player selects a different map option
    sessionStorage.map = document.getElementById("mapSelection").value
// Stores the map selected into Session Storage
    console.log(sessionStorage.map)
// Displays the map choice (used for testing)
    if(sessionStorage.map == "0"){
        document.getElementById('maps').src="http://localhost:63342/NEA/.idea/Maps/BlackSquare.png"
        document.getElementById("maps").title="If a map is selected, it'll show here."
    }
    else if(sessionStorage.map == "1"){
        document.getElementById('maps').src="http://localhost:63342/NEA/.idea/Maps/ForgottenIslands.png"
        document.getElementById("maps").title="A naval-based map with two mirrored islands."
    }
    else if(sessionStorage.map == "2"){
        document.getElementById('maps').src="http://localhost:63342/NEA/.idea/Maps/DesertStorm.png"
        document.getElementById("maps").title="A land-based map set in the desert with a small oasis."
    }
    else if(sessionStorage.map == "3"){
        document.getElementById('maps').src="http://localhost:63342/NEA/.idea/Maps/GreenPlains.png"
        document.getElementById("maps").title="A land-based map set in a grassy plain."
    }
// Changes the source of the img tab and displays the appropriate image, decided by the player
}
