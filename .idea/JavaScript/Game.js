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
let chosenBuilding = 0
let chosenUnit = 0
// Used to show if a building has been selected and which one
let ownedBuildings = 0
// Used to show how many buildings the players have built, can't exceed the maximum (currently 10)
let squareId = 0
let previousSquareId
// Used to store the id of the div the player clicks on, gets used for construction
let canBuild = 0
// Used to see if the player can build the selected building in the selected div or not
let metal = 0
let power = 0
// Used to store how much Metal and Power can be spent on a building per turn at the most
let resourceMultiplier = 0
// Used to store the multiplier that finds how much Metal and Power will actually be spent
// on a building per turn, as the player may be in a resource deficit
let selectedUnit = 0
let selectedBuilding = 0
let playerColour = 0
let commander1 = 0
let commander2 = 0
let colour = 0
let globalColour = 0
let playerUnitTotal = 0
let enemyUnitTotal = 0
let globalI = 0
// Pre-declares a bunch of variables to be used globally
let buildings = [{player: 0, square: 0},
    {player: 0, square: 0},
    {player: 0, square: 0},
    {player: 0, square: 0},
    {player: 0, square: 0},
    {player: 0, square: 0},
    {player: 0, square: 0},
    {player: 0, square: 0},
    {player: 0, square: 0},
    {player: 0, square: 0},
    {player: 0, square: 0},
    {player: 0, square: 0},
    {player: 0, square: 0},
    {player: 0, square: 0},
    {player: 0, square: 0},
    {player: 0, square: 0},
    {player: 0, square: 0},
    {player: 0, square: 0},
    {player: 0, square: 0},
    {player: 0, square: 0}]
// Pre-declares an array of twenty building slots (meaning each player can have a
// maximum of 10 buildings).
let units = [{player: 0, square: 0, alreadyMoved: false, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0},
    {player: 0, square: 0, alreadyMoved: false, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0},
    {player: 0, square: 0, alreadyMoved: false, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0},
    {player: 0, square: 0, alreadyMoved: false, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0},
    {player: 0, square: 0, alreadyMoved: false, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0},
    {player: 0, square: 0, alreadyMoved: false, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0},
    {player: 0, square: 0, alreadyMoved: false, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0},
    {player: 0, square: 0, alreadyMoved: false, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0},
    {player: 0, square: 0, alreadyMoved: false, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0},
    {player: 0, square: 0, alreadyMoved: false, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0},
    {player: 0, square: 0, alreadyMoved: false, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0},
    {player: 0, square: 0, alreadyMoved: false, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0},
    {player: 0, square: 0, alreadyMoved: false, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0},
    {player: 0, square: 0, alreadyMoved: false, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0},
    {player: 0, square: 0, alreadyMoved: false, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0},
    {player: 0, square: 0, alreadyMoved: false, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0},
    {player: 0, square: 0, alreadyMoved: false, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0},
    {player: 0, square: 0, alreadyMoved: false, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0},
    {player: 0, square: 0, alreadyMoved: false, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0},
    {player: 0, square: 0, alreadyMoved: false, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0},
    {player: 0, square: 0, alreadyMoved: false, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0},
    {player: 0, square: 0, alreadyMoved: false, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0},
    {player: 0, square: 0, alreadyMoved: false, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0},
    {player: 0, square: 0, alreadyMoved: false, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0},
    {player: 0, square: 0, alreadyMoved: false, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0},
    {player: 0, square: 0, alreadyMoved: false, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0},
    {player: 0, square: 0, alreadyMoved: false, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0},
    {player: 0, square: 0, alreadyMoved: false, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0},
    {player: 0, square: 0, alreadyMoved: false, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0},
    {player: 0, square: 0, alreadyMoved: false, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0},
    {player: 0, square: 0, alreadyMoved: false, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0},
    {player: 0, square: 0, alreadyMoved: false, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0},
    {player: 0, square: 0, alreadyMoved: false, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0},
    {player: 0, square: 0, alreadyMoved: false, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0},
    {player: 0, square: 0, alreadyMoved: false, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0},
    {player: 0, square: 0, alreadyMoved: false, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0},
    {player: 0, square: 0, alreadyMoved: false, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0},
    {player: 0, square: 0, alreadyMoved: false, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0},
    {player: 0, square: 0, alreadyMoved: false, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0},
    {player: 0, square: 0, alreadyMoved: false, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0},
    {player: 0, square: 0, alreadyMoved: false, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0},
    {player: 0, square: 0, alreadyMoved: false, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0}]
