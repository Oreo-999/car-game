class Game{
    constructor(){
    }
    getState(){
        var gameRef = database.ref("gameState");
        gameRef.on("value",function(data){
            gameState=data.val()
        })
    }
    updateState(State){
        database.ref("/").update({gameState:State})
    }
    start(){
        if(gameState==0){
            form = new Form()
            form.display()
            player = new Player();
            player.getCount();
        }
    }
}