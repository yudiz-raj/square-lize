// You can write more code here
/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// body
		const body = this.add.container(0, 0);

		// background_image_1
		const background_image_1 = this.add.image(960, 540, "background_image_1");
		body.add(background_image_1);

		// replay_button
		const replay_button = this.add.text(960, 1033, "", {});
		replay_button.setOrigin(0.5, 0.5);
		replay_button.visible = false;
		replay_button.text = "Replay";
		replay_button.setStyle({ "fontFamily": "Barrio", "fontSize": "60px" });
		body.add(replay_button);

		// container_boxs
		const container_boxs = this.add.container(0, 0);
		body.add(container_boxs);

		// box_1
		const box_1 = this.add.rectangle(915, 314, 170, 170);
		box_1.name = "box_1";
		box_1.scaleX = 0.5;
		box_1.scaleY = 0.5;
		box_1.visible = false;
		box_1.isFilled = true;
		container_boxs.add(box_1);

		// box_2
		const box_2 = this.add.rectangle(1006, 315, 170, 170);
		box_2.name = "box_2";
		box_2.scaleX = 0.5;
		box_2.scaleY = 0.5;
		box_2.visible = false;
		box_2.isFilled = true;
		container_boxs.add(box_2);

		// box_3
		const box_3 = this.add.rectangle(824, 404, 170, 170);
		box_3.name = "box_3";
		box_3.scaleX = 0.5;
		box_3.scaleY = 0.5;
		box_3.visible = false;
		box_3.isFilled = true;
		container_boxs.add(box_3);

		// box_4
		const box_4 = this.add.rectangle(915, 404, 170, 170);
		box_4.name = "box_4";
		box_4.scaleX = 0.5;
		box_4.scaleY = 0.5;
		box_4.visible = false;
		box_4.isFilled = true;
		container_boxs.add(box_4);

		// box_5
		const box_5 = this.add.rectangle(1006, 404, 170, 170);
		box_5.name = "box_5";
		box_5.scaleX = 0.5;
		box_5.scaleY = 0.5;
		box_5.visible = false;
		box_5.isFilled = true;
		container_boxs.add(box_5);

		// box_6
		const box_6 = this.add.rectangle(1096, 404, 170, 170);
		box_6.name = "box_6";
		box_6.scaleX = 0.5;
		box_6.scaleY = 0.5;
		box_6.visible = false;
		box_6.isFilled = true;
		container_boxs.add(box_6);

		// box_7
		const box_7 = this.add.rectangle(732, 494, 170, 170);
		box_7.name = "box_7";
		box_7.scaleX = 0.5;
		box_7.scaleY = 0.5;
		box_7.visible = false;
		box_7.isFilled = true;
		container_boxs.add(box_7);

		// box_8
		const box_8 = this.add.rectangle(824, 496, 170, 170);
		box_8.name = "box_8";
		box_8.scaleX = 0.5;
		box_8.scaleY = 0.5;
		box_8.visible = false;
		box_8.isFilled = true;
		container_boxs.add(box_8);

		// box_9
		const box_9 = this.add.rectangle(915, 495, 170, 170);
		box_9.name = "box_9";
		box_9.scaleX = 0.5;
		box_9.scaleY = 0.5;
		box_9.visible = false;
		box_9.isFilled = true;
		container_boxs.add(box_9);

		// box_10
		const box_10 = this.add.rectangle(1006, 495, 170, 170);
		box_10.name = "box_10";
		box_10.scaleX = 0.5;
		box_10.scaleY = 0.5;
		box_10.visible = false;
		box_10.isFilled = true;
		container_boxs.add(box_10);

		// box_11
		const box_11 = this.add.rectangle(1096, 495, 170, 170);
		box_11.name = "box_11";
		box_11.scaleX = 0.5;
		box_11.scaleY = 0.5;
		box_11.visible = false;
		box_11.isFilled = true;
		container_boxs.add(box_11);

		// box_12
		const box_12 = this.add.rectangle(1187, 495, 170, 170);
		box_12.name = "box_12";
		box_12.scaleX = 0.5;
		box_12.scaleY = 0.5;
		box_12.visible = false;
		box_12.isFilled = true;
		container_boxs.add(box_12);

		// box_13
		const box_13 = this.add.rectangle(732, 586, 170, 170);
		box_13.name = "box_13";
		box_13.scaleX = 0.5;
		box_13.scaleY = 0.5;
		box_13.visible = false;
		box_13.isFilled = true;
		container_boxs.add(box_13);

		// box_14
		const box_14 = this.add.rectangle(824, 585, 170, 170);
		box_14.name = "box_14";
		box_14.scaleX = 0.5;
		box_14.scaleY = 0.5;
		box_14.visible = false;
		box_14.isFilled = true;
		container_boxs.add(box_14);

		// box_15
		const box_15 = this.add.rectangle(915, 585, 170, 170);
		box_15.name = "box_15";
		box_15.scaleX = 0.5;
		box_15.scaleY = 0.5;
		box_15.visible = false;
		box_15.isFilled = true;
		container_boxs.add(box_15);

		// box_16
		const box_16 = this.add.rectangle(1006, 585, 170, 170);
		box_16.name = "box_16";
		box_16.scaleX = 0.5;
		box_16.scaleY = 0.5;
		box_16.visible = false;
		box_16.isFilled = true;
		container_boxs.add(box_16);

		// box_17
		const box_17 = this.add.rectangle(1096, 585, 170, 170);
		box_17.name = "box_17";
		box_17.scaleX = 0.5;
		box_17.scaleY = 0.5;
		box_17.visible = false;
		box_17.isFilled = true;
		container_boxs.add(box_17);

		// box_18
		const box_18 = this.add.rectangle(1187, 585, 170, 170);
		box_18.name = "box_18";
		box_18.scaleX = 0.5;
		box_18.scaleY = 0.5;
		box_18.visible = false;
		box_18.isFilled = true;
		container_boxs.add(box_18);

		// box_19
		const box_19 = this.add.rectangle(824, 677, 170, 170);
		box_19.name = "box_19";
		box_19.scaleX = 0.5;
		box_19.scaleY = 0.5;
		box_19.visible = false;
		box_19.isFilled = true;
		container_boxs.add(box_19);

		// box_20
		const box_20 = this.add.rectangle(915, 677, 170, 170);
		box_20.name = "box_20";
		box_20.scaleX = 0.5;
		box_20.scaleY = 0.5;
		box_20.visible = false;
		box_20.isFilled = true;
		container_boxs.add(box_20);

		// box_21
		const box_21 = this.add.rectangle(1006, 677, 170, 170);
		box_21.name = "box_21";
		box_21.scaleX = 0.5;
		box_21.scaleY = 0.5;
		box_21.visible = false;
		box_21.isFilled = true;
		container_boxs.add(box_21);

		// box_22
		const box_22 = this.add.rectangle(1096, 677, 170, 170);
		box_22.name = "box_22";
		box_22.scaleX = 0.5;
		box_22.scaleY = 0.5;
		box_22.visible = false;
		box_22.isFilled = true;
		container_boxs.add(box_22);

		// box_23
		const box_23 = this.add.rectangle(915, 766, 170, 170);
		box_23.name = "box_23";
		box_23.scaleX = 0.5;
		box_23.scaleY = 0.5;
		box_23.visible = false;
		box_23.isFilled = true;
		container_boxs.add(box_23);

		// box_24
		const box_24 = this.add.rectangle(1006, 766, 170, 170);
		box_24.name = "box_24";
		box_24.scaleX = 0.5;
		box_24.scaleY = 0.5;
		box_24.visible = false;
		box_24.isFilled = true;
		container_boxs.add(box_24);

		// container_lines
		const container_lines = this.add.container(592, 185);
		body.add(container_lines);

		// line_1
		const line_1 = this.add.image(277, 129, "line_image");
		line_1.name = "line_1";
		line_1.scaleX = 0.4;
		line_1.scaleY = 0.19;
		line_1.tintFill = true;
		line_1.tintTopLeft = 13949731;
		line_1.tintTopRight = 13949731;
		line_1.tintBottomLeft = 13949731;
		line_1.tintBottomRight = 13949731;
		container_lines.add(line_1);

		// line_2
		const line_2 = this.add.image(324, 83, "line_image");
		line_2.name = "line_2";
		line_2.scaleX = 0.4;
		line_2.scaleY = 0.19;
		line_2.angle = 90;
		line_2.tintFill = true;
		line_2.tintTopLeft = 13949731;
		line_2.tintTopRight = 13949731;
		line_2.tintBottomLeft = 13949731;
		line_2.tintBottomRight = 13949731;
		container_lines.add(line_2);

		// line_3
		const line_3 = this.add.image(369, 131, "line_image");
		line_3.name = "line_3";
		line_3.scaleX = 0.4;
		line_3.scaleY = 0.19;
		line_3.tintFill = true;
		container_lines.add(line_3);

		// line_4
		const line_4 = this.add.image(324, 173, "line_image");
		line_4.name = "line_4";
		line_4.scaleX = 0.4;
		line_4.scaleY = 0.19;
		line_4.angle = 90;
		line_4.tintFill = true;
		container_lines.add(line_4);

		// line_5
		const line_5 = this.add.image(414, 83, "line_image");
		line_5.name = "line_5";
		line_5.scaleX = 0.4;
		line_5.scaleY = 0.19;
		line_5.angle = 90;
		line_5.tintFill = true;
		line_5.tintTopLeft = 13949731;
		line_5.tintTopRight = 13949731;
		line_5.tintBottomLeft = 13949731;
		line_5.tintBottomRight = 13949731;
		container_lines.add(line_5);

		// line_6
		const line_6 = this.add.image(459, 128, "line_image");
		line_6.name = "line_6";
		line_6.scaleX = 0.4;
		line_6.scaleY = 0.19;
		line_6.tintFill = true;
		line_6.tintTopLeft = 13949731;
		line_6.tintTopRight = 13949731;
		line_6.tintBottomLeft = 13949731;
		line_6.tintBottomRight = 13949731;
		container_lines.add(line_6);

		// line_7
		const line_7 = this.add.image(412, 173, "line_image");
		line_7.name = "line_7";
		line_7.scaleX = 0.4;
		line_7.scaleY = 0.19;
		line_7.angle = 90;
		line_7.tintFill = true;
		container_lines.add(line_7);

		// line_8
		const line_8 = this.add.image(186, 218, "line_image");
		line_8.name = "line_8";
		line_8.scaleX = 0.4;
		line_8.scaleY = 0.19;
		line_8.tintFill = true;
		line_8.tintTopLeft = 13949731;
		line_8.tintTopRight = 13949731;
		line_8.tintBottomLeft = 13949731;
		line_8.tintBottomRight = 13949731;
		container_lines.add(line_8);

		// line_9
		const line_9 = this.add.image(231, 173, "line_image");
		line_9.name = "line_9";
		line_9.scaleX = 0.4;
		line_9.scaleY = 0.19;
		line_9.angle = 90;
		line_9.tintFill = true;
		line_9.tintTopLeft = 13949731;
		line_9.tintTopRight = 13949731;
		line_9.tintBottomLeft = 13949731;
		line_9.tintBottomRight = 13949731;
		container_lines.add(line_9);

		// line_10
		const line_10 = this.add.image(277, 223, "line_image");
		line_10.name = "line_10";
		line_10.scaleX = 0.4;
		line_10.scaleY = 0.19;
		line_10.tintFill = true;
		container_lines.add(line_10);

		// line_11
		const line_11 = this.add.image(233, 263, "line_image");
		line_11.name = "line_11";
		line_11.scaleX = 0.4;
		line_11.scaleY = 0.19;
		line_11.angle = 90;
		line_11.tintFill = true;
		container_lines.add(line_11);

		// line_12
		const line_12 = this.add.image(369, 223, "line_image");
		line_12.name = "line_12";
		line_12.scaleX = 0.4;
		line_12.scaleY = 0.19;
		line_12.tintFill = true;
		container_lines.add(line_12);

		// line_13
		const line_13 = this.add.image(321, 263, "line_image");
		line_13.name = "line_13";
		line_13.scaleX = 0.4;
		line_13.scaleY = 0.19;
		line_13.angle = 90;
		line_13.tintFill = true;
		container_lines.add(line_13);

		// line_14
		const line_14 = this.add.image(459, 217, "line_image");
		line_14.name = "line_14";
		line_14.scaleX = 0.4;
		line_14.scaleY = 0.19;
		line_14.tintFill = true;
		container_lines.add(line_14);

		// line_15
		const line_15 = this.add.image(413, 263, "line_image");
		line_15.name = "line_15";
		line_15.scaleX = 0.4;
		line_15.scaleY = 0.19;
		line_15.angle = 90;
		line_15.tintFill = true;
		container_lines.add(line_15);

		// line_16
		const line_16 = this.add.image(505, 172, "line_image");
		line_16.name = "line_16";
		line_16.scaleX = 0.4;
		line_16.scaleY = 0.19;
		line_16.angle = 90;
		line_16.tintFill = true;
		line_16.tintTopLeft = 13949731;
		line_16.tintTopRight = 13949731;
		line_16.tintBottomLeft = 13949731;
		line_16.tintBottomRight = 13949731;
		container_lines.add(line_16);

		// line_17
		const line_17 = this.add.image(550, 218, "line_image");
		line_17.name = "line_17";
		line_17.scaleX = 0.4;
		line_17.scaleY = 0.19;
		line_17.tintFill = true;
		line_17.tintTopLeft = 13949731;
		line_17.tintTopRight = 13949731;
		line_17.tintBottomLeft = 13949731;
		line_17.tintBottomRight = 13949731;
		container_lines.add(line_17);

		// line_18
		const line_18 = this.add.image(505, 263, "line_image");
		line_18.name = "line_18";
		line_18.scaleX = 0.4;
		line_18.scaleY = 0.19;
		line_18.angle = 90;
		line_18.tintFill = true;
		container_lines.add(line_18);

		// line_19
		const line_19 = this.add.image(93, 308, "line_image");
		line_19.name = "line_19";
		line_19.scaleX = 0.4;
		line_19.scaleY = 0.19;
		line_19.tintFill = true;
		line_19.tintTopLeft = 13949731;
		line_19.tintTopRight = 13949731;
		line_19.tintBottomLeft = 13949731;
		line_19.tintBottomRight = 13949731;
		container_lines.add(line_19);

		// line_20
		const line_20 = this.add.image(139, 263, "line_image");
		line_20.name = "line_20";
		line_20.scaleX = 0.4;
		line_20.scaleY = 0.19;
		line_20.angle = 90;
		line_20.tintFill = true;
		line_20.tintTopLeft = 13949731;
		line_20.tintTopRight = 13949731;
		line_20.tintBottomLeft = 13949731;
		line_20.tintBottomRight = 13949731;
		container_lines.add(line_20);

		// line_21
		const line_21 = this.add.image(186, 313, "line_image");
		line_21.name = "line_21";
		line_21.scaleX = 0.4;
		line_21.scaleY = 0.19;
		line_21.tintFill = true;
		container_lines.add(line_21);

		// line_22
		const line_22 = this.add.image(138, 356, "line_image");
		line_22.name = "line_22";
		line_22.scaleX = 0.4;
		line_22.scaleY = 0.19;
		line_22.angle = 90;
		line_22.tintFill = true;
		container_lines.add(line_22);

		// line_23
		const line_23 = this.add.image(277, 307, "line_image");
		line_23.name = "line_23";
		line_23.scaleX = 0.4;
		line_23.scaleY = 0.19;
		line_23.tintFill = true;
		container_lines.add(line_23);

		// line_24
		const line_24 = this.add.image(232, 356, "line_image");
		line_24.name = "line_24";
		line_24.scaleX = 0.4;
		line_24.scaleY = 0.19;
		line_24.angle = 90;
		line_24.tintFill = true;
		container_lines.add(line_24);

		// line_25
		const line_25 = this.add.image(369, 310, "line_image");
		line_25.name = "line_25";
		line_25.scaleX = 0.4;
		line_25.scaleY = 0.19;
		line_25.tintFill = true;
		container_lines.add(line_25);

		// line_26
		const line_26 = this.add.image(326, 356, "line_image");
		line_26.name = "line_26";
		line_26.scaleX = 0.4;
		line_26.scaleY = 0.19;
		line_26.angle = 90;
		line_26.tintFill = true;
		container_lines.add(line_26);

		// line_27
		const line_27 = this.add.image(459, 310, "line_image");
		line_27.name = "line_27";
		line_27.scaleX = 0.4;
		line_27.scaleY = 0.19;
		line_27.tintFill = true;
		container_lines.add(line_27);

		// line_28
		const line_28 = this.add.image(412, 356, "line_image");
		line_28.name = "line_28";
		line_28.scaleX = 0.4;
		line_28.scaleY = 0.19;
		line_28.angle = 90;
		line_28.tintFill = true;
		container_lines.add(line_28);

		// line_29
		const line_29 = this.add.image(550, 311, "line_image");
		line_29.name = "line_29";
		line_29.scaleX = 0.4;
		line_29.scaleY = 0.19;
		line_29.tintFill = true;
		container_lines.add(line_29);

		// line_30
		const line_30 = this.add.image(506, 356, "line_image");
		line_30.name = "line_30";
		line_30.scaleX = 0.4;
		line_30.scaleY = 0.19;
		line_30.angle = 90;
		line_30.tintFill = true;
		container_lines.add(line_30);

		// line_31
		const line_31 = this.add.image(596, 263, "line_image");
		line_31.name = "line_31";
		line_31.scaleX = 0.4;
		line_31.scaleY = 0.19;
		line_31.angle = 90;
		line_31.tintFill = true;
		line_31.tintTopLeft = 13949731;
		line_31.tintTopRight = 13949731;
		line_31.tintBottomLeft = 13949731;
		line_31.tintBottomRight = 13949731;
		container_lines.add(line_31);

		// line_32
		const line_32 = this.add.image(640, 309, "line_image");
		line_32.name = "line_32";
		line_32.scaleX = 0.4;
		line_32.scaleY = 0.19;
		line_32.tintFill = true;
		line_32.tintTopLeft = 13949731;
		line_32.tintTopRight = 13949731;
		line_32.tintBottomLeft = 13949731;
		line_32.tintBottomRight = 13949731;
		container_lines.add(line_32);

		// line_33
		const line_33 = this.add.image(595, 356, "line_image");
		line_33.name = "line_33";
		line_33.scaleX = 0.4;
		line_33.scaleY = 0.19;
		line_33.angle = 90;
		line_33.tintFill = true;
		container_lines.add(line_33);

		// line_34
		const line_34 = this.add.image(93, 403, "line_image");
		line_34.name = "line_34";
		line_34.scaleX = 0.4;
		line_34.scaleY = 0.19;
		line_34.tintFill = true;
		line_34.tintTopLeft = 13949731;
		line_34.tintTopRight = 13949731;
		line_34.tintBottomLeft = 13949731;
		line_34.tintBottomRight = 13949731;
		container_lines.add(line_34);

		// line_35
		const line_35 = this.add.image(186, 402, "line_image");
		line_35.name = "line_35";
		line_35.scaleX = 0.4;
		line_35.scaleY = 0.19;
		line_35.tintFill = true;
		container_lines.add(line_35);

		// line_36
		const line_36 = this.add.image(138, 448, "line_image");
		line_36.name = "line_36";
		line_36.scaleX = 0.4;
		line_36.scaleY = 0.19;
		line_36.angle = 90;
		line_36.tintFill = true;
		line_36.tintTopLeft = 13949731;
		line_36.tintTopRight = 13949731;
		line_36.tintBottomLeft = 13949731;
		line_36.tintBottomRight = 13949731;
		container_lines.add(line_36);

		// line_37
		const line_37 = this.add.image(277, 403, "line_image");
		line_37.name = "line_37";
		line_37.scaleX = 0.4;
		line_37.scaleY = 0.19;
		line_37.tintFill = true;
		container_lines.add(line_37);

		// line_38
		const line_38 = this.add.image(231, 448, "line_image");
		line_38.name = "line_38";
		line_38.scaleX = 0.4;
		line_38.scaleY = 0.19;
		line_38.angle = 90;
		line_38.tintFill = true;
		container_lines.add(line_38);

		// line_39
		const line_39 = this.add.image(369, 402, "line_image");
		line_39.name = "line_39";
		line_39.scaleX = 0.4;
		line_39.scaleY = 0.19;
		line_39.tintFill = true;
		container_lines.add(line_39);

		// line_40
		const line_40 = this.add.image(327, 448, "line_image");
		line_40.name = "line_40";
		line_40.scaleX = 0.4;
		line_40.scaleY = 0.19;
		line_40.angle = 90;
		line_40.tintFill = true;
		container_lines.add(line_40);

		// line_41
		const line_41 = this.add.image(459, 403, "line_image");
		line_41.name = "line_41";
		line_41.scaleX = 0.4;
		line_41.scaleY = 0.19;
		line_41.tintFill = true;
		container_lines.add(line_41);

		// line_42
		const line_42 = this.add.image(418, 448, "line_image");
		line_42.name = "line_42";
		line_42.scaleX = 0.4;
		line_42.scaleY = 0.19;
		line_42.angle = 90;
		line_42.tintFill = true;
		container_lines.add(line_42);

		// line_43
		const line_43 = this.add.image(550, 403, "line_image");
		line_43.name = "line_43";
		line_43.scaleX = 0.4;
		line_43.scaleY = 0.19;
		line_43.tintFill = true;
		container_lines.add(line_43);

		// line_44
		const line_44 = this.add.image(505, 448, "line_image");
		line_44.name = "line_44";
		line_44.scaleX = 0.4;
		line_44.scaleY = 0.19;
		line_44.angle = 90;
		line_44.tintFill = true;
		container_lines.add(line_44);

		// line_45
		const line_45 = this.add.image(640, 398, "line_image");
		line_45.name = "line_45";
		line_45.scaleX = 0.4;
		line_45.scaleY = 0.19;
		line_45.tintFill = true;
		line_45.tintTopLeft = 13949731;
		line_45.tintTopRight = 13949731;
		line_45.tintBottomLeft = 13949731;
		line_45.tintBottomRight = 13949731;
		container_lines.add(line_45);

		// line_46
		const line_46 = this.add.image(595, 448, "line_image");
		line_46.name = "line_46";
		line_46.scaleX = 0.4;
		line_46.scaleY = 0.19;
		line_46.angle = 90;
		line_46.tintFill = true;
		line_46.tintTopLeft = 13949731;
		line_46.tintTopRight = 13949731;
		line_46.tintBottomLeft = 13949731;
		line_46.tintBottomRight = 13949731;
		container_lines.add(line_46);

		// line_47
		const line_47 = this.add.image(186, 493, "line_image");
		line_47.name = "line_47";
		line_47.scaleX = 0.4;
		line_47.scaleY = 0.19;
		line_47.tintFill = true;
		line_47.tintTopLeft = 13949731;
		line_47.tintTopRight = 13949731;
		line_47.tintBottomLeft = 13949731;
		line_47.tintBottomRight = 13949731;
		container_lines.add(line_47);

		// line_48
		const line_48 = this.add.image(277, 491, "line_image");
		line_48.name = "line_48";
		line_48.scaleX = 0.4;
		line_48.scaleY = 0.19;
		line_48.tintFill = true;
		container_lines.add(line_48);

		// line_49
		const line_49 = this.add.image(231, 538, "line_image");
		line_49.name = "line_49";
		line_49.scaleX = 0.4;
		line_49.scaleY = 0.19;
		line_49.angle = 90;
		line_49.tintFill = true;
		line_49.tintTopLeft = 13949731;
		line_49.tintTopRight = 13949731;
		line_49.tintBottomLeft = 13949731;
		line_49.tintBottomRight = 13949731;
		container_lines.add(line_49);

		// line_50
		const line_50 = this.add.image(369, 493, "line_image");
		line_50.name = "line_50";
		line_50.scaleX = 0.4;
		line_50.scaleY = 0.19;
		line_50.tintFill = true;
		container_lines.add(line_50);

		// line_51
		const line_51 = this.add.image(322, 538, "line_image");
		line_51.name = "line_51";
		line_51.scaleX = 0.4;
		line_51.scaleY = 0.19;
		line_51.angle = 90;
		line_51.tintFill = true;
		container_lines.add(line_51);

		// line_52
		const line_52 = this.add.image(459, 493, "line_image");
		line_52.name = "line_52";
		line_52.scaleX = 0.4;
		line_52.scaleY = 0.19;
		line_52.tintFill = true;
		container_lines.add(line_52);

		// line_53
		const line_53 = this.add.image(414, 538, "line_image");
		line_53.name = "line_53";
		line_53.scaleX = 0.4;
		line_53.scaleY = 0.19;
		line_53.angle = 90;
		line_53.tintFill = true;
		container_lines.add(line_53);

		// line_54
		const line_54 = this.add.image(550, 494, "line_image");
		line_54.name = "line_54";
		line_54.scaleX = 0.4;
		line_54.scaleY = 0.19;
		line_54.tintFill = true;
		line_54.tintTopLeft = 13949731;
		line_54.tintTopRight = 13949731;
		line_54.tintBottomLeft = 13949731;
		line_54.tintBottomRight = 13949731;
		container_lines.add(line_54);

		// line_55
		const line_55 = this.add.image(504, 538, "line_image");
		line_55.name = "line_55";
		line_55.scaleX = 0.4;
		line_55.scaleY = 0.19;
		line_55.angle = 90;
		line_55.tintFill = true;
		line_55.tintTopLeft = 13949731;
		line_55.tintTopRight = 13949731;
		line_55.tintBottomLeft = 13949731;
		line_55.tintBottomRight = 13949731;
		container_lines.add(line_55);

		// line_56
		const line_56 = this.add.image(277, 582, "line_image");
		line_56.name = "line_56";
		line_56.scaleX = 0.4;
		line_56.scaleY = 0.19;
		line_56.tintFill = true;
		line_56.tintTopLeft = 13949731;
		line_56.tintTopRight = 13949731;
		line_56.tintBottomLeft = 13949731;
		line_56.tintBottomRight = 13949731;
		container_lines.add(line_56);

		// line_57
		const line_57 = this.add.image(369, 582, "line_image");
		line_57.name = "line_57";
		line_57.scaleX = 0.4;
		line_57.scaleY = 0.19;
		line_57.tintFill = true;
		container_lines.add(line_57);

		// line_58
		const line_58 = this.add.image(323, 627, "line_image");
		line_58.name = "line_58";
		line_58.scaleX = 0.4;
		line_58.scaleY = 0.19;
		line_58.angle = 90;
		line_58.tintFill = true;
		line_58.tintTopLeft = 13949731;
		line_58.tintTopRight = 13949731;
		line_58.tintBottomLeft = 13949731;
		line_58.tintBottomRight = 13949731;
		container_lines.add(line_58);

		// line_59
		const line_59 = this.add.image(459, 582, "line_image");
		line_59.name = "line_59";
		line_59.scaleX = 0.4;
		line_59.scaleY = 0.19;
		line_59.tintFill = true;
		line_59.tintTopLeft = 13949731;
		line_59.tintTopRight = 13949731;
		line_59.tintBottomLeft = 13949731;
		line_59.tintBottomRight = 13949731;
		container_lines.add(line_59);

		// line_60
		const line_60 = this.add.image(413, 627, "line_image");
		line_60.name = "line_60";
		line_60.scaleX = 0.4;
		line_60.scaleY = 0.19;
		line_60.angle = 90;
		line_60.tintFill = true;
		line_60.tintTopLeft = 13949731;
		line_60.tintTopRight = 13949731;
		line_60.tintBottomLeft = 13949731;
		line_60.tintBottomRight = 13949731;
		container_lines.add(line_60);

		// container_turnDetails
		const container_turnDetails = this.add.container(0, 0);
		body.add(container_turnDetails);

		// turnImage
		const turnImage = this.add.image(191, 483, "avatar_1");
		container_turnDetails.add(turnImage);

		// turnText
		const turnText = this.add.text(352.5, 483, "", {});
		turnText.setOrigin(0.5, 0.5);
		turnText.text = "Turn";
		turnText.setStyle({ "fontFamily": "Barrio", "fontSize": "60px", "fontStyle": "bold" });
		container_turnDetails.add(turnText);

		// container_players
		const container_players = this.add.container(0, 0);
		body.add(container_players);

		// player_1
		const player_1 = this.add.image(1436, 284, "avatar_1");
		container_players.add(player_1);

		// scoreTitle
		const scoreTitle = this.add.text(1407, 174, "", {});
		scoreTitle.setOrigin(0.5, 0.5);
		scoreTitle.text = "score:";
		scoreTitle.setStyle({ "fontFamily": "Barrio", "fontSize": "48px" });
		container_players.add(scoreTitle);

		// player_1Score
		const player_1Score = this.add.text(1515, 174, "", {});
		player_1Score.setOrigin(0.5, 0.5);
		player_1Score.text = "0";
		player_1Score.setStyle({ "fontFamily": "Barrio", "fontSize": "48px" });
		container_players.add(player_1Score);

		// player_2
		const player_2 = this.add.image(1436, 798, "avatar_2");
		container_players.add(player_2);

		// scoreTitle_1
		const scoreTitle_1 = this.add.text(1407, 908, "", {});
		scoreTitle_1.setOrigin(0.5, 0.5);
		scoreTitle_1.text = "score:";
		scoreTitle_1.setStyle({ "fontFamily": "Barrio", "fontSize": "48px" });
		container_players.add(scoreTitle_1);

		// player_2Score
		const player_2Score = this.add.text(1515, 908, "", {});
		player_2Score.setOrigin(0.5, 0.5);
		player_2Score.text = "0";
		player_2Score.setStyle({ "fontFamily": "Barrio", "fontSize": "48px" });
		container_players.add(player_2Score);

		// replay_button (components)
		new PushOnClick(replay_button);

		this.replay_button = replay_button;
		this.container_boxs = container_boxs;
		this.container_lines = container_lines;
		this.turnImage = turnImage;
		this.scoreTitle = scoreTitle;
		this.player_1Score = player_1Score;
		this.scoreTitle_1 = scoreTitle_1;
		this.player_2Score = player_2Score;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	replay_button;
	/** @type {Phaser.GameObjects.Container} */
	container_boxs;
	/** @type {Phaser.GameObjects.Container} */
	container_lines;
	/** @type {Phaser.GameObjects.Image} */
	turnImage;
	/** @type {Phaser.GameObjects.Text} */
	scoreTitle;
	/** @type {Phaser.GameObjects.Text} */
	player_1Score;
	/** @type {Phaser.GameObjects.Text} */
	scoreTitle_1;
	/** @type {Phaser.GameObjects.Text} */
	player_2Score;

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();

		this.oGameManager = new GameManager(this);

		this.container_lines.list.forEach((line) => {

			if (line.tintTopLeft == 13949731) {
				line.name = 'selected';
				line.disableInteractive();
			}
			else {
				line.setInteractive().on('pointerdown', () => {
					line.name = 'selected';
					line.setTintFill(13949731, 13949731, 13949731, 13949731);
					this.oGameManager.boxs();
					this.oGameManager.turnHandler();
					line.disableInteractive();
				})
			}
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
