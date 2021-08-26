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
let turntotal = 0
let earnedMetal = 0
let earnedPower = 0
let spentMetal = 0
let spentPower = 0
let netMetal = 0
let netPower = 0
let metalSign = 0
let powerSign = 0
let selectedBuilding = 0
let playerTurn = 0
let ownedBuildings = 0
let squareId = 0
let canBuild = 0
let metal = 0
let power = 0
let resourceMultiplier = 0
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
function display(){
// Executed when the Game web page is loaded
    let container=document.querySelector('.container')
// Assigns the div container to variable container
    mapMaker()
// Executes mapMaker to assign the selected map to array map
    for(let y=0; y<25; y++) {
// Used to create 25 columns of divs
        for (let x = 0; x < 58; x++) {
// Used to create 58 rows of divs
            let id1 = y+"-"+x
// Just assigns an ever changing string to id1 used to set a unique div class
// each time one is made
            let div = document.createElement('div')
// Creates a new div and assigns it to variable div
            div.id = id1
            div.onclick = function(){startConstruction(this.id)}
// The div is assigned its unique id
            colourSelector(div, y, x)
// Executes colourSelector to determine the colour of each div
            container.appendChild(div)
// Adds the div to the parent div to be displayed
        }
    }
    document.getElementById("p1Metal").style.color = sessionStorage.playerColour
    document.getElementById("p1Power").style.color = sessionStorage.playerColour
    document.getElementById("p2Metal").style.color = sessionStorage.enemyColour
    document.getElementById("p2Power").style.color = sessionStorage.enemyColour
}

