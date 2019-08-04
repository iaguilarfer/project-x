
export class MapTileConfig {
  width: number;
  height: number;
  evenRowOffset: number;
  evenColumnOffset: number;
  nextRowPosition: number;
  nextColumnPosition: number;

  constructor(
    width: number,
    height: number,
    evenRowOffset: number,
    evenColumnOffset: number,
    nextRowPosition: number,
    nextColumnPosition: number
  ) {
    this.width = width;
    this.height = height;
    this.evenRowOffset = evenRowOffset;
    this.evenColumnOffset = evenColumnOffset;
    this.nextRowPosition = nextRowPosition;
    this.nextColumnPosition = nextColumnPosition;
  }

  getTileX(initialX: number, row: number, column: number): number {
    return initialX + this.nextRowPosition * column + (row % 2 ? 0 : this.evenRowOffset);
  }

  getTileY(initialY: number, row: number, column: number): number {
    return (
      initialY + this.nextColumnPosition * row + (column % 2 ? 0 : this.evenColumnOffset)
    );
  }
}

export const wesnothMapTileConfig: MapTileConfig =
  new MapTileConfig(72, 72, 0, 36, 54, 72);
