var player, game, form,datatbase, gameState, playerCount;
gameTStae=0
function setup(){
    database=firebase.database()
    createCanvas(400,400)
    game = new Game()
    game.getState()
    game.start()

}
function draw(){

}