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
let ownedUnits = 0
// Used to show how many buildings the players have built, can't exceed the maximum (currently 10)
let squareId = 0
let previousSquareId
// Used to store the id of the div the player clicks on, gets used for construction
let canBuild = 0
// Used to see if the player can build the selected building in the selected div or not
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
let placingConstructedUnit = false
// Pre-declares a bunch of variables to be used globally
let buildings = [{player: 0, square: 0, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0, metalIncome: 0, powerIncome: 0, health: 0, name: 0, operational: false, attackCooldown: 0, queuedUnit: 0},
    {player: 0, square: 0, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0, metalIncome: 0, powerIncome: 0, health: 0, name: 0, operational: false, attackCooldown: 0, queuedUnit: 0},
    {player: 0, square: 0, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0, metalIncome: 0, powerIncome: 0, health: 0, name: 0, operational: false, attackCooldown: 0, queuedUnit: 0},
    {player: 0, square: 0, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0, metalIncome: 0, powerIncome: 0, health: 0, name: 0, operational: false, attackCooldown: 0, queuedUnit: 0},
    {player: 0, square: 0, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0, metalIncome: 0, powerIncome: 0, health: 0, name: 0, operational: false, attackCooldown: 0, queuedUnit: 0},
    {player: 0, square: 0, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0, metalIncome: 0, powerIncome: 0, health: 0, name: 0, operational: false, attackCooldown: 0, queuedUnit: 0},
    {player: 0, square: 0, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0, metalIncome: 0, powerIncome: 0, health: 0, name: 0, operational: false, attackCooldown: 0, queuedUnit: 0},
    {player: 0, square: 0, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0, metalIncome: 0, powerIncome: 0, health: 0, name: 0, operational: false, attackCooldown: 0, queuedUnit: 0},
    {player: 0, square: 0, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0, metalIncome: 0, powerIncome: 0, health: 0, name: 0, operational: false, attackCooldown: 0, queuedUnit: 0},
    {player: 0, square: 0, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0, metalIncome: 0, powerIncome: 0, health: 0, name: 0, operational: false, attackCooldown: 0, queuedUnit: 0},
    {player: 0, square: 0, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0, metalIncome: 0, powerIncome: 0, health: 0, name: 0, operational: false, attackCooldown: 0, queuedUnit: 0},
    {player: 0, square: 0, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0, metalIncome: 0, powerIncome: 0, health: 0, name: 0, operational: false, attackCooldown: 0, queuedUnit: 0},
    {player: 0, square: 0, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0, metalIncome: 0, powerIncome: 0, health: 0, name: 0, operational: false, attackCooldown: 0, queuedUnit: 0},
    {player: 0, square: 0, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0, metalIncome: 0, powerIncome: 0, health: 0, name: 0, operational: false, attackCooldown: 0, queuedUnit: 0},
    {player: 0, square: 0, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0, metalIncome: 0, powerIncome: 0, health: 0, name: 0, operational: false, attackCooldown: 0, queuedUnit: 0},
    {player: 0, square: 0, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0, metalIncome: 0, powerIncome: 0, health: 0, name: 0, operational: false, attackCooldown: 0, queuedUnit: 0},
    {player: 0, square: 0, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0, metalIncome: 0, powerIncome: 0, health: 0, name: 0, operational: false, attackCooldown: 0, queuedUnit: 0},
    {player: 0, square: 0, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0, metalIncome: 0, powerIncome: 0, health: 0, name: 0, operational: false, attackCooldown: 0, queuedUnit: 0},
    {player: 0, square: 0, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0, metalIncome: 0, powerIncome: 0, health: 0, name: 0, operational: false, attackCooldown: 0, queuedUnit: 0},
    {player: 0, square: 0, metalRequired: 0, powerRequired: 0, maxMetalSpend: 0, maxPowerSpend: 0, metalIncome: 0, powerIncome: 0, health: 0, name: 0, operational: false, attackCooldown: 0, queuedUnit: 0}]
