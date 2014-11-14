"use strict";
var _self ;

var player = {

   /***************************
    * BEGIN PLAYER PROPERTIES *
    ***************************/
   fireDelay: 200, //Delay between fires
   energy: 100, //Current Energy of player. Energy is used by player to do actions
   health: 100, //Current Health of player. If Health 0 player die and lost life
   lifes : 3, //Lifes remains before game over
   energyCost: { //Cost of energy by action
      HYPERSPEED : 2,
      NORMALFIRE : 1,
      SPECIALFIRE : 7,
      SHIELD : 5
   },
   energyReload : 2, //Energy has a amount reloaded by sec
   /************************
   * END PLAYER PROPERTIES *
   *************************/


   //Preload some assets need for player module
   preload: function(){
      console.log("Player Preload");
      game.load.image('player', 'assets/spaceship.png');
   },

   create: function(){
      console.log("Player Create");
      _self = game.add.sprite(320, 240, 'player');
   },

   update: function(){
      var speed = 4;
      if (game.input.keyboard.isDown(Phaser.Keyboard.SHIFT)){
         speed = 6;
      }

      if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
         _self.x += speed;
      } else if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
         _self.x -= speed;
      }

      if (game.input.keyboard.isDown(Phaser.Keyboard.UP)){
         _self.y -= speed;
      } else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
         _self.y += speed;
      }
   }
}

