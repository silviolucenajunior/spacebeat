var game;
var _core  = {
   preload : function(){
      console.log("Core Preload");
      //player.preload();
   },
   create: function(){
      console.log("Create Function");
      var gamepad = new KeyboardController(game);
      var character = new Character1(game);
      this.player = new Player({
         inputSource: gamepad,
         character: character
      });
   },
   update: function(){
      this.player.update();
   }
};

game = new Phaser.Game(800, 600, Phaser.AUTO, '', _core);