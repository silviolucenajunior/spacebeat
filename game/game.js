(function () {
  'use strict';

  var game;
  var config  = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: {
          y: 200
        }
      }
    },
    scene: [
      BootScene
    ]
  };

  game = new Phaser.Game(config);
})();