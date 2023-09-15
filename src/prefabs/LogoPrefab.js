
// You can write more code here

/* START OF COMPILED CODE */

class LogoPrefab extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? -357, y ?? 0);

		// squareQuadz
		const squareQuadz = scene.add.image(357, 0, "squareQuadz");
		this.add(squareQuadz);

		// avatar_1
		const avatar_1 = scene.add.image(50, 150, "avatar_1");
		avatar_1.scaleX = 1.2;
		avatar_1.scaleY = 1.2;
		avatar_1.angle = -20;
		this.add(avatar_1);

		// avatar_2
		const avatar_2 = scene.add.image(150, 140, "avatar_2");
		avatar_2.scaleX = 1.1;
		avatar_2.scaleY = 1.1;
		this.add(avatar_2);

		this.avatar_1 = avatar_1;
		this.avatar_2 = avatar_2;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	avatar_1;
	/** @type {Phaser.GameObjects.Image} */
	avatar_2;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
