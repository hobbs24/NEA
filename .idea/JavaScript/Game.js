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
sessionStorage.p1BuildingsConstructed = 0
sessionStorage.p2BuildingsConstructed = 0
sessionStorage.p1BuildingsDestroyed = 0
sessionStorage.p2BuildingsDestroyed = 0
sessionStorage.p1UnitsConstructed = 0
sessionStorage.p2UnitsConstructed = 0
sessionStorage.p1UnitsDestroyed = 0
sessionStorage.p2UnitsDestroyed = 0
// Used to provide certain bits of data for the statistics page
let checked = 0
let p1MetalPerTurn = [0]
let p2MetalPerTurn = [0]
let p1SpentMetalPerTurn = [0]
let p2SpentMetalPerTurn = [0]
let p1TotalMetal = [0]
let p2TotalMetal = [0]
let p1TotalMetalSpent = [0]
let p2TotalMetalSpent = [0]
let p1PowerPerTurn = [0]
let p2PowerPerTurn = [0]
let p1SpentPowerPerTurn = [0]
let p2SpentPowerPerTurn = [0]
let p1TotalPower = [0]
let p2TotalPower = [0]
let p1TotalPowerSpent = [0]
let p2TotalPowerSpent = [0]
let p1Buildings = [0]
let p2Buildings = [0]
let p1Units = [0]
let p2Units = [0]
// Used to provide data for the graphs on the statistics webpage
let chosenBuilding = 0
let chosenUnit = 0
// Used to show if a building has been selected and which one
let ownedBuildings = 0
let ownedUnits = 0
// Used to show how many buildings the players have built, can't exceed the maximum (currently 10)
let squareId = 0
// Used to store the currently being focused on div id
let previousSquareId
// Used to store the id of the div the player previously clicked on, used for movement and attacking
let canBuild = 0
// Used to see if the player can build the selected building in the selected div or not
let resourceMultiplier = 0
// Used to store the multiplier that finds how much Metal and Power will actually be spent
// on a building per turn, as the player may be in a resource deficit
let percentage = 0
// Used to store the construction % of units and buildings
let selectedUnit = 0
let selectedBuilding = 0
// Store which unit or building is selected for easier manipualtion
let commander1 = 0
let commander2 = 0
// Used to store what div the command units should be placed in when the game starts
let colour = 0
// Used to store what colour a div should be
let globalI = 0
// Used to move the values from for loops around to other functions easily
let globalTitle = 0
// // Used when changing what is in the buttons
let placingConstructedUnit = false
// Used to decide whether the current unit being moved has just been constructed or not
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
let units = [{player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0, combatRating: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0, combatRating: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0, combatRating: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0, combatRating: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0, combatRating: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0, combatRating: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0, combatRating: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0, combatRating: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0, combatRating: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0, combatRating: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0, combatRating: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0, combatRating: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0, combatRating: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0, combatRating: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0, combatRating: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0, combatRating: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0, combatRating: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0, combatRating: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0, combatRating: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0, combatRating: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0, combatRating: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0, combatRating: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0, combatRating: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0, combatRating: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0, combatRating: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0, combatRating: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0, combatRating: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0, combatRating: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0, combatRating: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0, combatRating: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0, combatRating: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0, combatRating: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0, combatRating: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0, combatRating: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0, combatRating: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0, combatRating: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0, combatRating: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0, combatRating: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0, combatRating: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0, combatRating: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0, combatRating: 0},
    {player: 0, square: 0, alreadyMoved: false, attackCooldown: 0, metalRequired: 0, powerRequired: 0, health: 0, name: 0, maxMetalSpend: 0, maxPowerSpend: 0, queuedFactory: 0, combatRating: 0}]
// Pre-declares an array of fourty-two unit slots (meaning each player can have a maximum
// of 20 units as the first two get taken up by their command units).
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
// Creates 2D arrays for each map
// TrrainLetter represents a terrain type that affects the colour and what units can traverse it.
// Terrain represents the terrain of the square and whether there's a unit or building there
// PlayerControl represents what player has a unit or building in that square
// Name stores the name of the building or unit in that square
// The two pairs of numbers at the end represent where the command units should spawn.
let map = [25][58]
// Array map is declared to be the same size as the maps, gets assigned the user's choice of map later on
let mapDiv = 0
let mapX = 0
let mapY = 0
// mapDiv is used to store the div currently being worked on
// mapX and mapY store the x and y values for the grid
let squares = []
// An array to store div ids and the colour they should be, used when selecting a unit
let metalExtractor = {symbol: "ዧ", type: 1, health: 8, metalRequired: 6, powerRequired: 8,
    maxMetalSpend: 3, maxPowerSpend: 4, terrain1: "metal", metalIncome: 8, name: "metalExtractor"}
let powerPlant = {symbol: "ቸ", type: 2, health: 7, metalRequired: 5, powerRequired: 8,
    maxMetalSpend: 5, maxPowerSpend: 8, terrain1: "land", powerIncome: 12, name: "powerPlant"}
let landFactory = {symbol: "ጁ", type: 3, health: 16, metalRequired: 16, powerRequired: 28,
    maxMetalSpend: 8, maxPowerSpend: 14, terrain1: "land", name: "landFactory"}
let navalFactory = {symbol: "ᎇ", type: 4, health: 24, metalRequired: 30, powerRequired: 48,
    maxMetalSpend: 10, maxPowerSpend: 16, terrain1: "shallowSea", terrain2: "deepSea", name: "navalFactory"}
let turret = {symbol: "ኡ", type: 5, health: 18, metalRequired: 32, powerRequired: 44,
    maxMetalSpend: 16, maxPowerSpend: 22, terrain1: "land", attackRange: 6, damage: 8, name: "turret", attackCooldown: 1}
let heavyArtillery = {symbol: "ፏ", type: 6, health: 28, metalRequired: 120, powerRequired: 180,
    maxMetalSpend: 30, maxPowerSpend: 45, terrain1: "land", attackCooldown: 2, damage: 20, name: "heavyArtillery", attackRange: 80}
// Declares 6 building types and the general data specific to each type
let commandUnit = {symbol: "ደ", type: 7, health: 1, metalRequired: 0, powerRequired: 0,
    maxMetalSpend: 0, maxPowerSpend: 0, terrain1: "land", terrain2: "shallowSea",
    attackRange: 80, movementRange: 12, damage: 6, name:"commandUnit", attackCooldown: 1}
let tank = {symbol: "Ⱝ", type: 8, health: 10, metalRequired: 10, powerRequired: 14,
    maxMetalSpend: 5, maxPowerSpend: 7, terrain1: "land", attackRange: 7, movementRange: 5,
    damage: 7, name: "tank", attackCooldown: 1, combatRating: 20}
let labDroid = {symbol: "Ѫ", type: 9, health: 14, metalRequired: 12, powerRequired: 18,
    maxMetalSpend: 4, maxPowerSpend: 6, terrain1: "land", terrain2: "metal",
    attackRange: 9, movementRange: 6, damage: 9, name: "labDroid", attackCooldown: 1, combatRating: 30}
let missileCarrier = {symbol: "ᛣ ", type: 10, health: 8, metalRequired: 36, powerRequired: 60,
    maxMetalSpend: 12, maxPowerSpend: 20, terrain1: "land", attackRange: 18, movementRange: 6, damage: 12,
    name: "missileCarrier", attackCooldown: 2, combatRating: 45}
let detonatingSphere = {symbol: "ᵹ", type: 11, health: 80, metalRequired: 44, powerRequired: 84,
    maxMetalSpend: 11, maxPowerSpend: 21, terrain1: "land", attackRange: 1, movementRange: 1, damage: 28,
    name:"detonatingSphere", attackCooldown: 1, combatRating: 85}
let destroyer = {symbol: "₣", type: 12, health: 16, metalRequired: 16, powerRequired: 22,
    maxMetalSpend: 8, maxPowerSpend: 11, terrain1: "shallowSea", terrain2: "deepSea",
    attackRange: 8, movementRange: 7, damage: 10, name: "destroyer", attackCooldown: 1, combatRating: 35}
let cruiser = {symbol: "₸", type: 13, health: 20, metalRequired: 24, powerRequired: 39,
    maxMetalSpend: 8, maxPowerSpend: 13, terrain1: "shallowSea", terrain2: "deepSea",
    attackRange: 20, movementRange: 6, damage: 12, name: "cruiser", attackCooldown: 1, combatRating: 60}
