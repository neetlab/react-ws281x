import { Board } from "./board";

export class Dot {
  constructor(
    public index: number,
    public data: number,
    public container: Board,
  ) {}

  update(
    index: number,
    data: number,
  ) {
    this.index = index;
    this.data = data;
  }
}
