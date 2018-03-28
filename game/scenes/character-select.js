class CharacterSelectScene extends Phaser.Scene {

    constructor() {
        super({
            key: 'CharacterSelectScene'
        });

        this.cursor = {
            sprite: null,
            fx: null,
            x: 0,
            y: 0,
            delay: 300 //300ms second to detect
        };
    }

    preload () {
        this.load.image('portrait01', 'assets/images/dev/portrait_01.png');
        this.load.image('portrait02', 'assets/images/dev/portrait_02.png');
        this.load.image('portrait03', 'assets/images/dev/portrait_03.png');
        this.load.image('portrait_cursor', 'assets/images/dev/portrait_cursor.png');
        this.load.audio('beep','assets/sound/fx/beep.mp3');
    }

    create (){
        var self = this;
        this.add.sprite(130, 160, 'portrait01');
        this.add.sprite(280, 60, 'portrait02');
        this.add.sprite(530, 60, 'portrait03');
        this.cursor.sprite = this.add.sprite(25, 55, 'portrait_cursor');
        this.cursor.fx = this.sound.add('beep');
        this.graphics = this.add.graphics(100, 100);
        this.add.text(80, 10, "Character Select State", {font: "32px Arial", fill: "#ffffff"});

        this.input.keyboard.on('keydown_LEFT', () => {
            if (this.cursor.x > 0) {
                this.cursor.x -= 1;
                this.cursor.sprite.x -= 250;
                this.cursor.fx.play();
            }
        });

        this.input.keyboard.on('keydown_RIGHT', () => {
            if (this.cursor.x < 2) {
                this.cursor.x += 1;
                this.cursor.sprite.x += 250;
                this.cursor.fx.play();
            }
        });

        this.input.keyboard.on('keydown_ENTER', () => {
            console.log("ENTER");
            switch (this.cursor.x){
                case 1:
                    this.sys.game.character = new Character1();
                    break;
                case 2:
                    this.sys.game.character = new Character2();
                    break;
                case 3:
                    this.sys.game.character = new Character3();
                    break;
            }
            this.scene.stop('CharacterSelectScene');
            this.scene.start('Stage1Scene');
        });

        this.input.keyboard.on('keydown_BACKSPACE', () => {
            this.scene.stop('CharacterSelectScene');
            this.scene.start("TitleScene");
        });
    }
}

