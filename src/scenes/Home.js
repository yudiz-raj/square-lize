
// You can write more code here

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

		// background_image_1
		this.add.image(960, 540, "background_image_1");

		// Start_button
		const start_button = this.add.text(960, 540, "", {});
		start_button.setOrigin(0.5, 0.5);
		start_button.tintFill = true;
		start_button.tintTopLeft = 13949731;
		start_button.tintTopRight = 13949731;
		start_button.tintBottomLeft = 13949731;
		start_button.tintBottomRight = 13949731;
		start_button.text = "start game";
		start_button.setStyle({ "fontFamily": "Barrio", "fontSize": "60px" });

		// start_button (components)
		new PushOnClick(start_button);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
