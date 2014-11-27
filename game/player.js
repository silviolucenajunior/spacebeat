"use strict";
var _self ;

var player = {

   /***************************
    * BEGIN PLAYER PROPERTIES *
    ***************************/
   fireDelay: 200, //Delay between fires
   fireLevel : 1,
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

   _commandMap: {
      '__hiperspeed__' : function(){
         _self.speed = 6;
      },
      '__left__' : function(){
         _self.x += _self.speed;
      },
      '__right__' : function(){
         _self.x -= _self.speed;
      },
      '__up__' : function(){
         _self.y -= _self.speed;
      },
      '__down__' : function(){
         _self.y += _self.speed;
      }
   },

   create: function(){
      console.log("Player Create");
      _self = game.add.sprite(320, 240, 'player');
   },

   update: function(){
      _self.speed = 4;
      if (game.input.keyboard.isDown(Phaser.Keyboard.SHIFT)){
         _self.speed = 6;
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
   },
   /**
    * Map input key to actions keys on object
    */
   _inputMap: function(key){
      switch (key){
         case "__hiperspeed__" : {
            break;
         }
         case "__right__" : {
            break;
         }
         case "__left__" : {
            break;
         }
         case "__up__" : {
            break;
         }
         case "__down__" : {
            break;
         }
         case "__action1__" : {
            break;
         }
         case "__action2__" : {
            break;
         }
         case "__action3__" : {
            break;
         }
         case "__action4__" : {
            break;
         }
      }
   },
   _createBullet: function(position, damage){

   },
   _createShild: function(){

   },
   _createBomb: function(){

   },
   _createBean: function(){

   },
   _startChargeBean: function(){

   },
   _releaseChargeBean: function(){

   },
   rapidFire: function(){
      if (lastFire - date.Now() > fireDelay){
         if (fireLevel === 1) {
            _createBullet(__MIDDLE__, 1);
         } else if (fireLevel === 2){
            _createBullet(__LEFT__, 1);
            _createBullet(__RIGHT__, 1);
         } else if (fireLevel === 3){
            _createBullet(__LEFT__, 1);
            _createBullet(__RIGHT__, 1);
            _createBullet(__MIDDLE__, 1);
         }
      }
   }

}

