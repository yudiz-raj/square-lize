class TweenManager {
    constructor(oScene) {
        this.oScene = oScene;
    }
    buttonAnimation(target) {
        this.oScene.add.tween({
            targets: target,
            scaleX: 0.8,
            scaleY: 0.8,
            ease: "power2",
            duration: 200,
            yoyo: true,
            onComplete: () => {
                let isBot;
                target.name == "container_mode_2" ? isBot = true : isBot = false;
                this.oScene.scene.stop("Home");
                this.oScene.scene.start("Level", { isBot });
            }
        });
    }
    settingAnimation() {
        this.oScene.setting.disableInteractive();
        if (this.oScene.setting_bar.scaleX == 1) {
            this.scale = 0;
            this.soundX = 349;
            this.musicX = 349;
        }
        else {
            this.scale = 1;
            this.soundX = 271;
            this.musicX = 424;
        }
        this.oScene.add.tween({
            targets: this.oScene.setting_bar,
            scaleX: this.scale,
            ease: "power2",
            duration: 200,
        });
        this.oScene.add.tween({
            targets: this.oScene.sound_icon,
            x: this.soundX,
            ease: "power2",
            duration: 200,
        });
        this.oScene.add.tween({
            targets: this.oScene.music,
            x: this.musicX,
            ease: "power2",
            duration: 200,
        });
        this.oScene.add.tween({
            targets: this.oScene.setting,
            angle: +360,
            ease: "power2",
            duration: 200,
            onComplete: () => {
                this.oScene.setting.setInteractive();
            }
        });
    }
    signAnimation(target) {
        this.oScene.add.tween({
            targets: target,
            scaleX: 0.1,
            scaleY: 0.1,
            angle: -5,
            ease: "power2",
            duration: 200,
            onComplete: () => {
                target.setAngle(0);
                this.oScene.add.tween({
                    targets: target,
                    angle: +10,
                    ease: "power2",
                    duration: 200,
                    yoyo: true
                });
            }
        });
    }
    userTurnAnimation(userTurn) {
        let target;
        userTurn ? target = this.oScene.player_1_image : target = this.oScene.player_2_image;
        if (this.userTurnTween) {
            this.oScene.player_1_image.setScale(0.3, 0.3);
            this.oScene.player_2_image.setScale(0.3, 0.3);
            this.userTurnTween.stop();
        }
        this.userTurnTween = this.oScene.add.tween({
            targets: target,
            scaleX: +0.35,
            scaleY: +0.35,
            ease: "power4",
            duration: 700,
            yoyo: true,
            repeat: -1
        })
    }
    winnerImageAnimation(target) {
        let winImage;
        if (target.texture.key == "bothPlayer") {
            winImage = "draw";
        }
        else {
            winImage = "winner";
        }
        const winner = this.oScene.add.image(985, -63, winImage);
        winner.scaleX = 0.8;
        winner.scaleY = 0.8;
        let scale = 0;
        if (target.texture.key == "bothPlayer") {
            scale = 1;
        }
        else {
            scale = 0.9;
        }
        this.oScene.add.tween({
            targets: target,
            scaleX: scale,
            scaleY: scale,
            ease: "power2",
            duration: 1000,
            onComplete: () => {
                this.oScene.pause.disableInteractive();
                this.userTurnTween.stop();
                this.oScene.add.tween({
                    targets: winner,
                    x: 960,
                    y: 240,
                    ease: "power2",
                    duration: 400,
                });
            }
        })
    }
}