declare module 'rpi-ws281x' {
  namespace Ws281x {
    export interface ConfigureParams {
      readonly leds: number;
      readonly brightness: number;
      readonly gpio: number;
      readonly dma: number;
      readonly stripType: "rgb" | "grb" | "bgr" | "bgr" | "brg";
    }

    export function configure(params?: ConfigureParams): void;    
    export function render(pixels: Uint32Array): void;
  }

  export default Ws281x;
}
