import "phaser";
import { MapTileType } from "./mapTileType";
import {
  getGrassTiles,
  getOceanTiles,
  getRandomAssetFromGroup,
  Image,
  ImageDepth
} from "../../assets/image";
import { Map } from "./map";

export class MapTile extends Phaser.GameObjects.GameObject {
  private row: number;
  private column: number;
  private x: number;
  private y: number;
  private tileType: MapTileType;
  private image: Phaser.GameObjects.Image;
  private overlays: Array<Phaser.GameObjects.Image>;
  private map: Map;

  constructor(
    scene: Phaser.Scene,
    map: Map,
    row: number,
    column: number,
    x: number,
    y: number,
    tileType
  ) {
    super(scene, "MapTile");

    this.map = map;

    this.row = row;
    this.column = column;
    this.x = x;
    this.y = y;
    this.tileType = tileType;

    this.image = this.scene.add.image(x, y, "default");
    this.image.depth = ImageDepth.MapTile;
    this.overlays = [];
  }

  getTileType(): MapTileType {
    return this.tileType;
  }

  updateTileType(tileType: MapTileType) {
    this.tileType = tileType;
  }

  updateImage() {
    this.image.setTexture(this.getTileImage());
    this.updateOverlays();
  }

  getNumberOfSimilarNeighbours(): number {
    let result = 0;

    result += this.isNeighbourSimilar(this.getNorthNeighbour()) ? 1 : 0;
    result += this.isNeighbourSimilar(this.getNorthWestNeighbour()) ? 1 : 0;
    result += this.isNeighbourSimilar(this.getNorthEastNeighbour()) ? 1 : 0;
    result += this.isNeighbourSimilar(this.getSouthNeighbour()) ? 1 : 0;
    result += this.isNeighbourSimilar(this.getSouthWestNeighbour()) ? 1 : 0;
    result += this.isNeighbourSimilar(this.getSouthEastNeighbour()) ? 1 : 0;

    return result;
  }

  private getTileImage() {
    switch (this.tileType) {
      case MapTileType.Ocean:
        return getRandomAssetFromGroup(getOceanTiles());
      case MapTileType.Grass:
        return getRandomAssetFromGroup(getGrassTiles());
      default:
        throw "No images for selected tile type";
    }
  }

  private updateOverlays() {
    this.overlays.forEach(overlay => overlay.destroy());
    const northNeighbour = this.getNorthNeighbour();
    this.addOverlayImage(northNeighbour, Image.GrassOverlayNorth);
    
    const northWestNeighbour = this.getNorthWestNeighbour();
    this.addOverlayImage(northWestNeighbour, Image.GrassOverlayNorthWest);
    
    const northEastNeighbour = this.getNorthEastNeighbour();
    this.addOverlayImage(northEastNeighbour, Image.GrassOverlayNorthEast);

    const southNeighbour = this.getSouthNeighbour();
    this.addOverlayImage(southNeighbour, Image.GrassOverlaySouth);

    const southWestNeighbour = this.getSouthWestNeighbour();
    this.addOverlayImage(southWestNeighbour, Image.GrassOverlaySouthWest);

    const southEastNeighbour = this.getSouthEastNeighbour();
    this.addOverlayImage(southEastNeighbour, Image.GrassOverlaySouthEast);
  }

  private getNorthNeighbour(): MapTile | undefined {
    if (this.row > 0) {
      return this.map.getTile(this.row - 1, this.column);
    } else {
      return undefined;
    }
  }

  private getNorthWestNeighbour(): MapTile | undefined {
    if (this.column > 0) {
      if (this.column % 2 === 0) {
        return this.map.getTile(this.row, this.column - 1);
      } else {
        if (this.row > 0) {
          return this.map.getTile(this.row - 1, this.column - 1);
        } else {
          return undefined;
        }
      }
    } else {
      return undefined;
    }
  }

  private getNorthEastNeighbour(): MapTile | undefined {
    if (this.column < this.map.numberOfColumns - 1) {
      if (this.column % 2 === 0) {
        return this.map.getTile(this.row, this.column + 1);
      } else {
        if (this.row > 0) {
          return this.map.getTile(this.row - 1, this.column + 1);
        } else {
          return undefined;
        }
      }
    } else {
      return undefined;
    }
  }

  private getSouthNeighbour(): MapTile | undefined {
    if (this.row < this.map.numberOfRows - 1) {
      return this.map.getTile(this.row + 1, this.column);
    } else {
      return undefined;
    }
  }

  private getSouthWestNeighbour(): MapTile | undefined {
    if (this.column > 0) {
      if (this.column % 2 === 0) {
        if (this.row < this.map.numberOfRows - 1) {
          return this.map.getTile(this.row + 1, this.column - 1);
        } else {
          return undefined;
        }
      } else {
        return this.map.getTile(this.row, this.column - 1);
      }
    } else {
      return undefined;
    }
  }

  private getSouthEastNeighbour(): MapTile | undefined {
    console.warn(this.row, this.column);
    if (this.column < this.map.numberOfColumns - 1) {
      if (this.column % 2 === 0) {
        if (this.row < this.map.numberOfRows - 1) {
          return this.map.getTile(this.row + 1, this.column + 1);
        } else {
          return undefined;
        }
      } else {
        return this.map.getTile(this.row, this.column + 1);
      }
    } else {
      return undefined;
    }
  }

  private addOverlayImage(neighbour: MapTile | undefined, image: Image) {
    if (
      neighbour &&
      this.tileType === MapTileType.Ocean &&
      neighbour.tileType === MapTileType.Grass
    ) {
      const overlay = this.scene.add.image(this.x, this.y, image);
      overlay.depth = ImageDepth.MapTileOverlay;
      this.overlays.push(overlay);
    }
  }

  private isNeighbourSimilar(neighbour: MapTile | undefined): boolean {
    if (neighbour) {
      return neighbour.getTileType() === this.getTileType();
    } else {
      return true;
    }

  }
}
