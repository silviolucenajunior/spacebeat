class IntroScene extends Phaser.Scene {
    constructor () {
        super({
            key: 'IntroScene'
        });
    }

    create () {
        console.log("On Intro Create");
        this.add.text(80, 10, "Intro", {
            font: '32px Arial',
            fill: '#FFFFFF'
        });

        this.input.keyboard.on('keydown_ENTER', () => {
            console.log("Keydown on IntroScene");
            this.scene.stop('IntroScene');
            this.scene.start('TitleScene');
        });
    }
}