// Pre-declares an array of fourty unit slots (meaning each player can have a maximum
// of 20 units).
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
    ["6-6", "6-51"]
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
    ["3-6", "3-51"]
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
    ["4-11", "20-46"]
]
// Creates 2D arrays for each map, each letter represents a terrain type
// that affects the colour and what units can traverse it.
// The two pairs of numbers at the end represent where the command units
// should spawn.
let map = [25][58]
let mapDiv = 0
let mapX = 0
let mapY = 0
// Array map is declared to be the same size as the maps, gets assigned the
// user's choice of map later on
let squares = []

let metalExtractor = {symbol: "ዧ", type: 1, health: 8, metalRequired: 6, powerRequired: 8,
    maxMetalSpend: 3, maxPowerSpend: 4, terrain1: "metal", metalIncome: 8, name: "metalExtractor"}
let powerPlant = {symbol: "ቸ", type: 2, health: 7, metalRequired: 5, powerRequired: 8,
    maxMetalSpend: 5, maxPowerSpend: 8, terrain1: "land", powerIncome: 12, name: "powerPlant"}
let landFactory = {symbol: "ጁ", type: 3, health: 16, metalRequired: 16, powerRequired: 28,
    maxMetalSpend: 8, maxPowerSpend: 14, terrain1: "land", name: "landFactory"}
let navalFactory = {symbol: "ᎇ", type: 4, health: 24, metalRequired: 30, powerRequired: 48,
    maxMetalSpend: 10, maxPowerSpend: 16, terrain1: "shallowSea", terrain2: "deepSea", name: "navalFactory"}
let turret = {symbol: "ኡ", type: 5, health: 18, metalRequired: 32, powerRequired: 44,
    maxMetalSpend: 16, maxPowerSpend: 22, terrain1: "land", aRange: 6, damage: 8, name: "turret"}
let heavyArtillery = {symbol: "ፏ", type: 6, health: 28, metalRequired: 120, powerRequired: 180,
    maxMetalSpend: 30, maxPowerSpend: 45, terrain1: "land", cooldown: 1, damage: 20, name: "heavyArtillery"}
// Declares 6 building types and the general data specific to each type
let commandUnit = {symbol: "ደ", type: 7, health: 32, metalrequired: 0, powerRequired: 0,
    maxMetalSpend: 0, maxPowerSpend: 0, terrain1: "land", terrain2: "shallowSea",
    aRange: 7, mRange: 5, damage: 6, name:"commandUnit"}
let tank = {symbol: "Ⱝ", type: 8, health: 10, metalRequired: 10, powerRequired: 14,
    maxMetalSpend: 5, maxPowerSpend: 7, terrain1: "land", aRange: 7, mRange: 5,
    damage: 7, name: "tank"}
let labDroid = {symbol: "Ѫ", type: 9, health: 14, metalRequired: 12, powerRequired: 18,
    maxMetalSpend: 4, maxPowerSpend: 6, terrain1: "land", terrain2: "metal",
    aRange: 8, mRange: 6, damage: 8, name: "labDroid"}
let missileCarrier = {symbol: "ᛣ ", type: 10, health: 8, metalRequired: 36, powerRequired: 60,
    maxMetalSpend: 12, maxPowerSpend: 20, terrain1: "land", aRange: 18, mRange: 6, damage: 9, name: "missileCarrier"}
let detonatingSphere = {symbol: "ᵹ", type: 11, health: 80, metalRequired: 44, powerRequired: 84,
    maxMetalSpend: 11, maxPowerSpend: 21, terrain1: "land", aRange: 1, mRange: 1, damage: 28, name:"detonatingSphere"}
let destroyer = {symbol: "₣", type: 12, health: 16, metalRequired: 16, powerRequired: 22,
    maxMetalSpend: 8, maxPowerSpend: 11, terrain1: "shallowSea", terrain2: "deepSea",
    aRange: 8, mRange: 7, damage: 10, name: "destroyer"}
let cruiser = {symbol: "₸", type: 13, health: 20, metalRequired: 24, powerRequired: 39,
    maxMetalSpend: 8, maxPowerSpend: 13, terrain1: "shallowSea", terrain2: "deepSea",
    aRange: 20, mRange: 6, damage: 12, name: "cruiser"}
