"use strict";
var _self;
var debugStatus;

var player = {

   /***************************
    * BEGIN PLAYER PROPERTIES *
    ***************************/
   fireDelay: 200, //Delay between fires
   fireLevel : 1, //Level o normal fire
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

   create: function(options){
      console.log("Player Create");
      _self = game.add.sprite(320, 240, 'player');
      _self.gamepad = options.gamepad;
   },

   update: function(){
      _self.speed = 4;
      _self.gamepad.update();

      if (_self.gamepad.status.right){
         _self.x += _self.speed;
      } else if (_self.gamepad.status.left) {
         _self.x -= _self.speed;
      }

      if (_self.gamepad.status.up){
         _self.y -= _self.speed;
      } else if (_self.gamepad.status.down) {
         _self.y += _self.speed;
      }

      if (_self.gamepad.status.hiperSpeed) {
         _self.speed = 6;
         _self.hiperSpeed = true;
      } else {
         _self.speed = 4;
         _self.hiperSpeed = false;
      }

      if (_self.gamepad.status.buttonA) {
         console.log("APRESSED");
         _self.shieldActive = true;
      } else {
         _self.shieldActive = false;
      }

      if (_self.gamepad.status.buttonB) {
         _self.normalWeapon = true;
      } else {
         _self.normalWeapon = false;
      }

      if (_self.gamepad.status.buttonC) {
         _self.specialWeapon = true;
      } else {
         _self.specialWeapon = false;
      }

      if (_self.gamepad.status.buttonD) {
         _self.powerUp = true;
      } else {
         _self.powerUp = false;
      }

      debugStatus = "";
      debugStatus += "</br>HiperSpeed Activated: " + _self.hiperSpeed;
      debugStatus += "</br>NormalWeapon Activated: " + _self.normalWeapon;
      debugStatus += "</br>specialWeapon Activated: " + _self.specialWeapon;
      debugStatus += "</br>PowerUp Activated: " + _self.powerUp;
      debugStatus += "</br>Shield Activated: " + _self.shieldActive;
      document.getElementById('Debug').innerHTML = debugStatus;

      /*
      if (game.input.keyboard.isDown(Phaser.Keyboard.SHIFT)){
         _self.speed = 6;
      }

      if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
         _self.x += _self.speed;
      } else if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
         _self.x -= _self.speed;
      }

      if (game.input.keyboard.isDown(Phaser.Keyboard.UP)){
         _self.y -= _self.speed;
      } else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
         _self.y += _self.speed;
      }*/
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
      console.log("Create Buller");
      console.log(position);
      console.log(damage);
   },
   _createShild: function(){
      console.log("Create Shield");
   },
   _createBomb: function(){
      console.log("Create Bomb");
   },
   _createBean: function(){
      console.log("Create Bean");
   },
   _startChargeBean: function(){
      console.log("Changing bean...");
   },
   _releaseChargeBean: function(){
      console.log("Release Brean");

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

