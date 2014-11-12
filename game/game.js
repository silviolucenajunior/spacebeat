var _core  = {
   preload : function(){
      console.log("Preeload Function");
   },
   create: function(){
      console.log("Create Function");
   },
   update: function(){

   }
};

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', _core);