let battleship = {symbol: "₮", type: 14, health: 32, metalRequired: 48, powerRequired: 72,
    maxMetalSpend: 12, maxPowerSpend: 18, terrain1: "shallowSea", terrain2: "deepSea",
    aRange: 16, mRange: 5, damage: 16, name: "battleship"}
// Declares 8 unit types and the general data specific to each type    

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
            div.onclick = function(){clickedDiv(this.id)}
// The div is assigned an onclick function, gives the id of the selected
// div to function "startConstruction" when starting construction of a building
            mapY = y
            mapX = x
            mapDiv = div
            colourSelector(1)
// Executes colourSelector to determine the colour of each div, based of its terrain
            container.appendChild(div)
// Adds the div to the parent div to be displayed in a grid
        }
    }
    unitPlacement(commandUnit, commander1, sessionStorage.playerColour, 1)
    unitPlacement(commandUnit, commander2, sessionStorage.enemyColour, 2)
    document.getElementById("p1Metal").style.color = sessionStorage.playerColour
    document.getElementById("p1Power").style.color = sessionStorage.playerColour
    document.getElementById("p2Metal").style.color = sessionStorage.enemyColour
    document.getElementById("p2Power").style.color = sessionStorage.enemyColour
    document.getElementById("p1BuildLimit").style.color = sessionStorage.playerColour
    document.getElementById("p1UnitLimit").style.color = sessionStorage.playerColour
    document.getElementById("p2BuildLimit").style.color = sessionStorage.enemyColour
    document.getElementById("p2UnitLimit").style.color = sessionStorage.enemyColour
    document.getElementById("p1BuildLimit").innerHTML = "0/"+(buildings.length/2)
    document.getElementById("p1UnitLimit").innerHTML = "0/"+((units.length/2)-1)
    document.getElementById("p2BuildLimit").innerHTML = "0/"+(buildings.length/2)
    document.getElementById("p2UnitLimit").innerHTML = "0/"+((units.length/2)-1)
    units[0].player = 1
    units[0].square = commander1
    units[0].alreadyMoved = false
    units[1].player = 2
    units[1].square = commander2
    units[1].alreadyMoved = false
// Makes the "Metal:" and "Power:" text the colours selected by the players earlier
}

function unitPlacement(unit, id, colour, player){
    if(playerTurn!=0){
        mapDiv = document.getElementById(previousSquareId)
        mapDiv.setAttribute("data-playerControl", 0)
        mapDiv.setAttribute("data-type", 0)
        mapDiv.setAttribute("data-name", 0)
        mapDiv.setAttribute("data-health", 0)
        mapDiv.setAttribute("data-metalRequired", 0)
        mapDiv.setAttribute("data-powerRequired", 0)
        mapDiv.setAttribute("data-maxMetalSpend", 0)
        mapDiv.setAttribute("data-maxPowerSpend", 0)
        mapDiv.setAttribute("data-terrain1", 0)
        mapDiv.setAttribute("data-terrain2", 0)
        mapDiv.setAttribute("data-aRange", 0)
        mapDiv.setAttribute("data-mRange", 0)
        mapDiv.setAttribute("data-damage", 0)
        mapDiv.innerHTML = ""
        for(let i=0;i<squares.length;i+=2){
            globalColour = squares[i+1]
            globalI = squares[i]
            colourSelector(2)
        }
        units[searchUnits(2)].square = id
        console.log(units[0].square)
        searchUnits(2)
        console.log(globalI)
        units[globalI].alreadyMoved = true
    }
    mapDiv = document.getElementById(id)
    mapDiv.style.color = colour
    mapDiv.setAttribute("data-playerControl", player)
    mapDiv.innerHTML = unit.symbol
    mapDiv.setAttribute("data-type", unit.type)
    mapDiv.setAttribute("data-name", unit.name)
    mapDiv.setAttribute("data-health", unit.health)
    mapDiv.setAttribute("data-terrain1", unit.terrain1)
    mapDiv.setAttribute("data-terrain2", unit.terrain2)
    mapDiv.setAttribute("data-aRange", unit.aRange)
    mapDiv.setAttribute("data-mRange", unit.mRange)
    mapDiv.setAttribute("data-damage", unit.damage)
    mapDiv.removeAttribute("data-terrian")
    mapDiv.setAttribute("data-terrain", "occupied-unit")
    console.log(mapDiv.getAttribute("data-terrain"))
    squares = []
    selectedUnit = 0
    document.getElementById("unitHealth").innerHTML = ""
    console.log(units)
}

