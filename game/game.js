var _core  = {
   preload : function(){
      console.log("Core Preload");
      player.preload();
   },
   create: function(){
      console.log("Create Function");
   },
   update: function(){

   }
};

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', _core);