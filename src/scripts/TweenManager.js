class TweenManager {
    constructor(oScene) {
        this.oScene = oScene;
    }
    logoAnimation() {
        this.oScene.add.tween({
            targets: this.oScene.logoPrefab.avatar_1,
            angle: 10,
            ease: "power2",
            duration: 800,
            yoyo: true,
            onComplete: () => {
                this.oScene.add.tween({
                    targets: this.oScene.logoPrefab.avatar_2,
                    angle: -30,
                    ease: "power2",
                    duration: 800,
                    yoyo: true,
                });
            }
        })
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
                target.name = "container_mode_2"? isBot = true: isBot = false;
                
                this.oScene.scene.stop("Home");
                this.oScene.scene.start("Level", {isBot});
            }
        });
    }
    settingAnimation() {
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
            targets: this.oScene.sound,
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
                this.userTurnTween.stop();
                this.oScene.add.tween({
                    targets: this.oScene.winner,
                    x: 960,
                    y: 240,
                    ease: "power2",
                    duration: 400,
                });
            }
        })
    }
}