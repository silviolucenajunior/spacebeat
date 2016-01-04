"use strict";

function KeyboardController(game){
	this.game = game;
	this.status = {
		left: false,
		right: false,
		up: false,
		down: false,
		buttonA: false,
		buttonB: false,
		buttonC: false,
		buttonD: false
	}
}

KeyboardController.prototype = {
	_startListerner: function() {
	},
	update: function() {
		this.status = {
			left: false,
			right: false,
			up: false,
			down: false,
			hiperSpeed: false,
			buttonA: false,
			buttonB: false,
			buttonC: false,
			buttonD: false
		}
        if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
        	this.status.right = true;
        	this.status.left = false;
        } else if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
        	this.status.right = false;
        	this.status.left = true;
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.UP)){
        	this.status.up = true;
        	this.status.down = false;
        } else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
        	this.status.up = false;
        	this.status.down = true;
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.SHIFT)){
        	this.status.hiperSpeed = true;
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.A)){
        	console.log("A");
        	this.status.buttonA = true;
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.S)){
        	this.status.buttonB = true;
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.D)){
        	this.status.buttonC = true;
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.F)){
        	this.status.buttonD = true;
        }
	}	
}