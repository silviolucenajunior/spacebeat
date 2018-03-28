function IntroState(game){
	this.game = game;
	this.game.scene.add("intro", this);	
};

IntroState.prototype = {
	constructor: IntroState,
	preload: function(){},
	create: function(){
		var _self = this;
		this.game.add.text(80, 10, "Intro State", {font: "32px Arial", fill: "#ffffff"});
		game.input.keyboard.addKey(Phaser.Keyboard.W).onDown.addOnce(function(){
			_self.game.state.start("title");
		});
	},
	update: function(){}
};