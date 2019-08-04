import "phaser";
import { TextButton } from "./textButton";
import { getNormalButtonImages } from "./assets/images";

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

    this.restartButton = new TextButton(
      this,
      400,
      350,
      getNormalButtonImages(),
      "Restart",
      () => {
        this.scene.start("WelcomeScene");
      }
    );
  }
}
