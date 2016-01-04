var player = function Player(options) {
	this.inputSource = null || options.inputSource;
	this.character = null || options.character;
}

player.prototype = {
	constructor: Player,
	preload: function PlayerPreload(){},
	update: function PlayerUpdate(){
		var _self = this;
		_self._processInput();
	},
	//Process input source status and update player status.
	_processInput: function _processInput(){
		var _self = this;
		if (!this.inputSource) {
			console.log("Don't have a input source, pleace seleact one of gamepad, mobile or keyboard");
		    return false;
		}    
        _self.speed = 4;
       
	}
};