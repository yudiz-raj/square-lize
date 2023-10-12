class SoundManager {
    constructor(oScene) {
        this.oScene = oScene;
        this.backgroundMusic = this.oScene.sound.add("background");
        this.clickSound = this.oScene.sound.add("click");
        this.strickPutSound = this.oScene.sound.add("put-stick");
        this.winningSound = this.oScene.sound.add("winning");
    }
    playSound(key, loop) {
        key.play();
        key.loop = loop;
    }
    stopSound(key, loop) {
        key.loop = loop
        key.stop();
    }
}