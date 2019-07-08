import "phaser";
import GameConfig = Phaser.Types.Core.GameConfig;
import { WelcomeScene } from "./welcomeScene";
import { ScoreScene } from "./scoreScene";

const config: GameConfig = {
  title: "Project-X",
  width: 800,
  height: 600,
  parent: "game",
  scene: [
    WelcomeScene,
    ScoreScene
  ],
  physics: {
    default: "arcade",
    arcade: {  debug: false }
  },
  backgroundColor: "#000033"
};

export class Game extends Phaser.Game {
  constructor(config: GameConfig) {
    super(config);
 
   }
}

window.onload = () => {
  var game = new Game(config);
};
