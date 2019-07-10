export enum Images {
  NormalButton = "assets/buttonLong_brown.png",
  HoveredButton = "assets/buttonLong_beige.png",
  PressedButton = "assets/buttonLong_brown_pressed.png",
  HoveredPressedButton = "assets/buttonLong_beige_pressed.png"
}

export function loadImages(scene: Phaser.Scene) {
  for (let imagesKey in Images) {
    scene.load.image(Images[imagesKey], Images[imagesKey]);
  }
}

export function getNormalButtonImages(): Array<Images> {
  return [
    Images.NormalButton,
    Images.HoveredButton,
    Images.PressedButton,
    Images.HoveredPressedButton
  ];
}
