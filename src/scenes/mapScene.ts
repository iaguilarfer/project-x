import "phaser";
import { TextButton } from "../objects/ui/textButton";
import { getNormalButtonImages, getOceanTiles, loadImages } from "../assets/image";
import { Map } from "../objects/map/map";
import { wesnothMapTileConfig } from "../objects/map/mapTileConfig";

export class MapScene extends Phaser.Scene {
  mouseButton: Phaser.GameObjects.GameObject;
  map: Map;

  constructor() {
    super({ key: "MapScene" });
  }

  preload(): void {
    loadImages(this);
  }

  create(): void {

    this.addMap();

    this.addEndButton();
    this.addNewMapButton();
    this.addRedrawButton();


  }

  private addEndButton() {
    this.mouseButton = new TextButton(
      this,
      700,
      40,
      getNormalButtonImages(),
      "End",
      () => {
        this.scene.start("ScoreScene");
      }
    );
    this.add.existing(this.mouseButton);
  }

  private addNewMapButton() {
    this.mouseButton = new TextButton(
      this,
      700,
      95,
      getNormalButtonImages(),
      "Generate new map",
      () => {
        this.map.generateRandomMap();
      }
    );
    this.add.existing(this.mouseButton);
  }

  private addRedrawButton() {
    this.mouseButton = new TextButton(
      this,
      700,
      150,
      getNormalButtonImages(),
      "Redraw map",
      () => {
        this.map.drawRandomImages();
      }
    );
    this.add.existing(this.mouseButton);
  }

  private addMap() {
    this.map = new Map(this, wesnothMapTileConfig);
    this.map.setSize(8, 14);
    this.map.setStartingPosition(50, 50);
    this.map.initializeMap();
    this.map.generateRandomMap();
  }
}