function startConstruction(id){
    squareId = id
    if(playerTurn==0){
        alert("Click the Next Turn button to start a player's turn")
    }
    else if(selectedBuilding!=0){
        countBuildings()
        if(canBuild==true){
            terrainChecker()
            if(canBuild==true){
                firstEmptyBuilding()
            }
        }
        selectedBuilding = 0
    }
    else{
        alert("You have not selected a building to be built")
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
// Assigns the correct map array to array map depending on the user's choice
    return map
}

function updateResources(){
// Executes after display when the Game web page loads
// Can also be used by many different functions in the future
    let sign = 0
    if(playerTurn==1){
        netIncome()
        document.getElementById("earnedPM").innerHTML = earnedMetal
        document.getElementById("spentPM").innerHTML = spentMetal
        document.getElementById("overallPM").innerHTML = metalSign+netMetal
        document.getElementById("earnedPP").innerHTML = earnedPower
        document.getElementById("spentPP").innerHTML = spentPower
        document.getElementById("overallPP").innerHTML = powerSign+netPower
// Displays the amount of Metal and Power player 1 earns
    }
    else if(playerTurn==2){
        netIncome()
        document.getElementById("earnedEM").innerHTML = earnedMetal
        document.getElementById("spentEM").innerHTML = spentMetal
        document.getElementById("overallEM").innerHTML = metalSign+netMetal
        document.getElementById("earnedEP").innerHTML = earnedPower
        document.getElementById("spentEP").innerHTML = spentPower
        document.getElementById("overallEP").innerHTML = powerSign+netPower
// Displays the amount of Metal and Power player 2 earns
    }
}

function netIncome(){
    netMetal = earnedMetal - spentMetal
    netPower = earnedPower - spentPower
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

    return netMetal, netPower, metalSign, powerSign
}

function colourSelector(div, y, x){
// This function executes when function display tells it to
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
}

function nextTurn(){
    if(turntotal%2==0){
        playerTurn = 1
        earnedMetal = parseInt(sessionStorage.playerMetal)
        earnedPower = parseInt(sessionStorage.playerPower)
        spentMetal = 0
        spentPower = 0
    }
    else if(turntotal%2==1){
        playerTurn = 2
        earnedMetal = parseInt(sessionStorage.enemyMetal)
        earnedPower = parseInt(sessionStorage.enemyPower)
        spentMetal = 0
        spentPower = 0
    }
    console.log("player "+playerTurn)
    console.log("Check 1 "+earnedMetal)
    console.log("Check 1 "+earnedPower)
    findEconomy()
    console.log("Check 2 "+earnedMetal)
    console.log("Check 2 "+earnedPower)
    updateResources()
    spendEconomy()
    console.log("Check 3 "+earnedMetal)
    console.log("Check 3 "+earnedPower)
    turntotal++
    console.log("Turn "+turntotal)
}

function findEconomy(){
    for(let i=0; i<20; i++){
        if(buildings[i].player==playerTurn && (buildings[i].powerRequired<=0||buildings[i].metalRequired<=0)){
            if(buildings[i].type==1){
                console.log("Check 1.1 "+earnedMetal)
                earnedMetal+=parseInt(metalExtractor.metalIncome)
                console.log("Check 1.2 "+earnedMetal)
            }
            else if(buildings[i].type==2){
                earnedPower+=parseInt(powerPlant.powerIncome)
            }
        }
        else if(buildings[i].player==playerTurn && (buildings[i].powerRequired>0||buildings[i].metalRequired>0)){
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
        }
    }
}

function spendEconomy(){
    metalMultiplier = earnedMetal/spentMetal
    powerMultiplier = earnedPower/spentPower
    if(metalMultiplier>=1&&powerMultiplier>=1){
        resourceMultiplier = 1
    }
    else if(metalMultiplier<powerMultiplier){
        resourceMultiplier = metalMultiplier
    }
    else{
        resourceMultiplier = powerMultiplier
    }
    console.log("metalMult "+metalMultiplier)
    console.log("powerMult "+powerMultiplier)
    console.log("resourceMult"+resourceMultiplier)
    for(let i=0;i<20;i++){
        if(buildings[i].player==playerTurn && (buildings[i].metalRequired>0||buildings[i].powerRequired>0)){
            buildingTypeChecker(i)
            buildings[i].metalRequired = buildings[i].metalRequired-(metal*resourceMultiplier)
            buildings[i].powerRequired = buildings[i].powerRequired-(power*resourceMultiplier)
            console.log(buildings[i].metalRequired)
            console.log(buildings[i].powerRequired)
        }
    }
}

function buildingTypeChecker(i){
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

function countBuildings(id){
    canBuild = false
    ownedBuildings = 0
    for(let i=0;i<buildings.length;i++){
        if(buildings[i].player==playerTurn){
            ownedBuildings++
            console.log("owndedBuildings"+ownedBuildings)
            }
        }
    if (ownedBuildings==10){
        alert("You have built your maximum number of buildings.")
    }
    else if(ownedBuildings<10){
        canBuild = true
    }
}

function firstEmptyBuilding(){
    for(let i=0;i<buildings.length;i++){
        if(buildings[i].player==0){
            buildings[i].type = selectedBuilding.type
            buildings[i].health = selectedBuilding.health
            buildings[i].metalRequired = selectedBuilding.metalRequired
            buildings[i].powerRequired =  selectedBuilding.powerRequired
            buildings[i].player = playerTurn
            buildings[i].square = squareId
            console.log(buildings[i])
            document.getElementById(squareId).innerHTML = selectedBuilding.symbol
            document.getElementById(squareId).style.fontSize = "1.5vw"
            document.getElementById(squareId).style.textAlign = "center"
            if(playerTurn==1){
                document.getElementById(squareId).style.color = sessionStorage.playerColour
            }
            else{
                document.getElementById(squareId).style.color = sessionStorage.enemyColour
            }
            break
        }
    }
    console.log(buildings)
}

function terrainChecker(){
    console.log(document.getElementById(squareId).style.backgroundColor)
    console.log(document.getElementById(squareId).value)
    let terrain = document.getElementById(squareId).value
    if(terrain!=selectedBuilding.terrain){
        canBuild = false
        alert("That is the wrong terrain for the building")
    }
    else{
        alert("You can build on square "+squareId)
    }
}