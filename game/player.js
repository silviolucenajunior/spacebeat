"use strict";

var player = {
   //Preload some assets need for player module
   preload: function(){
      console.log("Player Preload");
      game.load.image('player', 'assets/spaceship.png');
   }
}

