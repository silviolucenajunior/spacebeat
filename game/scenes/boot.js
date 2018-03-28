class BootScene extends Phaser.Scene {
    constructor () {
        super({
            key: 'BootScene'
        });
    }

    preload () {
        //Add another scenes here.
        console.log("Booting assets and anothers scenes");
        this.scene.add('IntroScene', IntroScene);
        this.scene.add('TitleScene', TitleScene);
        this.scene.add('CharacterSelectScene', CharacterSelectScene);
        this.scene.add('Stage1Scene', Stage1Scene);
    }

    create () {
        this.scene.stop('BootScene');
        this.scene.start('IntroScene');
        console.log("Starting the game");
    }
}