function initialiser(){
// This function executes as soon as the Game web page is loaded and is purely for testing
    console.log("This is the game page")
    console.log(sessionStorage.playerColour)
    console.log(sessionStorage.enemyColour)
    console.log(sessionStorage.playerMetal)
    console.log(sessionStorage.playerPower)
    console.log(sessionStorage.enemyMetal)
    console.log(sessionStorage.enemyPower)
    console.log(sessionStorage.map)
// Values put into Session Storage are displayed to ensure the data moved successfully
}
let turnTotal = 0
let playerTurn = 0
let player1Turn = 0
let player2Turn = 0
// Used to see how many turns have been taken and determine who's turn it is
let earnedMetal = 0
let earnedPower = 0
// Used to see how much Metal and Power is being earned by the players on their turn
let spentMetal = 0
let spentPower = 0
// Used to see how much Metal and Power wants to be spent by the players on their turn
let netMetal = 0
let netPower = 0
// Used to see the surplus/deficit racked up by the player on their turn
let metalSign = 0
let powerSign = 0
// Used to show whether the player is in a resource surplus or deficit
let selectedBuilding = 0
// Used to show if a building has been selected and which one
let ownedBuildings = 0
// Used to show how many buildings the players have built, can't exceed the maximum (currently 10)
let squareId = 0
// Used to store the id of the div the player clicks on, gets used for construction
let canBuild = 0
// Used to see if the player can build the selected building in the selected div or not
let metal = 0
let power = 0
// Used to store how much Metal and Power can be spent on a building per turn at the most
let resourceMultiplier = 0
// Used to store the multiplier that finds how much Metal and Power will actually be spent
// on a building per turn, as the player may be in a resource deficit

// Pre-declares a bunch of variables to be used globally
let buildings = [{type: 0, health: 0, metalRequired: 0, powerRequired: 0, player: 0, square: 0},
    {type: 0, health: 0, metalRequired: 0, powerRequired: 0, player: 0, square: 0},
    {type: 0, health: 0, metalRequired: 0, powerRequired: 0, player: 0, square: 0},
    {type: 0, health: 0, metalRequired: 0, powerRequired: 0, player: 0, square: 0},
    {type: 0, health: 0, metalRequired: 0, powerRequired: 0, player: 0, square: 0},
    {type: 0, health: 0, metalRequired: 0, powerRequired: 0, player: 0, square: 0},
    {type: 0, health: 0, metalRequired: 0, powerRequired: 0, player: 0, square: 0},
    {type: 0, health: 0, metalRequired: 0, powerRequired: 0, player: 0, square: 0},
    {type: 0, health: 0, metalRequired: 0, powerRequired: 0, player: 0, square: 0},
    {type: 0, health: 0, metalRequired: 0, powerRequired: 0, player: 0, square: 0},
    {type: 0, health: 0, metalRequired: 0, powerRequired: 0, player: 0, square: 0},
    {type: 0, health: 0, metalRequired: 0, powerRequired: 0, player: 0, square: 0},
    {type: 0, health: 0, metalRequired: 0, powerRequired: 0, player: 0, square: 0},
    {type: 0, health: 0, metalRequired: 0, powerRequired: 0, player: 0, square: 0},
    {type: 0, health: 0, metalRequired: 0, powerRequired: 0, player: 0, square: 0},
    {type: 0, health: 0, metalRequired: 0, powerRequired: 0, player: 0, square: 0},
    {type: 0, health: 0, metalRequired: 0, powerRequired: 0, player: 0, square: 0},
    {type: 0, health: 0, metalRequired: 0, powerRequired: 0, player: 0, square: 0},
    {type: 0, health: 0, metalRequired: 0, powerRequired: 0, player: 0, square: 0},
    {type: 0, health: 0, metalRequired: 0, powerRequired: 0, player: 0, square: 0}]
