class TitleScene extends Phaser.Scene {
    constructor () {
        super({
            key: 'TitleScene'
        });
    }

    create () {
        console.log("On Title Create");
        this.add.text(80, 10, "Title", {
            font: '32px Arial',
            fill: '#FFFFFF'
        });

        this.input.keyboard.on('keydown_ENTER', () => {
            console.log(" *** Keydown on TitleScene *** ");
            this.scene.stop('TitleScene');
            this.scene.start('CharacterSelectScene');
        });
    }
}

