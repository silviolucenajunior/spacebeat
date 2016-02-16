function Player(options) {
    this.inputSource = null || options.inputSource;
    this.character = null || options.character;
}

Player.prototype = {
	constructor: Player,
	preload: function PlayerPreload(){},
	update: function PlayerUpdate(){
		var _self = this;
		if (!_self.character){
			console.log("Don't have a character, pleace seleact one to play");
			return false;
		}
		_self._processInput();
	},
	//Process input source status and update player status.
	_processInput: function _processInput(){
		var _self = this;
		if (!this.inputSource) {
			console.log("Don't have a input source, pleace seleact one of gamepad, mobile or keyboard");
		    return false;
		}    
        if (_self.inputSource.status.hiperSpeed) {
           _self.speed = 6;
           _self.hiperSpeed = true;
        } else {
           _self.speed = _self.character.speed;
           _self.hiperSpeed = false;
        }

        if (_self.inputSource.status.right){
           _self.x += _self.speed;
        } else if (_self.inputSource.status.left) {
           _self.x -= _self.speed;
        }

        if (_self.inputSource.status.up){
           _self.y -= _self.speed;
        } else if (_self.inputSource.status.down) {
           _self.y += _self.speed;
        }
        

        if (_self.inputSource.status.buttonA) {
           _self.shieldActive = true;
        } else {
           _self.shieldActive = false;
        }

        if (_self.inputSource.status.buttonB) {
           _self.normalWeapon = true;
        } else {
           _self.normalWeapon = false;
        }

        if (_self.inputSource.status.buttonC) {
           _self.specialWeapon = true;
        } else {
           _self.specialWeapon = false;
        }

        if (_self.inputSource.status.buttonD) {
           _self.powerUp = true;
        } else {
           _self.powerUp = false;
        }
       
	}
};