// Pre-declares an array of twenty building slots (meaning each player can have a
// maximum of 10 buildings).
let units = [{player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0}]
// Pre-declares an array of fourty unit slots (meaning each player can have a maximum
// of 20 units).
let forgottenIslands = [
// Creates a 2D array for the Forgotten Islands map
    [{terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0},
        {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0},
        {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0},
        {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}],
    [{terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0},
        {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}],
    [{terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0},
        {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}],
    [{terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0},
        {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}],
    [{terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'm', terrain: "metal", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'm', terrain: "metal", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}],
    [{terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}],
    [{terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'm', terrain: "metal", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'm', terrain: "metal", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}],
    [{terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'f', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'f', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'f', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'f', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}],
    [{terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'f', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'f', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'f', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'f', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}],
    [{terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'f', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'f', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}],
    [{terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'm', terrain: "metal", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'm', terrain: "metal", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}],
    [{terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}],
    [{terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}],
    [{terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}],
    [{terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}],
    [{terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'm', terrain: "metal", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'm', terrain: "metal", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}],
    [{terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}],
    [{terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}],
    [{terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}],
    [{terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}],
    [{terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}],
    [{terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}],
    [{terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0},
        {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0},
        {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0},
        {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0},
        {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}],
    [{terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0},
        {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0},
        {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0},
        {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0},
        {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0},
        {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}],
    [{terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0},
        {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0},
        {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0},
        {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0},
        {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0},
        {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}, {terrainLetter: 'd', terrain: "deepSea", playerControl: 0, name: 0}],
    ["6-6", "6-51"]
]
let desertStorm = [
    [{terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}],
    [{terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}],
    [{terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'm', terrain: "metal", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'm', terrain: "metal", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}],
    [{terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'm', terrain: "metal", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'm', terrain: "metal", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}],
    [{terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0},
        {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0},
        {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}],
    [{terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0},
        {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0},
        {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}],
    [{terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}],
    [{terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'm', terrain: "metal", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'm', terrain: "metal", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}],
    [{terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}],
    [{terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}],
    [{terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}],
    [{terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}],
    [{terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}],
    [{terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'f', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0},
        {terrainLetter: 'w', terrain: "shallowSea", playerControl: 0, name: 0}, {terrainLetter: 'f', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}],
    [{terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}],
    [{terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}],
    [{terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}],
    [{terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}],
    [{terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'm', terrain: "metal", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'm', terrain: "metal", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}],
    [{terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}],
    [{terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'm', terrain: "metal", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'm', terrain: "metal", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}],
    [{terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 'r', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}],
    [{terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}],
    [{terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}],
    [{terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 's', terrain: "land", playerControl: 0, name: 0}],
    ["3-6", "3-51"]
]
let greenPlains = [
    [{terrainLetter: 'c', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 'c', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 'c', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 'c', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 'c', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 'c', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}],
    [{terrainLetter: 'c', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 'c', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 'c', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 'c', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}],
    [{terrainLetter: 'c', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 'c', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'm', terrain: "metal", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}],
    [{terrainLetter: 'c', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}],
    [{terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'm', terrain: "metal", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}],
    [{terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'f', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'f', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}],
    [{terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'f', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'f', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'f', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'f', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'f', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'f', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'f', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}],
    [{terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'f', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'f', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}],
    [{terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'm', terrain: "metal", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}],
    [{terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}],
    [{terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}],
    [{terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'm', terrain: "metal", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}],
    [{terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}],
    [{terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'm', terrain: "metal", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}],
    [{terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}],
    [{terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'm', terrain: "metal", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}],
    [{terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'f', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'f', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}],
    [{terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'f', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'f', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'f', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'f', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'f', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'f', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'f', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}],
    [{terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'f', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'f', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}],
    [{terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}],
    [{terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'm', terrain: "metal", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}],
    [{terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'c', terrain: "impassable", playerControl: 0, name: 0}],
    [{terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'm', terrain: "metal", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'c', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 'c', terrain: "impassable", playerControl: 0, name: 0}],
    [{terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'c', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 'c', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 'c', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 'c', terrain: "impassable", playerControl: 0, name: 0}],
    [{terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0},
        {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'g', terrain: "land", playerControl: 0, name: 0}, {terrainLetter: 'c', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 'c', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 'c', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 'c', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 'c', terrain: "impassable", playerControl: 0, name: 0}, {terrainLetter: 'c', terrain: "impassable", playerControl: 0, name: 0}],
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
    maxMetalSpend: 16, maxPowerSpend: 22, terrain1: "land", aRange: 6, damage: 8, name: "turret", attackCooldown: 1}
let heavyArtillery = {symbol: "ፏ", type: 6, health: 28, metalRequired: 120, powerRequired: 180,
    maxMetalSpend: 30, maxPowerSpend: 45, terrain1: "land", attackCooldown: 2, damage: 20, name: "heavyArtillery"}
// Declares 6 building types and the general data specific to each type
let commandUnit = {symbol: "ደ", type: 7, health: 32, metalrequired: 0, powerRequired: 0,
    maxMetalSpend: 0, maxPowerSpend: 0, terrain1: "land", terrain2: "shallowSea",
    aRange: 18, mRange: 12, damage: 6, name:"commandUnit", attackCooldown: 1}
let tank = {symbol: "Ⱝ", type: 8, health: 10, metalRequired: 10, powerRequired: 14,
    maxMetalSpend: 5, maxPowerSpend: 7, terrain1: "land", aRange: 7, mRange: 5,
    damage: 7, name: "tank", attackCooldown: 1}
let labDroid = {symbol: "Ѫ", type: 9, health: 14, metalRequired: 12, powerRequired: 18,
    maxMetalSpend: 4, maxPowerSpend: 6, terrain1: "land", terrain2: "metal",
    aRange: 9, mRange: 6, damage: 9, name: "labDroid", attackCooldown: 1}
let missileCarrier = {symbol: "ᛣ ", type: 10, health: 8, metalRequired: 36, powerRequired: 60,
    maxMetalSpend: 12, maxPowerSpend: 20, terrain1: "land", aRange: 18, mRange: 6, damage: 12,
    name: "missileCarrier", attackCooldown: 2}
