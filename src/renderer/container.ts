import Ws281x from "rpi-ws281x";
import { Dot } from "./dot";

export class Container {
  private _pixels: Uint32Array;
  private _params: Ws281x.ConfigureParams;

  constructor(pixels: Uint32Array, params: Ws281x.ConfigureParams) {
    Ws281x.configure(params);
    this._pixels = pixels;
    this._params = params;
  }

  $render() {
    Ws281x.render(this._pixels);
  }

  $clear() {
    Ws281x.render(Uint32Array.from({ length: this._params.leds }, () => 0));
  }

  setPixels(data: Uint32Array) {
    this._pixels = data;
  }

  getPixels(): Uint32Array {
    return this._pixels;
  }

  add(dot: Dot) {
    this._pixels[dot.index] = dot.data;
  }

  remove(dot: Dot) {
    this._pixels[dot.index] = 0;
  }
}
