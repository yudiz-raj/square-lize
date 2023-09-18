
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

		// logoPrefab
		const logoPrefab = new LogoPrefab(this, 591, 497);
		body.add(logoPrefab);

		// container_loading
		const container_loading = this.add.container(0, 0);
		body.add(container_loading);

		// loading_bar
		const loading_bar = this.add.image(960, 887, "loading_bar");
		container_loading.add(loading_bar);

		// loading
		const loading = this.add.image(479, 887, "loading");
		container_loading.add(loading);

		// LoadingTxt
		const loadingTxt = this.add.text(792, 836, "", {});
		loadingTxt.setOrigin(0.5, 0.5);
		loadingTxt.tintTopLeft = 11901313;
		loadingTxt.tintTopRight = 11901313;
		loadingTxt.tintBottomLeft = 11901313;
		loadingTxt.tintBottomRight = 11901313;
		loadingTxt.text = "Loading...";
		loadingTxt.setStyle({ "align": "center", "fontFamily": "Washington", "fontSize": "42px" });
		container_loading.add(loadingTxt);

		// percentageTxt
		const percentageTxt = this.add.text(1129, 836, "", {});
		percentageTxt.setOrigin(0.5, 0.5);
		percentageTxt.tintTopLeft = 11901313;
		percentageTxt.tintTopRight = 11901313;
		percentageTxt.tintBottomLeft = 11901313;
		percentageTxt.tintBottomRight = 11901313;
		percentageTxt.text = "0";
		percentageTxt.setStyle({ "align": "center", "fontFamily": "Washington", "fontSize": "48px" });
		container_loading.add(percentageTxt);

		// percentageTxt_1
		const percentageTxt_1 = this.add.text(1177, 836, "", {});
		percentageTxt_1.setOrigin(0.5, 0.5);
		percentageTxt_1.tintTopLeft = 11901313;
		percentageTxt_1.tintTopRight = 11901313;
		percentageTxt_1.tintBottomLeft = 11901313;
		percentageTxt_1.tintBottomRight = 11901313;
		percentageTxt_1.text = "%";
		percentageTxt_1.setStyle({ "align": "center", "fontFamily": "Washington", "fontSize": "48px" });
		container_loading.add(percentageTxt_1);

		this.logoPrefab = logoPrefab;
		this.loading = loading;
		this.loadingTxt = loadingTxt;
		this.percentageTxt = percentageTxt;

		this.events.emit("scene-awake");
	}

	/** @type {LogoPrefab} */
	logoPrefab;
	/** @type {Phaser.GameObjects.Image} */
	loading;
	/** @type {Phaser.GameObjects.Text} */
	loadingTxt;
	/** @type {Phaser.GameObjects.Text} */
	percentageTxt;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.oTweenManager = new TweenManager(this);
		let shape = this.make.graphics();
		shape.fillRect(727, 860, 512, 64);
		const mask = shape.createGeometryMask();
		this.loading.setMask(mask);
		this.oTweenManager.logoAnimation();
		this.timeInterval = setInterval(() => {
			if (nPercentage < 100) {
				nPercentage++;
				this.percentageTxt.setText(nPercentage);
			}
			if (nPercentage == 100) {
				clearInterval(this.timeInterval);
				this.scene.stop("Home");
				this.scene.start("Level");	
			}
		}, 40);
	}
	update() {
		if (this.loading.x <= 960) {
			this.loading.x += 2;			
		}	
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
