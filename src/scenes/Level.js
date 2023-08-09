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

		// background
		const background = this.add.image(979, 548, "background_image");
		background.scaleX = 0.5;
		background.scaleY = 0.5;
		body.add(background);

		// container_boxs
		const container_boxs = this.add.container(0, 0);
		body.add(container_boxs);

		// box_1
		const box_1 = this.add.rectangle(949, 400, 110, 110);
		box_1.name = "box_1";
		box_1.scaleX = 0.5;
		box_1.scaleY = 0.5;
		box_1.visible = false;
		box_1.isFilled = true;
		container_boxs.add(box_1);

		// box_2
		const box_2 = this.add.rectangle(1008, 401, 110, 110);
		box_2.name = "box_2";
		box_2.scaleX = 0.5;
		box_2.scaleY = 0.5;
		box_2.visible = false;
		box_2.isFilled = true;
		container_boxs.add(box_2);

		// box_3
		const box_3 = this.add.rectangle(889, 460, 110, 110);
		box_3.name = "box_3";
		box_3.scaleX = 0.5;
		box_3.scaleY = 0.5;
		box_3.visible = false;
		box_3.isFilled = true;
		container_boxs.add(box_3);

		// box_4
		const box_4 = this.add.rectangle(949, 460, 110, 110);
		box_4.name = "box_4";
		box_4.scaleX = 0.5;
		box_4.scaleY = 0.5;
		box_4.visible = false;
		box_4.isFilled = true;
		container_boxs.add(box_4);

		// box_5
		const box_5 = this.add.rectangle(1009, 460, 110, 110);
		box_5.name = "box_5";
		box_5.scaleX = 0.5;
		box_5.scaleY = 0.5;
		box_5.visible = false;
		box_5.isFilled = true;
		container_boxs.add(box_5);

		// box_6
		const box_6 = this.add.rectangle(1069, 460, 110, 110);
		box_6.name = "box_6";
		box_6.scaleX = 0.5;
		box_6.scaleY = 0.5;
		box_6.visible = false;
		box_6.isFilled = true;
		container_boxs.add(box_6);

		// box_7
		const box_7 = this.add.rectangle(830, 519, 110, 110);
		box_7.name = "box_7";
		box_7.scaleX = 0.5;
		box_7.scaleY = 0.5;
		box_7.visible = false;
		box_7.isFilled = true;
		container_boxs.add(box_7);

		// box_8
		const box_8 = this.add.rectangle(890, 519, 110, 110);
		box_8.name = "box_8";
		box_8.scaleX = 0.5;
		box_8.scaleY = 0.5;
		box_8.visible = false;
		box_8.isFilled = true;
		container_boxs.add(box_8);

		// box_9
		const box_9 = this.add.rectangle(949, 519, 110, 110);
		box_9.name = "box_9";
		box_9.scaleX = 0.5;
		box_9.scaleY = 0.5;
		box_9.visible = false;
		box_9.isFilled = true;
		container_boxs.add(box_9);

		// box_10
		const box_10 = this.add.rectangle(1009, 519, 110, 110);
		box_10.name = "box_10";
		box_10.scaleX = 0.5;
		box_10.scaleY = 0.5;
		box_10.visible = false;
		box_10.isFilled = true;
		container_boxs.add(box_10);

		// box_11
		const box_11 = this.add.rectangle(1070, 520, 110, 110);
		box_11.name = "box_11";
		box_11.scaleX = 0.5;
		box_11.scaleY = 0.5;
		box_11.visible = false;
		box_11.isFilled = true;
		container_boxs.add(box_11);

		// box_12
		const box_12 = this.add.rectangle(1129, 518, 110, 110);
		box_12.name = "box_12";
		box_12.scaleX = 0.5;
		box_12.scaleY = 0.5;
		box_12.visible = false;
		box_12.isFilled = true;
		container_boxs.add(box_12);

		// box_13
		const box_13 = this.add.rectangle(830, 577, 110, 110);
		box_13.name = "box_13";
		box_13.scaleX = 0.5;
		box_13.scaleY = 0.5;
		box_13.visible = false;
		box_13.isFilled = true;
		container_boxs.add(box_13);

		// box_14
		const box_14 = this.add.rectangle(889, 578, 110, 110);
		box_14.name = "box_14";
		box_14.scaleX = 0.5;
		box_14.scaleY = 0.5;
		box_14.visible = false;
		box_14.isFilled = true;
		container_boxs.add(box_14);

		// box_15
		const box_15 = this.add.rectangle(950, 578, 110, 110);
		box_15.name = "box_15";
		box_15.scaleX = 0.5;
		box_15.scaleY = 0.5;
		box_15.visible = false;
		box_15.isFilled = true;
		container_boxs.add(box_15);

		// box_16
		const box_16 = this.add.rectangle(1009, 578, 110, 110);
		box_16.name = "box_16";
		box_16.scaleX = 0.5;
		box_16.scaleY = 0.5;
		box_16.visible = false;
		box_16.isFilled = true;
		container_boxs.add(box_16);

		// box_17
		const box_17 = this.add.rectangle(1069, 578, 110, 110);
		box_17.name = "box_17";
		box_17.scaleX = 0.5;
		box_17.scaleY = 0.5;
		box_17.visible = false;
		box_17.isFilled = true;
		container_boxs.add(box_17);

		// box_18
		const box_18 = this.add.rectangle(1128, 579, 110, 110);
		box_18.name = "box_18";
		box_18.scaleX = 0.5;
		box_18.scaleY = 0.5;
		box_18.visible = false;
		box_18.isFilled = true;
		container_boxs.add(box_18);

		// box_19
		const box_19 = this.add.rectangle(889, 639, 110, 110);
		box_19.name = "box_19";
		box_19.scaleX = 0.5;
		box_19.scaleY = 0.5;
		box_19.visible = false;
		box_19.isFilled = true;
		container_boxs.add(box_19);

		// box_20
		const box_20 = this.add.rectangle(950, 639, 110, 110);
		box_20.name = "box_20";
		box_20.scaleX = 0.5;
		box_20.scaleY = 0.5;
		box_20.visible = false;
		box_20.isFilled = true;
		container_boxs.add(box_20);

		// box_21
		const box_21 = this.add.rectangle(1010, 638, 110, 110);
		box_21.name = "box_21";
		box_21.scaleX = 0.5;
		box_21.scaleY = 0.5;
		box_21.visible = false;
		box_21.isFilled = true;
		container_boxs.add(box_21);

		// box_22
		const box_22 = this.add.rectangle(1069, 638, 110, 110);
		box_22.name = "box_22";
		box_22.scaleX = 0.5;
		box_22.scaleY = 0.5;
		box_22.visible = false;
		box_22.isFilled = true;
		container_boxs.add(box_22);

		// box_23
		const box_23 = this.add.rectangle(949, 696, 110, 110);
		box_23.name = "box_23";
		box_23.scaleX = 0.5;
		box_23.scaleY = 0.5;
		box_23.visible = false;
		box_23.isFilled = true;
		container_boxs.add(box_23);

		// box_24
		const box_24 = this.add.rectangle(1008, 696, 110, 110);
		box_24.name = "box_24";
		box_24.scaleX = 0.5;
		box_24.scaleY = 0.5;
		box_24.visible = false;
		box_24.isFilled = true;
		container_boxs.add(box_24);

		// container_lines
		const container_lines = this.add.container(0, 4);
		body.add(container_lines);

		// line_1
		const line_1 = this.add.image(921, 396, "line_image");
		line_1.name = "line_1";
		line_1.scaleX = 0.35;
		line_1.scaleY = 0.12;
		container_lines.add(line_1);

		// line_2
		const line_2 = this.add.image(950, 366, "line_image");
		line_2.name = "line_2";
		line_2.scaleX = 0.35;
		line_2.scaleY = 0.12;
		line_2.angle = 90;
		container_lines.add(line_2);

		// line_3
		const line_3 = this.add.image(979, 395, "line_image");
		line_3.name = "line_3";
		line_3.scaleX = 0.35;
		line_3.scaleY = 0.12;
		line_3.tintFill = true;
		line_3.tintTopLeft = 8355197;
		line_3.tintTopRight = 8355197;
		line_3.tintBottomLeft = 8355197;
		line_3.tintBottomRight = 8355197;
		container_lines.add(line_3);

		// line_4
		const line_4 = this.add.image(950, 426, "line_image");
		line_4.name = "line_4";
		line_4.scaleX = 0.35;
		line_4.scaleY = 0.12;
		line_4.angle = 90;
		line_4.tintFill = true;
		line_4.tintTopLeft = 8355197;
		line_4.tintTopRight = 8355197;
		line_4.tintBottomLeft = 8355197;
		line_4.tintBottomRight = 8355197;
		container_lines.add(line_4);

		// line_5
		const line_5 = this.add.image(1010, 366, "line_image");
		line_5.name = "line_5";
		line_5.scaleX = 0.35;
		line_5.scaleY = 0.12;
		line_5.angle = 90;
		container_lines.add(line_5);

		// line_6
		const line_6 = this.add.image(1039, 395, "line_image");
		line_6.name = "line_6";
		line_6.scaleX = 0.35;
		line_6.scaleY = 0.12;
		container_lines.add(line_6);

		// line_7
		const line_7 = this.add.image(1010, 426, "line_image");
		line_7.name = "line_7";
		line_7.scaleX = 0.35;
		line_7.scaleY = 0.12;
		line_7.angle = 90;
		line_7.tintFill = true;
		line_7.tintTopLeft = 8355197;
		line_7.tintTopRight = 8355197;
		line_7.tintBottomLeft = 8355197;
		line_7.tintBottomRight = 8355197;
		container_lines.add(line_7);

		// line_8
		const line_8 = this.add.image(860, 456, "line_image");
		line_8.name = "line_8";
		line_8.scaleX = 0.35;
		line_8.scaleY = 0.12;
		container_lines.add(line_8);

		// line_9
		const line_9 = this.add.image(890, 427, "line_image");
		line_9.name = "line_9";
		line_9.scaleX = 0.35;
		line_9.scaleY = 0.12;
		line_9.angle = 90;
		container_lines.add(line_9);

		// line_10
		const line_10 = this.add.image(919, 456, "line_image");
		line_10.name = "line_10";
		line_10.scaleX = 0.35;
		line_10.scaleY = 0.12;
		line_10.tintFill = true;
		line_10.tintTopLeft = 8355197;
		line_10.tintTopRight = 8355197;
		line_10.tintBottomLeft = 8355197;
		line_10.tintBottomRight = 8355197;
		container_lines.add(line_10);

		// line_11
		const line_11 = this.add.image(890, 485, "line_image");
		line_11.name = "line_11";
		line_11.scaleX = 0.35;
		line_11.scaleY = 0.12;
		line_11.angle = 90;
		line_11.tintFill = true;
		line_11.tintTopLeft = 8355197;
		line_11.tintTopRight = 8355197;
		line_11.tintBottomLeft = 8355197;
		line_11.tintBottomRight = 8355197;
		container_lines.add(line_11);

		// line_12
		const line_12 = this.add.image(979, 456, "line_image");
		line_12.name = "line_12";
		line_12.scaleX = 0.35;
		line_12.scaleY = 0.12;
		line_12.tintFill = true;
		line_12.tintTopLeft = 8355197;
		line_12.tintTopRight = 8355197;
		line_12.tintBottomLeft = 8355197;
		line_12.tintBottomRight = 8355197;
		container_lines.add(line_12);

		// line_13
		const line_13 = this.add.image(950, 485, "line_image");
		line_13.name = "line_13";
		line_13.scaleX = 0.35;
		line_13.scaleY = 0.12;
		line_13.angle = 90;
		line_13.tintFill = true;
		line_13.tintTopLeft = 8355197;
		line_13.tintTopRight = 8355197;
		line_13.tintBottomLeft = 8355197;
		line_13.tintBottomRight = 8355197;
		container_lines.add(line_13);

		// line_14
		const line_14 = this.add.image(1039, 455, "line_image");
		line_14.name = "line_14";
		line_14.scaleX = 0.35;
		line_14.scaleY = 0.12;
		line_14.tintFill = true;
		line_14.tintTopLeft = 8355197;
		line_14.tintTopRight = 8355197;
		line_14.tintBottomLeft = 8355197;
		line_14.tintBottomRight = 8355197;
		container_lines.add(line_14);

		// line_15
		const line_15 = this.add.image(1010, 485, "line_image");
		line_15.name = "line_15";
		line_15.scaleX = 0.35;
		line_15.scaleY = 0.12;
		line_15.angle = 90;
		line_15.tintFill = true;
		line_15.tintTopLeft = 8355197;
		line_15.tintTopRight = 8355197;
		line_15.tintBottomLeft = 8355197;
		line_15.tintBottomRight = 8355197;
		container_lines.add(line_15);

		// line_16
		const line_16 = this.add.image(1069, 426, "line_image");
		line_16.name = "line_16";
		line_16.scaleX = 0.35;
		line_16.scaleY = 0.12;
		line_16.angle = 90;
		container_lines.add(line_16);

		// line_17
		const line_17 = this.add.image(1098, 455, "line_image");
		line_17.name = "line_17";
		line_17.scaleX = 0.35;
		line_17.scaleY = 0.12;
		container_lines.add(line_17);

		// line_18
		const line_18 = this.add.image(1069, 485, "line_image");
		line_18.name = "line_18";
		line_18.scaleX = 0.35;
		line_18.scaleY = 0.12;
		line_18.angle = 90;
		line_18.tintFill = true;
		line_18.tintTopLeft = 8355197;
		line_18.tintTopRight = 8355197;
		line_18.tintBottomLeft = 8355197;
		line_18.tintBottomRight = 8355197;
		container_lines.add(line_18);

		// line_19
		const line_19 = this.add.image(801, 516, "line_image");
		line_19.name = "line_19";
		line_19.scaleX = 0.35;
		line_19.scaleY = 0.12;
		container_lines.add(line_19);

		// line_20
		const line_20 = this.add.image(830, 485, "line_image");
		line_20.name = "line_20";
		line_20.scaleX = 0.35;
		line_20.scaleY = 0.12;
		line_20.angle = 90;
		container_lines.add(line_20);

		// line_21
		const line_21 = this.add.image(860, 516, "line_image");
		line_21.name = "line_21";
		line_21.scaleX = 0.35;
		line_21.scaleY = 0.12;
		line_21.tintFill = true;
		line_21.tintTopLeft = 8355197;
		line_21.tintTopRight = 8355197;
		line_21.tintBottomLeft = 8355197;
		line_21.tintBottomRight = 8355197;
		container_lines.add(line_21);

		// line_22
		const line_22 = this.add.image(830, 545, "line_image");
		line_22.name = "line_22";
		line_22.scaleX = 0.35;
		line_22.scaleY = 0.12;
		line_22.angle = 90;
		line_22.tintFill = true;
		line_22.tintTopLeft = 8355197;
		line_22.tintTopRight = 8355197;
		line_22.tintBottomLeft = 8355197;
		line_22.tintBottomRight = 8355197;
		container_lines.add(line_22);

		// line_23
		const line_23 = this.add.image(919, 516, "line_image");
		line_23.name = "line_23";
		line_23.scaleX = 0.35;
		line_23.scaleY = 0.12;
		line_23.tintFill = true;
		line_23.tintTopLeft = 8355197;
		line_23.tintTopRight = 8355197;
		line_23.tintBottomLeft = 8355197;
		line_23.tintBottomRight = 8355197;
		container_lines.add(line_23);

		// line_24
		const line_24 = this.add.image(890, 545, "line_image");
		line_24.name = "line_24";
		line_24.scaleX = 0.35;
		line_24.scaleY = 0.12;
		line_24.angle = 90;
		line_24.tintFill = true;
		line_24.tintTopLeft = 8355197;
		line_24.tintTopRight = 8355197;
		line_24.tintBottomLeft = 8355197;
		line_24.tintBottomRight = 8355197;
		container_lines.add(line_24);

		// line_25
		const line_25 = this.add.image(979, 515, "line_image");
		line_25.name = "line_25";
		line_25.scaleX = 0.35;
		line_25.scaleY = 0.12;
		line_25.tintFill = true;
		line_25.tintTopLeft = 8355197;
		line_25.tintTopRight = 8355197;
		line_25.tintBottomLeft = 8355197;
		line_25.tintBottomRight = 8355197;
		container_lines.add(line_25);

		// line_26
		const line_26 = this.add.image(950, 545, "line_image");
		line_26.name = "line_26";
		line_26.scaleX = 0.35;
		line_26.scaleY = 0.12;
		line_26.angle = 90;
		line_26.tintFill = true;
		line_26.tintTopLeft = 8355197;
		line_26.tintTopRight = 8355197;
		line_26.tintBottomLeft = 8355197;
		line_26.tintBottomRight = 8355197;
		container_lines.add(line_26);

		// line_27
		const line_27 = this.add.image(1039, 515, "line_image");
		line_27.name = "line_27";
		line_27.scaleX = 0.35;
		line_27.scaleY = 0.12;
		line_27.tintFill = true;
		line_27.tintTopLeft = 8355197;
		line_27.tintTopRight = 8355197;
		line_27.tintBottomLeft = 8355197;
		line_27.tintBottomRight = 8355197;
		container_lines.add(line_27);

		// line_28
		const line_28 = this.add.image(1010, 545, "line_image");
		line_28.name = "line_28";
		line_28.scaleX = 0.35;
		line_28.scaleY = 0.12;
		line_28.angle = 90;
		line_28.tintFill = true;
		line_28.tintTopLeft = 8355197;
		line_28.tintTopRight = 8355197;
		line_28.tintBottomLeft = 8355197;
		line_28.tintBottomRight = 8355197;
		container_lines.add(line_28);

		// line_29
		const line_29 = this.add.image(1098, 515, "line_image");
		line_29.name = "line_29";
		line_29.scaleX = 0.35;
		line_29.scaleY = 0.12;
		line_29.tintFill = true;
		line_29.tintTopLeft = 8355197;
		line_29.tintTopRight = 8355197;
		line_29.tintBottomLeft = 8355197;
		line_29.tintBottomRight = 8355197;
		container_lines.add(line_29);

		// line_30
		const line_30 = this.add.image(1070, 545, "line_image");
		line_30.name = "line_30";
		line_30.scaleX = 0.35;
		line_30.scaleY = 0.12;
		line_30.angle = 90;
		line_30.tintFill = true;
		line_30.tintTopLeft = 8355197;
		line_30.tintTopRight = 8355197;
		line_30.tintBottomLeft = 8355197;
		line_30.tintBottomRight = 8355197;
		container_lines.add(line_30);

		// line_31
		const line_31 = this.add.image(1128, 485, "line_image");
		line_31.name = "line_31";
		line_31.scaleX = 0.35;
		line_31.scaleY = 0.12;
		line_31.angle = 90;
		container_lines.add(line_31);

		// line_32
		const line_32 = this.add.image(1157, 515, "line_image");
		line_32.name = "line_32";
		line_32.scaleX = 0.35;
		line_32.scaleY = 0.12;
		container_lines.add(line_32);

		// line_33
		const line_33 = this.add.image(1128, 545, "line_image");
		line_33.name = "line_33";
		line_33.scaleX = 0.35;
		line_33.scaleY = 0.12;
		line_33.angle = 90;
		line_33.tintFill = true;
		line_33.tintTopLeft = 8355197;
		line_33.tintTopRight = 8355197;
		line_33.tintBottomLeft = 8355197;
		line_33.tintBottomRight = 8355197;
		container_lines.add(line_33);

		// line_34
		const line_34 = this.add.image(801, 574, "line_image");
		line_34.name = "line_34";
		line_34.scaleX = 0.35;
		line_34.scaleY = 0.12;
		container_lines.add(line_34);

		// line_35
		const line_35 = this.add.image(860, 575, "line_image");
		line_35.name = "line_35";
		line_35.scaleX = 0.35;
		line_35.scaleY = 0.12;
		line_35.tintFill = true;
		line_35.tintTopLeft = 8355197;
		line_35.tintTopRight = 8355197;
		line_35.tintBottomLeft = 8355197;
		line_35.tintBottomRight = 8355197;
		container_lines.add(line_35);

		// line_36
		const line_36 = this.add.image(830, 604, "line_image");
		line_36.name = "line_36";
		line_36.scaleX = 0.35;
		line_36.scaleY = 0.12;
		line_36.angle = 90;
		container_lines.add(line_36);

		// line_37
		const line_37 = this.add.image(919, 575, "line_image");
		line_37.name = "line_37";
		line_37.scaleX = 0.35;
		line_37.scaleY = 0.12;
		line_37.tintFill = true;
		line_37.tintTopLeft = 8355197;
		line_37.tintTopRight = 8355197;
		line_37.tintBottomLeft = 8355197;
		line_37.tintBottomRight = 8355197;
		container_lines.add(line_37);

		// line_38
		const line_38 = this.add.image(890, 604, "line_image");
		line_38.name = "line_38";
		line_38.scaleX = 0.35;
		line_38.scaleY = 0.12;
		line_38.angle = 90;
		line_38.tintFill = true;
		line_38.tintTopLeft = 8355197;
		line_38.tintTopRight = 8355197;
		line_38.tintBottomLeft = 8355197;
		line_38.tintBottomRight = 8355197;
		container_lines.add(line_38);

		// line_39
		const line_39 = this.add.image(979, 575, "line_image");
		line_39.name = "line_39";
		line_39.scaleX = 0.35;
		line_39.scaleY = 0.12;
		line_39.tintFill = true;
		line_39.tintTopLeft = 8355197;
		line_39.tintTopRight = 8355197;
		line_39.tintBottomLeft = 8355197;
		line_39.tintBottomRight = 8355197;
		container_lines.add(line_39);

		// line_40
		const line_40 = this.add.image(950, 604, "line_image");
		line_40.name = "line_40";
		line_40.scaleX = 0.35;
		line_40.scaleY = 0.12;
		line_40.angle = 90;
		line_40.tintFill = true;
		line_40.tintTopLeft = 8355197;
		line_40.tintTopRight = 8355197;
		line_40.tintBottomLeft = 8355197;
		line_40.tintBottomRight = 8355197;
		container_lines.add(line_40);

		// line_41
		const line_41 = this.add.image(1039, 575, "line_image");
		line_41.name = "line_41";
		line_41.scaleX = 0.35;
		line_41.scaleY = 0.12;
		line_41.tintFill = true;
		line_41.tintTopLeft = 8355197;
		line_41.tintTopRight = 8355197;
		line_41.tintBottomLeft = 8355197;
		line_41.tintBottomRight = 8355197;
		container_lines.add(line_41);

		// line_42
		const line_42 = this.add.image(1009, 604, "line_image");
		line_42.name = "line_42";
		line_42.scaleX = 0.35;
		line_42.scaleY = 0.12;
		line_42.angle = 90;
		line_42.tintFill = true;
		line_42.tintTopLeft = 8355197;
		line_42.tintTopRight = 8355197;
		line_42.tintBottomLeft = 8355197;
		line_42.tintBottomRight = 8355197;
		container_lines.add(line_42);

		// line_43
		const line_43 = this.add.image(1098, 575, "line_image");
		line_43.name = "line_43";
		line_43.scaleX = 0.35;
		line_43.scaleY = 0.12;
		line_43.tintFill = true;
		line_43.tintTopLeft = 8355197;
		line_43.tintTopRight = 8355197;
		line_43.tintBottomLeft = 8355197;
		line_43.tintBottomRight = 8355197;
		container_lines.add(line_43);

		// line_44
		const line_44 = this.add.image(1069, 604, "line_image");
		line_44.name = "line_44";
		line_44.scaleX = 0.35;
		line_44.scaleY = 0.12;
		line_44.angle = 90;
		line_44.tintFill = true;
		line_44.tintTopLeft = 8355197;
		line_44.tintTopRight = 8355197;
		line_44.tintBottomLeft = 8355197;
		line_44.tintBottomRight = 8355197;
		container_lines.add(line_44);

		// line_45
		const line_45 = this.add.image(1157, 574, "line_image");
		line_45.name = "line_45";
		line_45.scaleX = 0.35;
		line_45.scaleY = 0.12;
		container_lines.add(line_45);

		// line_46
		const line_46 = this.add.image(1128, 604, "line_image");
		line_46.name = "line_46";
		line_46.scaleX = 0.35;
		line_46.scaleY = 0.12;
		line_46.angle = 90;
		container_lines.add(line_46);

		// line_47
		const line_47 = this.add.image(860, 633, "line_image");
		line_47.name = "line_47";
		line_47.scaleX = 0.35;
		line_47.scaleY = 0.12;
		container_lines.add(line_47);

		// line_48
		const line_48 = this.add.image(919, 633, "line_image");
		line_48.name = "line_48";
		line_48.scaleX = 0.35;
		line_48.scaleY = 0.12;
		line_48.tintFill = true;
		line_48.tintTopLeft = 8355197;
		line_48.tintTopRight = 8355197;
		line_48.tintBottomLeft = 8355197;
		line_48.tintBottomRight = 8355197;
		container_lines.add(line_48);

		// line_49
		const line_49 = this.add.image(890, 662, "line_image");
		line_49.name = "line_49";
		line_49.scaleX = 0.35;
		line_49.scaleY = 0.12;
		line_49.angle = 90;
		container_lines.add(line_49);

		// line_50
		const line_50 = this.add.image(979, 633, "line_image");
		line_50.name = "line_50";
		line_50.scaleX = 0.35;
		line_50.scaleY = 0.12;
		line_50.tintFill = true;
		line_50.tintTopLeft = 8355197;
		line_50.tintTopRight = 8355197;
		line_50.tintBottomLeft = 8355197;
		line_50.tintBottomRight = 8355197;
		container_lines.add(line_50);

		// line_51
		const line_51 = this.add.image(950, 662, "line_image");
		line_51.name = "line_51";
		line_51.scaleX = 0.35;
		line_51.scaleY = 0.12;
		line_51.angle = 90;
		line_51.tintFill = true;
		line_51.tintTopLeft = 8355197;
		line_51.tintTopRight = 8355197;
		line_51.tintBottomLeft = 8355197;
		line_51.tintBottomRight = 8355197;
		container_lines.add(line_51);

		// line_52
		const line_52 = this.add.image(1039, 633, "line_image");
		line_52.name = "line_52";
		line_52.scaleX = 0.35;
		line_52.scaleY = 0.12;
		line_52.tintFill = true;
		line_52.tintTopLeft = 8355197;
		line_52.tintTopRight = 8355197;
		line_52.tintBottomLeft = 8355197;
		line_52.tintBottomRight = 8355197;
		container_lines.add(line_52);

		// line_53
		const line_53 = this.add.image(1009, 662, "line_image");
		line_53.name = "line_53";
		line_53.scaleX = 0.35;
		line_53.scaleY = 0.12;
		line_53.angle = 90;
		line_53.tintFill = true;
		line_53.tintTopLeft = 8355197;
		line_53.tintTopRight = 8355197;
		line_53.tintBottomLeft = 8355197;
		line_53.tintBottomRight = 8355197;
		container_lines.add(line_53);

		// line_54
		const line_54 = this.add.image(1098, 633, "line_image");
		line_54.name = "line_54";
		line_54.scaleX = 0.35;
		line_54.scaleY = 0.12;
		container_lines.add(line_54);

		// line_55
		const line_55 = this.add.image(1069, 662, "line_image");
		line_55.name = "line_55";
		line_55.scaleX = 0.35;
		line_55.scaleY = 0.12;
		line_55.angle = 90;
		container_lines.add(line_55);

		// line_56
		const line_56 = this.add.image(919, 692, "line_image");
		line_56.name = "line_56";
		line_56.scaleX = 0.35;
		line_56.scaleY = 0.12;
		container_lines.add(line_56);

		// line_57
		const line_57 = this.add.image(979, 692, "line_image");
		line_57.name = "line_57";
		line_57.scaleX = 0.35;
		line_57.scaleY = 0.12;
		line_57.tintFill = true;
		line_57.tintTopLeft = 8355197;
		line_57.tintTopRight = 8355197;
		line_57.tintBottomLeft = 8355197;
		line_57.tintBottomRight = 8355197;
		container_lines.add(line_57);

		// line_58
		const line_58 = this.add.image(949, 721, "line_image");
		line_58.name = "line_58";
		line_58.scaleX = 0.35;
		line_58.scaleY = 0.12;
		line_58.angle = 90;
		container_lines.add(line_58);

		// line_59
		const line_59 = this.add.image(1039, 692, "line_image");
		line_59.name = "line_59";
		line_59.scaleX = 0.35;
		line_59.scaleY = 0.12;
		container_lines.add(line_59);

		// line_60
		const line_60 = this.add.image(1009, 721, "line_image");
		line_60.name = "line_60";
		line_60.scaleX = 0.35;
		line_60.scaleY = 0.12;
		line_60.angle = 90;
		container_lines.add(line_60);

		// turn
		const turn = this.add.image(143, 483, "pluse_image");
		turn.scaleX = 0.5;
		turn.scaleY = 0.5;

		// text_1
		const text_1 = this.add.text(348.5, 482.21484375, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "Turn";
		text_1.setStyle({ "fontSize": "60px", "fontStyle": "bold" });

		this.container_boxs = container_boxs;
		this.container_lines = container_lines;
		this.turn = turn;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	container_boxs;
	/** @type {Phaser.GameObjects.Container} */
	container_lines;
	/** @type {Phaser.GameObjects.Image} */
	turn;

	/* START-USER-CODE */

	// Write more your code here

	// boxs() {
	// 	aBox = [
	// 		{
	// 			firstSide: this.container_lines.list[0].name,
	// 			secondSide: this.container_lines.list[1].name,
	// 			thirdSide: this.container_lines.list[2].name,
	// 			fourthSide: this.container_lines.list[3].name,
	// 		},

	// 		{
	// 			firstSide: this.container_lines.list[2].name,
	// 			secondSide: this.container_lines.list[4].name,
	// 			thirdSide: this.container_lines.list[5].name,
	// 			fourthSide: this.container_lines.list[6].name,
	// 		},

	// 		{
	// 			firstSide: this.container_lines.list[7].name,
	// 			secondSide: this.container_lines.list[8].name,
	// 			thirdSide: this.container_lines.list[9].name,
	// 			fourthSide: this.container_lines.list[10].name,
	// 		},

	// 		{
	// 			firstSide: this.container_lines.list[9].name,
	// 			secondSide: this.container_lines.list[3].name,
	// 			thirdSide: this.container_lines.list[11].name,
	// 			fourthSide: this.container_lines.list[12].name,
	// 		},

	// 		{
	// 			firstSide: this.container_lines.list[11].name,
	// 			secondSide: this.container_lines.list[6].name,
	// 			thirdSide: this.container_lines.list[13].name,
	// 			fourthSide: this.container_lines.list[14].name,
	// 		},

	// 		{
	// 			firstSide: this.container_lines.list[13].name,
	// 			secondSide: this.container_lines.list[15].name,
	// 			thirdSide: this.container_lines.list[16].name,
	// 			fourthSide: this.container_lines.list[17].name,
	// 		},

	// 		{
	// 			firstSide: this.container_lines.list[18].name,
	// 			secondSide: this.container_lines.list[19].name,
	// 			thirdSide: this.container_lines.list[20].name,
	// 			fourthSide: this.container_lines.list[21].name,
	// 		},

	// 		{
	// 			firstSide: this.container_lines.list[20].name,
	// 			secondSide: this.container_lines.list[0].name,
	// 			thirdSide: this.container_lines.list[22].name,
	// 			fourthSide: this.container_lines.list[23].name,
	// 		},

	// 		{
	// 			firstSide: this.container_lines.list[22].name,
	// 			secondSide: this.container_lines.list[12].name,
	// 			thirdSide: this.container_lines.list[24].name,
	// 			fourthSide: this.container_lines.list[25].name,
	// 		},

	// 		{
	// 			firstSide: this.container_lines.list[24].name,
	// 			secondSide: this.container_lines.list[14].name,
	// 			thirdSide: this.container_lines.list[26].name,
	// 			fourthSide: this.container_lines.list[27].name,
	// 		},

	// 		{
	// 			firstSide: this.container_lines.list[26].name,
	// 			secondSide: this.container_lines.list[17].name,
	// 			thirdSide: this.container_lines.list[28].name,
	// 			fourthSide: this.container_lines.list[29].name,
	// 		},

	// 		{
	// 			firstSide: this.container_lines.list[28].name,
	// 			secondSide: this.container_lines.list[30].name,
	// 			thirdSide: this.container_lines.list[31].name,
	// 			fourthSide: this.container_lines.list[32].name,
	// 		},

	// 		{
	// 			firstSide: this.container_lines.list[33].name,
	// 			secondSide: this.container_lines.list[21].name,
	// 			thirdSide: this.container_lines.list[34].name,
	// 			fourthSide: this.container_lines.list[35].name,
	// 		},

	// 		{
	// 			firstSide: this.container_lines.list[34].name,
	// 			secondSide: this.container_lines.list[23].name,
	// 			thirdSide: this.container_lines.list[36].name,
	// 			fourthSide: this.container_lines.list[37].name,
	// 		},

	// 		{
	// 			firstSide: this.container_lines.list[36].name,
	// 			secondSide: this.container_lines.list[25].name,
	// 			thirdSide: this.container_lines.list[38].name,
	// 			fourthSide: this.container_lines.list[39].name,
	// 		},

	// 		{
	// 			firstSide: this.container_lines.list[38].name,
	// 			secondSide: this.container_lines.list[27].name,
	// 			thirdSide: this.container_lines.list[40].name,
	// 			fourthSide: this.container_lines.list[41].name,
	// 		},

	// 		{
	// 			firstSide: this.container_lines.list[40].name,
	// 			secondSide: this.container_lines.list[29].name,
	// 			thirdSide: this.container_lines.list[42].name,
	// 			fourthSide: this.container_lines.list[43].name,
	// 		},

	// 		{
	// 			firstSide: this.container_lines.list[42].name,
	// 			secondSide: this.container_lines.list[32].name,
	// 			thirdSide: this.container_lines.list[44].name,
	// 			fourthSide: this.container_lines.list[45].name,
	// 		},

	// 		{
	// 			firstSide: this.container_lines.list[46].name,
	// 			secondSide: this.container_lines.list[37].name,
	// 			thirdSide: this.container_lines.list[47].name,
	// 			fourthSide: this.container_lines.list[48].name,
	// 		},

	// 		{
	// 			firstSide: this.container_lines.list[47].name,
	// 			secondSide: this.container_lines.list[39].name,
	// 			thirdSide: this.container_lines.list[49].name,
	// 			fourthSide: this.container_lines.list[50].name,
	// 		},

	// 		{
	// 			firstSide: this.container_lines.list[49].name,
	// 			secondSide: this.container_lines.list[41].name,
	// 			thirdSide: this.container_lines.list[51].name,
	// 			fourthSide: this.container_lines.list[52].name,
	// 		},

	// 		{
	// 			firstSide: this.container_lines.list[51].name,
	// 			secondSide: this.container_lines.list[43].name,
	// 			thirdSide: this.container_lines.list[53].name,
	// 			fourthSide: this.container_lines.list[54].name,
	// 		},

	// 		{
	// 			firstSide: this.container_lines.list[55].name,
	// 			secondSide: this.container_lines.list[50].name,
	// 			thirdSide: this.container_lines.list[56].name,
	// 			fourthSide: this.container_lines.list[57].name,
	// 		},

	// 		{
	// 			firstSide: this.container_lines.list[56].name,
	// 			secondSide: this.container_lines.list[52].name,
	// 			thirdSide: this.container_lines.list[58].name,
	// 			fourthSide: this.container_lines.list[59].name,
	// 		}
	// 	]
	// }

	create() {

		this.editorCreate();

		this.oGameManager = new GameManager(this);

		this.container_lines.list.forEach((line) => {

			if (!line.tintFill) {
				line.name = 'selected';
				line.disableInteractive();
			}
			else {
				line.setInteractive().on('pointerdown', () => {
					line.name = 'selected';
					line.setTintFill(0, 0, 0, 0);
					this.oGameManager.boxs();
					this.oGameManager.turnHandler(aBox);
					line.disableInteractive();
				})
			}
		})


	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
