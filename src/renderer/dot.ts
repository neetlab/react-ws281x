import { Container } from "./container";

export class Dot {
  constructor(
    public index: number,
    public data: number,
    public container: Container,
  ) {}

  update(
    index: number,
    data: number,
  ) {
    this.index = index;
    this.data = data;
  }
}
