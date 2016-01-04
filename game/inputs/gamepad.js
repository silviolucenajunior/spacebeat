"use strict";

var gamepad = {
   _create: function(){
      game.input.gamepad.start();
      this.gamepad = game.input.gamepad.pad1;
   },
   update: function() {
   	   if (this.gamepad.isDown(Phaser.Gamepad.XBOX360_DPAD_LEFT)) {
   	   	  this.status.left = true;
   	   	  this.status.right = false;
   	   }
   }
};