let detonatingSphere = {symbol: "ᵹ", type: 11, health: 80, metalRequired: 44, powerRequired: 84,
    maxMetalSpend: 11, maxPowerSpend: 21, terrain1: "land", aRange: 1, mRange: 1, damage: 28,
    name:"detonatingSphere", attackCooldown: 1}
let destroyer = {symbol: "₣", type: 12, health: 16, metalRequired: 16, powerRequired: 22,
    maxMetalSpend: 8, maxPowerSpend: 11, terrain1: "shallowSea", terrain2: "deepSea",
    aRange: 8, mRange: 7, damage: 10, name: "destroyer", attackCooldown: 1}
let cruiser = {symbol: "₸", type: 13, health: 20, metalRequired: 24, powerRequired: 39,
    maxMetalSpend: 8, maxPowerSpend: 13, terrain1: "shallowSea", terrain2: "deepSea",
    aRange: 20, mRange: 6, damage: 12, name: "cruiser", attackCooldown: 1}
let battleship = {symbol: "₮", type: 14, health: 32, metalRequired: 48, powerRequired: 72,
    maxMetalSpend: 12, maxPowerSpend: 18, terrain1: "shallowSea", terrain2: "deepSea",
    aRange: 16, mRange: 5, damage: 22, name: "battleship", attackCooldown: 2}
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
            colourSelector(0, false)
// Executes colourSelector to determine the colour of each div, based of its terrain
            container.appendChild(div)
// Adds the div to the parent div to be displayed in a grid
        }
    }
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
    units[0].health = commandUnit.health
    squareId = commander1
    selectedUnit = commandUnit
    colour = sessionStorage.playerColour
    playerTurn = 1
    unitPlacement()
    units[1].player = 2
    units[1].square = commander2
    units[1].health = commandUnit.health
    squareId = commander2
    selectedUnit = commandUnit
    colour = sessionStorage.enemyColour
    playerTurn = 2
    unitPlacement()
    playerTurn = 0
// Makes the "Metal:" and "Power:" text the colours selected by the players earlier
}

function unitRemoval(query){
    mapDiv = document.getElementById(previousSquareId)
    splitId(previousSquareId)
    mapDiv.innerHTML = ""
    map[mapY][mapX].name = 0
    map[mapY][mapX].playerControl = 0
    colourSelector(previousSquareId, true)
    deselectUnit(1)
    squares = []
}
function unitMoved(){
    searchUnits(2)
    units[globalI].square = squareId
    units[globalI].alreadyMoved = true
    console.log(units)
}
function unitPlacement(){
    mapDiv = document.getElementById(squareId)
    mapDiv.style.color = colour
    splitId(squareId)
    map[mapY][mapX].playerControl = playerTurn
    map[mapY][mapX].name = selectedUnit.name
    map[mapY][mapX].terrain = "occupied-unit"
    mapDiv.innerText = selectedUnit.symbol
    selectedUnit = 0
    placingConstructedUnit = false
}
function deselectUnit(query){
    buttonRemoval()
    document.getElementById("unitHealth").innerHTML = ""
    if(squares.length>1){
        for(let i=0;i<squares.length;i+=2){
            globalColour = squares[i+1]
            splitId(squares[i])
            mapDiv = document.getElementById(squares[i])
            colourSelector(squares[i], false)
        }
    }
    if(query==2){
        selectedUnit = 0
        selectedBuilding = 0
    }
}

function searchUnits(check){
    let position = false
    for(let i=0;i<units.length;i++){
        if(check==1||check==4){
            if(units[i].player==playerTurn && units[i].square==squareId){
                console.log(units[0].player)
                console.log(units[i].player)
                console.log(units[i].square)
                if(check==4){
                    if(units[i].alreadyMoved==true){
                        position = true
                        break
                    }
                }
                else if(check==1){
                    alert("TRUE")
                    position = true
                    break
                }
            }
        }
        else if(check==2||check==5||check==6){
            if(units[i].player==playerTurn && units[i].square==previousSquareId){
                if(check==5){
                    if(units[i].alreadyMoved==true){
                        position = true
                        break
                    }
                }
                else if(check==6){
                    if(units[i].attackCooldown>0){
                        position = true
                        break
                    }
                }
                else if(check==2){
                    globalI = i
                    break
                }
            }
        }
        else if(check==3){
            if(units[i].player!=playerTurn && units[i].square==squareId){
                position = true
                break
            }
        }
    }
    return position
}
function searchBuildings(check){
    let position = false
    for(let i=0;i<buildings.length;i++){
        if(check==1){
            if(buildings[i].player!=0&&buildings[i].square==squareId){
                position = true
                break
            }
        }
        else if(check==2||check==3){
            if(buildings[i].player==playerTurn&&buildings[i].square==squareId){
                if(check==2){
                    position = true
                    break
                }
                else if(check==3){
                    globalI = i
                    break
                }
            }
        }
    }
    return position
}