function searchUnits(check){
    for(let i=0;i<units.length;i++){
        if(check==1||check==4){
            if(units[i].player==playerTurn && units[i].square==squareId){
                if(check==4){
                    if(units[i].alreadyMoved==true){
                        return true
                    }
                    else{
                        return false
                    }
                }
                else{
                    return true
                }
            }
        }
        else if(check==2||check==5){
            if(units[i].player==playerTurn && units[i].square==previousSquareId){
                console.log(units[i].square)
                if(check==5){
                    if(units[i].alreadyMoved==true){
                        return true
                    }
                    else{
                        return false
                    }
                }
                else{
                    console.log(i)
                    globalI = i
                    return globalI
                }
            }
        }
        else if(check==3){
            if(units[i].player!=playerTurn && units[i].square==squareId){
                return true
            }
        }
    }
}

function clickedDiv(id){
    squareId = id
    console.log(squareId)
    let div = document.getElementById(squareId)
    console.log(div.getAttribute("data-terrain"))
    console.log(div.getAttribute("data-playerControl"))
    if(playerTurn==0){
        alert("Click the Next Turn button to start a player's turn")
    }
// Ensures the players have started their turn as a building can't be built by nobody
    else if(chosenBuilding==0&&selectedUnit==0){
        if(div.getAttribute("data-terrain") == "occupied-building") {
            if((div.innerText=="ጁ" || div.innerText=="ᎇ")&&div.getAttribute("data-playerControl")==playerTurn){
                selectedBuilding = div.getAttribute("data-name")
                unitUIDisplay(1)
                unitConstruction()
            }
            else if((div.innerText=="ኡ" || div.innerText=="ፏ")&&div.getAttribute("data-playerControl")==playerTurn){
                selectedBuilding = div.getAttribute("data-name")
                unitUIDisplay(1)
                unitRange1()
            }
            else if((div.innerText=="ዧ" || div.innerText=="ቸ")&&div.getAttribute("data-playerControl")==playerTurn){
                selectedBuilding = div.getAttribute("data-name")
                unitUIDisplay(1)
            }
            else{
                alert("That is not your building and you haven't selected a unit to attack it")
            }
        }
        else if(searchUnits(1)) {
            selectedUnit = div.getAttribute("data-name")
            console.log(units[2].alreadyMoved)
            unitUIDisplay(2)
        }
        else if(searchUnits(3)){
                alert("That is not your unit and you haven't selected a unit to attack it")
        }
        else{
            alert("You have not selected a building to be built and there's no unit to be selected")
// If no building was selected, the players are alerted
        }
    }
    else if(chosenBuilding!=0){
// Checks to see if a building has been selected or not
        if(document.getElementById(squareId).getAttribute("data-withinRange")=="true"){
            startConstruction()
        }
        else if(document.getElementById(squareId).style.backgroundColor=="rgb(0, 0, 0)"){
            alert("You cannot build on the square occupied by your commander")
        }
        else{
            alert("You can only start construction of a building within the command unit's movement range")
        }
    }
    else if(selectedUnit!=0){
        if(div.getAttribute("data-terrain")=="occupied-unit"||div.getAttribute("data-terrain")=="occupied-building"){
            if(div.getAttribute("data-playerControl")!=playerTurn){
                unitUIDisplay(3)
            }
            else{
                alert("You cannot attack your own units or buildings")
            }
        }
        else if(div.getAttribute("data-terrain")==selectedUnit.terrain1||div.getAttribute("data-terrain")==selectedUnit.terrain2){
            unitUIDisplay(4)
        }
        else{
            alert("Your unit has nothing to attack and can't move there")
        }
    }
// The id is assigned to a global variable to be used across numerous functions more easily
}

