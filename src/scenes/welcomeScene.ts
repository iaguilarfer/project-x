import "phaser";
import { TextButton } from "../objects/ui/textButton";
import { getNormalButtonImages, loadImages } from "../assets/image";

export class WelcomeScene extends Phaser.Scene {
  title: Phaser.GameObjects.Text;
  startButton: Phaser.GameObjects.GameObject;
  endButton: Phaser.GameObjects.GameObject;

  constructor() {
    super({ key: "WelcomeScene" });
  }

  preload(): void {
    loadImages(this);
  }

  create(): void {
    var titleText: string = "Project X";
    this.title = this.add.text(0, 200, titleText, {
      font: "128px Arial Bold",
      fill: "#FBFBAC"
    });
    this.title.setX(
      this.sys.canvas.width * 0.5 - this.title.getBounds().centerX
    );

    this.startButton = new TextButton(
      this,
      300,
      420,
      getNormalButtonImages(),
      "Go to map",
      () => {
        this.scene.start("MapScene");
      }
    );
    this.add.existing(this.startButton);

    this.endButton = new TextButton(
      this,
      300,
      480,
      getNormalButtonImages(),
      "Go to score",
      () => {
        this.scene.start("ScoreScene");
      }
    );
    this.add.existing(this.endButton);
  }
}
