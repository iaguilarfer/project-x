import Scene = Phaser.Scene;

export class TextButton extends Phaser.GameObjects.GameObject {
  images: Array<string>;
  text: Phaser.GameObjects.Text;
  button: Phaser.GameObjects.Image;

  public constructor(
    scene: Scene,
    x: number,
    y: number,
    images: Array<string>,
    text:string,
    onClick: () => void
  ) {
    super(scene, "textButton");
    this.images = images;
    this.button = scene.add.image(x, y, images[0]);
    this.text = scene.add.text(x, y - 10, text);
    this.text.setX(x - this.text.getBounds().width / 2);
    this.button.setInteractive();
    this.button.on("pointerover", this.enterButtonHoverState, this);
    this.button.on("pointerout", this.enterButtonRestState, this);
    this.button.on("pointerdown", this.enterButtonActiveState, this);
    this.button.on("pointerup", onClick);
  }

  private enterButtonHoverState() {
    this.button.setTexture(this.images[1]);
  }

  private enterButtonRestState() {
    this.button.setTexture(this.images[0]);
  }

  private enterButtonActiveState() {
    this.button.setTexture(this.images[3]);
  }

  private startGame() {
    this.scene.scene.start("GameScene");
  }
}
