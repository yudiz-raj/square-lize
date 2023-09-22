
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
		const logoPrefab = new LogoPrefab(this, 959.999996185923, 539.9999994211958);
		this.add.existing(logoPrefab);

		// container_loading
		const container_loading = this.add.container(0, 0);

		// loading_bar
		const loading_bar = this.add.image(960, 887, "loading_bar");
		container_loading.add(loading_bar);

		// innerBar
		const innerBar = this.add.image(704, 887, "loading");
		innerBar.setOrigin(0, 0.5);
		innerBar.visible = false;
		container_loading.add(innerBar);

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

		// progress (components)
		new PreloadText(progress);

		this.logoPrefab = logoPrefab;
		this.innerBar = innerBar;
		this.loadingTxt = loadingTxt;
		this.percentageTxt = percentageTxt;

		this.events.emit("scene-awake");
	}

	/** @type {LogoPrefab} */
	logoPrefab;
	/** @type {Phaser.GameObjects.Image} */
	innerBar;
	/** @type {Phaser.GameObjects.Text} */
	loadingTxt;
	/** @type {Phaser.GameObjects.Text} */
	percentageTxt;

	/* START-USER-CODE */

	// Write your code here

	preload() {

		this.editorCreate();

		this.editorPreload();
		this.logoAnimation();
		this.isGameLoaded1 = false;
		this.isGameLoaded2 = false;
		this.load.on(Phaser.Loader.Events.COMPLETE, (p) => {
			this.isGameLoaded1 = true;
		});

		this.innerBarWidth = this.innerBar.displayWidth;

		this.maskGraphics = this.make.graphics();
		this.maskGraphics.fillStyle(0xffffff);
		this.maskGraphics.fillRect(
			this.innerBar.x,
			this.innerBar.y - this.innerBar.displayHeight / 2,
			this.innerBar.displayWidth,
			this.innerBar.displayHeight
		);

		this.innerBar.setMask(this.maskGraphics.createGeometryMask());

		const loadingDuration = 3000;
		const intervalDuration = 30;
		const numIntervals = loadingDuration / intervalDuration;
		let currentInterval = 0;
		const progressIncrement = 1 / numIntervals;

		const updateProgressBar = () => {
			this.innerBar.setVisible(true);
			const currentProgress = currentInterval * progressIncrement;
			this.maskGraphics.clear();
			this.maskGraphics.fillStyle(0xffffff);
			this.maskGraphics.fillRect(
				this.innerBar.x,
				this.innerBar.y - this.innerBar.displayHeight / 2,
				this.innerBarWidth * currentProgress,
				this.innerBar.displayHeight
			);
			this.percentageTxt.setText((currentProgress * 100).toFixed(0) + '%');
			currentInterval++;
			if (currentProgress >= 1) {
				clearInterval(progressInterval);
				this.isGameLoaded2 = true;
			}
		};

		const progressInterval = setInterval(updateProgressBar, intervalDuration);
	}
	logoAnimation() {
        this.tweens.add({
            targets: this.logoPrefab.avatar_1,
            angle: 10,
            ease: "power2",
            duration: 800,
            yoyo: true,
            onComplete: () => {
                this.tweens.add({
                    targets: this.logoPrefab.avatar_2,
                    angle: -30,
                    ease: "power2",
                    duration: 800,
                    yoyo: true,
                });
            }
        })
    }
	update() {
		if (this.isGameLoaded1 && this.isGameLoaded2) {
			this.scene.stop("Preload");
			this.scene.start("Home");
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
