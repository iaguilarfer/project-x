import "phaser";
import { TextButton } from "./textButton";

export class ScoreScene extends Phaser.Scene {
  score: number;
  result: Phaser.GameObjects.Text;
  restartButton: TextButton;

  constructor() {
    super({ key: "ScoreScene" });
  }

  init(): void {
    this.score = 0;
  }

  create(): void {
    var resultText: string = "Your score is " + this.score + "!";
    this.result = this.add.text(200, 250, resultText, {
      font: "48px Arial Bold",
      fill: "#FBFBAC"
    });

    let buttonImages = [
      "normal_button",
      "hovered_button",
      "pressed_button",
      "hovered_pressed_button"
    ];

    this.restartButton = new TextButton(
      this,
      400,
      350,
      buttonImages,
      "Restart",
      () => {
        this.scene.start("WelcomeScene");
      }
    );
  }
}