let battleship = {symbol: "₮", type: 14, health: 32, metalRequired: 48, powerRequired: 72,
    maxMetalSpend: 12, maxPowerSpend: 18, terrain1: "shallowSea", terrain2: "deepSea",
    attackRange: 16, movementRange: 5, damage: 22, name: "battleship", attackCooldown: 2, combatRating: 95}
// Declares 8 unit types and the general data specific to each type    

let priorities = {metalExtractor: 0, powerPlant: 0, landUnit: 0, navalUnit: 0, possibleME: 0}
let playerStats = {metalExtractors: 0, powerPlants: 0, landCR: 0, navalCR: 0}
let computerStats = {metalExtractors: 0, powerPlants: 0, landCR: 0, navalCR: 0, units: 0}

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
// Sets these values for use in "colourSelector"
            colourSelector(0, true)
// Executes colourSelector to determine the colour of each div, based of its terrainLetter
            if(checked=='m'){
                priorities.possibleME++
            }
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
    // Sets the colours of certain parts of the webpage to the appropriate player's colour
    document.getElementById("p1BuildLimit").innerHTML = "0/"+(buildings.length/2)
    document.getElementById("p1UnitLimit").innerHTML = "0/"+((units.length/2)-1)
    document.getElementById("p2BuildLimit").innerHTML = "0/"+(buildings.length/2)
    document.getElementById("p2UnitLimit").innerHTML = "0/"+((units.length/2)-1)
// Displays the unit and building limits for each player as 0/20 and 0/10 respectively
    units[0].player = 1
    units[0].square = commander1
    units[0].health = commandUnit.health
    squareId = commander1
    selectedUnit = commandUnit
    colour = sessionStorage.playerColour
    playerTurn = 1
    unitPlacement()
// Stores the first player's commander in the "units" array and places it on the
// map using the function "unitPlacement"
    units[1].player = 2
    units[1].square = commander2
    units[1].health = commandUnit.health
    squareId = commander2
    selectedUnit = commandUnit
    colour = sessionStorage.enemyColour
    playerTurn = 2
    unitPlacement()
    playerTurn = 0
// Does the same for the second player
}

function unitRemoval(query){
// Called when moving a unit on the map
    mapDiv = document.getElementById(previousSquareId)
// Uses "previousSquareId" to do work on the unit's old location
    mapDiv.innerHTML = ""
// Removes the unit's symbol from the map
    splitId(previousSquareId)
// Finds the y and x values from "previousSquareId"
    colourSelector(previousSquareId, true)
    deselectUnit(1)
// Removes the red, black and pink from the map to reveal the terrain colours
    squares = []
}
function unitMoved(){
// Called when moving a unit on the map
    searchUnits(2)
// Searches to find where the moving unit is in the "units" array
    units[globalI].square = squareId
    units[globalI].alreadyMoved = true
// Uses the value from "searchUnits" to set certain data in the array
// Sets the unit's new div id and that it's already moved on this turn
}
function unitPlacement(){
// Called when moving a unit on the map or when placing a newly constructed unit
    mapDiv = document.getElementById(squareId)
// Uses "squareId" to start doing work on the new unit location
    splitId(squareId)
    map[mapY][mapX].playerControl = playerTurn
    map[mapY][mapX].name = selectedUnit.name
    map[mapY][mapX].terrain = "occupiedUnit"
// Sets data to show a square of the map is occupied and by what
    mapDiv.style.textAlign = "center"
    mapDiv.style.fontSize ="1.5vw"
    mapDiv.style.color = colour
    mapDiv.innerText = selectedUnit.symbol
// Displays the unit in its new location in the appropriate colour
    selectedUnit = 0
    placingConstructedUnit = false
// Deselects the unit and sets "placingConstructedUnit" to false as this
// function is called when it's true
}
function deselectUnit(query){
// Called whenever a unit/building needs to be deselected or when the
// non-terrain-coloured divs need to revert to their original colour
    if(!placingConstructedUnit){
// Checks to make sure you're not deselecting a unit waiting to be placed somewhere
// for the first time.
        buttonRemoval()
// Removes the attributes assigned to the buttons at the top left of the screen
        document.getElementById("unitHealth").innerHTML = ""
        document.getElementById("constructionProgress").innerText = ""
// Removes the unit health being dislayed
        if(squares.length>1){
            for(let i=0;i<squares.length;i+=2){
                splitId(squares[i])
                mapDiv = document.getElementById(squares[i])
                colourSelector(squares[i], false)
            }
        }
// Goes through each non-terrain-coloured div and reverts them to their original colour
        if(query==2){
            selectedUnit = 0
            selectedBuilding = 0
            percentage = 0
        }
// If necessary, it sets these values to 0 to prevent further actions
    }
    else{
        alert("You cannot deselect a unit awaiting placement")
    }
}

function searchUnits(check){
// A function called for several purposes, focuses on the "units" array
    let query = false
// "position" gets returned most times so it always needs to be reset
    for(let i=0;i<units.length;i++){
// Goes through every unit in the array
        if(check==1||check==4){
            if(units[i].player==playerTurn && units[i].square==squareId){
                if(check==4){
                    if(units[i].alreadyMoved==true){
                        query = true
                        break
                    }
// Sets "position" to true if the unit belongs to the player and is in the selected div
// and if it has already moved
                }
                else if(check==1){
                    query = true
                    break
                }
// Same as above but doesn't need to have already moved
            }
        }
        else if(check==2||check==5||check==6){
            if(units[i].player==playerTurn && units[i].square==previousSquareId){
                if(check==5){
                    if(units[i].alreadyMoved==true){
                        query = true
                        break
                    }
                }
// Checks to see if the unit in the previous div belongs to the player and has already moved
                else if(check==6){
                    if(units[i].attackCooldown>0){
                        query = true
                        break
                    }
                }
// Same as above but checks to see if the unit needs to wait before attacking instead of moving
                else if(check==2){
                    globalI = i
                    break
                }
// Sets "globalI" to the index the current unit is at if it belongs to the player and is in the previous div
            }
        }
        else if(check==3||check==7){
            if(units[i].player!=playerTurn && units[i].square==squareId){
                if(check==3){
                    query = true
                    break
                }
// Sets "position" to true if the unit belongs to the enemy and is in the current div
                else if(check==7){
                    globalI = i
                    break
                }
// Sets "globalI" to the index the above unit is at in the array
            }
        }
    }
    return query
}
function searchBuildings(check){
// A multi-purpose function that focuses on the buildings
    let query = false
// Sets "position" to false in order to be used
    for(let i=0;i<buildings.length;i++){
// Goes through every building in the array
        if(check==1||check==4){
            if(buildings[i].player!=0&&buildings[i].square==squareId){
                if(check==1){
                    query = true
                    break
                }
// Checks to see if the building belongs to the enemy and is in the current div
                else if(check==4){
                    globalI = i
                    break
                }
// Sets "globalI" to the index the above building is at in the array
            }
        }
        else if(check==2||check==3){
            if(buildings[i].player==playerTurn&&buildings[i].square==squareId){
                if(check==2){
                    query = true
                    break
                }
// Checks to see if the building belongs to the player and is in the current div
                else if(check==3){
                    globalI = i
                    break
                }
// Sets "globalI" to the index of the above building
            }
        }
    }
    return query
}

function calculatePercentage(uniqueMetal, uniquePower, generalMetal, generalPower){
    let metal = generalMetal-uniqueMetal
    let power = generalPower-uniquePower
    let metalPercentage = (metal/generalMetal).toFixed(4)
    let powerPercentage = (power/generalPower).toFixed(4)
    if(metalPercentage<powerPercentage){
        percentage = (metalPercentage*100).toFixed(2)
    }
    else{
        percentage = (powerPercentage*100).toFixed(2)
    }
}

