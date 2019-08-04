import "phaser";
import { TextButton } from "./textButton";
import { getNormalButtonImages, Images, loadImages } from "./assets/images";

export class WelcomeScene extends Phaser.Scene {
  title: Phaser.GameObjects.Text;
  mouseButton: Phaser.GameObjects.GameObject;

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

    this.mouseButton = new TextButton(
      this,
      300,
      420,
      getNormalButtonImages(),
      "Start",
      () => {
        this.scene.start("ScoreScene");
      }
    );
    this.add.existing(this.mouseButton);
  }
}
