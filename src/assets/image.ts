import "phaser";

export enum Image {
  NormalButton = "assets/ui/buttonLong_brown.png",
  HoveredButton = "assets/ui/buttonLong_beige.png",
  PressedButton = "assets/ui/buttonLong_brown_pressed.png",
  HoveredPressedButton = "assets/ui/buttonLong_beige_pressed.png",

  OceanTile1 = "assets/terrain/ocean-A01.png",
  OceanTile2 = "assets/terrain/ocean-A02.png",
  OceanTile3 = "assets/terrain/ocean-A03.png",
  OceanTile4 = "assets/terrain/ocean-A04.png",

  Ocean1OverlayNorth = "assets/terrain/ocean-long-A01-n.png",
  Ocean1OverlayNorthEast = "assets/terrain/ocean-long-A01-ne.png",
  Ocean1OverlayNorthWest = "assets/terrain/ocean-long-A01-nw.png",
  Ocean1OverlaySouth = "assets/terrain/ocean-long-A01-s.png",
  Ocean1OverlaySouthEast = "assets/terrain/ocean-long-A01-se.png",
  Ocean1OverlaySouthWest = "assets/terrain/ocean-long-A01-sw.png",

  // Ocean1OverlayNorth = "assets/terrain/ocean-A01-n.png",
  // Ocean1OverlayNorthEast = "assets/terrain/ocean-A01-ne.png",
  // Ocean1OverlayNorthWest = "assets/terrain/ocean-A01-nw.png",
  // Ocean1OverlaySouth = "assets/terrain/ocean-A01-s.png",
  // Ocean1OverlaySouthEast = "assets/terrain/ocean-A01-se.png",
  // Ocean1OverlaySouthWest = "assets/terrain/ocean-A01-sw.png",

  // Ocean1OverlayBlendNorth = "assets/terrain/ocean-blend-A01-n.png",
  // Ocean1OverlayBlendNorthEast = "assets/terrain/ocean-blend-A01-ne.png",
  // Ocean1OverlayBlendNorthWest = "assets/terrain/ocean-blend-A01-nw.png",
  // Ocean1OverlayBlendSouth = "assets/terrain/ocean-blend-A01-s.png",
  // Ocean1OverlayBlendSouthEast = "assets/terrain/ocean-blend-A01-se.png",
  // Ocean1OverlayBlendSouthWest = "assets/terrain/ocean-blend-A01-sw.png",

  GrassOverlayNorth = "assets/terrain/green-n.png",
  GrassOverlayNorthEast = "assets/terrain/green-ne.png",
  GrassOverlayNorthWest = "assets/terrain/green-nw.png",
  GrassOverlaySouth = "assets/terrain/green-s.png",
  GrassOverlaySouthEast = "assets/terrain/green-se.png",
  GrassOverlaySouthWest = "assets/terrain/green-sw.png",


  GrassTile1 = "assets/terrain/green.png",
  GrassTile2 = "assets/terrain/green2.png",
  GrassTile3 = "assets/terrain/green3.png",
  GrassTile4 = "assets/terrain/green4.png",
}

export enum ImageDepth {
  Background = 0,
  MapTile = 1,
  MapTileOverlay = 2,
  UserInterfaceImage = 3,
  UserInterfaceText = 4
}

export function loadImages(scene: Phaser.Scene) {
  for (let imagesKey in Image) {
    scene.load.image(Image[imagesKey], Image[imagesKey]);
  }
}

export function getNormalButtonImages(): Array<Image> {
  return [
    Image.NormalButton,
    Image.HoveredButton,
    Image.PressedButton,
    Image.HoveredPressedButton
  ];
}

export function getOceanTiles(): Array<Image> {
  return [
    Image.OceanTile1,
    Image.OceanTile2,
    Image.OceanTile3,
    Image.OceanTile4
  ]
}

export function getGrassTiles(): Array<Image> {
  return [
    Image.GrassTile1,
    Image.GrassTile2,
    Image.GrassTile3,
    Image.GrassTile4
  ]
}

export function getRandomAssetFromGroup(group: Array<Image>): Image {
  return group[Phaser.Math.RND.between(0, group.length - 1)];
}