// Pre-declares an array of twenty building slots (meaning each player can have a
// maximum of 10 buildings). The data specific to each individual building is stored here
let forgottenIslands = [
// Creates a 2D array for the Forgotten Islands map
    ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'd', 'd',
        'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd',
        'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd',
        'd', 'd', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
    ['w', 'w', 'w', 's', 's', 'w', 'w', 'w', 'w', 'w',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd',
        'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        'w', 'w', 'w', 'w', 'w', 's', 's', 'w', 'w', 'w'],
    ['w', 'w', 's', 's', 's', 's', 's', 'w', 'w', 'w',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        'w', 'w', 'w', 'w', 'd', 'd', 'd', 'd', 'd',
        'd', 'd', 'd', 'd', 'd', 'w', 'w', 'w', 'w',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        'w', 'w', 'w', 's', 's', 's', 's', 's', 'w', 'w'],
    ['w', 's', 's', 's', 'g', 'g', 's', 's', 's', 's',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        'w', 'w', 'w', 'w', 'w', 'w', 'd', 'd', 'd',
        'd', 'd', 'd', 'w', 'w', 'w', 'w', 'w', 'w',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        's', 's', 's', 's', 'g', 'g', 's', 's', 's', 'w'],
    ['w', 's', 'g', 'g', 'm', 'g', 'g', 'g', 's', 's',
        's', 's', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 's', 's',
        's', 's', 'g', 'g', 'g', 'm', 'g', 'g', 's', 'w'],
    ['w', 'w', 's', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 's', 's', 's', 's', 's', 'w', 'w', 'w', 'w',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        'w', 'w', 'w', 'w', 's', 's', 's', 's', 's', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 's', 'w', 'w'],
    ['w', 's', 's', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'm', 's', 's', 's', 'w', 'w', 'w',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        'w', 'w', 'w', 's', 's', 's', 'm', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 's', 's', 'w'],
    ['w', 'w', 's', 's', 'g', 'g', 'g', 'g', 'g', 'g',
        'f', 'f', 'g', 'g', 'g', 'g', 's', 's', 's', 's',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        's', 's', 's', 's', 'g', 'g', 'g', 'g', 'f', 'f',
        'g', 'g', 'g', 'g', 'g', 'g', 's', 's', 'w', 'w'],
    ['w', 'w', 'w', 's', 's', 's', 'g', 'g', 'g', 'g',
        'g', 'f', 'f', 'g', 'g', 'g', 'g', 'g', 'g', 's',
        's', 's', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 's', 's',
        's', 'g', 'g', 'g', 'g', 'g', 'g', 'f', 'f', 'g',
        'g', 'g', 'g', 'g', 's', 's', 's', 'w', 'w', 'w'],
    ['w', 'w', 'w', 'w', 'w', 's', 's', 'g', 'g', 'g',
        'g', 'g', 'f', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        's', 's', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 's', 's',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'f', 'g', 'g',
        'g', 'g', 'g', 's', 's', 'w', 'w', 'w', 'w', 'w'],
    ['w', 'w', 'w', 'w', 'w', 'w', 's', 's', 'g', 'g',
        'g', 'g', 'w', 'w', 'g', 'g', 'm', 'g', 'g', 's',
        's', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 's',
        's', 'g', 'g', 'm', 'g', 'g', 'w', 'w', 'g', 'g',
        'g', 'g', 's', 's', 'w', 'w', 'w', 'w', 'w', 'w'],
    ['w', 'w', 'w', 'w', 'w', 'w', 'w', 's', 's', 'g',
        'g', 'g', 's', 'w', 'g', 'g', 'g', 'g', 's', 's',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        's', 's', 'g', 'g', 'g', 'g', 'w', 's', 'g', 'g',
        'g', 's', 's', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
    ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 's', 's',
        'g', 'g', 'g', 's', 'g', 'g', 'g', 's', 's', 'w',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        'w', 's', 's', 'g', 'g', 'g', 's', 'g', 'g', 'g',
        's', 's', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
    ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 's', 's',
        's', 'g', 'g', 'g', 'g', 'g', 'g', 's', 'w', 'w',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        'w', 'w', 's', 'g', 'g', 'g', 'g', 'g', 'g', 's',
        's', 's', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
    ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 's',
        's', 's', 'g', 'g', 'g', 'g', 's', 's', 'w', 'w',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        'w', 'w', 's', 's', 'g', 'g', 'g', 'g', 's', 's',
        's', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
    ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        's', 's', 'g', 'g', 'm', 'g', 's', 'w', 'w', 'w',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        'w', 'w', 'w', 's', 'g', 'm', 'g', 'g', 's', 's',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
    ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        'w', 's', 's', 's', 'g', 's', 's', 'w', 'w', 'w',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        'w', 'w', 'w', 's', 's', 'g', 's', 's', 's', 'w',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
    ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        'w', 'w', 'w', 's', 's', 's', 'w', 'w', 'w', 'w',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        'w', 'w', 'w', 'w', 's', 's', 's', 'w', 'w', 'w',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
    ['d', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'd'],
    ['d', 'd', 'd', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 'd', 'd', 'd'],
    ['d', 'd', 'd', 'd', 'd', 'd', 'd', 'w', 'w', 'w',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        'w', 'w', 'w', 'd', 'd', 'd', 'd', 'd', 'd', 'd'],
    ['d', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
        'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd'],
    ['d', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd',
        'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd',
        'd', 'd', 'd', 'd', 'd', 'w', 'w', 'w', 'w',
        'w', 'w', 'w', 'w', 'd', 'd', 'd', 'd', 'd',
        'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd',
        'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd'],
    ['d', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd',
        'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd',
        'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd',
        'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd',
        'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd',
        'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd'],
    ['d', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd',
        'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd',
        'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd',
        'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd',
        'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd',
        'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd'],
]
let desertStorm = [
    ['s', 's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 'r', 'r', 'r', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 'r', 'r', 'r', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's', 's'],
    ['s', 's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 'r', 'r', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 'r', 'r', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's', 's'],
    ['s', 's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 'r', 's', 's', 's', 'm',
        's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's',
        'm', 's', 's', 's', 'r', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's', 's'],
    ['s', 's', 's', 'm', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 'r', 'r', 'r', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 'r', 'r', 'r', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 'm', 's', 's', 's'],
    ['s', 's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 'r', 'r', 'r',
        'r', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 'r',
        'r', 'r', 'r', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's', 's'],
    ['s', 's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's', 'r',
        'r', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 'r',
        'r', 's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's', 's'],
    ['s', 's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's', 's',
        'r', 'r', 'r', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 'r', 'r', 'r',
        's', 's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's', 's'],
    ['s', 's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 'm', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 'm', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's', 's'],
    ['s', 's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's', 's'],
    ['s', 's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's', 's'],
    ['s', 's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 'g', 'g',
        'g', 'g', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's', 's'],
    ['s', 's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 'g', 'w', 'w',
        'w', 'w', 'g', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's', 's'],
    ['s', 's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 'g', 'w', 'w', 'w', 'w',
        'w', 'w', 'w', 'w', 'g', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's', 's'],
    ['s', 's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 'g', 'f', 'w',
        'w', 'f', 'g', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's', 's'],
    ['s', 's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 'g', 'g',
        'g', 'g', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's', 's'],
    ['s', 's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's', 's'],
    ['s', 's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 'r', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 'r', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's', 's'],
    ['s', 's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 'r', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 'r', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's', 's'],
    ['s', 's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 'r', 'r', 'r', 's', 's', 's', 'm', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 'm', 's', 's', 's', 'r', 'r', 'r', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's', 's'],
    ['s', 's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 'r', 'r', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 'r', 'r', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's', 's'],
    ['s', 's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 'm', 's', 'r', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 'r', 's', 'm', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's', 's'],
    ['s', 's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 'r', 'r', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 'r', 'r', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's', 's'],
    ['s', 's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's', 's'],
    ['s', 's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's', 's'],
    ['s', 's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's', 's',
        's', 's', 's', 's', 's', 's', 's', 's', 's', 's'],
]
let greenPlains = [
    ['c', 'c', 'c', 'c', 'c', 'c', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g'],
    ['c', 'c', 'c', 'c', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g'],
    ['c', 'c', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'm', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g'],
    ['c', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g'],
    ['g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'm', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g'],
    ['g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'f', 'f', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g'],
    ['g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'f', 'f',
        'f', 'f', 'f', 'f', 'f', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g'],
    ['g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'f',
        'f', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g'],
    ['g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'm', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g'],
    ['g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g'],
    ['g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g'],
    ['g', 'g', 'g', 'g', 'g', 'm', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g'],
    ['g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g'],
    ['g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'm', 'g', 'g', 'g', 'g', 'g'],
    ['g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g'],
    ['g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'm', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g'],
    ['g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'f',
        'f', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g'],
    ['g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'f', 'f', 'f', 'f', 'f',
        'f', 'f', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g'],
    ['g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'f', 'f', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g'],
    ['g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g'],
    ['g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'm',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g'],
    ['g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'c'],
    ['g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'm', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'c', 'c'],
    ['g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'c', 'c', 'c', 'c'],
    ['g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'g', 'g', 'g', 'g', 'c', 'c', 'c', 'c', 'c', 'c'],
]
// Creates 2D arrays for each map, each letter represents a terrain type
// that affects the colour and what units can traverse it
let map = [25][58]
// Array map is declared to be the same size as the maps, gets assigned the
// user's choice of map later on
let metalExtractor = {symbol: "ዧ", type: 1, health: 8, metalRequired: 6, powerRequired: 8,
    maxMetalSpend: 3, maxPowerSpend: 4, terrain: "metal", metalIncome: 8}
let powerPlant = {symbol: "ቸ", type: 2, health: 5, metalRequired: 5, powerRequired: 8,
    maxMetalSpend: 5, maxPowerSpend: 8, terrain: "land", powerIncome: 12}
let landFactory = {symbol: "ጁ", type: 3, health: 10, metalRequired: 16, powerRequired: 28,
    maxMetalSpend: 8, maxPowerSpend: 14, terrain: "land"}
let navalFactory = {symbol: "ᎇ", type: 4, health: 15, metalRequired: 30, powerRequired: 48,
    maxMetalSpend: 10, maxPowerSpend: 16, terrain: "sea"}
let turret = {symbol: "ኡ", type: 5, health: 8, metalRequired: 32, powerRequired: 44,
    maxMetalSpend: 16, maxPowerSpend: 22, terrain: "land", range: 6}
let heavyArtillery = {symbol: "ፏ", type: 6, health: 6, metalRequired: 120, powerRequired: 180,
    maxMetalSpend: 30, maxPowerSpend: 45, terrain: "land"}
// Declares 6 building types and the general data specific to each type. If data here isn't
// in the buildings array, then it's because it's general data for that building type
function display(){
// Executed when the Game web page is loaded
    let container=document.querySelector('.container')
// Assigns the div container to variable container
    mapMaker()
// Executes mapMaker to assign the selected map to array "map"
    for(let y=0; y<25; y++) {
// Used to create 25 columns of divs
        for (let x = 0; x < 58; x++) {
// Used to create 58 rows of divs
            let id1 = y+"-"+x
// Just assigns an ever changing string to id1 used to set a unique div id
// each time one is made
            let div = document.createElement('div')
// Creates a new div and assigns it to variable div, easier to use
            div.id = id1
// Actually assigning the div its unique id
            div.onclick = function(){startConstruction(this.id)}
// The div is assigned an onclick function, gives the id of the selected
// div to function "startConstruction" when starting construction of a building
            colourSelector(div, y, x)
// Executes colourSelector to determine the colour of each div, based of its terrain
            container.appendChild(div)
// Adds the div to the parent div to be displayed in a grid
        }
    }
    document.getElementById("p1Metal").style.color = sessionStorage.playerColour
    document.getElementById("p1Power").style.color = sessionStorage.playerColour
    document.getElementById("p2Metal").style.color = sessionStorage.enemyColour
    document.getElementById("p2Power").style.color = sessionStorage.enemyColour
// Makes the "Metal:" and "Power:" text the colours selected by the players earlier
}

function startConstruction(id){
// This function is given the unique id of the div clicked by the player
    squareId = id
// The id is assigned to a global variable to be used across numerous functions more easily
    if(playerTurn==0){
        alert("Click the Next Turn button to start a player's turn")
    }
// Ensures the players have started their turn as a building can't be built by nobody
    else if(selectedBuilding!=0){
// Checks to see if a building has been selected or not
        countBuildings()
// If a building has been selected, function "countBuildings" runs to see if the player
// has reached their build limit
        if(canBuild==true){
// Checks to see if the player is able to still construct buildings
            terrainChecker()
// If they can, function "terrainChecker" executes to ensure the building can be constructed on that terrain
            if(canBuild==true){
                console.log("Construction Started")
                firstEmptyBuilding()
                findEconomy()
                updateResources()
// If the building can, function "firstEmptyBuilding" executes to place the building in the first
// empty spot in the 20-sized array
// Function "findEconomy" and "updateEconomy" run again to reflect changes
// in the player's economy
            }
        }
        selectedBuilding = 0
// "selectedBuilding" is then reassigned back to 0 so that another building has to be selected again
    }
    else{
        alert("You have not selected a building to be built")
// If no building was selected, the players are alerted
    }
}

function mapMaker(){
// This function executes after function display tells it to
    if(sessionStorage.map == '1'){
        map = forgottenIslands
    }
    else if(sessionStorage.map == '2'){
        map = desertStorm
    }
    else if(sessionStorage.map == '3') {
        map = greenPlains
    }
// Assigns the correct map array to array "map" depending on the user's choice
    return map
}

function updateResources(){
// Executes after display when the Game web page loads
// Can also be used by many different functions in the future
    if(playerTurn==1){
        netIncome()
// Executes "netIncome" to find out the overall earning of resources and
// decide on the signs to be displayed (+ or -)
        document.getElementById("earnedPM").innerHTML = earnedMetal
        document.getElementById("spentPM").innerHTML = spentMetal
        document.getElementById("overallPM").innerHTML = metalSign+netMetal
// If the overall metal earned is positive, a "+" is displayed with the number
// If negative, the default "-" is displayed
        document.getElementById("earnedPP").innerHTML = earnedPower
        document.getElementById("spentPP").innerHTML = spentPower
        document.getElementById("overallPP").innerHTML = powerSign+netPower
// Displays the amount of Metal and Power player 1 earns, spends
// and earns overall (negative if more is spent) per turn
    }
    else if(playerTurn==2){
        netIncome()
        document.getElementById("earnedEM").innerHTML = earnedMetal
        document.getElementById("spentEM").innerHTML = spentMetal
        document.getElementById("overallEM").innerHTML = metalSign+netMetal
        document.getElementById("earnedEP").innerHTML = earnedPower
        document.getElementById("spentEP").innerHTML = spentPower
        document.getElementById("overallEP").innerHTML = powerSign+netPower
// Displays the amount of Metal and Power player 2 earns, spends
// and earns overall (negative if more is spent) per turn
    }
}

function netIncome(){
    netMetal = earnedMetal - spentMetal
    netPower = earnedPower - spentPower
// Finds out the net earnings of resources
    if(netMetal > 0){
        metalSign = "+"
    }
    else{
        metalSign = ""
    }
    if(netPower > 0){
        powerSign = "+"
    }
    else{
        powerSign = ""
    }
// Decides what sign should be displayed ("-" is automatically shown
// for negative numbers so is not assigned here)
}

function colourSelector(div, y, x){
// This function executes when function "display" tells it to
    if(map[y][x] == 'w'){
        div.style.backgroundColor = '#0be0cd'
        div.value = "sea"
        div.title = "Terrain: Shallow Water, only traversable by the commander and naval units"
    }
    else if(map[y][x] == 's'){
        div.style.backgroundColor = '#e2f075'
        div.value = "land"
        div.title = "Terrain: Sand, only traversable by land units"
    }
    else if(map[y][x] == 'g'){
        div.style.backgroundColor = '#00c45c'
        div.value = "land"
        div.title = "Terrain: Grass, only traversable by land units"
    }
    else if(map[y][x] == 'm'){
        div.style.backgroundColor = '#939993'
        div.value = "metal"
        div.title = "Terrain: Exposed Metal, Impassable"
    }
    else if(map[y][x] == 'f'){
        div.style.backgroundColor = '#184807'
        div.value = "land"
        div.title = "Terrain: Forest, only traversable by land units"
    }
    else if(map[y][x] == 'd'){
        div.style.backgroundColor = '#062480'
        div.value = "sea"
        div.title = "Terrain: Deep Water, only traversable by naval units"
    }
    else if(map[y][x] == 'r'){
        div.style.backgroundColor = '#ac6011'
        div.value = "impassable"
        div.title = "Terrain: Desert Rock, Impassable"
    }
    else if(map[y][x] == 'c'){
        div.style.backgroundColor = '#3b3a3a'
        div.value = "impassable"
        div.title = "Terrain: Cliff, Impassable"
    }
// Assigning the correct background colour to a div based of
// the value in array map
// The terrain type and what type of unit can pass through it is also assigned
}

function nextTurn(){
    selectedBuilding = 0
// This function executes when the "Next Turn" button gets clicked
    if(turnTotal%2==0){
// This checks to see if it's player 2's turn
        player1Turn++
        console.log("Player 1 Turn "+player1Turn)
        playerTurn = 1
// Makes the turn player 1's and resets some data
    }
    else if(turnTotal%2==1){
// This checks to see if it's player 1's turn
        player2Turn++
        playerTurn = 2
// Makes the turn player 2's
    }
    findEconomy()
// Executes "findEconomy" to see the total income and expenditure of the player
    updateResources()
// Executes "updateResources" to display what the player is earning and spending
    spendEconomy()
// Executes "spendEconomy" to spend their earned resources evenly across their
// buildings under construction
    turnTotal++
// Increases the turn total to allow for the player's turn to change next time this
// function executes
}

function findEconomy(){
    if(playerTurn==1){
        earnedMetal = parseInt(sessionStorage.playerMetal)
        earnedPower = parseInt(sessionStorage.playerPower)
        spentMetal = 0
        spentPower = 0
    }
    else{
        earnedMetal = parseInt(sessionStorage.enemyMetal)
        earnedPower = parseInt(sessionStorage.enemyPower)
        spentMetal = 0
        spentPower = 0
    }
    for(let i=0; i<20; i++){
// This function must run 20 times to check each entry in the "buildings" array
        if(buildings[i].player==playerTurn && (buildings[i].powerRequired<=0||buildings[i].metalRequired<=0)){
// Checks to see if the current buildings belongs to the player and if it has finished construction
// This is where resources will be earned
            if(buildings[i].type==1){
                earnedMetal+=parseInt(metalExtractor.metalIncome)
// If the constructed building is a Metal Extractor, its income is added to "earnedMetal"
// To determine the total earned Metal
            }
            else if(buildings[i].type==2){
                earnedPower+=parseInt(powerPlant.powerIncome)
// If the constructed building is a Power Plant, its income is added to "earnedPower"
// to determine the total earned power
            }
        }
        else if(buildings[i].player==playerTurn && (buildings[i].powerRequired>0||buildings[i].metalRequired>0)){
// Checks to see if the current building belongs to the player and it it's still under construction
// This is where resources will be spent
            if(buildings[i].type==1){
                spentMetal+=metalExtractor.maxMetalSpend
                spentPower+=metalExtractor.maxPowerSpend
            }
            else if(buildings[i].type==2) {
                spentMetal += powerPlant.maxMetalSpend
                spentPower += powerPlant.maxPowerSpend
            }
            else if(buildings[i].type==3) {
                spentMetal += landFactory.maxMetalSpend
                spentPower += landFactory.maxPowerSpend
            }
            else if(buildings[i].type==4) {
                spentMetal += navalFactory.maxMetalSpend
                spentPower += navalFactory.maxPowerSpend
            }
            else if(buildings[i].type==5) {
                spentMetal += turret.maxMetalSpend
                spentPower += turret.maxPowerSpend
            }
            else if(buildings[i].type==6) {
                spentMetal += heavyArtillery.maxMetalSpend
                spentPower += heavyArtillery.maxPowerSpend
            }
// Different values will be assigned to "spentMetal" and "spentPower" depending on
// the building type as different buildings can spend different amounts per turn
        }
    }
}

function spendEconomy(){
    metalMultiplier = earnedMetal/spentMetal
    powerMultiplier = earnedPower/spentPower
// Determines the ratio of earned resources to spent resources
    if(metalMultiplier>=1&&powerMultiplier>=1){
        resourceMultiplier = 1
// If both ratios are at least 1, the "resourceMultiplier" is assigned as 1.
// It can't be above 1 as too many resources would be spent on the buildings on that turn
    }
    else if(metalMultiplier<powerMultiplier){
        resourceMultiplier = metalMultiplier
    }
    else{
        resourceMultiplier = powerMultiplier
    }
// If either of the multipliers aren't >= 1, then the lowest is assigned to "resourceMultiplier"
// as only the lowest multiplier can be assigned to spend the correct amount of resources
    for(let i=0;i<20;i++){
// This part runs 20 times, once for each entry in the "buildings" array
        if(buildings[i].player==playerTurn && (buildings[i].metalRequired>0||buildings[i].powerRequired>0)){
// Checks to see if the building belongs to the player and hasn't finished construction
            buildingTypeChecker(i)
// Executes "buildingTypeChecker" to get some specific data that'll be used next
            buildings[i].metalRequired = buildings[i].metalRequired-(metal*resourceMultiplier)
// Subtracts the amount of Metal able to be spent (decided by multiplying "metal" and the
// multiplier together) from the amount still required
            buildings[i].powerRequired = buildings[i].powerRequired-(power*resourceMultiplier)
// Subtracts the amount of Power able to be spent (decided by multiplying "power" and the
// multiplier together) from the amount still required
            if(buildings[i].player==playerTurn && (buildings[i].metalRequired<=0||buildings[i].powerRequired<=0)){
                console.log("Construction Complete")

            }
        }
    }
    findEconomy()
    updateResources()
}

function buildingTypeChecker(i){
// i is the building currently being looked at by function "spendEconomy"
    if(buildings[i].type==1){
        metal = metalExtractor.maxMetalSpend
        power = metalExtractor.maxPowerSpend
    }
    else if(buildings[i].type==2){
        metal = powerPlant.maxMetalSpend
        power = powerPlant.maxPowerSpend
    }
    else if(buildings[i].type==3){
        metal = landFactory.maxMetalSpend
        power = landFactory.maxPowerSpend
    }
    else if(buildings[i].type==4){
        metal = navalFactory.maxMetalSpend
        power = navalFactory.maxPowerSpend
    }
    else if(buildings[i].type==5){
        metal = turret.maxMetalSpend
        power = turret.maxPowerSpend
    }
    else{
        metal = heavyArtillery.maxMetalSpend
        power = heavyArtillery.maxPowerSpend
    }
// This function just checks to see what the maximum amount of Metal and Power is for the
// building from function "spendEconomy" able to be spent per turn is
// and assigns it to variables "metal" and "power"
}

function building1Selected(){
    if(playerTurn==0){
        alert("Click the Next Turn button to start a player's turn")
    }
    else{
        selectedBuilding = metalExtractor
    }
}
function building2Selected(){
    if(playerTurn==0){
        alert("Click the Next Turn button to start a player's turn")
    }
    else{
        selectedBuilding = powerPlant
    }
}
function building3Selected(){
    if(playerTurn==0){
        alert("Click the Next Turn button to start a player's turn")
    }
    else{
        selectedBuilding = landFactory
    }
}
function building4Selected(){
    if(playerTurn==0){
        alert("Click the Next Turn button to start a player's turn")
    }
    else{
        selectedBuilding = navalFactory
    }
}
function building5Selected(){
    if(playerTurn==0){
        alert("Click the Next Turn button to start a player's turn")
    }
    else{
        selectedBuilding = turret
    }
}
function building6Selected(){
    if(playerTurn==0){
        alert("Click the Next Turn button to start a player's turn")
    }
    else{
        selectedBuilding = heavyArtillery

    }
}
// These functions just ensures it's a player's turn and assigns the selected building to
// variable "selectedBuilding" to be used later
function countBuildings(id){
// This function uses the clicked div's id from function "startConstruction"
    canBuild = false
// Declares "canBuild" as false in case it was something else
    ownedBuildings = 0
// Declares "ownedBuildings" as 0 in case it was something else
    for(let i=0;i<buildings.length;i++){
// Runs 20 times to check each entry in the "buildings" array
        if(buildings[i].player==playerTurn){
            ownedBuildings++
        }
// If the building belongs to the player, "ownedBuildings" increases by 1
    }
    if (ownedBuildings==10){
        alert("You have built your maximum number of buildings.")
    }
// If the amount of owned buildings = 10, then the player can't build anymore
    else if(ownedBuildings<10){
        canBuild = true
    }
// If the amount of owned buildings is < 10, "canBuild" is set to true to let them build more
}

function firstEmptyBuilding(){
    for(let i=0;i<buildings.length;i++){
// Runs 20 times to check each entry in the "buildings" array
        if(buildings[i].player==0){
 // This runs if the entry doesn't belong to a player yet
            buildings[i].type = selectedBuilding.type
            buildings[i].health = selectedBuilding.health
            buildings[i].metalRequired = selectedBuilding.metalRequired
            buildings[i].powerRequired =  selectedBuilding.powerRequired
            buildings[i].player = playerTurn
            buildings[i].square = squareId
// The stats specific to each building get assigned values
            document.getElementById(squareId).innerHTML = selectedBuilding.symbol
            document.getElementById(squareId).style.fontSize = "1.5vw"
            document.getElementById(squareId).style.textAlign = "center"
            document.getElementById(squareId).value = "occupied"
// The building is then displayed on the map in the clicked div
            if(playerTurn==1){
                document.getElementById(squareId).style.color = sessionStorage.playerColour
            }
            else{
                document.getElementById(squareId).style.color = sessionStorage.enemyColour
            }
// The correct colour for the building is then selected
            break
// When the first unowned slot is found, the loop breaks to leave the rest available
        }
    }
}

function terrainChecker(){
    let terrain = document.getElementById(squareId).value
// This finds the terrain of the clicked div
    if(terrain=="occupied"){
        canBuild = false
        alert("That square is already occupied by a building")
    }
    else if(terrain!=selectedBuilding.terrain){
        canBuild = false
        alert("That is the wrong terrain for building "+selectedBuilding.symbol)
    }
// If the terrain for the building is wrong, the player is no longer able to build the building there
// If the terrain is suitable, construction goes ahead
}