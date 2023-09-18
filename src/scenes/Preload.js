
// You can write more code here

/* START OF COMPILED CODE */

class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// progress
		const progress = this.add.text(960, 816, "", {});
		progress.setOrigin(0.5, 0.5);
		progress.visible = false;
		progress.text = "0%";
		progress.setStyle({ "fontFamily": "Barrio", "fontSize": "60px" });

		// background
		this.add.image(960, 540, "background");

		// logoPrefab
		const logoPrefab = new LogoPrefab(this, 591, 497);
		this.add.existing(logoPrefab);

		// progress (components)
		new PreloadText(progress);

		this.logoPrefab = logoPrefab;

		this.events.emit("scene-awake");
	}

	/** @type {LogoPrefab} */
	logoPrefab;

	/* START-USER-CODE */

	// Write your code here

	preload() {

		this.editorCreate();

		this.editorPreload();
		this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Home"));
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
