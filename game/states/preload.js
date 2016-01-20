function PreloadState(game){
	this.game = game;
	this.game.state.add("preload", this);	
};

PreloadState.prototype = {
	constructor: PreloadState,
	preload: function(){},
	create: function(){
		var _self = this;
		this.game.add.text(80, 10, "Preload State", {font: "32px Arial", fill: "#ffffff"});
		game.input.keyboard.addKey(Phaser.Keyboard.W).onDown.addOnce(function(){
			_self.game.state.start("intro");
		});
	},
	update: function(){}
};