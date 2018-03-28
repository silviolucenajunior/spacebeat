function CharacterSelectState(game){
	this.game = game;

	this.cursor = {
		sprite: null,
		fx: null,
		x: 0,
		y: 0,
		delay: 300 //300ms second to detect
	};
	this.game.scene.add("character-select", this);
};

CharacterSelectState.prototype = {
	constructor: CharacterSelectState,
	preload: function(){
		console.log("Preaload of scene");
		var _self = this;
		game.load.image('portrait01', 'assets/images/dev/portrait_01.png');
		game.load.image('portrait02', 'assets/images/dev/portrait_02.png');
		game.load.image('portrait03', 'assets/images/dev/portrait_03.png');
		game.load.image('portrait_cursor', 'assets/images/dev/portrait_cursor.png');
		game.load.audio('beep','assets/sound/fx/beep.mp3');
	},
	create: function(){
		console.log("Create screne on character select");
		var _self = this;
		_self.game.add.sprite(30, 60, 'portrait01');
		_self.game.add.sprite(280, 60, 'portrait02');
		_self.game.add.sprite(530, 60, 'portrait03');
		_self.cursor.sprite = _self.game.add.sprite(25, 55, 'portrait_cursor');
		_self.cursor.fx = _self.game.add.audio('beep');

		_self.graphis = _self.game.add.graphics(100,100);
		this.game.add.text(80, 10, "Character Select State", {font: "32px Arial", fill: "#ffffff"});
		game.input.keyboard.addKey(Phaser.Keyboard.W).onDown.addOnce(function(){
			_self.game.state.start("title");
		});

		game.input.keyboard.addKey(Phaser.Keyboard.LEFT).onDown.add(function(){
			console.log("huahu;");
			if (_self.cursor.x > 0) {
				_self.cursor.x -= 1;
				_self.cursor.sprite.x -= 250;
				_self.cursor.fx.play();
			}
		});

		game.input.keyboard.addKey(Phaser.Keyboard.RIGHT).onDown.add(function(){
			console.log("hTTTu;");
			if (_self.cursor.x < 2) {
				_self.cursor.x += 1;
				_self.cursor.sprite.x += 250;
				_self.cursor.fx.play();
			}
		});

		game.input.keyboard.addKey(Phaser.Keyboard.ENTER).onDown.addOnce(function(){
			switch (_self.cursor.x){
				case 1:
				    _self.game.character = new Character1();
				    break;
				case 2:
				    _self.game.character = new Character2();
				    break;
				case 3:
				    _self.game.character = new Character3();
				    break;
			}
			_self.game.state.start("stage1");
		});

		game.input.keyboard.addKey(Phaser.Keyboard.BACKSPACE).onDown.addOnce(function(){
			_self.game.state.start("title");
		});

	},
	update: function(){

	},
	render: function() {
		console.log("On render");
	}
};