function unitUIDisplay(check){
    let div=document.getElementById(squareId)
    if(check==1){
// "check" is used to see what the function should be doing
        alert("You have selected a building")
        document.getElementById("unitHealth").innerHTML = div.getAttribute("data-health")+" HP"
    }
    else if(check==2){
        alert("You have selected a unit")
        document.getElementById("unitHealth").innerHTML = div.getAttribute("data-health")+" HP"
            previousSquareId = squareId
            unitRange1()

    }
    else if(check==3){
        alert("You are attacking a unit")
        units[searchUnits(5)].alreadyMoved = true
        selectedUnit = 0
        document.getElementById("unitHealth").innerHTML = ""
        for(let i=0;i<squares.length;i+=2){
            globalColour = squares[i+1]
            globalI = i
            colourSelector(2)
        }
    }
    else if(check==4){
        alert("You are moving a unit")
        if(div.style.backgroundColor=="rgb(255, 0, 255)"){
            if(!searchUnits(5)){
                alert("Correct terrain")
                if(playerTurn==1){
                    unitPlacement(selectedUnit, squareId, sessionStorage.playerColour, playerTurn)
                }
                else{
                    unitPlacement(selectedUnit, squareId, sessionStorage.enemyColour, playerTurn)
                }
            }
            else{
                alert("You have already moved or attacked with that unit")
            }
        }
        else{
            alert("You cannot move units outside their movement range")
        }
    }
}

function selectUnit(name){
    if(name=="commandUnit"){
        selectedUnit=commandUnit
    }
    else if(name=="tank"){
        selectedUnit=tank
    }
    else if(name=="labDroid"){
        selectedUnit=labDroid
    }
    else if(name=="missileCarrier"){
        selectedUnit=missileCarrier
    }
    else if(name=="detonatingSphere"){
        selectedUnit=detonatingSphere
    }
    else if(name=="destroyer"){
        selectedUnit=destroyer
    }
    else if(name=="cruiser"){
        selectedUnit=cruiser
    }
    else if(name=="battleship"){
        selectedUnit=battleship
    }
}

function unitRange1(){
    let xId = 0
    let yId = 0
    let id = ""
    selectUnit(selectedUnit)
    let range = selectedUnit.aRange
    for(let i=0;i<=range;i++){
        xId=parseInt(squareId.slice(squareId.indexOf("-")+1))+i
        unitRange2(range, i, xId, yId, id)
        xId = xId - 2*i
        unitRange2(range, i, xId, yId, id)
    }
}
function unitRange2(range, i, xId, yId, id){
    for(let z=range-i;z>=0;z--){
        yId=parseInt(squareId.slice(0, squareId.indexOf("-")))+z
        console.log(yId)
        if((yId>=0&&yId<25)&&(xId>=0&&xId<58)){
            id = yId.toString()+"-"+xId.toString()
            rangeColouring(i, z, id)
            document.getElementById(id).style.backgroundColor = colour
            squares.push(id)
            squares.push(colour)
        }
        yId = yId - 2*z
        if((yId>=0&&yId<25)&&(xId>=0&&xId<58)){
            id = yId.toString()+"-"+xId.toString()
            rangeColouring(i, z, id)
            document.getElementById(id).style.backgroundColor = colour
            squares.push(id)
            squares.push(colour)
        }
    }
    document.getElementById(squareId).style.backgroundColor = "#000000"
}
function rangeColouring(i, z, id){
    if(id!=previousSquareId){
        if((i+z)<=selectedUnit.mRange){
            document.getElementById(id).setAttribute("data-withinRange", "true")
        }
        if(document.getElementById(id).getAttribute("data-terrain")==selectedUnit.terrain1||
            document.getElementById(id).getAttribute("data-terrain")==selectedUnit.terrain2){
            if((i+z)<=selectedUnit.mRange){
                colour = "#ff00ff"
            }
            else{
                colour = "#ff0000"
            }
        }
        else{
            colour = "#ff0000"
        }
    }
}

