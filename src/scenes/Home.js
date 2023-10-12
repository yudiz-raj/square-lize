
// You can write more code here
let nPercentage = 0;
/* START OF COMPILED CODE */

class Home extends Phaser.Scene {

	constructor() {
		super("Home");

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

		// container_mode_1
		const container_mode_1 = this.add.container(606.8136467322677, 481.493297246839);
		container_mode_1.name = "container_mode_1";
		body.add(container_mode_1);

		// player_1
		const player_1 = this.add.image(-30.813646632626956, -37.49329760431965, "player_1");
		container_mode_1.add(player_1);

		// player_1Icon
		const player_1Icon = this.add.image(-76.81364663262696, -27.49329760431965, "player_1Icon");
		container_mode_1.add(player_1Icon);

		// player_1Icon_1
		const player_1Icon_1 = this.add.image(103.18635336737304, 109.50670239568035, "player_1Icon");
		container_mode_1.add(player_1Icon_1);

		// vsText_2
		const vsText_2 = this.add.text(19.186353367373044, 52.50670239568035, "", {});
		vsText_2.setOrigin(0.5, 0.5);
		vsText_2.tintTopLeft = 12223488;
		vsText_2.tintTopRight = 12223488;
		vsText_2.tintBottomLeft = 12223488;
		vsText_2.tintBottomRight = 12223488;
		vsText_2.text = "VS";
		vsText_2.setStyle({ "fontFamily": "Washington", "fontSize": "60px" });
		container_mode_1.add(vsText_2);

		// mode_1
		const mode_1 = this.add.text(20.186353367373044, -153.49329760431965, "", {});
		mode_1.angle = 5;
		mode_1.setOrigin(0.5, 0.5);
		mode_1.tintTopLeft = 8415232;
		mode_1.tintTopRight = 8415232;
		mode_1.tintBottomLeft = 8415232;
		mode_1.tintBottomRight = 8415232;
		mode_1.text = "Mode 1";
		mode_1.setStyle({ "fontFamily": "Washington", "fontSize": "68px" });
		container_mode_1.add(mode_1);

		// container_mode_2
		const container_mode_2 = this.add.container(1388.4390687249606, 655.7598201923057);
		container_mode_2.name = "container_mode_2";
		body.add(container_mode_2);

		// player_2
		const player_2 = this.add.image(29.56097712572023, -42.759776471273995, "player_2");
		container_mode_2.add(player_2);

		// player_2Icon
		const player_2Icon = this.add.image(-103.43902287427977, -21.759776471273995, "player_2Icon");
		container_mode_2.add(player_2Icon);

		// computer
		const computer = this.add.image(76.56097712572023, 111.240223528726, "computer");
		container_mode_2.add(computer);

		// vsText
		const vsText = this.add.text(-7.439022874279772, 37.240223528726005, "", {});
		vsText.setOrigin(0.5, 0.5);
		vsText.tintTopLeft = 32442;
		vsText.tintTopRight = 32442;
		vsText.tintBottomLeft = 32442;
		vsText.tintBottomRight = 32442;
		vsText.text = "VS";
		vsText.setStyle({ "fontFamily": "Washington", "fontSize": "60px" });
		container_mode_2.add(vsText);

		// mode_2
		const mode_2 = this.add.text(-22.43902287427977, -158.759776471274, "", {});
		mode_2.angle = -5;
		mode_2.setOrigin(0.5, 0.5);
		mode_2.tintTopLeft = 22912;
		mode_2.tintTopRight = 22912;
		mode_2.tintBottomLeft = 22912;
		mode_2.tintBottomRight = 22912;
		mode_2.text = "Mode 2";
		mode_2.setStyle({ "fontFamily": "Washington", "fontSize": "68px" });
		container_mode_2.add(mode_2);

		this.container_mode_1 = container_mode_1;
		this.container_mode_2 = container_mode_2;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	container_mode_1;
	/** @type {Phaser.GameObjects.Container} */
	container_mode_2;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.oTweenManager = new TweenManager(this);
		this.oSoundManager = new SoundManager(this);
		localStorage.setItem("isSoundOn", true);
		localStorage.setItem("isMusicOn", true);
		this.container_mode_1.setSize(350, 400);
		this.container_mode_2.setSize(350, 400);
		this.container_mode_1.setInteractive();
		this.container_mode_2.setInteractive();
		this.container_mode_1.on('pointerover', () => {
			this.input.setDefaultCursor('pointer');
			this.container_mode_1.setScale(1.05);
		});
		this.container_mode_1.on('pointerout', () => {
			this.input.setDefaultCursor('default');
			this.container_mode_1.setScale(1);
		});
		this.container_mode_1.on("pointerdown", () => {
			this.oSoundManager.playSound(this.oSoundManager.clickSound, false);
			this.input.setDefaultCursor('default');
			this.container_mode_1.setScale(1);
			this.oTweenManager.buttonAnimation(this.container_mode_1);
		});
		this.container_mode_2.on('pointerover', () => {
			this.input.setDefaultCursor('pointer');
			this.container_mode_2.setScale(1.05);
		});
		this.container_mode_2.on('pointerout', () => {
			this.input.setDefaultCursor('default');
			this.container_mode_2.setScale(1);
		});
		this.container_mode_2.on("pointerdown", () => {
			this.oSoundManager.playSound(this.oSoundManager.clickSound, false);
			this.input.setDefaultCursor('default');
			this.container_mode_2.setScale(1);
			this.oTweenManager.buttonAnimation(this.container_mode_2);
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