function clickedDiv(id){
    squareId = id
    splitId(squareId)
    console.log(map[mapY][mapX].terrain)
    console.log("squareId "+squareId)
    console.log("globalI "+globalI)
    let div = document.getElementById(squareId)
    if(playerTurn==0){
        alert("Click the Next Turn button to start a player's turn")
    }
// Ensures the players have started their turn as a building can't be built by nobody
    else if(chosenBuilding==0&&selectedUnit==0&&selectedBuilding==0){
        if(searchBuildings(2)) {
            if(div.innerHTML=="ጁ"){
                selectedBuilding = landFactory
                unitUIDisplay(1)
                searchBuildings(3)
                console.log(globalI)
                if(buildings[globalI].operational){
                    unitConstruction(1)
                }
                else{
                    alert("This building hasn't finished construction so you cannot start constructing units")
                    deselectUnit(2)
                }
            }
            else if(div.innerHTML=="ᎇ"){
                selectedBuilding = navalFactory
                unitUIDisplay(1)
                searchBuildings(3)
                if(buildings[globalI].operational){
                    unitConstruction(1)
                }
                else{
                    alert("This building hasn't finished construction so you cannot start constructing units")
                    deselectUnit(2)
                }
            }
            else if(div.innerHTML=="ኡ"){
                selectedBuilding = turret
                unitUIDisplay(1)
                searchBuildings(3)
                if(buildings[globalI].operational){
                    alert("Selected a turret")
                    unitRange1(0, "land", "land", selectedBuilding.aRange, 0)
                }
                else{
                    alert("This building hasn't finished construction so you cannot start attacking enemy units or buildings")
                    deselectUnit(2)
                }
            }
            else if(div.innerHTML=="ፏ"){
                selectedBuilding = heavyArtillery
                unitUIDisplay(1)
                searchBuildings(3)
                if(buildings[globalI].operational){
                    if(buildings[globalI].attackCooldown>0){
                        alert("You have already attacked with that building")
                        deselectUnit(2)
                    }
                    else{
                        unitRange1(0, land, land, selectedBuilding.aRange, 0)
                    }

                }
                else{
                    alert("This building hasn't finished construction so you cannot start attacking enemy units or buildings")
                    deselectUnit(2)
                }
            }
            else if(div.innerHTML=="ዧ"){
                selectedBuilding = metalExtractor
                searchBuildings(3)
                if(buildings[globalI].operational){
                    alert("This building is providing resources to you. Protect it from the enemy")
                }
                else{
                    alert("This building hasn't finished construction so it doesn't provide you with resources")
                    deselectUnit(2)
                }
            }
            else if(div.innerHTML=="ቸ"){
                selectedBuilding = powerPlant
                searchBuildings(3)
                if(buildings[globalI].operational){
                    alert("This building is providing resources to you. Protect it from the enemy")
                }
                else{
                    alert("This building hasn't finished construction so it doesn't provide you with resources")
                    deselectUnit(2)
                }
            }
            else{
                alert("That is not your building and you haven't selected a unit to attack it")
            }
        }
        else if(searchUnits(1)) {
            selectedUnit = map[mapY][mapX].name
            selectUnit(selectedUnit)
            unitUIDisplay(2)
        }
        else if(searchUnits(3)){
            alert("That is not your unit and you haven't selected a unit to attack it")
        }
        else if(searchBuildings(1)){
            alert("That is not your building and you haven't selected a building to attack it")
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
    else if(selectedBuilding!=0){
        if(selectedBuilding.name=="turret"||selectedBuilding.name=="heavyArtillery"){
            if(div.style.backgroundColor=="rgb(255, 0, 0)"&&
                (map[mapY][mapX].playerControl!=playerTurn&& map[mapY][mapX].playerControl!=0)){
                alert("Your building is attacking an enemy")
                attack()
            }
            else if(div.style.backgroundColor=="rgb(255, 0, 0)"){
                if(map[mapY][mapX].playerControl==playerTurn){
                    alert("You cannot attack your own units")
                }
                else if(map[mapY][mapX].playerControl==0){
                    alert("There is nothing to attack")
                }
            }
            else if(div.style.backgroundColor!="rgb(255, 0, 0)"){
                alert("You cannot attack that far away")
            }
            else if(map[mapY][mapX].playerControl==playerTurn){
                alert("You cannot attack your own units")
            }
        }
    }
    else if(selectedUnit!=0){
        if(map[mapY][mapX].terrain=="occupied-unit"||map[mapY][mapX].terrain=="occupied-building"){
            if(placingConstructedUnit==true&&map[mapY][mapX].playerControl!=0){
                alert("You cannot place a unit on a square already occupied")
            }
            else if(map[mapY][mapX].playerControl!=playerTurn){
                unitUIDisplay(3)
            }
            else{
                alert("You cannot attack your own units or buildings")
            }
        }
        else if(map[mapY][mapX].terrain==selectedUnit.terrain1||map[mapY][mapX].terrain==selectedUnit.terrain2){
            unitUIDisplay(4)
        }
        else{
            alert("Your unit has nothing to attack and can't move there")
        }
    }
// The id is assigned to a global variable to be used across numerous functions more easily
}

function unitConstruction(option){
    if(option==1){
        if(selectedBuilding.name=="landFactory"){
            buttonCreation(2)
        }
        else if(selectedBuilding.name=="navalFactory"){
            buttonCreation(3)
        }
    }
    else if(option==2){
        countUnits()
        if(canBuild){
            firstEmptyUnit()
            console.log("Unit has been queued")
            findEconomy()
            updateResources()
            if(playerTurn==1){
                document.getElementById("p1UnitLimit").innerHTML = (ownedUnits+1)+"/"+((units.length/2)-1)
            }
            else if(playerTurn==2){
                document.getElementById("p2UnitLimit").innerHTML = (ownedUnits+1)+"/"+((units.length/2)-1)
            }
        }
    }
}

function unitUIDisplay(check){
    let div=document.getElementById(squareId)
    if(check==1){
// "check" is used to see what the function should be doing
        alert("You have selected a building")
        document.getElementById("unitHealth").innerHTML = buildings[globalI].health
    }
    else if(check==2){
        alert("You have selected a unit")
        document.getElementById("unitHealth").innerHTML = units[globalI].health
        previousSquareId = squareId
        unitRange1(0, selectedUnit.terrain1, selectedUnit.terrain2, selectedUnit.aRange, selectedUnit.mRange)
    }
    else if(check==3){
        if(searchUnits(6)){
            alert("You have already attacked with that unit")
        }
        else{
            alert("You are attacking a unit")
            searchUnits(2)
            units[globalI].attackCooldown = selectedUnit.attackCooldown
            selectedUnit = 0
            document.getElementById("unitHealth").innerHTML = ""
            deselectUnit()
        }
    }
    else if(check==4){
        alert("You are moving a unit")
        if(div.style.backgroundColor=="rgb(255, 0, 255)"){
            if(!searchUnits(5)){
                alert("Correct terrain")
                if(playerTurn==1){
                    if(!placingConstructedUnit){
                        unitRemoval()
                    }
                    unitMoved()
                    colour = sessionStorage.playerColour
                    unitPlacement()
                    deselectUnit()
                    console.log(units)
                }
                else{
                    if(!placingConstructedUnit){
                        unitRemoval()
                    }
                    unitMoved()
                    colour = sessionStorage.enemyColour
                    unitPlacement()
                    deselectUnit()
                }
            }
            else{
                alert("You have already moved with that unit")
            }
        }
        else{
            alert("You cannot move units outside their movement range")
        }
    }
}

function selectBuilding(name){
    if(name=="metalExtractor"||name==1){
        selectedBuilding = metalExtractor
    }
    else if(name="powerPlant"||name==2){
        selectedBuilding = powerPlant
    }
    else if(name="landFactory"||name==3){
        selectedBuilding = landFactory
    }
    else if(name="navalFactory"||name==4){
        selectedBuilding = navalFactory
    }
    else if(name="turret"||name==5){
        selectedBuilding = turret
    }
    else if(name="heavilyArtillery"||name==6){
        selectedBuilding = heavyArtillery
    }
}
function selectUnit(name){
    if(name=="commandUnit"||name==7){
        selectedUnit=commandUnit
        buttonCreation(1)
    }
    else if(name=="tank"||name==8){
        selectedUnit=tank
    }
    else if(name=="labDroid"||name==9){
        selectedUnit=labDroid
    }
    else if(name=="missileCarrier"||name==10){
        selectedUnit=missileCarrier
    }
    else if(name=="detonatingSphere"||name==11){
        selectedUnit=detonatingSphere
    }
    else if(name=="destroyer"||name==12){
        selectedUnit=destroyer
    }
    else if(name=="cruiser"||name==13){
        selectedUnit=cruiser
    }
    else if(name=="battleship"||name==14){
        selectedUnit=battleship
    }
}

function buttonRemoval(){
    for(let i=1;i<7;i++){
        let btn = document.getElementById("button"+i)
        btn.onclick = ""
        btn.innerHTML = ""
        btn.title = ""
    }
}
function buttonCreation(check){
    let container = document.getElementById("buildOptions")
    if(check==1){
        let btn = document.getElementById("button1")
        btn.innerHTML = metalExtractor.symbol
        btn.onclick = function(){building1Selected()}
        btn.title = "Metal Extractor. For 2 turns, requires 3 Metal and 4 Power. Produces 8 Metal per turn."
        btn = document.getElementById("button2")
        btn.innerHTML = powerPlant.symbol
        btn.onclick = function(){building2Selected()}
        btn.title = "Power Plant. For 1 turn, requires 5 Metal and 8 Power. Produces 12 Power per turn."
        btn = document.getElementById("button3")
        btn.innerHTML = landFactory.symbol
        btn.onclick = function(){building3Selected()}
        btn.title = "Land Factory. For 2 turns, requires 8 Metal and 14 Power. Produces units you choose."
        btn = document.getElementById("button4")
        btn.innerHTML = navalFactory.symbol
        btn.onclick = function(){building4Selected()}
        btn.title = "Naval Factory. For 3 turns, requires 10 Metal and 16 Power. Produces units you choose."
        btn = document.getElementById("button5")
        btn.innerHTML = turret.symbol
        btn.onclick = function(){building5Selected()}
        btn.title = "Turret. For 2 turns, requires 16 Metal and 22 Power. Attacks enemy units you choose."
        btn = document.getElementById("button6")
        btn.innerHTML = heavyArtillery.symbol
        btn.onclick = function(){building6Selected()}
        btn.title = "Heavy Artillery. For 4 turns, requires 30 Metal and 45 Power. Attacks enemy units you choose."
    }
    else if(check==2){
        let btn = document.getElementById("button1")
        btn.innerHTML = tank.symbol
        btn.title = "Tank. A basic land unit, small range and damage. For 2 turns, 5 Metal and 7 Power"
        btn.onclick = function(){unitSelected(8)}
        btn = document.getElementById("button2")
        btn.innerHTML = labDroid.symbol
        btn.title = "Lab Droid. Small damage but greater range. For 3 turns, 4 Metal and 6 Power"
        btn.onclick = function(){unitSelected(9)}
        btn = document.getElementById("button3")
        btn.innerHTML = missileCarrier.symbol
        btn.title = "Missile Carrier. Medium damage but very high range. For 3 turns, 12 Metal and 20 Power"
        btn.onclick = function(){unitSelected(10)}
        btn = document.getElementById("button4")
        btn.innerHTML = detonatingSphere.symbol
        btn.title = "Detonationg Sphere. Very high damage but tiny range. For 4 turns, 11 Metal and 21 Power"
        btn.onclick = function(){unitSelected(11)}
    }
    else if(check==3){
        let btn = document.getElementById("button1")
        btn.innerHTML = destroyer.symbol
        btn.title = "Destroyer. Basic naval unit, low damage and range. For 2 turns, 8 Metal and 11 Power"
        btn.onclick = function(){unitSelected(12)}
        btn = document.getElementById("button2")
        btn.innerHTML = cruiser.symbol
        btn.title = "Cruiser. Medium damage but large range. For 3 turns, 8 Metal and 13 Power"
        btn.onclick = function(){unitSelected(13)}
        btn = document.getElementById("button3")
        btn.innerHTML = battleship.symbol
        btn.title = "Battleship. High damage and range. For 4 turns, 12 Metal and 18 Power"
        btn.onclick = function(){unitSelected(14)}
    }
}

function unitRange1(constructed, terrain1, terrain2, aRange, mRange){
    let xId = 0
    let yId = 0
    let id = ""
    let range = 0
    if(aRange>mRange){
        range = aRange
    }
    else{
        range = mRange
    }
    for(let i=0;i<=range;i++){
        xId=parseInt(squareId.slice(squareId.indexOf("-")+1))+i
        unitRange2(constructed, range, i, xId, yId, id, mRange, terrain1, terrain2)
        xId = xId - 2*i
        unitRange2(constructed, range, i, xId, yId, id, mRange, terrain1, terrain2)
    }
}
function unitRange2(constructed, range, i, xId, yId, id, mRange, terrain1, terrain2){
    for(let z=range-i;z>=0;z--){
        yId=parseInt(squareId.slice(0, squareId.indexOf("-")))+z
        if((yId>=0&&yId<25)&&(xId>=0&&xId<58)){
            id = yId.toString()+"-"+xId.toString()
            rangeColouring(constructed, i, z, id, mRange, terrain1, terrain2)
            document.getElementById(id).style.backgroundColor = colour
            squares.push(id)
            squares.push(colour)
        }
        yId = yId - 2*z
        if((yId>=0&&yId<25)&&(xId>=0&&xId<58)){
            id = yId.toString()+"-"+xId.toString()
            rangeColouring(constructed, i, z, id, mRange, terrain1, terrain2)
            document.getElementById(id).style.backgroundColor = colour
            squares.push(id)
            squares.push(colour)
        }
    }
}
function rangeColouring(constructed, i, z, id, mRange, terrain1, terrain2){
    if(constructed==1){
        console.log("constructed placement")
        document.getElementById(id).setAttribute("data-withinRange", "true")
        splitId(id)
        console.log(terrain1, terrain2)
        if(map[mapY][mapX].terrain==terrain1||map[mapY][mapX].terrain==terrain2){
            colour = "#ff00ff"
        }
        else{
            colour = "#000000"
        }
    }
    else if(id==previousSquareId){
        colour = "#000000"
    }
    else if(id!=previousSquareId){
        if((i+z)<=mRange){
            document.getElementById(id).setAttribute("data-withinRange", "true")
        }
        splitId(id)
        if(map[mapY][mapX].playerControl==playerTurn){
            colour = "#000000"
        }
        else if(map[mapY][mapX].playerControl!=playerTurn&&map[mapY][mapX].playerControl!=0){
            colour = "#000000"
        }
        else if(map[mapY][mapX].terrain==terrain1||map[mapY][mapX].terrain==terrain2){
            if((i+z)<=mRange){
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
            console.log("Construction Started "+chosenBuilding.name)
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
    deselectUnit(2)
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

function colourSelector(id, replace){
    if(playerTurn!=0){
        splitId(id)
    }
    checked = map[mapY][mapX].terrainLetter
// This function executes when function "display" tells it to
    if(checked=='w'){
        if(replace){
            map[mapY][mapX].terrain = "shallowSea"
            map[mapY][mapX].playerControl = 0
        }
        mapDiv.style.backgroundColor = '#0be0cd'
        mapDiv.title = "Terrain: Shallow Water, only traversable by the command unit and naval units"
    }
    else if(checked=='s'){
        if(replace){
            map[mapY][mapX].terrain = "land"
            map[mapY][mapX].playerControl = 0
        }
        mapDiv.style.backgroundColor = '#e2f075'
        mapDiv.title = "Terrain: Sand, only traversable by land units"
    }
    else if(checked=='g'){
        if(replace){
            map[mapY][mapX].terrain = "land"
            map[mapY][mapX].playerControl = 0
        }
        mapDiv.style.backgroundColor = '#00c45c'
        mapDiv.title = "Terrain: Grass, only traversable by land units"
    }
    else if(checked=='m'){
        if(replace){
            map[mapY][mapX].terrain = "metal"
            map[mapY][mapX].playerControl = 0
        }
        mapDiv.style.backgroundColor = '#939993'
        mapDiv.title = "Terrain: Exposed Metal, Impassable"
    }
    else if(checked=='f'){
        if(replace){
            map[mapY][mapX].terrain = "land"
            map[mapY][mapX].playerControl = 0
        }
        mapDiv.style.backgroundColor = '#184807'
        mapDiv.title = "Terrain: Forest, only traversable by land units"
    }
    else if(checked=='d'){
        if(replace){
            map[mapY][mapX].terrain = "deepSea"
            map[mapY][mapX].playerControl = 0
        }
        mapDiv.style.backgroundColor = '#062480'
        mapDiv.title = "Terrain: Deep Water, only traversable by naval units"
    }
    else if(checked=='r'){
        if(replace){
            map[mapY][mapX].terrain = "impassable"
            map[mapY][mapX].playerControl = 0
        }
        mapDiv.style.backgroundColor = '#ac6011'
        mapDiv.title = "Terrain: Desert Rock, Impassable"
    }
    else if(checked=='c'){
        if(replace){
            map[mapY][mapX].terrain = "impassable"
            map[mapY][mapX].playerControl = 0
        }
        mapDiv.style.backgroundColor = '#3b3a3a'
        mapDiv.title = "Terrain: Cliff, Impassable"
    }
// Assigning the correct background colour to a div based of
// the value in array map
// The terrain type and what type of unit can pass through it is also assigned
}

function nextTurn(){
    buttonRemoval()
    deselectUnit(2)
    for(let i = 0;i<units.length;i++){
        if(units[i].player==playerTurn){
            units[i].alreadyMoved = false
            if(units[i].attackCooldown>0){
                units[i].attackCooldown--
            }
        }
    }
    chosenBuilding = 0
    selectedBuilding = 0
    chosenUnit = 0
    selectedUnit = 0
    previousSquareId = 0
    squareId = 0
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
    for(let i=0;i<buildings.length;i++){
// This function must run 20 times to check each entry in the "buildings" array
        if(buildings[i].player==playerTurn){
            if(buildings[i].operational){
// Checks to see if the current buildings belongs to the player and if it has finished construction
// This is where resources will be earned
                if(buildings[i].name==metalExtractor.name){
                    earnedMetal+=metalExtractor.metalIncome
// If the constructed building is a Metal Extractor, its income is added to "earnedMetal"
// to determine the total earned Metal
                }
                else if(buildings[i].name==powerPlant.name){
                    earnedPower+=powerPlant.powerIncome
// If the constructed building is a Power Plant, its income is added to "earnedPower"
// to determine the total earned power
                }
            }
            else if(buildings[i].player==playerTurn && (!buildings[i].operational)){
// Checks to see if the current building belongs to the player and it it's still under construction
// This is where resources will be spent
                spentMetal+=buildings[i].maxMetalSpend
                spentPower+=buildings[i].maxPowerSpend
// Different values will be assigned to "spentMetal" and "spentPower" depending on
// the building type as different buildings can spend different amounts per turn
            }
        }
    }
    for(let i=2;i<units.length;i++){
        if(units[i].player==playerTurn&&
            (units[i].metalRequired>0||units[i].powerRequired>0)){
            spentMetal+=units[i].maxMetalSpend
            spentPower+=units[i].maxPowerSpend
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
// This part runs 20 times, once for each entry in the "buildings" array
            if(buildings[i].player==playerTurn && (buildings[i].metalRequired>0||buildings[i].powerRequired>0)){
// Checks to see if the building belongs to the player and hasn't finished construction
                buildings[i].metalRequired-=(buildings[i].maxMetalSpend*resourceMultiplier)
// Subtracts the amount of Metal able to be spent (decided by multiplying "metal" and the
// multiplier together) from the amount still required
                buildings[i].powerRequired-=(buildings[i].maxPowerSpend*resourceMultiplier)
// Subtracts the amount of Power able to be spent (decided by multiplying "power" and the
// multiplier together) from the amount still required
                if(buildings[i].metalRequired<=0&&buildings[i].powerRequired<=0){
                    console.log("Construction Complete")
                    buildings[i].operational = true
                }
            }
        }
    }
    for(let i=2;i<units.length;i++){
        if(units[i].player==playerTurn&&(units[i].metalRequired>0||units[i].powerRequired>0)){
            units[i].metalRequired=units[i].metalRequired-(units[i].maxMetalSpend*resourceMultiplier)
            units[i].powerRequired=units[i].powerRequired-(units[i].maxPowerSpend*resourceMultiplier)
            if(units[i].metalRequired<=0&&units[i].powerRequired<=0){
                units[i].square = buildings[units[i].queuedFactory].square
                buildings[units[i].queuedFactory].queuedUnit = 0
                units[i].queuedFactory = 0
                alert("Place your unit")
                selectedBuilding = 0
                selectedUnit = units[i].name
                console.log(selectedUnit)
                selectUnit(selectedUnit)
                console.log(selectedUnit)
                placingConstructedUnit = true
                previousSquareId = units[i].square
                squareId = previousSquareId
                unitRange1(1, selectedUnit.terrain1, selectedUnit.terrain2, 2, 2)
            }
        }
    }
    findEconomy()
    updateResources()
}

function unitSelected(unit){
    if(unit==8){
        chosenUnit = tank
        unitConstruction(2)
    }
    else if(unit==9){
        chosenUnit = labDroid
        unitConstruction(2)
    }
    else if(unit==10){
        chosenUnit = missileCarrier
        unitConstruction(2)
    }
    else if(unit==11){
        chosenUnit = detonatingSphere
        unitConstruction(2)
    }
    else if(unit==12){
        chosenUnit = destroyer
        unitConstruction(2)
    }
    else if(unit==13){
        chosenUnit = cruiser
        unitConstruction(2)
    }
    else if(unit==14){
        chosenUnit = battleship
        unitConstruction(2)
    }
}
function building1Selected(){
    if(selectedUnit!=commandUnit){
        alert("You must select your command unit before starting construction of a building")
    }
    else if(playerTurn==0){
        alert("Click the Next Turn button to start a player's turn")
    }
    else{
        selectedUnit = 0
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
        selectedUnit = 0
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
        selectedUnit = 0
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
        selectedUnit = 0
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
        selectedUnit = 0
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
        selectedUnit = 0
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
    if (ownedBuildings==buildings.length/2){
        alert("You have built your maximum number of buildings.")
    }
// If the amount of owned buildings = 10, then the player can't build anymore
    else if(ownedBuildings<buildings.length/2){
        canBuild = true
    }
// If the amount of owned buildings is < 10, "canBuild" is set to true to let them build more
}
function countUnits(){
    canBuild = false
    ownedUnits = 0
    for(let i=2;i<units.length;i++){
        if(units[i].player==playerTurn){
            ownedUnits++
        }
    }
    if(ownedUnits==(units.length/2)-1){
        alert("You have built or queued the maximum number of units")
    }
    else if(ownedUnits<(units.length/2)-1){
        searchBuildings(3)
        if(buildings[globalI].queuedUnit!=0){
            alert("That factory is already constructing a unit")
        }
    else{
            canBuild = true
        }
    }
}

function firstEmptyBuilding(){
    for(let i=0;i<buildings.length;i++){
// Runs 20 times to check each entry in the "buildings" array
        if(buildings[i].player==0){
 // This runs if the entry doesn't belong to a player yet
            let div=document.getElementById(squareId)
            buildings[i].player = playerTurn
            buildings[i].square = squareId
            buildings[i].metalRequired = chosenBuilding.metalRequired
            buildings[i].powerRequired = chosenBuilding.powerRequired
            buildings[i].maxMetalSpend = chosenBuilding.maxMetalSpend
            buildings[i].maxPowerSpend = chosenBuilding.maxPowerSpend
            buildings[i].metalIncome = chosenBuilding.metalIncome
            buildings[i].powerIncome = chosenBuilding.powerIncome
            buildings[i].health = chosenBuilding.health
            buildings[i].name = chosenBuilding.name
            buildings[i].operational = false
            buildings[i].attackCooldown = 0
            buildings[i].queuedUnit = 0
// The stats specific to each building get assigned values
            div.innerHTML = chosenBuilding.symbol
            div.style.fontSize = "1.5vw"
            div.style.textAlign = "center"
            splitId(buildings[i].square)
            map[mapY][mapX].terrain = "occupied-building"
            map[mapY][mapX].name = chosenBuilding.name
            map[mapY][mapX].playerControl = playerTurn
// The building is then displayed on the map in the clicked div
            if(playerTurn==1){
                div.style.color = sessionStorage.playerColour
            }
            else{
                div.style.color = sessionStorage.enemyColour
            }
// The correct colour for the building is then selected
            break
// When the first unowned slot is found, the loop breaks to leave the rest available
        }
    }
}
function firstEmptyUnit(){
    let queuedUnits = 0
    for(let i=2;i<units.length;i++){
        if(units[i].player==0){
            buildings[globalI].queuedUnit = i
            units[i].player = playerTurn
            units[i].metalRequired = chosenUnit.metalRequired
            units[i].powerRequired = chosenUnit.powerRequired
            units[i].maxMetalSpend = chosenUnit.maxMetalSpend
            units[i].maxPowerSpend = chosenUnit.maxPowerSpend
            units[i].health = chosenUnit.health
            units[i].attackCooldown = 0
            units[i].alreadyMoved = false
            units[i].name = chosenUnit.name
            units[i].queuedFactory = globalI
            break
        }
    }
}

function terrainChecker(){
    splitId(squareId)
    let terrain = map[mapY][mapX].terrain
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

function splitId(id){
    mapX=parseInt(id.slice(id.indexOf("-")+1))
    mapY=parseInt(id.slice(0, id.indexOf("-")))
}