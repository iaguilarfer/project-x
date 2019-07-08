import "phaser";
import { TextButton } from "./textButton";

export class WelcomeScene extends Phaser.Scene {
  title: Phaser.GameObjects.Text;
  mouseButton: Phaser.GameObjects.GameObject;

  constructor() {
    super({ key: "WelcomeScene" });
  }

  preload(): void {
    this.load.image("normal_button", "assets/buttonLong_brown.png");
    this.load.image("pressed_button", "assets/buttonLong_brown_pressed.png");
    this.load.image("hovered_button", "assets/buttonLong_beige.png");
    this.load.image(
      "hovered_pressed_button",
      "assets/buttonLong_beige_pressed.png"
    );
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

    let buttonImages = [
      "normal_button",
      "hovered_button",
      "pressed_button",
      "hovered_pressed_button"
    ];

    this.mouseButton = new TextButton(
      this,
      300,
      420,
      buttonImages,
      "Start",
      () => {
        this.scene.start("ScoreScene");
      }
    );
    this.add.existing(this.mouseButton);

  }
}