function clickedDiv(id){
    console.log(selectedBuilding)
    console.log(selectedUnit)
// This function is called every time a div is clicked (if it makes up the map)
// It sorts through all the possibilities to see what the player is trying to do
// Like whether they're trying to construct a building or attack an enemy
    squareId = id
// Sets the id of the clicked div to "squareId"
    splitId(squareId)
// Splits the id into its x and y components
    console.log("Square Terrain "+map[mapY][mapX].terrain)
    console.log("squareId "+squareId)
    let div = document.getElementById(squareId)
    if(playerTurn==0){
        alert("Click the Next Turn button to start a player's turn")
    }
// Ensures the players have started their turn so the game can begin
    else if(chosenBuilding==0&&selectedUnit==0&&selectedBuilding==0){
// Checks to see if no unit or building is selected and that nothing is going to be constructed
        if(searchBuildings(2)) {
            percentage = 0
            searchBuildings(3)
            if(buildings[globalI].operational){
                if(buildings[globalI].queuedUnit!=0){
                    selectUnit(units[buildings[globalI].queuedUnit].name, 1)
                    calculatePercentage(units[buildings[globalI].queuedUnit].metalRequired,
                        units[buildings[globalI].queuedUnit].powerRequired, selectedUnit.metalRequired,
                        selectedUnit.powerRequired)
                    console.log(percentage)
                    document.getElementById("constructionProgress").innerText = "Unit: "+percentage+"%"
                }
                else{
                    document.getElementById("constructionProgress").innerText = "Finished"
                }
            }
            else{
                selectBuilding(buildings[globalI].name, 1)
                console.log(buildings[globalI].name)
                console.log(selectedBuilding)
                console.log("Metal Required "+selectedBuilding.metalRequired)
                console.log("Power Required "+selectedBuilding.powerRequired)
                calculatePercentage(buildings[globalI].metalRequired, buildings[globalI].powerRequired,
                    selectedBuilding.metalRequired, selectedBuilding.powerRequired)
                console.log(percentage)
                document.getElementById("constructionProgress").innerText = percentage+"%"
            }
// Checks to see if there's a building belonging to the player and in the current div
            if(div.innerHTML=="ጁ"){
// Checks to see if a land factory is being selected
                selectedBuilding = landFactory
                unitUIDisplay(1)
// Displays the building's health and finds the position in the array the building is at
                if(buildings[globalI].operational){
                    unitConstruction(1)
                }
// If the building is found to be operational, the buttons at the top right of the screen
// change to the land units and the player is able to start building land units
                else{
                    alert("This building hasn't finished construction so you cannot start constructing units")
                }
// If the building hasn't finished construction, the player is alerted and the building is deselected
            }
            else if(div.innerHTML=="ᎇ"){
                selectedBuilding = navalFactory
                unitUIDisplay(1)
                if(buildings[globalI].operational){
                    unitConstruction(1)
                }
                else{
                    alert("This building hasn't finished construction so you cannot start constructing units")
                }
            }
// Does the same as above but for the naval factory and naval units
            else if(div.innerHTML=="ኡ"){
                selectedBuilding = turret
                unitUIDisplay(1)
                if(buildings[globalI].operational){
                    unitRange1(0, "land", "land", selectedBuilding.attackRange, 0)
                }
                else{
                    alert("This building hasn't finished construction so you cannot start attacking enemy units or buildings")
                }
            }
// Does the same as above but for the turret and instead of allowing for the construction of units,
// the player is able to attack with this building
            else if(div.innerHTML=="ፏ"){
                selectedBuilding = heavyArtillery
                unitUIDisplay(1)
                if(buildings[globalI].operational){
                    unitRange1(0, "land", "land", selectedBuilding.attackRange, 0)
                }
                else{
                    alert("This building hasn't finished construction so you cannot start attacking enemy units or buildings")
                }
            }
// The same as above but for the heavy artillery
            else if(div.innerHTML=="ዧ"){
                selectedBuilding = metalExtractor
                unitUIDisplay(1)
                searchBuildings(3)
                if(buildings[globalI].operational){
                    alert("This building is providing resources to you. Protect it from the enemy")
                }
                else{
                    alert("This building hasn't finished construction so it doesn't provide you with resources")
                }
            }
// The same as above but for the metal extractor but it can't attack
            else if(div.innerHTML=="ቸ"){
                selectedBuilding = powerPlant
                unitUIDisplay(1)
                searchBuildings(3)
                if(buildings[globalI].operational){
                    alert("This building is providing resources to you. Protect it from the enemy")
                }
                else{
                    alert("This building hasn't finished construction so it doesn't provide you with resources")
                }
            }
// The same as above
            else{
                alert("That is not your building and you haven't selected a unit to attack it")
            }
        }
// If there is a building belonging to the enemy, the player is alerted they haven't selected anyting
// to attack it
        else if(searchUnits(1)) {
            selectedUnit = map[mapY][mapX].name
            selectUnit(selectedUnit, 1)
            unitUIDisplay(2)
        }
// If there's a unit belonging to the player in the div, it is selected. Its health is displayed and the
// regions it can attack and move in are found
        else if(searchUnits(3)){
            alert("That is not your unit and you haven't selected a unit to attack it")
        }
// If there's a unit belonging to the enemy, the player is alerted they haven't selected anything
// to attack it
        else if(searchBuildings(1)){
            alert("That is not your building and you haven't selected a building to attack it")
        }
// The player is alerted if the building doesn't belong to them
        else{
            alert("You have not selected a building to be built and there's no unit to be selected")
// If no building was selected, the player is alerted
        }
    }
    else if(chosenBuilding!=0){
// Checks to see if a building has been selected to be constructed
        if(document.getElementById(squareId).getAttribute("data-withinRange")=="true"){
            startConstruction()
        }
// If a div close enough to the command unit is selected, the building begins construction
        else if(document.getElementById(squareId).style.backgroundColor=="rgb(0, 0, 0)"){
            alert("You cannot build on the square occupied by your commander")
        }
// If the player tres to build where the command unit is, they're alerted
        else{
            alert("You can only start construction of a building within the command unit's movement range")
        }
// If the player tries to build outside the movement range of the command unit, they're alerted
    }
    else if(selectedBuilding!=0){
// Checks to see if a building on the map has already been selected
        if(selectedBuilding.name=="turret"||selectedBuilding.name=="heavyArtillery"){
// Checks to see if the building is able to attack
            if(div.style.backgroundColor=="rgb(255, 0, 0)"&&
                (map[mapY][mapX].playerControl!=playerTurn&& map[mapY][mapX].playerControl!=0)){
// Checks to see if the clicked div is within the building's attack range and has an enemy unit in it
                alert("Your building is attacking an enemy")
                attack()
// The player is alerted that they're attacking and the building then attacks the enemy
                deselectUnit(2)
// The unit is then deselected
            }
            else if(div.style.backgroundColor=="rgb(255, 0, 0)"){
                if(map[mapY][mapX].playerControl==playerTurn){
                    alert("You cannot attack your own units")
                }
// If the clicked div has units belonging to the player, they're alerted
                else if(map[mapY][mapX].playerControl==0){
                    alert("There is nothing to attack")
                }
// If the clicked div has no units in, the player is alerted
            }
            else if(div.style.backgroundColor!="rgb(255, 0, 0)"){
                alert("You cannot attack that far away")
            }
// If the clicked div is outside the attack range, the player is alerted
        }
    }
    else if(selectedUnit!=0){
// Checks to see if a unit has previously been selected
        if(map[mapY][mapX].terrain=="occupiedUnit"||map[mapY][mapX].terrain=="occupiedBuilding"){
// Checks to see if the div clicked is occupied
            if(placingConstructedUnit==true){
                alert("You cannot place a unit on a square already occupied")
            }
// If the player is placing a newly constructed unit and tries to place it on an occupied square,
// the player is alerted
            else if(map[mapY][mapX].playerControl!=playerTurn){
                unitUIDisplay(3)
            }
// If the player clicks on a div occupied by the enemy, they're able to attack it
            else{
                alert("You cannot attack your own units or buildings or move onto them")
            }
// If the occupying unit or building belongs to the player, they're alerted
        }
        else if(map[mapY][mapX].terrain==selectedUnit.terrain1||map[mapY][mapX].terrain==selectedUnit.terrain2){
            unitUIDisplay(4)
        }
// If the clicked div is unoccupied and is the appropriate terrain, the unit can move there
        else{
            alert("Your unit has nothing to attack and can't move there")
        }
// If there's nothing to attack and the unit can't move there, the player is alerted
    }
}
function unitUIDisplay(check){
// Called whenever a unit is selected and tries to attack or move
    let div=document.getElementById(squareId)
    if(check==1){
// Checks to see if the player is trying to select a building
        alert("You have selected a building")
        searchBuildings(3)
        document.getElementById("unitHealth").innerHTML = buildings[globalI].health
    }
    else if(check==2){
// Checks to see if the player is trying to select a unit
        alert("You have selected a unit")
        previousSquareId = squareId
// The "previousSquareId" is assigned "squareId" so it can be used for when a unit tries to move or attack
        searchUnits(2)
// Finds the position in the array the unit is in
        document.getElementById("unitHealth").innerHTML = units[globalI].health
        unitRange1(0, selectedUnit.terrain1, selectedUnit.terrain2, selectedUnit.attackRange, selectedUnit.movementRange)
// The health of the unit is displayed and their attack and movement ranges are worked out
    }
    else if(check==3){
// Checks to see if the player is trying to attack an enemy
        if(searchUnits(6)){
            alert("You have already attacked with that unit")
        }
// If the unit has already attacked an enemy, the player is alerted
        else{
            alert("You are attacking")
            searchUnits(2)
            attack()
// Otherwise, the unit is searched for in the array and attacks the enemy
            units[globalI].attackCooldown = selectedUnit.attackCooldown
            selectedUnit = 0
            deselectUnit()
// The unit then has an attack cooldown applied and is deselected
        }
    }
    else if(check==4){
// Checks to see if the player is trying to move the unit
        alert("You are moving a unit")
        if(div.style.backgroundColor=="rgb(255, 0, 255)"){
// Checks to see if the clicked div is within the movement range
            if(!searchUnits(5)){
// Checks to see if the unit hasn't already moved
                alert("Correct terrain")
                if(playerTurn==1){
// Checks which player is taking their turn
                    if(!placingConstructedUnit){
                        unitRemoval()
                    }
// If the player isn't placing down a newly constructed unit, it is removed from its previous spot
                    unitMoved()
                    colour = sessionStorage.playerColour
                    unitPlacement()
                    deselectUnit()
// The unit is then moved, placed and deselected
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
// The same as above but for player two
            }
            else{
                alert("You have already moved that unit")
            }
// The player is alerted if they've already moved the unit
        }
        else{
            alert("You cannot move units outside their movement range")
        }
// The player is alerted if they try to move outside their movement range
    }
}
function buttonRemoval(){
// Called when the buttons at the top left of the screen need to be changed
    for(let i=1;i<7;i++){
        let btn = document.getElementById("button"+i)
        btn.onclick = ""
        btn.innerHTML = ""
        btn.title = ""
    }
// All data belonging to them is wiped
}
function buttonCreation(check){
// Called when the buttons at the top left of the screen need to be changed
// Using for loops didn't work for some reason so it's a long list of actions to do
    let container = document.getElementById("buildOptions")
    let base = 0
    let end = 0
    if(check==1) {
        base = 1
        end = 7
    }
    else if(check==2){
        base = 8
        end = 12
    }
    else if(check==3){
        base = 12
        end = 15
    }
    let button = 1
    for(let i=base;i<end;i++){
        if(i<7){
            selectBuilding(i, 2)
            document.getElementById("button"+button).innerHTML = chosenBuilding.symbol
            chosenBuilding = 0
        }
        else{
            selectUnit(i, 2)
            document.getElementById("button"+button).innerHTML = chosenUnit.symbol
            chosenUnit = 0
        }
        document.getElementById("button"+button).title = globalTitle
        document.getElementById("button"+button).onclick=function(){selectingConstruction(i)}
        button++
    }
}

function attack(){
// Called when a unit or building is attacking an enemy
    let selected = 0
    if(selectedUnit!=0){
        selected = selectedUnit
    }
    else if(selectedBuilding!=0){
        selected = selectedBuilding
    }
// Assigns the selected building or unit to "selected"
    splitId(squareId)
// Finds the x and y values of the clicked div
    if(map[mapY][mapX].terrain=="occupiedBuilding"){
// Checks to see if a building is being attacked
        searchBuildings(4)
        alert("You are attacking a building")
// Finds the attacked building's position in the array
        console.log("Health before "+buildings[globalI].health)
        buildings[globalI].health = buildings[globalI].health - selected.damage
        console.log("Health after "+buildings[globalI].health)
// Damage is dealt to the building
        if(buildings[globalI].health<=0){
            alert("You have destroyed a building")
            mapDiv = document.getElementById(squareId)
            colourSelector(squareId, true)
            kill(1, globalI)
        }
// If the building's health drops to or below 0, the unit is wiped off the map and from the array
    }
    else if(map[mapY][mapX].terrain=="occupiedUnit"){
        searchUnits(7)
        alert("You are attacking a unit")
        console.log("Health before "+units[globalI].health)
        units[globalI].health = units[globalI].health - selected.damage
        console.log("Health after "+units[globalI].health)
        if(units[globalI].health<=0){
            alert("You have killed a unit")
            mapDiv = document.getElementById(squareId)
            colourSelector(squareId, true)
            kill(2, globalI)
        }
// The same as above but for units
    }
}
function kill(recipient, i){
    console.log("Recipient "+recipient)
    console.log("i "+i)
// Called when a unit's health drops to or below 0
    if(recipient==1){
// Checks to see if a building is being attacked
        if(buildings[i].queuedUnit!=0){
            kill(2, buildings[i].queuedUnit)
        }
// If the building is currently constructing a unit, the unit is also killed
        if(playerTurn==1){
            sessionStorage.p1BuildingsDestroyed = parseInt(sessionStorage.p1BuildingsDestroyed)+1
            if(buildings[i].name=="metalExtractor"&&sessionStorage.computerEnemy=="true"){
                computerStats.metalExtractors = computerStats.metalExtractors-1
            }
            else if(buildings[i].name=="powerPlant"&&sessionStorage.computerEnemy=="true"){
                computerStats.powerPlants = computerStats.powerPlants-1
            }
// If a metal extractor or power plant is destroyed by the player, the computer's stats decrease
        }
        else if(playerTurn==2){
            sessionStorage.p2BuildingsDestroyed = parseInt(sessionStorage.p2BuildingsDestroyed)+1
            if(buildings[i].name=="metalExtractor"&&sessionStorage.computerEnemy=="true"){
                playerStats.metalExtractors = playerStats.metalExtractors-1
            }
            else if(buildings[i].name=="powerPlant"&&sessionStorage.computerEnemy=="true"){
                playerStats.powerPlants = playerStats.powerPlants-1
            }
// If a metal extractor or power plant is destroyed by the computer, the player's stats decrease
        }
// Increases the number of buildings the players/computer have killed
        buildings[i].player = 0
        buildings[i].queuedUnit = 0
        buildings[i].square = 0
        buildings[i].metalRequired = 0
        buildings[i].powerRequired = 0
        buildings[i].maxMetalSpend = 0
        buildings[i].maxPowerSpend = 0
        buildings[i].name = 0
        buildings[i].attackCooldown = 0
        buildings[i].health = 0
        buildings[i].operational = false
        buildings[i].metalIncome = 0
        buildings[i].powerIncome = 0
        countBuildings()
    }
// All data belonging to the building is wiped
    else if(recipient==2){
        if(i<2){
            if(i==0){
                alert("The game is over. Player 2 has beaten player 1. You will now be sent to the statistics page.")
                dataSort()
            }
            else if(i==1){
                alert("The game is over. Player 1 has beaten player 2. You will now be sent to the statistics page.")
                dataSort()
            }
        }
        else{
            if(playerTurn==1){
                sessionStorage.p1UnitsDestroyed = parseInt(sessionStorage.p1UnitsDestroyed)+1
                if(sessionStorage.computerEnemy=="true"){
// Checks to see if the player is against a computer
                    selectedUnit(units[i].name, 2)
                    if(chosenUnit.terrain1=="land"){
                        computerStats.landCR = computerStats.landCR-chosenUnit.combatRating
                    }
                    else{
                        computerStats.navalCR = computerStats.navalCR-chosenUnit.combatRating
                    }
                }
// If a unit is destroyed by the player, the computer's stats decrease
            }
            else if(playerTurn==2){
                sessionStorage.p2UnitsDestroyed = parseInt(sessionStorage.p2UnitsDestroyed)+1
                if(sessionStorage.computerEnemy=="true"){
// Checks to see if the player is against a computer
                    selectedUnit(units[i].name, 2)
                    if(chosenUnit.terrain1=="land"){
                        playerStats.landCR = playerStats.landCR-chosenUnit.combatRating
                    }
                    else{
                        playerStats.navalCR = playerStats.navalCR-chosenUnit.combatRating
                    }
                }
// If a unit is destroyed by the computer, the player's stats decrease
            }
            console.log(sessionStorage.p1UnitsDestroyed)
// Increases the number of units the players have destroyed
            units[i].player = 0
            units[i].queuedFactory = 0
            units[i].square = 0
            units[i].metalRequired = 0
            units[i].powerRequired = 0
            units[i].maxMetalSpend = 0
            units[i].maxPowerSpend = 0
            units[i].name = 0
            units[i].attackCooldown = 0
            units[i].health = 0
            units[i].alreadyMoved = 0
            countUnits()
        }
    }
// The same as above but for units
}

function selectBuilding(name, selection){
    console.log(name)
// Called when selecting a building to assign the general data to the variable
    if(name=="metalExtractor"||name==1){
        if(selection==1){
            selectedBuilding = metalExtractor
        }
        else{
            chosenBuilding = metalExtractor
        }
        globalTitle = "Metal Extractor. For 2 turns, requires 3 Metal and 4 Power. Produces 8 Metal per turn."
    }
    else if(name=="powerPlant"||name==2){
        if(selection==1){
            selectedBuilding = powerPlant
        }
        else{
            chosenBuilding = powerPlant
        }
        globalTitle = "Power Plant. For 1 turn, requires 5 Metal and 8 Power. Produces 12 Power per turn."
    }
    else if(name=="landFactory"|name==3){
        if(selection==1){
            selectedBuilding = landFactory
        }
        else{
            chosenBuilding = landFactory
        }
        globalTitle = "Land Factory. For 2 turns, requires 8 Metal and 14 Power. Produces units you choose."
    }
    else if(name=="navalFactory"||name==4){
        if(selection==1){
            selectedBuilding = navalFactory
        }
        else{
            chosenBuilding = navalFactory
        }
        globalTitle = "Naval Factory. For 3 turns, requires 10 Metal and 16 Power. Produces units you choose."
    }
    else if(name=="turret"||name==5){
        if(selection==1){
            selectedBuilding = turret
        }
        else{
            chosenBuilding = turret
        }
        globalTitle = "Turret. For 2 turns, requires 16 Metal and 22 Power. Attacks enemy units you choose."
    }
    else if(name=="heavyArtillery"||name==6){
        if(selection==1){
            selectedBuilding = heavyArtillery
        }
        else{
            chosenBuilding = heavyArtillery
        }
        globalTitle = "Heavy Artillery. For 4 turns, requires 30 Metal and 45 Power. Attacks enemy units you choose."
    }
}
function selectUnit(name, selection){
// Called when selecting a unit to assign the general data to the variable
    if(name=="commandUnit"||name==7){
        selectedUnit=commandUnit
        buttonCreation(1)
    }
// If the command unit is selected, the buttons at the top left of the page change to the
// buildings it can construct
    else if(name=="tank"||name==8){
        if(selection==1){
            selectedUnit = tank
        }
        else{
            chosenUnit = tank
        }
        globalTitle = "Tank. A basic land unit, small range and damage. For 2 turns, 5 Metal and 7 Power"
    }
    else if(name=="labDroid"||name==9){
        if(selection==1){
            selectedUnit = labDroid
        }
        else{
            chosenUnit = labDroid
        }
        globalTitle = "Lab Droid. Small damage but greater range. For 3 turns, 4 Metal and 6 Power"
    }
    else if(name=="missileCarrier"||name==10){
        if(selection==1){
            selectedUnit = missileCarrier
        }
        else{
            chosenUnit = missileCarrier
        }
        globalTitle = "Missile Carrier. Medium damage but very high range. For 3 turns, 12 Metal and 20 Power"    }
    else if(name=="detonatingSphere"||name==11){
        if(selection==1){
            selectedUnit = detonatingSphere
        }
        else{
            chosenUnit = detonatingSphere
        }
        globalTitle = "Detonating Sphere. Very high damage but tiny range. For 4 turns, 11 Metal and 21 Power"
    }
    else if(name=="destroyer"||name==12){
        if(selection==1){
            selectedUnit = destroyer
        }
        else{
            chosenUnit = destroyer
        }
        globalTitle = "Destroyer. Basic naval unit, low damage and range. For 2 turns, 8 Metal and 11 Power"
    }
    else if(name=="cruiser"||name==13){
        if(selection==1){
            selectedUnit = cruiser
        }
        else{
            chosenUnit = cruiser
        }
        globalTitle = "Cruiser. Medium damage but large range. For 3 turns, 8 Metal and 13 Power"
    }
    else if(name=="battleship"||name==14){
        if(selection==1){
            selectedUnit = battleship
        }
        else{
            chosenUnit = battleship
        }
        globalTitle = "Battleship. High damage and range. For 4 turns, 12 Metal and 18 Power"
    }
}

function unitRange1(constructed, terrain1, terrain2, attackRange, movementRange){
// Called when a building or unit needs to have its movement and attack ranges worked out
    let xId = 0
    let yId = 0
    let id = 0
// Sets the x and y values of the ids and "id" to 0
    let range = 0
    if(attackRange>movementRange){
        range = attackRange
    }
    else{
        range = movementRange
    }
// Sets the larger two of the attack and movement range to "range"
    for(let i=0;i<=range;i++){
        xId=parseInt(squareId.slice(squareId.indexOf("-")+1))+i
// The x value starts from the right
        unitRange2(constructed, range, i, xId, yId, id, movementRange, terrain1, terrain2)
        xId = xId - 2*i
// and then flips to the left
        unitRange2(constructed, range, i, xId, yId, id, movementRange, terrain1, terrain2)
    }
// Finds the x values of left and right of the selected unit/building
// and uses "unitRange" for the y parts
// The x values start where the unit/building is and gradually move out to the peak
// of the range
}
function unitRange2(constructed, range, i, xId, yId, id, movementRange, terrain1, terrain2){
    for(let z=range-i;z>=0;z--){
        yId=parseInt(squareId.slice(0, squareId.indexOf("-")))+z
// The y value starts from the above
        if((yId>=0&&yId<25)&&(xId>=0&&xId<58)){
// Makes sure only the y and x values on the map get used, not something like -3 or 61
            id = yId.toString()+"-"+xId.toString()
// Creates the whole id to edit the colours
            rangeColouring(constructed, i, z, id, movementRange, terrain1, terrain2)
            document.getElementById(id).style.backgroundColor = colour
// Changes the background colour to what's appropriate
            squares.push(id)
            squares.push(colour)
// Pushes the div id and its colour into the "squares" array
        }
        yId = yId - 2*z
// The y value flips to below
        if((yId>=0&&yId<25)&&(xId>=0&&xId<58)){
            id = yId.toString()+"-"+xId.toString()
            rangeColouring(constructed, i, z, id, movementRange, terrain1, terrain2)
            document.getElementById(id).style.backgroundColor = colour
            squares.push(id)
            squares.push(colour)
// Same as the above (minus the y flipping)
        }
// Finds the y values above and below where the selected unit/building is
// and uses "rangeColouring" to determine what colour each div should be set.
// The y values start at the peak of the range and decrease down to 0 while the
// x value increases to the peak.
    }
}
function rangeColouring(constructed, i, z, id, movementRange, terrain1, terrain2){
    if(constructed==1){
// Checks to see if the unit being checked is newly constructed
        document.getElementById(id).setAttribute("data-withinRange", "true")
        splitId(id)
// Finds the x and y values from the id of where the factory is
        if(map[mapY][mapX].terrain==terrain1||map[mapY][mapX].terrain==terrain2){
            colour = "#ff00ff"
        }
// If the square is of the appropriate terrain and is unoccupied, the div will become pink
        else{
            colour = "#000000"
        }
// Otherwise, the square will go black, it won't go red as newly constructed units can't attack
    }
    else if(id==previousSquareId&&map[mapY][mapX].playerControl==playerTurn){
        colour = "#000000"
    }
// If the div from where the unit having the range found is from, the square will go black
    else if(id!=previousSquareId){
        if((i+z)<=movementRange){
            document.getElementById(id).setAttribute("data-withinRange", "true")
        }
// If the i and z values add up to less than or equal to the movement range, the div is assigned "true" to
// being in range. This allows the unit to move there.
        splitId(id)
        if(map[mapY][mapX].playerControl==playerTurn){
            colour = "#000000"
        }
// If the div is occupied by a friendly unit, the square will go black
        else if(map[mapY][mapX].playerControl!=playerTurn&&map[mapY][mapX].playerControl!=0){
            colour = "#ff0000"
        }
// If the div is controlled by the enemy, it'll go red
        else if(map[mapY][mapX].terrain==terrain1||map[mapY][mapX].terrain==terrain2){
            if((i+z)<=movementRange){
                colour = "#ff00ff"
            }
// If the divis unoccupied and of the appropriate terrain, while being within the movement range
// , it'll go pink
            else{
                colour = "#ff0000"
            }
// If outside the movement range, it'll go red
        }
        else{
            colour = "#ff0000"
        }
// If the div is of the wrong terrain, it'll go red to show the unit can only attack there
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
                sessionStorage.p1BuildingsConstructed = parseInt(sessionStorage.p1BuildingsConstructed)+1
            }
            else if(playerTurn==2){
                document.getElementById("p2BuildLimit").innerHTML = ownedBuildings+1+"/"+(buildings.length/2)
                sessionStorage.p2BuildingsConstructed = parseInt(sessionStorage.p2BuildingsConstructed)+1
            }
// The appropriate player's build limit is updated and the number of buildings constructed increases
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
// and the unit is deselected
}
function unitConstruction(option){
// Called when a factory is selected or when trying to queue a unit for construction
    if(option==1){
// Checks to see if the buttons at the top left of the screen require changing
        if(selectedBuilding.name=="landFactory"){
            buttonCreation(2)
        }
        else if(selectedBuilding.name=="navalFactory"){
            buttonCreation(3)
        }
    }
// The buttons are assigned the appropriate units
    else if(option==2){
// Checks to see if the player is trying to queue a unit for construction
        countUnits()
// The player's owned and queued units are counted to see if they can queue more
        if(canBuild){
            firstEmptyUnit()
// If the player can queue another one, the first empty slot in the array is filled
            console.log("Unit has "+chosenUnit.name+" been queued")
            findEconomy()
            updateResources()
// The economy is then recalculated and displayed
            if(playerTurn==1){
                document.getElementById("p1UnitLimit").innerHTML = (ownedUnits+1)+"/"+((units.length/2)-1)
                sessionStorage.p1UnitsConstructed = parseInt(sessionStorage.p1UnitsConstructed)+1
            }
            else if(playerTurn==2){
                document.getElementById("p2UnitLimit").innerHTML = (ownedUnits+1)+"/"+((units.length/2)-1)
                sessionStorage.p2UnitsConstructed = parseInt(sessionStorage.p2UnitsConstructed)+1
            }
// The appropriate player's unit limit is then updated and the number of units constructed increases
        }
    }
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
// Goes through each unit to see if they're still being constructed and adds to the spent resources
}
function spendEconomy(){
    let actuallySpentMetal = 0
    let actuallySpentPower = 0
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
    console.log("Resource Multiplier "+resourceMultiplier)
// If either of the multipliers aren't >= 1, then the lowest is assigned to "resourceMultiplier"
// as only the lowest multiplier can be assigned to spend the correct amount of resources
    for(let i=0;i<20;i++){
        if(buildings[i].player==playerTurn){
// This part runs 20 times, once for each entry in the "buildings" array
            if(buildings[i].player==playerTurn && (buildings[i].metalRequired>0||buildings[i].powerRequired>0)){
// Checks to see if the building belongs to the player and hasn't finished construction
                buildings[i].metalRequired-=(buildings[i].maxMetalSpend*resourceMultiplier)
                actuallySpentMetal+=(buildings[i].maxMetalSpend*resourceMultiplier)
// Subtracts the amount of Metal able to be spent (decided by multiplying "metal" and the
// multiplier together) from the amount still required
                buildings[i].powerRequired-=(buildings[i].maxPowerSpend*resourceMultiplier)
                actuallySpentPower+=(buildings[i].maxPowerSpend*resourceMultiplier)
// Subtracts the amount of Power able to be spent (decided by multiplying "power" and the
// multiplier together) from the amount still required
                if(buildings[i].metalRequired<=0&&buildings[i].powerRequired<=0){
                    console.log("Construction of "+buildings[i].name+" Complete")
                    buildings[i].operational = true
                }
            }
        }
    }
    for(let i=2;i<units.length;i++){
        if(units[i].player==playerTurn&&(units[i].metalRequired>0||units[i].powerRequired>0)){
// Checks to see if any of the player's units are still constructing
            units[i].metalRequired=units[i].metalRequired-(units[i].maxMetalSpend*resourceMultiplier)
            actuallySpentMetal+=(units[i].maxMetalSpend*resourceMultiplier)
            units[i].powerRequired=units[i].powerRequired-(units[i].maxPowerSpend*resourceMultiplier)
            actuallySpentPower+=(units[i].maxPowerSpend*resourceMultiplier)
// Resources are spent on the units
            if(units[i].metalRequired<=0&&units[i].powerRequired<=0){
                console.log("Unit "+units[i].name+" completed")
                units[i].square = buildings[units[i].queuedFactory].square
                buildings[units[i].queuedFactory].queuedUnit = 0
                units[i].queuedFactory = 0
                alert("Place your unit")
                selectedBuilding = 0
                selectedUnit = units[i].name
                selectUnit(selectedUnit, 1)
                placingConstructedUnit = true
                previousSquareId = units[i].square
                squareId = previousSquareId
                unitRange1(1, selectedUnit.terrain1, selectedUnit.terrain2, 2, 2)
            }
// If a unit finishes construction, it can then be placed and certain bits of data gets changed to allow
// for more units to be built and the finished unit to operate properly
        }
    }
    if(playerTurn==1){
        p1MetalPerTurn.push(earnedMetal)
        p1TotalMetal.push((p1TotalMetal[p1TotalMetal.length-1]+earnedMetal))
        p1PowerPerTurn.push(earnedPower)
        p1TotalPower.push(p1TotalPower[p1TotalPower.length-1]+earnedPower)
        p1SpentMetalPerTurn.push(actuallySpentMetal)
        p1TotalMetalSpent.push(p1TotalMetalSpent[p1TotalMetalSpent.length-1]+actuallySpentMetal)
        p1SpentPowerPerTurn.push(actuallySpentPower)
        p1TotalPowerSpent.push(p1TotalPowerSpent[p1TotalPowerSpent.length-1]+actuallySpentPower)
    }
    else if(playerTurn==2){
        p2MetalPerTurn.push(earnedMetal)
        p2TotalMetal.push(p2TotalMetal[p2TotalMetal.length-1]+earnedMetal)
        p2PowerPerTurn.push(earnedPower)
        p2TotalPower.push(p2TotalPower[p2TotalPower.length-1]+earnedPower)
        p2SpentMetalPerTurn.push(actuallySpentMetal)
        p2TotalMetalSpent.push(p2TotalMetalSpent[p2TotalMetalSpent.length-1]+actuallySpentMetal)
        p2SpentPowerPerTurn.push(actuallySpentPower)
        p2TotalPowerSpent.push(p2TotalPowerSpent[p2TotalPowerSpent.length-1]+actuallySpentPower)
    }
    findEconomy()
    updateResources()
// The economy is then worked out again and is displayed
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
}
function colourSelector(id, replace){
// This functions executes whenever part of the map needs to e displayed
    if(playerTurn!=0){
        splitId(id)
    }

// If it's someone's turn, the function finds the x and y values for the divs
// This is automatically done by a different function upon page load
    checked = map[mapY][mapX].terrainLetter
// Finds the "terrainLetter" for each div to know what to assign
    if(checked=='w'){
        if(replace){
            map[mapY][mapX].terrain = "shallowSea"
            map[mapY][mapX].playerControl = 0
            map[mapY][mapX].name = 0
            if(sessionStorage.colourBlind=="true"){
                mapDiv.style.color = "#ffffff"
                mapDiv.style.fontSize = "0.8vw"
                mapDiv.innerHTML = checked
                mapDiv.style.textAlign = "left"
            }
            else{
                mapDiv.innerHTML = ""
            }
        }
// If the function is rewriting old data, it assigns the appropriate data to the "map" array
// This isn't done at the start as it's all pre-written
        mapDiv.style.backgroundColor = '#0be0cd'
        mapDiv.title = "Terrain: Shallow Water, only traversable by the command unit and naval units"
// The title and background colour are changed to reflect the terrain
    }
// The above happens for each letter
    else if(checked=='s'){
        if(replace){
            map[mapY][mapX].terrain = "land"
            map[mapY][mapX].playerControl = 0
            map[mapY][mapX].name = 0
            if(sessionStorage.colourBlind=="true"){
                mapDiv.style.color = "#ffffff"
                mapDiv.style.fontSize = "0.8vw"
                mapDiv.innerHTML = checked
                mapDiv.style.textAlign = "left"
            }
            else{
                mapDiv.innerHTML = ""
            }
        }
        mapDiv.style.backgroundColor = '#e2f075'
        mapDiv.title = "Terrain: Sand, only traversable by land units"
    }
    else if(checked=='g'){
        if(replace){
            map[mapY][mapX].terrain = "land"
            map[mapY][mapX].playerControl = 0
            map[mapY][mapX].name = 0
            if(sessionStorage.colourBlind=="true"){
                mapDiv.style.color = "#ffffff"
                mapDiv.style.fontSize = "0.8vw"
                mapDiv.innerHTML = checked
                mapDiv.style.textAlign = "left"
            }
            else{
                mapDiv.innerHTML = ""
            }
        }
        mapDiv.style.backgroundColor = '#00c45c'
        mapDiv.title = "Terrain: Grass, only traversable by land units"
    }
    else if(checked=='m'){
        if(replace){
            map[mapY][mapX].terrain = "metal"
            map[mapY][mapX].playerControl = 0
            map[mapY][mapX].name = 0
            if(sessionStorage.colourBlind=="true"){
                mapDiv.style.color = "#ffffff"
                mapDiv.style.fontSize = "0.8vw"
                mapDiv.innerHTML = checked
                mapDiv.style.textAlign = "left"
            }
            else{
                mapDiv.innerHTML = ""
            }
        }
        mapDiv.style.backgroundColor = '#939993'
        mapDiv.title = "Terrain: Exposed Metal, Impassable for all except the Lab Droid"
    }
    else if(checked=='f'){
        if(replace){
            map[mapY][mapX].terrain = "land"
            map[mapY][mapX].playerControl = 0
            map[mapY][mapX].name = 0
            if(sessionStorage.colourBlind=="true"){
                mapDiv.style.color = "#ffffff"
                mapDiv.style.fontSize = "0.8vw"
                mapDiv.innerHTML = checked
                mapDiv.style.textAlign = "left"
            }
            else{
                mapDiv.innerHTML = ""
            }
        }
        mapDiv.style.backgroundColor = '#184807'
        mapDiv.title = "Terrain: Forest, only traversable by land units"
    }
    else if(checked=='d'){
        if(replace){
            map[mapY][mapX].terrain = "deepSea"
            map[mapY][mapX].playerControl = 0
            map[mapY][mapX].name = 0
            if(sessionStorage.colourBlind=="true"){
                mapDiv.style.color = "#ffffff"
                mapDiv.style.fontSize = "0.8vw"
                mapDiv.innerHTML = checked
                mapDiv.style.textAlign = "left"
            }
            else{
                mapDiv.innerHTML = ""
            }
        }
        mapDiv.style.backgroundColor = '#062480'
        mapDiv.title = "Terrain: Deep Water, only traversable by naval units"
    }
    else if(checked=='r'){
        if(replace){
            map[mapY][mapX].terrain = "impassable"
            map[mapY][mapX].playerControl = 0
            map[mapY][mapX].name = 0
            if(sessionStorage.colourBlind=="true"){
                mapDiv.style.color = "#ffffff"
                mapDiv.style.fontSize = "0.8vw"
                mapDiv.innerHTML = checked
                mapDiv.style.textAlign = "left"
            }
            else{
                mapDiv.innerHTML = ""
            }
        }
        mapDiv.style.backgroundColor = '#ac6011'
        mapDiv.title = "Terrain: Desert Rock, Impassable"
    }
    else if(checked=='c'){
        if(replace){
            map[mapY][mapX].terrain = "impassable"
            map[mapY][mapX].playerControl = 0
            map[mapY][mapX].name = 0
            if(sessionStorage.colourBlind=="true"){
                mapDiv.style.color = "#ffffff"
                mapDiv.style.fontSize = "0.8vw"
                mapDiv.innerHTML = checked
                mapDiv.style.textAlign = "left"
            }
            else{
                mapDiv.innerHTML = ""
            }
        }
        mapDiv.style.backgroundColor = '#3b3a3a'
        mapDiv.title = "Terrain: Cliff, Impassable"
    }
// Assigning the correct background colour to a div based of
// the value in array map
// The terrain type and what type of unit can pass through it is also assigned
}
function terrainChecker(){
    splitId(squareId)
    let terrain = map[mapY][mapX].terrain
// This finds the terrain of the clicked div
    if(terrain=="occupiedBuilding"){
        canBuild = false
        alert("That square is already occupied by a building")
    }
    else if(terrain=="occupiedUnit"){
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

function nextTurn(){
// This function is called whenever the "Next Turn" button is clicked
    buttonRemoval()
// If the buttons haven't previously been wiped, they are again
    deselectUnit(2)
// If a building or unit hasn't been deselected, it is again
    for(let i=0;i<units.length;i++){
        if(units[i].player==playerTurn){
            units[i].alreadyMoved = false
            if(units[i].attackCooldown>0){
                units[i].attackCooldown--
            }
        }
    }
    for(let i=2;i<buildings.length;i++){
        if(buildings[i].player==playerTurn&&buildings[i].attackCooldown>0){
            buildings[i].attackCooldown--
        }
    }
    countUnits(1)
    countBuildings(1)
// Each turn, the cooldown of the player's units decreases by 1 and are allowed to move again
    chosenBuilding = 0
    selectedBuilding = 0
    chosenUnit = 0
    selectedUnit = 0
    previousSquareId = 0
    squareId = 0
// Certain variables are reset to prevent errors
    let buttons = document.getElementsByClassName("buttons")
    if(turnTotal%2==0){
// This checks to see if it's player 2's turn, or if nobody has started their turn yet
        console.log(playerStats)
        player1Turn++
        console.log("Player 1 Turn "+player1Turn)
        playerTurn = 1
        for(i=0;i<buttons.length;i++){
            buttons[i].style.color = sessionStorage.playerColour
        }
        document.getElementById("playerTurn").style.color = sessionStorage.playerColour
        document.getElementById("playerTurn").innerHTML = "Player 1"
        findEconomy()
// Executes "findEconomy" to see the total income and expenditure of the player
        spendEconomy()
// Executes "spendEconomy" to spend their earned resources evenly across their
// buildings under construction

// Makes the turn player 1's and resets some data, the buttons also change to match the player's colour
    }
    else if(turnTotal%2==1){
// This checks to see if it's player 1's turn
        player2Turn++
        console.log("Player 2 Turn "+player2Turn)
        playerTurn = 2
        for(i=0;i<buttons.length;i++){
            buttons[i].style.color = sessionStorage.enemyColour
        }
        document.getElementById("playerTurn").style.color = sessionStorage.enemyColour
        if(sessionStorage.computerEnemy=="true"){
// Checks to see if the player is against the computer
            document.getElementById("playerTurn").innerHTML = "Computer"
            computerTurn()
            console.log(computerStats)
            console.log(priorities)

        }
// If the computer is taking their turn, then it displays "Computer" instead of "Player 2"
// Also, the function computerTurn is executed
        else{
            document.getElementById("playerTurn").innerHTML = "Player 2"
            findEconomy()
// Executes "findEconomy" to see the total income and expenditure of the player
            spendEconomy()
// Executes "spendEconomy" to spend their earned resources evenly across their
// buildings under construction
        }
// Does the same as above but for player 2
    }
    turnTotal++
// Increases the turn total to allow for the player's turn to change next time this
// function executes
}

function computerTurn(){
    findEconomy()
    spendEconomy()
    economyPriorities()
    unitPriorities()
// The computer starts with finding and spending their economy, just like the player would but after that,
// the function economyPriorities runs to see if the computer needs to build more resource generators
}
function economyPriorities(){
    if(playerStats.metalExtractors*metalExtractor.metalIncome+parseInt(sessionStorage.playerMetal)>
        computerStats.metalExtractors*metalExtractor.metalIncome+parseInt(sessionStorage.enemyMetal)&&
        (playerStats.metalExtractors+computerStats.metalExtractors<priorities.possibleME)){
        console.log("Needs more metal")
        priorities.metalExtractor = priorities.metalExtractor+4
    }
// If the computer earns less metal than the player, the priority for metal extractors increases by 4
    else if(playerStats.metalExtractors*metalExtractor.metalIncome+parseInt(sessionStorage.playerMetal)<
        computerStats.metalExtractors*metalExtractor.metalIncome+parseInt(sessionStorage.enemyMetal)&&
        (playerStats.metalExtractors+computerStats.metalExtractors==priorities.possibleME)){
        priorities.metalExtractor = 0
    }
// If the computer earns more metal than the player and there are no more available spots to build metal extractors,
// the priority drops to 0
// As there are only a few spots where metal extractors can be built, it doesn't drop to 0 unless all conditions are met
    if(playerStats.powerPlants*powerPlant.powerIncome+parseInt(sessionStorage.playerPower)>
        computerStats.powerPlants*powerPlant.powerIncome+parseInt(sessionStorage.enemyPower)){
        console.log("Needs more power")
        priorities.powerPlant = priorities.powerPlant+3
    }
// If the computer earns less power than the player, the priority for power plants increases by 3
    else if(playerStats.powerPlants*powerPlant.powerIncome+parseInt(sessionStorage.playerPower)<
        computerStats.powerPlants*powerPlant.powerIncome+parseInt(sessionStorage.enemyPower)){
        priorities.powerPlant = 0
    }
// If the computer earns more power than the player, the priority for power plants drops to 0

}
function unitPriorities(){
    if(playerStats.landCR>computerStats.landCR&&computerStats.units<((units.length/2)-1)){
        priorities.landUnit = priorities.landUnit+2
        console.log("Needs more land units")
    }
// If the player has a greater land combat rating and the computer can still build more units,
// the computer's land unit priority increases by 2
    else if(playerStats.landCR<computerStats.landCR&&computerStats.units==((units.length/2)-1)){
        priorities.landUnit = 0
    }
// If the player has a lower land combat rating and the computer can't build more units,
// the computer's land unit priority drops to 0
    if(playerStats.navalCR>computerStats.navalCR&&computerStats.units<((units.length/2)-1)){
        priorities.navalUnit = priorities.navalUnit+2
        console.log("Needs more naval units")
    }
// If the player has a greater naval combat rating and the computer can still build more units,
// the computer's naval unit priority increases by 2
    else if(playerStats.navalCR<computerStats.navalCR&&computerStats.units==((units.length/2)-1)){
        priorities.navalUnit = 0
    }
// If the player has a lower naval combat rating and the computer can't build more units,
// the computer's naval unit priority drops to 0
}

function selectingConstruction(unit){
// Is called by the buttons at the top left of the screen if they have been written to
    if(unit<7){
        if(selectedUnit!=commandUnit&&chosenBuilding==0){
            alert("You must select your command unit before starting construction of a building")
        }
        else if(playerTurn==0){
            alert("Click the Next Turn button to start a player's turn")
        }
    }
// Makes sure that if a building is being queued that the command unit has been selected
// and that a player is taking their turn
    if(unit==1){
        selectedUnit = 0
        chosenBuilding = metalExtractor
    }
    else if(unit==2){
        selectedUnit = 0
        chosenBuilding = powerPlant
    }
    else if(unit==3){
        selectedUnit = 0
        chosenBuilding = landFactory
    }
    else if(unit==4){
        selectedUnit = 0
        chosenBuilding = navalFactory
    }
    else if(unit==5){
        selectedUnit = 0
        chosenBuilding = turret
    }
    else if(unit==6){
        selectedUnit = 0
        chosenBuilding = heavyArtillery
    }
// Assigns the chosen building
    else if(unit==8){
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
// Assigns the chosen land unit
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
// Assigns the chosen naval unit
}

function countBuildings(query){
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
    if(query!=1){
        if (ownedBuildings==buildings.length/2){
            alert("You have built your maximum number of buildings.")
        }
// If the amount of owned buildings = 10, then the player can't build anymore
        else if(ownedBuildings<buildings.length/2){
            canBuild = true
        }
// If the amount of owned buildings is < 10, "canBuild" is set to true to let them build more
    }
    else{
        if(playerTurn==1){
            p1Buildings.push(ownedBuildings)
        }
        else if(playerTurn==2){
            p2Buildings.push(ownedBuildings)
        }
    }
}
function countUnits(query){
// Called by the "unitConstruction" function
// This is basically the same as "countBuildings" but for units
    canBuild = false
    ownedUnits = 0
    for(let i=2;i<units.length;i++){
        if(units[i].player==playerTurn){
            ownedUnits++
        }
    }
    if(query!=1){
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
    else{
        if(playerTurn==1){
            p1Units.push(ownedUnits)
        }
        else if(playerTurn==2){
            p2Units.push(ownedUnits)
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
            splitId(squareId)
            map[mapY][mapX].terrain = "occupiedBuilding"
            map[mapY][mapX].name = chosenBuilding.name
            map[mapY][mapX].playerControl = playerTurn
// The building is then displayed on the map in the clicked div
            if(playerTurn==1){
                div.style.color = sessionStorage.playerColour
                if(chosenBuilding.name=="metalExtractor"&&sessionStorage.computerEnemy=="true"){
                    playerStats.metalExtractors = playerStats.metalExtractors+1
                }
                else if(chosenBuilding.name=="powerPlant"&&sessionStorage.computerEnemy=="true"){
                    playerStats.powerPlants = playerStats.powerPlants+1
                }
// If the player is against the computer and the player builds a resource generator, its stats increases
            }
            else{
                div.style.color = sessionStorage.enemyColour
                if(chosenBuilding.name=="metalExtractor"&&sessionStorage.computerEnemy=="true"){
                    computerStats.metalExtractors = computerStats.metalExtractors+1
                    priorities.metalExtractor = priorities.metalExtractor - 12
                    console.log(computerStats.metalExtractors)
// If the computer builds a metal extractor, its stats increases and the priority for metal extractors decreases
                }
                else if(chosenBuilding.name=="powerPlant"&&sessionStorage.computerEnemy=="true"){
                    computerStats.powerPlants = computerStats.powerPlants+1
                    priorities.powerPlant = priorities.powerPlant - 12
                }
// If the computer builds a power plant, its stats increases and the priority for power plants decreases
            }
// The correct colour for the building is then selected
            break
// When the first unowned slot is found, the loop breaks to leave the rest available
        }
    }
}
function firstEmptyUnit(){
// This function is the same as "firstEmptyBuilding" but for units
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
            units[i].attackCooldown = 1
            units[i].alreadyMoved = false
            units[i].name = chosenUnit.name
            units[i].queuedFactory = globalI
            console.log(chosenUnit.combatRating)
            if(sessionStorage.computerEnemy=="true"){
// Checks to see if the player is against a computer
                if(playerTurn==1){
                    if(chosenUnit.terrain1=="land"){
                        playerStats.landCR = playerStats.landCR+chosenUnit.combatRating
                    }
                    else{
                        playerStats.navalCR = playerStats.navalCR+chosenUnit.combatRating
                    }
                }
// If it's the player's turn and they build a land or naval unit, the appropriate combat rating increases
                else if(playerTurn==2){
                    if(chosenUnit.terrain1=="land"){
                        computerStats.landCR = computerStats.landCR+chosenUnit.combatRating
                        priorities.landUnit = priorities.landUnit - 8
                    }
                    else{
                        computerStats.navalCR = computerStats.navalCR+chosenUnit.combatRating
                        priorities.navalUnit = priorities.navalUnit - 8
                    }
                }
// If it's the computer's turn and they build a land or naval unit, the appropriate combat rating increases
            }
            break
        }
    }
}

function splitId(id){
    mapX=parseInt(id.slice(id.indexOf("-")+1))
    mapY=parseInt(id.slice(0, id.indexOf("-")))
// This just finds the x and y values from the given div id
}

function dataSort(){
    sessionStorage.p1MetalPerTurn = JSON.stringify(p1MetalPerTurn)
    sessionStorage.p2MetalPerTurn = JSON.stringify(p2MetalPerTurn)
    sessionStorage.p1SpentMetalPerTurn = JSON.stringify(p1SpentMetalPerTurn)
    sessionStorage.p2SpentMetalPerTurn = JSON.stringify(p2SpentMetalPerTurn)
    sessionStorage.p1PowerPerTurn = JSON.stringify(p1PowerPerTurn)
    sessionStorage.p2PowerPerTurn = JSON.stringify(p2PowerPerTurn)
    sessionStorage.p1SpentPowerPerTurn = JSON.stringify(p1SpentPowerPerTurn)
    sessionStorage.p2SpentPowerPerTurn = JSON.stringify(p2SpentPowerPerTurn)
    sessionStorage.p1TotalMetal = JSON.stringify(p1TotalMetal)
    sessionStorage.p2TotalMetal = JSON.stringify(p2TotalMetal)
    sessionStorage.p1TotalMetalSpent = JSON.stringify(p1TotalMetalSpent)
    sessionStorage.p2TotalMetalSpent = JSON.stringify(p2TotalMetalSpent)
    sessionStorage.p1TotalPower = JSON.stringify(p1TotalPower)
    sessionStorage.p2TotalPower = JSON.stringify(p2TotalPower)
    sessionStorage.p1TotalPowerSpent = JSON.stringify(p1TotalPowerSpent)
    sessionStorage.p2TotalPowerSpent = JSON.stringify(p2TotalPowerSpent)
    sessionStorage.p1Buildings = JSON.stringify(p1Buildings)
    sessionStorage.p2Buildings = JSON.stringify(p2Buildings)
    sessionStorage.p1Units = JSON.stringify(p1Units)
    sessionStorage.p2Units = JSON.stringify(p2Units)
// Makes all the arrays JSON strings to make them easy to move between JavaScript files
    location = "Statistics.html"
// Moves the player onto the Statistics webpage
}