let aBox = [], aCompletedBox = [];
let sSignName, sWinnerName, winner_image;
let time = 15;
let winner = false;
let userTurn = true;
let nPlayer_1Score = 0;
let nPlayer_2Score = 0;

class GameManager {
    constructor(oScene) {
        this.oScene = oScene;
    }

    boxs() {
        aBox = [
            {
                firstSide: this.oScene.container_lines.list[0].name,
                secondSide: this.oScene.container_lines.list[1].name,
                thirdSide: this.oScene.container_lines.list[2].name,
                fourthSide: this.oScene.container_lines.list[3].name,
            },
            {
                firstSide: this.oScene.container_lines.list[2].name,
                secondSide: this.oScene.container_lines.list[4].name,
                thirdSide: this.oScene.container_lines.list[5].name,
                fourthSide: this.oScene.container_lines.list[6].name,
            },
            {
                firstSide: this.oScene.container_lines.list[7].name,
                secondSide: this.oScene.container_lines.list[8].name,
                thirdSide: this.oScene.container_lines.list[9].name,
                fourthSide: this.oScene.container_lines.list[10].name,
            },
            {
                firstSide: this.oScene.container_lines.list[9].name,
                secondSide: this.oScene.container_lines.list[3].name,
                thirdSide: this.oScene.container_lines.list[11].name,
                fourthSide: this.oScene.container_lines.list[12].name,
            },
            {
                firstSide: this.oScene.container_lines.list[11].name,
                secondSide: this.oScene.container_lines.list[6].name,
                thirdSide: this.oScene.container_lines.list[13].name,
                fourthSide: this.oScene.container_lines.list[14].name,
            },
            {
                firstSide: this.oScene.container_lines.list[13].name,
                secondSide: this.oScene.container_lines.list[15].name,
                thirdSide: this.oScene.container_lines.list[16].name,
                fourthSide: this.oScene.container_lines.list[17].name,
            },
            {
                firstSide: this.oScene.container_lines.list[18].name,
                secondSide: this.oScene.container_lines.list[19].name,
                thirdSide: this.oScene.container_lines.list[20].name,
                fourthSide: this.oScene.container_lines.list[21].name,
            },
            {
                firstSide: this.oScene.container_lines.list[20].name,
                secondSide: this.oScene.container_lines.list[10].name,
                thirdSide: this.oScene.container_lines.list[22].name,
                fourthSide: this.oScene.container_lines.list[23].name,
            },
            {
                firstSide: this.oScene.container_lines.list[22].name,
                secondSide: this.oScene.container_lines.list[12].name,
                thirdSide: this.oScene.container_lines.list[24].name,
                fourthSide: this.oScene.container_lines.list[25].name,
            },
            {
                firstSide: this.oScene.container_lines.list[24].name,
                secondSide: this.oScene.container_lines.list[14].name,
                thirdSide: this.oScene.container_lines.list[26].name,
                fourthSide: this.oScene.container_lines.list[27].name,
            },
            {
                firstSide: this.oScene.container_lines.list[26].name,
                secondSide: this.oScene.container_lines.list[17].name,
                thirdSide: this.oScene.container_lines.list[28].name,
                fourthSide: this.oScene.container_lines.list[29].name,
            },
            {
                firstSide: this.oScene.container_lines.list[28].name,
                secondSide: this.oScene.container_lines.list[30].name,
                thirdSide: this.oScene.container_lines.list[31].name,
                fourthSide: this.oScene.container_lines.list[32].name,
            },
            {
                firstSide: this.oScene.container_lines.list[33].name,
                secondSide: this.oScene.container_lines.list[21].name,
                thirdSide: this.oScene.container_lines.list[34].name,
                fourthSide: this.oScene.container_lines.list[35].name,
            },
            {
                firstSide: this.oScene.container_lines.list[34].name,
                secondSide: this.oScene.container_lines.list[23].name,
                thirdSide: this.oScene.container_lines.list[36].name,
                fourthSide: this.oScene.container_lines.list[37].name,
            },
            {
                firstSide: this.oScene.container_lines.list[36].name,
                secondSide: this.oScene.container_lines.list[25].name,
                thirdSide: this.oScene.container_lines.list[38].name,
                fourthSide: this.oScene.container_lines.list[39].name,
            },
            {
                firstSide: this.oScene.container_lines.list[38].name,
                secondSide: this.oScene.container_lines.list[27].name,
                thirdSide: this.oScene.container_lines.list[40].name,
                fourthSide: this.oScene.container_lines.list[41].name,
            },
            {
                firstSide: this.oScene.container_lines.list[40].name,
                secondSide: this.oScene.container_lines.list[29].name,
                thirdSide: this.oScene.container_lines.list[42].name,
                fourthSide: this.oScene.container_lines.list[43].name,
            },
            {
                firstSide: this.oScene.container_lines.list[42].name,
                secondSide: this.oScene.container_lines.list[32].name,
                thirdSide: this.oScene.container_lines.list[44].name,
                fourthSide: this.oScene.container_lines.list[45].name,
            },
            {
                firstSide: this.oScene.container_lines.list[46].name,
                secondSide: this.oScene.container_lines.list[37].name,
                thirdSide: this.oScene.container_lines.list[47].name,
                fourthSide: this.oScene.container_lines.list[48].name,
            },
            {
                firstSide: this.oScene.container_lines.list[47].name,
                secondSide: this.oScene.container_lines.list[39].name,
                thirdSide: this.oScene.container_lines.list[49].name,
                fourthSide: this.oScene.container_lines.list[50].name,
            },
            {
                firstSide: this.oScene.container_lines.list[49].name,
                secondSide: this.oScene.container_lines.list[41].name,
                thirdSide: this.oScene.container_lines.list[51].name,
                fourthSide: this.oScene.container_lines.list[52].name,
            },
            {
                firstSide: this.oScene.container_lines.list[51].name,
                secondSide: this.oScene.container_lines.list[43].name,
                thirdSide: this.oScene.container_lines.list[53].name,
                fourthSide: this.oScene.container_lines.list[54].name,
            },
            {
                firstSide: this.oScene.container_lines.list[55].name,
                secondSide: this.oScene.container_lines.list[50].name,
                thirdSide: this.oScene.container_lines.list[56].name,
                fourthSide: this.oScene.container_lines.list[57].name,
            },
            {
                firstSide: this.oScene.container_lines.list[56].name,
                secondSide: this.oScene.container_lines.list[52].name,
                thirdSide: this.oScene.container_lines.list[58].name,
                fourthSide: this.oScene.container_lines.list[59].name,
            }
        ]
    }
    checkForWinner() {
        if (aCompletedBox.length == 24) {
            if (nPlayer_1Score > nPlayer_2Score) {
                sWinnerName = "avatar_1";
            }
            if (nPlayer_1Score == nPlayer_2Score) {
                sWinnerName = "draw_image";
            }
            if (nPlayer_1Score < nPlayer_2Score) {
                sWinnerName = "avatar_2";
            }
            winner = true;
            time = 15;
            nPlayer_1Score = 0;
            nPlayer_2Score = 0;
            clearInterval(this.timerInterval);
            winner_image = this.oScene.add.image(960, 540, sWinnerName).setScale(5);
            aCompletedBox.splice(0, aCompletedBox.length);
            this.oScene.oTweenManager.winnerImageAnimation(winner_image);
        }
    }
    setPauseButtonEnabled() {
        this.oScene.restart.setInteractive().on("pointerdown", () => {
			nPlayer_1Score = 0;
            nPlayer_2Score = 0;
            clearInterval(this.timerInterval);
            time = 15;
            winner = false;
            aCompletedBox.splice(0, aCompletedBox.length);
            this.oScene.scene.restart("Level");
		});
        this.oScene.stop.setInteractive().on("pointerdown", () => {
			nPlayer_1Score = 0;
            nPlayer_2Score = 0;
            clearInterval(this.timerInterval);
            time = 15;
            winner = false;
            aCompletedBox.splice(0, aCompletedBox.length);
            this.oScene.scene.stop("Level");
            this.oScene.scene.start("Home");
		});
        this.oScene.pause.setInteractive().on("pointerdown", () => {
            if (this.oScene.pause.texture.key == "pause") {
                this.oScene.pause.setTexture("resume");
                this.oScene.container_lines.list.forEach((line) => {
                    line.disableInteractive();
                });
                clearInterval(this.timerInterval);
            }
            else {
                this.setTimer(time);
                this.oScene.pause.setTexture("pause");
                this.oScene.container_lines.list.forEach((line) => {
                    if (line.texture.key == "notSelectedLine") {
                        line.setInteractive();
                    }
                });
            }
        })
    }
    setTimer(maxTime) {
        time = maxTime;
        this.oScene.oTweenManager.userTurnAnimation(userTurn);
        this.timerInterval = setInterval(() => {
            userTurn ? this.oScene.player_1Time.setText(time + " Seconds") : this.oScene.player_2Time.setText(time + " Seconds");
            if (time > 0 && winner == false) {
                time--;
            } 
            if(time <= 0 && winner == false) {
                time = 15;
                this.turnHandler();
            }
        }, 1000);
    }
    turnHandler() {
        let repeatTurn = false;
        aBox.forEach((box, index) => {
            if (box.firstSide == 'selected' && box.secondSide == 'selected' && box.thirdSide == 'selected' && box.fourthSide == 'selected') {
                if (!aCompletedBox.includes(index)) {
                    aCompletedBox.push(index);
                    userTurn ? sSignName = "avatar_1" : sSignName = "avatar_2";
                    userTurn ? nPlayer_1Score++ : nPlayer_2Score++;
                    this.oScene.player_1Score.setText(nPlayer_1Score);
                    this.oScene.player_2Score.setText(nPlayer_2Score);
                    const sign = this.oScene.add.image(this.oScene.container_boxs.list[index].x, this.oScene.container_boxs.list[index].y, sSignName).setScale(0.5);
                    repeatTurn = true;
                }
            }
        })
        this.checkForWinner();
        if (!repeatTurn) {
            userTurn = !userTurn;
        }
        clearInterval(this.timerInterval);
        this.setTimer(15);
    }
}