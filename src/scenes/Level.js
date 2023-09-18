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
		const background = this.add.image(960, 540, "background");
		body.add(background);

		// gameBoard
		const gameBoard = this.add.image(960, 540, "gameBoard");
		body.add(gameBoard);

		// container_boxs
		const container_boxs = this.add.container(0, 0);
		body.add(container_boxs);

		// box_1
		const box_1 = this.add.rectangle(918, 336, 170, 170);
		box_1.name = "box_1";
		box_1.scaleX = 0.5;
		box_1.scaleY = 0.5;
		box_1.visible = false;
		box_1.isFilled = true;
		container_boxs.add(box_1);

		// box_2
		const box_2 = this.add.rectangle(1000, 336, 170, 170);
		box_2.name = "box_2";
		box_2.scaleX = 0.5;
		box_2.scaleY = 0.5;
		box_2.visible = false;
		box_2.isFilled = true;
		container_boxs.add(box_2);

		// box_3
		const box_3 = this.add.rectangle(836, 416, 170, 170);
		box_3.name = "box_3";
		box_3.scaleX = 0.5;
		box_3.scaleY = 0.5;
		box_3.visible = false;
		box_3.isFilled = true;
		container_boxs.add(box_3);

		// box_4
		const box_4 = this.add.rectangle(918, 416, 170, 170);
		box_4.name = "box_4";
		box_4.scaleX = 0.5;
		box_4.scaleY = 0.5;
		box_4.visible = false;
		box_4.isFilled = true;
		container_boxs.add(box_4);

		// box_5
		const box_5 = this.add.rectangle(1000, 416, 170, 170);
		box_5.name = "box_5";
		box_5.scaleX = 0.5;
		box_5.scaleY = 0.5;
		box_5.visible = false;
		box_5.isFilled = true;
		container_boxs.add(box_5);

		// box_6
		const box_6 = this.add.rectangle(1079, 416, 170, 170);
		box_6.name = "box_6";
		box_6.scaleX = 0.5;
		box_6.scaleY = 0.5;
		box_6.visible = false;
		box_6.isFilled = true;
		container_boxs.add(box_6);

		// box_7
		const box_7 = this.add.rectangle(758, 496, 170, 170);
		box_7.name = "box_7";
		box_7.scaleX = 0.5;
		box_7.scaleY = 0.5;
		box_7.visible = false;
		box_7.isFilled = true;
		container_boxs.add(box_7);

		// box_8
		const box_8 = this.add.rectangle(836, 496, 170, 170);
		box_8.name = "box_8";
		box_8.scaleX = 0.5;
		box_8.scaleY = 0.5;
		box_8.visible = false;
		box_8.isFilled = true;
		container_boxs.add(box_8);

		// box_9
		const box_9 = this.add.rectangle(918, 496, 170, 170);
		box_9.name = "box_9";
		box_9.scaleX = 0.5;
		box_9.scaleY = 0.5;
		box_9.visible = false;
		box_9.isFilled = true;
		container_boxs.add(box_9);

		// box_10
		const box_10 = this.add.rectangle(1000, 496, 170, 170);
		box_10.name = "box_10";
		box_10.scaleX = 0.5;
		box_10.scaleY = 0.5;
		box_10.visible = false;
		box_10.isFilled = true;
		container_boxs.add(box_10);

		// box_11
		const box_11 = this.add.rectangle(1079, 496, 170, 170);
		box_11.name = "box_11";
		box_11.scaleX = 0.5;
		box_11.scaleY = 0.5;
		box_11.visible = false;
		box_11.isFilled = true;
		container_boxs.add(box_11);

		// box_12
		const box_12 = this.add.rectangle(1160, 496, 170, 170);
		box_12.name = "box_12";
		box_12.scaleX = 0.5;
		box_12.scaleY = 0.5;
		box_12.visible = false;
		box_12.isFilled = true;
		container_boxs.add(box_12);

		// box_13
		const box_13 = this.add.rectangle(758, 576, 170, 170);
		box_13.name = "box_13";
		box_13.scaleX = 0.5;
		box_13.scaleY = 0.5;
		box_13.visible = false;
		box_13.isFilled = true;
		container_boxs.add(box_13);

		// box_14
		const box_14 = this.add.rectangle(836, 576, 170, 170);
		box_14.name = "box_14";
		box_14.scaleX = 0.5;
		box_14.scaleY = 0.5;
		box_14.visible = false;
		box_14.isFilled = true;
		container_boxs.add(box_14);

		// box_15
		const box_15 = this.add.rectangle(918, 576, 170, 170);
		box_15.name = "box_15";
		box_15.scaleX = 0.5;
		box_15.scaleY = 0.5;
		box_15.visible = false;
		box_15.isFilled = true;
		container_boxs.add(box_15);

		// box_16
		const box_16 = this.add.rectangle(1000, 576, 170, 170);
		box_16.name = "box_16";
		box_16.scaleX = 0.5;
		box_16.scaleY = 0.5;
		box_16.visible = false;
		box_16.isFilled = true;
		container_boxs.add(box_16);

		// box_17
		const box_17 = this.add.rectangle(1079, 576, 170, 170);
		box_17.name = "box_17";
		box_17.scaleX = 0.5;
		box_17.scaleY = 0.5;
		box_17.visible = false;
		box_17.isFilled = true;
		container_boxs.add(box_17);

		// box_18
		const box_18 = this.add.rectangle(1160, 576, 170, 170);
		box_18.name = "box_18";
		box_18.scaleX = 0.5;
		box_18.scaleY = 0.5;
		box_18.visible = false;
		box_18.isFilled = true;
		container_boxs.add(box_18);

		// box_19
		const box_19 = this.add.rectangle(836, 656, 170, 170);
		box_19.name = "box_19";
		box_19.scaleX = 0.5;
		box_19.scaleY = 0.5;
		box_19.visible = false;
		box_19.isFilled = true;
		container_boxs.add(box_19);

		// box_20
		const box_20 = this.add.rectangle(918, 656, 170, 170);
		box_20.name = "box_20";
		box_20.scaleX = 0.5;
		box_20.scaleY = 0.5;
		box_20.visible = false;
		box_20.isFilled = true;
		container_boxs.add(box_20);

		// box_21
		const box_21 = this.add.rectangle(1000, 656, 170, 170);
		box_21.name = "box_21";
		box_21.scaleX = 0.5;
		box_21.scaleY = 0.5;
		box_21.visible = false;
		box_21.isFilled = true;
		container_boxs.add(box_21);

		// box_22
		const box_22 = this.add.rectangle(1079, 656, 170, 170);
		box_22.name = "box_22";
		box_22.scaleX = 0.5;
		box_22.scaleY = 0.5;
		box_22.visible = false;
		box_22.isFilled = true;
		container_boxs.add(box_22);

		// box_23
		const box_23 = this.add.rectangle(918, 744, 170, 170);
		box_23.name = "box_23";
		box_23.scaleX = 0.5;
		box_23.scaleY = 0.5;
		box_23.visible = false;
		box_23.isFilled = true;
		container_boxs.add(box_23);

		// box_24
		const box_24 = this.add.rectangle(1000, 744, 170, 170);
		box_24.name = "box_24";
		box_24.scaleX = 0.5;
		box_24.scaleY = 0.5;
		box_24.visible = false;
		box_24.isFilled = true;
		container_boxs.add(box_24);

		// container_lines
		const container_lines = this.add.container(-665, 232);
		body.add(container_lines);

		// line_1
		const line_1 = this.add.image(1541, 63, "SelectedLine");
		line_1.name = "line_1";
		line_1.scaleY = 1.21;
		line_1.angle = -180;
		line_1.setOrigin(0.5, 1);
		container_lines.add(line_1);

		// line_2
		const line_2 = this.add.image(1539, 67, "SelectedLine");
		line_2.name = "line_2";
		line_2.scaleY = 1.24;
		line_2.angle = -90;
		line_2.setOrigin(0.5, 0);
		container_lines.add(line_2);

		// line_3
		const line_3 = this.add.image(1626, 64, "notSelectedLine");
		line_3.name = "line_3";
		line_3.scaleY = 1.193;
		line_3.setOrigin(0.5, 0);
		container_lines.add(line_3);

		// line_4
		const line_4 = this.add.image(1539, 146, "notSelectedLine");
		line_4.name = "line_4";
		line_4.scaleY = 1.24;
		line_4.angle = -90;
		line_4.setOrigin(0.5, 0);
		container_lines.add(line_4);

		// line_5
		const line_5 = this.add.image(1624, 65, "SelectedLine");
		line_5.name = "line_5";
		line_5.scaleY = 1.139;
		line_5.angle = -90;
		line_5.setOrigin(0.5, 0);
		container_lines.add(line_5);

		// line_6
		const line_6 = this.add.image(1703, 63, "SelectedLine");
		line_6.name = "line_6";
		line_6.scaleY = 1.208;
		line_6.setOrigin(0.5, 0);
		container_lines.add(line_6);

		// line_7
		const line_7 = this.add.image(1624, 147, "notSelectedLine");
		line_7.name = "line_7";
		line_7.scaleY = 1.14;
		line_7.angle = -90;
		line_7.setOrigin(0.5, 0);
		container_lines.add(line_7);

		// line_8
		const line_8 = this.add.image(1464, 144, "SelectedLine");
		line_8.name = "line_8";
		line_8.scaleY = 1.19;
		line_8.angle = -180;
		line_8.setOrigin(0.5, 1);
		container_lines.add(line_8);

		// line_9
		const line_9 = this.add.image(1461, 146, "SelectedLine");
		line_9.name = "line_9";
		line_9.scaleY = 1.15;
		line_9.angle = -90;
		line_9.setOrigin(0.5, 0);
		container_lines.add(line_9);

		// line_10
		const line_10 = this.add.image(1542, 142, "notSelectedLine");
		line_10.name = "line_10";
		line_10.scaleY = 1.18;
		line_10.setOrigin(0.5, 0);
		container_lines.add(line_10);

		// line_11
		const line_11 = this.add.image(1460, 227, "notSelectedLine");
		line_11.name = "line_11";
		line_11.scaleY = 1.16;
		line_11.angle = 90;
		line_11.setOrigin(0.5, 1);
		container_lines.add(line_11);

		// line_12
		const line_12 = this.add.image(1626, 144, "notSelectedLine");
		line_12.name = "line_12";
		line_12.scaleY = 1.18;
		line_12.angle = -180;
		line_12.setOrigin(0.5, 1);
		container_lines.add(line_12);

		// line_13
		const line_13 = this.add.image(1540, 227, "notSelectedLine");
		line_13.name = "line_13";
		line_13.scaleY = 1.22;
		line_13.angle = 90;
		line_13.setOrigin(0.5, 1);
		container_lines.add(line_13);

		// line_14
		const line_14 = this.add.image(1703, 144, "notSelectedLine");
		line_14.name = "line_14";
		line_14.scaleY = 1.18;
		line_14.setOrigin(0.5, 0);
		container_lines.add(line_14);

		// line_15
		const line_15 = this.add.image(1624, 227, "notSelectedLine");
		line_15.name = "line_15";
		line_15.scaleY = 1.12;
		line_15.angle = 90;
		line_15.setOrigin(0.5, 1);
		container_lines.add(line_15);

		// line_16
		const line_16 = this.add.image(1701, 147, "SelectedLine");
		line_16.name = "line_16";
		line_16.scaleY = 1.209;
		line_16.angle = -90;
		line_16.setOrigin(0.5, 0);
		container_lines.add(line_16);

		// line_17
		const line_17 = this.add.image(1786, 144, "SelectedLine");
		line_17.name = "line_17";
		line_17.scaleY = 1.18;
		line_17.setOrigin(0.5, 0);
		container_lines.add(line_17);

		// line_18
		const line_18 = this.add.image(1701, 226, "notSelectedLine");
		line_18.name = "line_18";
		line_18.scaleY = 1.19;
		line_18.angle = 90;
		line_18.setOrigin(0.5, 1);
		container_lines.add(line_18);

		// line_19
		const line_19 = this.add.image(1384, 225, "SelectedLine");
		line_19.name = "line_19";
		line_19.scaleY = 1.18;
		line_19.setOrigin(0.5, 0);
		container_lines.add(line_19);

		// line_20
		const line_20 = this.add.image(1381, 229, "SelectedLine");
		line_20.name = "line_20";
		line_20.scaleY = 1.17;
		line_20.angle = 90;
		line_20.setOrigin(0.5, 1);
		container_lines.add(line_20);

		// line_21
		const line_21 = this.add.image(1463, 225, "notSelectedLine");
		line_21.name = "line_21";
		line_21.scaleY = 1.18;
		line_21.setOrigin(0.5, 0);
		container_lines.add(line_21);

		// line_22
		const line_22 = this.add.image(1381, 308, "notSelectedLine");
		line_22.name = "line_22";
		line_22.scaleY = 1.16;
		line_22.angle = 90;
		line_22.setOrigin(0.5, 1);
		container_lines.add(line_22);

		// line_23
		const line_23 = this.add.image(1542, 225, "notSelectedLine");
		line_23.name = "line_23";
		line_23.scaleY = 1.18;
		line_23.setOrigin(0.5, 0);
		container_lines.add(line_23);

		// line_24
		const line_24 = this.add.image(1461, 308, "notSelectedLine");
		line_24.name = "line_24";
		line_24.scaleY = 1.16;
		line_24.angle = 90;
		line_24.setOrigin(0.5, 1);
		container_lines.add(line_24);

		// line_25
		const line_25 = this.add.image(1626, 225, "notSelectedLine");
		line_25.name = "line_25";
		line_25.scaleY = 1.18;
		line_25.setOrigin(0.5, 0);
		container_lines.add(line_25);

		// line_26
		const line_26 = this.add.image(1540, 308, "notSelectedLine");
		line_26.name = "line_26";
		line_26.scaleY = 1.22;
		line_26.angle = 90;
		line_26.setOrigin(0.5, 1);
		container_lines.add(line_26);

		// line_27
		const line_27 = this.add.image(1703, 225, "notSelectedLine");
		line_27.name = "line_27";
		line_27.scaleY = 1.18;
		line_27.setOrigin(0.5, 0);
		container_lines.add(line_27);

		// line_28
		const line_28 = this.add.image(1624, 308, "notSelectedLine");
		line_28.name = "line_28";
		line_28.scaleY = 1.12;
		line_28.angle = 90;
		line_28.setOrigin(0.5, 1);
		container_lines.add(line_28);

		// line_29
		const line_29 = this.add.image(1785, 225, "notSelectedLine");
		line_29.name = "line_29";
		line_29.scaleY = 1.18;
		line_29.setOrigin(0.5, 0);
		container_lines.add(line_29);

		// line_30
		const line_30 = this.add.image(1701, 308, "notSelectedLine");
		line_30.name = "line_30";
		line_30.scaleY = 1.19;
		line_30.angle = 90;
		line_30.setOrigin(0.5, 1);
		container_lines.add(line_30);

		// line_31
		const line_31 = this.add.image(1783, 228, "SelectedLine");
		line_31.name = "line_31";
		line_31.scaleY = 1.22;
		line_31.angle = 90;
		line_31.setOrigin(0.5, 1);
		container_lines.add(line_31);

		// line_32
		const line_32 = this.add.image(1868, 227, "SelectedLine");
		line_32.name = "line_32";
		line_32.scaleY = 1.18;
		line_32.setOrigin(0.5, 0);
		container_lines.add(line_32);

		// line_33
		const line_33 = this.add.image(1783, 307, "notSelectedLine");
		line_33.name = "line_33";
		line_33.scaleY = 1.22;
		line_33.angle = 90;
		line_33.setOrigin(0.5, 1);
		container_lines.add(line_33);

		// line_34
		const line_34 = this.add.image(1384, 306, "SelectedLine");
		line_34.name = "line_34";
		line_34.scaleY = 1.18;
		line_34.setOrigin(0.5, 0);
		container_lines.add(line_34);

		// line_35
		const line_35 = this.add.image(1463, 306, "notSelectedLine");
		line_35.name = "line_35";
		line_35.scaleY = 1.18;
		line_35.setOrigin(0.5, 0);
		container_lines.add(line_35);

		// line_36
		const line_36 = this.add.image(1381, 390, "SelectedLine");
		line_36.name = "line_36";
		line_36.scaleY = 1.162;
		line_36.angle = 90;
		line_36.setOrigin(0.5, 1);
		container_lines.add(line_36);

		// line_37
		const line_37 = this.add.image(1542, 307, "notSelectedLine");
		line_37.name = "line_37";
		line_37.scaleY = 1.18;
		line_37.setOrigin(0.5, 0);
		container_lines.add(line_37);

		// line_38
		const line_38 = this.add.image(1461, 388, "notSelectedLine");
		line_38.name = "line_38";
		line_38.scaleY = 1.15;
		line_38.angle = 90;
		line_38.setOrigin(0.5, 1);
		container_lines.add(line_38);

		// line_39
		const line_39 = this.add.image(1626, 306, "notSelectedLine");
		line_39.name = "line_39";
		line_39.scaleY = 1.18;
		line_39.setOrigin(0.5, 0);
		container_lines.add(line_39);

		// line_40
		const line_40 = this.add.image(1540, 389, "notSelectedLine");
		line_40.name = "line_40";
		line_40.scaleY = 1.221;
		line_40.angle = 90;
		line_40.setOrigin(0.5, 1);
		container_lines.add(line_40);

		// line_41
		const line_41 = this.add.image(1703, 306, "notSelectedLine");
		line_41.name = "line_41";
		line_41.scaleY = 1.18;
		line_41.setOrigin(0.5, 0);
		container_lines.add(line_41);

		// line_42
		const line_42 = this.add.image(1624, 389, "notSelectedLine");
		line_42.name = "line_42";
		line_42.scaleY = 1.123;
		line_42.angle = 90;
		line_42.setOrigin(0.5, 1);
		container_lines.add(line_42);

		// line_43
		const line_43 = this.add.image(1785, 306, "notSelectedLine");
		line_43.name = "line_43";
		line_43.scaleY = 1.18;
		line_43.setOrigin(0.5, 0);
		container_lines.add(line_43);

		// line_44
		const line_44 = this.add.image(1701, 389, "notSelectedLine");
		line_44.name = "line_44";
		line_44.scaleY = 1.197;
		line_44.angle = 90;
		line_44.setOrigin(0.5, 1);
		container_lines.add(line_44);

		// line_45
		const line_45 = this.add.image(1868, 306, "SelectedLine");
		line_45.name = "line_45";
		line_45.scaleY = 1.18;
		line_45.setOrigin(0.5, 0);
		container_lines.add(line_45);

		// line_46
		const line_46 = this.add.image(1783, 389, "SelectedLine");
		line_46.name = "line_46";
		line_46.scaleY = 1.221;
		line_46.angle = 90;
		line_46.setOrigin(0.5, 1);
		container_lines.add(line_46);

		// line_47
		const line_47 = this.add.image(1463, 386, "SelectedLine");
		line_47.name = "line_47";
		line_47.scaleY = 1.19;
		line_47.setOrigin(0.5, 0);
		container_lines.add(line_47);

		// line_48
		const line_48 = this.add.image(1542, 387, "notSelectedLine");
		line_48.name = "line_48";
		line_48.scaleY = 1.18;
		line_48.setOrigin(0.5, 0);
		container_lines.add(line_48);

		// line_49
		const line_49 = this.add.image(1460, 469, "SelectedLine");
		line_49.name = "line_49";
		line_49.scaleY = 1.16;
		line_49.angle = 90;
		line_49.setOrigin(0.5, 1);
		container_lines.add(line_49);

		// line_50
		const line_50 = this.add.image(1626, 387, "notSelectedLine");
		line_50.name = "line_50";
		line_50.scaleY = 1.18;
		line_50.setOrigin(0.5, 0);
		container_lines.add(line_50);

		// line_51
		const line_51 = this.add.image(1540, 469, "notSelectedLine");
		line_51.name = "line_51";
		line_51.scaleY = 1.22;
		line_51.angle = 90;
		line_51.setOrigin(0.5, 1);
		container_lines.add(line_51);

		// line_52
		const line_52 = this.add.image(1703, 387, "notSelectedLine");
		line_52.name = "line_52";
		line_52.scaleY = 1.18;
		line_52.setOrigin(0.5, 0);
		container_lines.add(line_52);

		// line_53
		const line_53 = this.add.image(1624, 469, "notSelectedLine");
		line_53.name = "line_53";
		line_53.scaleY = 1.13;
		line_53.angle = 90;
		line_53.setOrigin(0.5, 1);
		container_lines.add(line_53);

		// line_54
		const line_54 = this.add.image(1786, 386, "SelectedLine");
		line_54.name = "line_54";
		line_54.scaleY = 1.18;
		line_54.setOrigin(0.5, 0);
		container_lines.add(line_54);

		// line_55
		const line_55 = this.add.image(1701, 470, "SelectedLine");
		line_55.name = "line_55";
		line_55.scaleY = 1.2;
		line_55.angle = 90;
		line_55.setOrigin(0.5, 1);
		container_lines.add(line_55);

		// line_56
		const line_56 = this.add.image(1542, 467, "SelectedLine");
		line_56.name = "line_56";
		line_56.scaleY = 1.18;
		line_56.setOrigin(0.5, 0);
		container_lines.add(line_56);

		// line_57
		const line_57 = this.add.image(1626, 467, "notSelectedLine");
		line_57.name = "line_57";
		line_57.scaleY = 1.18;
		line_57.setOrigin(0.5, 0);
		container_lines.add(line_57);

		// line_58
		const line_58 = this.add.image(1540, 551, "SelectedLine");
		line_58.name = "line_58";
		line_58.scaleY = 1.23;
		line_58.angle = 90;
		line_58.setOrigin(0.5, 1);
		container_lines.add(line_58);

		// line_59
		const line_59 = this.add.image(1702, 467, "SelectedLine");
		line_59.name = "line_59";
		line_59.scaleY = 1.18;
		line_59.setOrigin(0.5, 0);
		container_lines.add(line_59);

		// line_60
		const line_60 = this.add.image(1624, 552, "SelectedLine");
		line_60.name = "line_60";
		line_60.scaleY = 1.14;
		line_60.angle = 90;
		line_60.setOrigin(0.5, 1);
		container_lines.add(line_60);

		// container_players
		const container_players = this.add.container(0, 0);
		body.add(container_players);

		// player_1
		const player_1 = this.add.image(464, 413, "player_1");
		player_1.scaleX = 0.8;
		player_1.scaleY = 0.8;
		container_players.add(player_1);

		// player_1Time
		const player_1Time = this.add.text(493, 544, "", {});
		player_1Time.setOrigin(0.5, 0.5);
		player_1Time.tintTopLeft = 12223488;
		player_1Time.tintTopRight = 12223488;
		player_1Time.tintBottomLeft = 12223488;
		player_1Time.tintBottomRight = 12223488;
		player_1Time.text = "00:15";
		player_1Time.setStyle({ "fontFamily": "Washington", "fontSize": "30px" });
		container_players.add(player_1Time);

		// scoreTitle
		const scoreTitle = this.add.text(464, 627, "", {});
		scoreTitle.setOrigin(0.5, 0.5);
		scoreTitle.tintTopLeft = 11901313;
		scoreTitle.tintTopRight = 11901313;
		scoreTitle.tintBottomLeft = 11901313;
		scoreTitle.tintBottomRight = 11901313;
		scoreTitle.text = "Score";
		scoreTitle.setStyle({ "align": "center", "fontFamily": "Washington", "fontSize": "48px" });
		container_players.add(scoreTitle);

		// player_1Score
		const player_1Score = this.add.text(464, 676, "", {});
		player_1Score.setOrigin(0.5, 0.5);
		player_1Score.tintTopLeft = 11901313;
		player_1Score.tintTopRight = 11901313;
		player_1Score.tintBottomLeft = 11901313;
		player_1Score.tintBottomRight = 11901313;
		player_1Score.text = "0";
		player_1Score.setStyle({ "fontFamily": "Washington", "fontSize": "48px" });
		container_players.add(player_1Score);

		// player_2
		const player_2 = this.add.image(1529, 580, "player_2");
		player_2.scaleX = 0.8;
		player_2.scaleY = 0.8;
		container_players.add(player_2);

		// player_2Time
		const player_2Time = this.add.text(1508, 712, "", {});
		player_2Time.setOrigin(0.5, 0.5);
		player_2Time.tintTopLeft = 32442;
		player_2Time.tintTopRight = 32442;
		player_2Time.tintBottomLeft = 32442;
		player_2Time.tintBottomRight = 32442;
		player_2Time.text = "00:15";
		player_2Time.setStyle({ "fontFamily": "Washington", "fontSize": "30px" });
		container_players.add(player_2Time);

		// scoreTitle_1
		const scoreTitle_1 = this.add.text(1503, 810, "", {});
		scoreTitle_1.setOrigin(0.5, 0.5);
		scoreTitle_1.tintTopLeft = 11901313;
		scoreTitle_1.tintTopRight = 11901313;
		scoreTitle_1.tintBottomLeft = 11901313;
		scoreTitle_1.tintBottomRight = 11901313;
		scoreTitle_1.text = "Score";
		scoreTitle_1.setStyle({ "align": "center", "fontFamily": "Washington", "fontSize": "48px" });
		container_players.add(scoreTitle_1);

		// player_2Score
		const player_2Score = this.add.text(1503, 862, "", {});
		player_2Score.setOrigin(0.5, 0.5);
		player_2Score.tintTopLeft = 11901313;
		player_2Score.tintTopRight = 11901313;
		player_2Score.tintBottomLeft = 11901313;
		player_2Score.tintBottomRight = 11901313;
		player_2Score.text = "0";
		player_2Score.setStyle({ "fontFamily": "Washington", "fontSize": "48px" });
		container_players.add(player_2Score);

		// container_setting
		const container_setting = this.add.container(0, 0);
		body.add(container_setting);

		// setting_bar
		const setting_bar = this.add.image(348, 875, "setting_bar");
		setting_bar.scaleX = 0;
		container_setting.add(setting_bar);

		// sound
		const sound = this.add.image(349, 875, "sound");
		sound.scaleX = 0.5;
		sound.scaleY = 0.5;
		container_setting.add(sound);

		// music
		const music = this.add.image(349, 875, "music");
		music.scaleX = 0.5;
		music.scaleY = 0.5;
		container_setting.add(music);

		// setting
		const setting = this.add.image(349, 875, "setting");
		setting.scaleX = 0.7;
		setting.scaleY = 0.7;
		container_setting.add(setting);

		// container_timer
		const container_timer = this.add.container(0, 0);
		body.add(container_timer);

		// pause
		const pause = this.add.image(890, 920, "pause");
		pause.scaleX = 0.7;
		pause.scaleY = 0.7;
		container_timer.add(pause);

		// restart
		const restart = this.add.image(960, 920, "backward");
		restart.scaleX = 0.7;
		restart.scaleY = 0.7;
		container_timer.add(restart);

		// stop
		const stop = this.add.image(1030, 920, "stop");
		stop.scaleX = 0.7;
		stop.scaleY = 0.7;
		container_timer.add(stop);

		// container_player_2Life
		const container_player_2Life = this.add.container(1463, 746);
		container_timer.add(container_player_2Life);

		// timer_1Player_2
		const timer_1Player_2 = this.add.image(0, 0, "timer");
		timer_1Player_2.tintFill = true;
		timer_1Player_2.tintTopLeft = 32442;
		timer_1Player_2.tintTopRight = 32442;
		timer_1Player_2.tintBottomLeft = 32442;
		timer_1Player_2.tintBottomRight = 32442;
		container_player_2Life.add(timer_1Player_2);

		// timer_2Player_2
		const timer_2Player_2 = this.add.image(46, 0, "timer");
		timer_2Player_2.tintFill = true;
		timer_2Player_2.tintTopLeft = 32442;
		timer_2Player_2.tintTopRight = 32442;
		timer_2Player_2.tintBottomLeft = 32442;
		timer_2Player_2.tintBottomRight = 32442;
		container_player_2Life.add(timer_2Player_2);

		// timer_3Player_2
		const timer_3Player_2 = this.add.image(92, 0, "timer");
		timer_3Player_2.tintFill = true;
		timer_3Player_2.tintTopLeft = 32442;
		timer_3Player_2.tintTopRight = 32442;
		timer_3Player_2.tintBottomLeft = 32442;
		timer_3Player_2.tintBottomRight = 32442;
		container_player_2Life.add(timer_3Player_2);

		// container_player_1Life
		const container_player_1Life = this.add.container(448, 583);
		container_timer.add(container_player_1Life);

		// timer_1Player_1
		const timer_1Player_1 = this.add.image(0, 0, "timer");
		container_player_1Life.add(timer_1Player_1);

		// timer_2Player_1
		const timer_2Player_1 = this.add.image(46, 0, "timer");
		container_player_1Life.add(timer_2Player_1);

		// timer_3Player_1
		const timer_3Player_1 = this.add.image(92, 0, "timer");
		container_player_1Life.add(timer_3Player_1);

		// winner
		const winner = this.add.image(960, -63, "winner");
		winner.scaleX = 0.8;
		winner.scaleY = 0.8;
		body.add(winner);

		// player_1_image
		const player_1_image = this.add.image(497, 443, "avatar_1");
		player_1_image.scaleX = 1.3;
		player_1_image.scaleY = 1.3;

		// player_2_image
		const player_2_image = this.add.image(1505, 610, "avatar_2");
		player_2_image.scaleX = 1.3;
		player_2_image.scaleY = 1.3;

		this.container_boxs = container_boxs;
		this.container_lines = container_lines;
		this.player_1Time = player_1Time;
		this.scoreTitle = scoreTitle;
		this.player_1Score = player_1Score;
		this.player_2Time = player_2Time;
		this.scoreTitle_1 = scoreTitle_1;
		this.player_2Score = player_2Score;
		this.setting_bar = setting_bar;
		this.sound = sound;
		this.music = music;
		this.setting = setting;
		this.pause = pause;
		this.restart = restart;
		this.stop = stop;
		this.timer_1Player_2 = timer_1Player_2;
		this.timer_2Player_2 = timer_2Player_2;
		this.timer_3Player_2 = timer_3Player_2;
		this.container_player_2Life = container_player_2Life;
		this.timer_1Player_1 = timer_1Player_1;
		this.timer_2Player_1 = timer_2Player_1;
		this.timer_3Player_1 = timer_3Player_1;
		this.container_player_1Life = container_player_1Life;
		this.winner = winner;
		this.player_1_image = player_1_image;
		this.player_2_image = player_2_image;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	container_boxs;
	/** @type {Phaser.GameObjects.Container} */
	container_lines;
	/** @type {Phaser.GameObjects.Text} */
	player_1Time;
	/** @type {Phaser.GameObjects.Text} */
	scoreTitle;
	/** @type {Phaser.GameObjects.Text} */
	player_1Score;
	/** @type {Phaser.GameObjects.Text} */
	player_2Time;
	/** @type {Phaser.GameObjects.Text} */
	scoreTitle_1;
	/** @type {Phaser.GameObjects.Text} */
	player_2Score;
	/** @type {Phaser.GameObjects.Image} */
	setting_bar;
	/** @type {Phaser.GameObjects.Image} */
	sound;
	/** @type {Phaser.GameObjects.Image} */
	music;
	/** @type {Phaser.GameObjects.Image} */
	setting;
	/** @type {Phaser.GameObjects.Image} */
	pause;
	/** @type {Phaser.GameObjects.Image} */
	restart;
	/** @type {Phaser.GameObjects.Image} */
	stop;
	/** @type {Phaser.GameObjects.Image} */
	timer_1Player_2;
	/** @type {Phaser.GameObjects.Image} */
	timer_2Player_2;
	/** @type {Phaser.GameObjects.Image} */
	timer_3Player_2;
	/** @type {Phaser.GameObjects.Container} */
	container_player_2Life;
	/** @type {Phaser.GameObjects.Image} */
	timer_1Player_1;
	/** @type {Phaser.GameObjects.Image} */
	timer_2Player_1;
	/** @type {Phaser.GameObjects.Image} */
	timer_3Player_1;
	/** @type {Phaser.GameObjects.Container} */
	container_player_1Life;
	/** @type {Phaser.GameObjects.Image} */
	winner;
	/** @type {Phaser.GameObjects.Image} */
	player_1_image;
	/** @type {Phaser.GameObjects.Image} */
	player_2_image;

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();

		this.oGameManager = new GameManager(this);
		this.oTweenManager = new TweenManager(this);
		this.oGameManager.setTimer(15);
		this.oGameManager.setPauseButtonEnabled();
		this.setting.setInteractive().on("pointerdown", () => {
			this.oTweenManager.settingAnimation();
		});
		this.container_lines.list.forEach((line) => {
			if (line.texture.key == "SelectedLine") {
				line.name = 'selected';
				this.oGameManager.boxs();
				line.disableInteractive();
			}
			else {
				line.setInteractive().on('pointerdown', () => {
					line.name = 'selected';
					line.setTexture("SelectedLine");
					this.oGameManager.boxs();
					this.oGameManager.turnHandler();
					line.disableInteractive();
				});
			}
		});
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