function startConstruction(){
// This function is given the unique id of the div clicked by the player
    countBuildings()
// If a building has been selected, function "countBuildings" runs to see if the player
// has reached their build limit
    if(canBuild==true){
// Checks to see if the player is able to still construct buildings
        terrainChecker()
// If they can, function "terrainChecker" executes to ensure the building can be constructed on that terrain
        if(canBuild==true){
            if(playerTurn==1){
            document.getElementById("p1BuildLimit").innerHTML = ownedBuildings+1+"/"+(buildings.length/2)
            }
            else if(playerTurn==2){
            document.getElementById("p2BuildLimit").innerHTML = ownedBuildings+1+"/"+(buildings.length/2)
            }
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
    chosenBuilding = 0
// "chosenBuilding" is then reassigned back to 0 so that another building has to be selected again
}

function mapMaker(){
// This function executes after function display tells it to
    if(sessionStorage.map == '1'){
        map = forgottenIslands
        commander1 = "6-6"
        commander2 = "6-51"
    }
    else if(sessionStorage.map == '2'){
        map = desertStorm
        commander1 = "3-6"
        commander2 = "3-51"
    }
    else if(sessionStorage.map == '3') {
        map = greenPlains
        commander1 = "4-11"
        commander2 = "20-46"
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

function colourSelector(check){
    let checked = 0
    if(check==1){
        checked = map[mapY][mapX]
    }
    else if(check==2){
        mapDiv = document.getElementById(globalI)
        checked = mapDiv.getAttribute("data-terrainLetter")
    }
// This function executes when function "display" tells it to
    if(checked=='w'){
        if(globalColour != "#ff0000"){
            mapDiv.setAttribute("data-terrain", "shallowSea")
            mapDiv.setAttribute("data-playerControl", 0)
        }
        mapDiv.style.backgroundColor = '#0be0cd'
        mapDiv.title = "Terrain: Shallow Water, only traversable by the command unit and naval units"
        mapDiv.setAttribute("data-terrainLetter", 'w')
    }
    else if(checked=='s'){
        if(globalColour != "#ff0000"){
            mapDiv.setAttribute("data-terrain", "land")
            mapDiv.setAttribute("data-playerControl", 0)
        }
        mapDiv.style.backgroundColor = '#e2f075'
        mapDiv.title = "Terrain: Sand, only traversable by land units"
        mapDiv.setAttribute("data-terrainLetter", 's')
    }
    else if(checked=='g'){
        if(globalColour != "#ff0000"){
            mapDiv.setAttribute("data-terrain", "land")
            mapDiv.setAttribute("data-playerControl", 0)
        }
        mapDiv.style.backgroundColor = '#00c45c'
        mapDiv.title = "Terrain: Grass, only traversable by land units"
        mapDiv.setAttribute("data-terrainLetter", 'g')
    }
    else if(checked=='m'){
        if(globalColour != "#ff0000"){
            mapDiv.setAttribute("data-terrain", "metal")
            mapDiv.setAttribute("data-playerControl", 0)
        }
        mapDiv.style.backgroundColor = '#939993'
        mapDiv.title = "Terrain: Exposed Metal, Impassable"
        mapDiv.setAttribute("data-terrainLetter", 'm')
    }
    else if(checked=='f'){
        if(globalColour != "#ff0000"){
            mapDiv.setAttribute("data-terrain", "land")
            mapDiv.setAttribute("data-playerControl", 0)
        }
        mapDiv.style.backgroundColor = '#184807'
        mapDiv.title = "Terrain: Forest, only traversable by land units"
        mapDiv.setAttribute("data-terrainLetter", 'f')
    }
    else if(checked=='d'){
        if(globalColour != "#ff0000"){
            mapDiv.setAttribute("data-terrain", "deepSea")
            mapDiv.setAttribute("data-playerControl", 0)
        }
        mapDiv.style.backgroundColor = '#062480'
        mapDiv.title = "Terrain: Deep Water, only traversable by naval units"
        mapDiv.setAttribute("data-terrainLetter", 'd')
    }
    else if(checked=='r'){
        if(globalColour != "#ff0000"){
            mapDiv.setAttribute("data-terrain", "impassable")
            mapDiv.setAttribute("data-playerControl", 0)
        }
        mapDiv.style.backgroundColor = '#ac6011'
        mapDiv.title = "Terrain: Desert Rock, Impassable"
        mapDiv.setAttribute("data-terrainLetter", 'r')
    }
    else if(checked=='c'){
        if(globalColour != "#ff0000"){
            mapDiv.setAttribute("data-terrain", "impassable")
            mapDiv.setAttribute("data-playerControl", 0)
        }
        mapDiv.style.backgroundColor = '#3b3a3a'
        mapDiv.title = "Terrain: Cliff, Impassable"
        mapDiv.setAttribute("data-terrainLetter", 'c')
    }
// Assigning the correct background colour to a div based of
// the value in array map
// The terrain type and what type of unit can pass through it is also assigned
}

function nextTurn(){
    if(squares.length>1){
        for(let i=0;i<squares.length;i+=2){
            globalI = squares[i]
            globalColour = squares[i+1]
            colourSelector(2)
        }
    }
    for(let i=0;i<buildings.length;i++){
        if(buildings[i].square!=0){
            if(buildings[i].player!=0){
                document.getElementById(building[i].square).setAttribute("data-terrain", "occupied-building")
            }
        }
    }
    for(let i = 0;i<units.length;i++){
        units[i].alreadyMoved = false
        if(units[i].square!=0){
            if(units[i].player!=0){
                document.getElementById(units[i].square).setAttribute("data-terrain", "occupied-unit")
            }
        }
    }
    chosenBuilding = 0
    selectedBuilding = 0
    chosenUnit = 0
    selectedUnit = 0
// This function executes when the "Next Turn" button gets clicked
    let buttons = document.getElementsByClassName("buttons")
    document.getElementById("unitHealth").innerText = ""
    if(turnTotal%2==0){
// This checks to see if it's player 2's turn, or if nobody has started their turn yet
        player1Turn++
        console.log("Player 1 Turn "+player1Turn)
        playerTurn = 1
        playerColour = sessionStorage.playerColour
        document.getElementById("playerTurn").style.color = sessionStorage.playerColour
        document.getElementById("playerTurn").innerHTML = "Player 1's Turn"
        for(i=0;i<buttons.length;i++){
            buttons[i].style.color = sessionStorage.playerColour
        }
// Makes the turn player 1's and resets some data
    }
    else if(turnTotal%2==1){
// This checks to see if it's player 1's turn
        player2Turn++
        console.log("Player 2 Turn "+player2Turn)
        playerTurn = 2
        playerColour = sessionStorage.enemyColour
        document.getElementById("playerTurn").style.color = sessionStorage.enemyColour
        document.getElementById("playerTurn").innerHTML = "Player 2's Turn"
        for(i=0;i<buttons.length;i++){
            buttons[i].style.color = sessionStorage.enemyColour
        }
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
    spentMetal = 0
    spentPower = 0
    if(playerTurn==1){
        earnedMetal = parseInt(sessionStorage.playerMetal)
        earnedPower = parseInt(sessionStorage.playerPower)
    }
    else{
        earnedMetal = parseInt(sessionStorage.enemyMetal)
        earnedPower = parseInt(sessionStorage.enemyPower)
    }
    for(let i=0; i<20; i++){
// This function must run 20 times to check each entry in the "buildings" array
        if(buildings[i].player==playerTurn){
            let div=document.getElementById(buildings[i].square)
            if(div.getAttribute("data-operational")=="true"){
// Checks to see if the current buildings belongs to the player and if it has finished construction
// This is where resources will be earned
                if(div.getAttribute("data-name")==metalExtractor.name){
                    earnedMetal+=parseInt(div.getAttribute("data-metalIncome"))
// If the constructed building is a Metal Extractor, its income is added to "earnedMetal"
// to determine the total earned Metal
                }
                else if(div.getAttribute("data-name")==powerPlant.name){
                    earnedPower+=parseInt(div.getAttribute("data-powerIncome"))
// If the constructed building is a Power Plant, its income is added to "earnedPower"
// to determine the total earned power
                }
            }
            else if(div.getAttribute("data-playerControl")==playerTurn && (parseFloat(div.getAttribute("data-powerRequired"))>0||parseFloat(div.getAttribute("data-metalRequired"))>0)){
// Checks to see if the current building belongs to the player and it it's still under construction
// This is where resources will be spent
                spentMetal+=parseInt(div.getAttribute("data-maxMetalSpend"))
                spentPower+=parseInt(div.getAttribute("data-maxPowerSpend"))
// Different values will be assigned to "spentMetal" and "spentPower" depending on
// the building type as different buildings can spend different amounts per turn
            }
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
    console.log(resourceMultiplier)
// If either of the multipliers aren't >= 1, then the lowest is assigned to "resourceMultiplier"
// as only the lowest multiplier can be assigned to spend the correct amount of resources
    for(let i=0;i<20;i++){
        if(buildings[i].player==playerTurn){
            let div=document.getElementById(buildings[i].square)
// This part runs 20 times, once for each entry in the "buildings" array
            if(div.getAttribute("data-playerControl")==playerTurn && div.getAttribute("data-operational")=="false"){
// Checks to see if the building belongs to the player and hasn't finished construction
                metal = parseInt(div.getAttribute("data-maxMetalSpend"))
                power = parseInt(div.getAttribute("data-maxPowerSpend"))
                div.setAttribute("data-metalRequired", parseFloat(div.getAttribute("data-metalRequired"))-(metal*resourceMultiplier))
// Subtracts the amount of Metal able to be spent (decided by multiplying "metal" and the
// multiplier together) from the amount still required
                div.setAttribute("data-powerRequired", parseFloat(div.getAttribute("data-powerRequired"))-(power*resourceMultiplier))
// Subtracts the amount of Power able to be spent (decided by multiplying "power" and the
// multiplier together) from the amount still required
                if(div.getAttribute("data-playerControl") && (parseFloat(div.getAttribute("data-metalRequired"))<=0&&parseFloat(div.getAttribute("data-powerRequired"))<=0)){
                    console.log("Construction Complete")
                    div.setAttribute("data-operational", "true")
                }
            }
        }
    }
    findEconomy()
    updateResources()
}

function building1Selected(){
    if(selectedUnit!=commandUnit){
        alert("You must select your command unit before starting construction of a building")
    }
    else if(playerTurn==0){
        alert("Click the Next Turn button to start a player's turn")
    }
    else{
        chosenBuilding = metalExtractor
    }
}
function building2Selected(){
    if(selectedUnit!=commandUnit){
        alert("You must select your command unit before starting construction of a building")
    }
    else if(playerTurn==0){
        alert("Click the Next Turn button to start a player's turn")
    }
    else{
        chosenBuilding = powerPlant
    }
}
function building3Selected(){
    if(selectedUnit!=commandUnit){
        alert("You must select your command unit before starting construction of a building")
    }
    else if(playerTurn==0){
        alert("Click the Next Turn button to start a player's turn")
    }
    else{
        chosenBuilding = landFactory
    }
}
function building4Selected(){
    if(selectedUnit!=commandUnit){
        alert("You must select your command unit before starting construction of a building")
    }
    else if(playerTurn==0){
        alert("Click the Next Turn button to start a player's turn")
    }
    else{
        chosenBuilding = navalFactory
    }
}
function building5Selected(){
    if(selectedUnit!=commandUnit){
        alert("You must select your command unit before starting construction of a building")
    }
    else if(playerTurn==0){
        alert("Click the Next Turn button to start a player's turn")
    }
    else{
        chosenBuilding = turret
    }
}
function building6Selected(){
    if(selectedUnit!=commandUnit){
        alert("You must select your command unit before starting construction of a building")
    }
    else if(playerTurn==0){
        alert("Click the Next Turn button to start a player's turn")
    }
    else{
        chosenBuilding = heavyArtillery

    }
}
// These functions just ensures it's a player's turn and assigns the selected building to
// variable "chosenBuilding" to be used later
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
            let div=document.getElementById(squareId)
            div.setAttribute("data-name", chosenBuilding.name)
            div.setAttribute("data-typeype", chosenBuilding.type)
            div.setAttribute("data-health", chosenBuilding.health)
            div.setAttribute("data-metalRequired", chosenBuilding.metalRequired)
            div.setAttribute("data-maxMetalSpend", chosenBuilding.maxMetalSpend)
            div.setAttribute("data-powerRequired", chosenBuilding.powerRequired)
            div.setAttribute("data-maxPowerSpend", chosenBuilding.maxPowerSpend)
            div.setAttribute("data-playerControl", playerTurn)
            div.setAttribute("data-metalIncome", chosenBuilding.metalIncome)
            div.setAttribute("data-powerIncome", chosenBuilding.powerIncome)
            div.setAttribute("data-operational", "false")
            buildings[i].player = playerTurn
            buildings[i].square = squareId
// The stats specific to each building get assigned values
            document.getElementById(squareId).innerHTML = chosenBuilding.symbol
            document.getElementById(squareId).style.fontSize = "1.5vw"
            document.getElementById(squareId).style.textAlign = "center"
            document.getElementById(squareId).setAttribute("data-terrain", "occupied-building")
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
    let terrain = document.getElementById(squareId).getAttribute("data-terrain")
// This finds the terrain of the clicked div
    if(terrain=="occupied-building"){
        canBuild = false
        alert("That square is already occupied by a building")
    }
    else if(terrain=="occupied-unit"){
        canBuild = false
        alert("That square is already occupied by a unit")
    }
    else if(terrain!=chosenBuilding.terrain1&&terrain!=chosenBuilding.terrain2){
        canBuild = false
        alert("That is the wrong terrain for building "+chosenBuilding.symbol)
    }
// If the terrain for the building is wrong, the player is no longer able to build the building there
// If the terrain is suitable, construction goes ahead
}