class Life {

    constructor(x,y,height,width){

        this.x=x;
        this.y=y;
        this.height = height;
        this.width = width;
        this.taken = false;

    }

    collectLife(){

        if (game.player.overlapsObject(this) && this.taken == false){ // ak hrac prejde po extra zivote a nema zivoty na max
            if(game.player.lives < 5) {

                game.player.lives +=1;  // +1 zivot
                this.taken = true;
                game.success.volume = 0.1;
                game.success.load();
                game.success.play();  

            }
        }
    }

    drawLife(){
        //vykreslenie extra zivota
        if(this.taken == false){  

            game.context.drawImage(game.findImage("life"), 0, 0, 20, 20, this.x+game.camera.offset[0],  this.y+game.camera.offset[1], 15, 15);
        
        }
    }
}