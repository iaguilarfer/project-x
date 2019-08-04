import "phaser";
import { MapTileConfig } from "./mapTileConfig";
import { MapTileType } from "./mapTileType";
import { MapTile } from "./mapTile";

export class Map extends Phaser.GameObjects.Group {
  tileConfig: MapTileConfig;
  x: number;
  y: number;
  numberOfRows: number;
  numberOfColumns: number;

  tiles: Array<Array<MapTile>>;

  public constructor(scene: Phaser.Scene, tileConfig: MapTileConfig) {
    super(scene);
    this.tileConfig = tileConfig;
  }

  public setStartingPosition(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public setSize(numberOfRows: number, numberOfColumns: number) {
    this.numberOfRows = numberOfRows;
    this.numberOfColumns = numberOfColumns;
  }

  public initializeMap() {
    this.tiles = [];
    for (let rowIndex = 0; rowIndex !== this.numberOfRows; rowIndex++) {
      const row = [];
      for (
        let columnIndex = 0;
        columnIndex !== this.numberOfColumns;
        columnIndex++
      ) {
        const newTile = this.getNewTile(
          rowIndex,
          columnIndex,
          this.getTileType()
        );
        row.push(newTile);
      }
      this.tiles.push(row);
    }
  }

  private getTileType(): MapTileType {
    const rnd = Phaser.Math.RND.frac();
    if (rnd < 0.9) {
      return MapTileType.Ocean;
    } else {
      return MapTileType.Grass;
    }
  }

  private getNewTile(row: number, column: number, type: MapTileType): MapTile {
    const x = this.tileConfig.getTileX(this.x, row, column);
    const y = this.tileConfig.getTileY(this.y, row, column);
    return new MapTile(this.scene, this, row, column, x, y, type);
  }

  public generateRandomMap() {
    // We want to update the tile type and its image in different loops
    // because the image might dependent on the adjacent tiles types.
    this.tiles.forEach(row =>
      row.forEach(tile => {
        tile.updateTileType(this.getTileType());
      })
    );
/*
    this.tiles.forEach(row => row.forEach(tile => {
      if (tile.getTileType() === MapTileType.Grass && tile.getNumberOfSimilarNeighbours() < 2) {
        tile.updateTileType(MapTileType.Ocean);
      }
    }));
*/
    this.drawRandomImages();
  }

  public drawRandomImages() {
    this.tiles.forEach(row =>
      row.forEach(tile => {
        tile.updateImage();
      })
    );
  }

  public getTile(row: number, column: number): MapTile {
    return this.tiles[row][column];
  }
}
