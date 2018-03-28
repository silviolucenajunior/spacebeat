class Stage1Scene extends Phaser.Scene {
    constructor () {
        super({
            key: 'Stage1Scene'
        });
    }

    create () {
        console.log("On Stage 1 Create");
        this.add.text(80, 10, "Space Beats", {
            font: '32px Arial',
            fill: '#FFFFFF'
        });
    }
}

