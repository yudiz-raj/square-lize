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
            // repeat: -1,
            onComplete: () => {
                this.oScene.add.tween({
                    targets: this.oScene.logoPrefab.avatar_2,
                    angle: -30,
                    ease: "power2",
                    duration: 800,
                    yoyo: true,
                    // repeat: -1,
                });
            }
        })
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
            targets: this.oScene.setting,
            angle: +360,
            ease: "power2",
            duration: 200,
        })
        this.oScene.add.tween({
            targets: this.oScene.setting_bar,
            scaleX: this.scale,
            ease: "power2",
            duration: 200,
        })
        this.oScene.add.tween({
            targets: this.oScene.sound,
            x: this.soundX,
            ease: "power2",
            duration: 200,
        })
        this.oScene.add.tween({
            targets: this.oScene.music,
            x: this.musicX,
            ease: "power2",
            duration: 200,
        })
    }
    userTurnAnimation(userTurn) {
        let target;
        userTurn ? target = this.oScene.player_1_image : target = this.oScene.player_2_image;
        if (this.userTurnTween) {
            this.oScene.player_1_image.setScale(1.3, 1.3);
            this.oScene.player_2_image.setScale(1.3, 1.3);
            this.userTurnTween.stop();
        }
        this.userTurnTween = this.oScene.add.tween({
            targets: target,
            scaleX: +1.5,
            scaleY: +1.5,
            ease: "power2",
            duration: 700,
            yoyo: true,
            repeat: -1
        })
    }
    winnerImageAnimation(target) {
        this.oScene.add.tween({
            targets: target,
            scaleX: 3,
            scaleY: 3,
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