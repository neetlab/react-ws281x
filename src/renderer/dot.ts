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
    this.container.remove(this);
    this.index = index;
    this.data = data;
    this.container.add(this);
  }
}
