function Stage1State(game){
	this.game = game;
    this.game.state.add("stage1", this);
};

Stage1State.prototype = {
	constructor: Stage1State,
	preload: function(){},
	create: function(){
		var _self = this;
		this.game.add.text(80, 10, "Space Beats", {font: "32px Arial", fill: "#ffffff"});
		game.input.keyboard.addKey(Phaser.Keyboard.W).onDown.addOnce(function(){
			_self.game.state.start("character-select");
		});
	},
	update: function(){}
};