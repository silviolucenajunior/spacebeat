var game;
var _core  = {
   preload : function(){
      console.log("Core Preload");
      new IntroState(game);
      new PreloadState(game);
      new TitleState(game);
      new CharacterSelectState(game);
      new Stage1State(game);
      var inputSource = new KeyboardController(game);
      game.inputSource = inputSource;
      //player.preload();
   },
   create: function(){
      /*console.log("Create Function");
      var gamepad = new KeyboardController(game);
      var character = new Character1(game);
      this.player = new Player({
         inputSource: gamepad,
         character: character
      });
      */
      game.state.start("character-select");
   },
   update: function(){
     // this.player.update();
   }
};

game = new Phaser.Game(800, 600, Phaser.AUTO, '', _core);