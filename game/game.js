var game;
var _core  = {
   preload : function(){
      console.log("Core Preload");
      player.preload();
   },
   create: function(){
      console.log("Create Function");
      var gamepad = new KeyboardController(game);
      player.create({
         gamepad: gamepad
      });
   },
   update: function(){
      player.update();
   }
};

game = new Phaser.Game(800, 600, Phaser.AUTO, '', _core);