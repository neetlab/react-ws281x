import { Dot } from "./components/Dot";
import { Board } from "./renderer/board";
import { ReactWs281x } from "./renderer/ReactWs281x";

const noop = (): void => void {};

const red = 255;
const green = 0;
const blue = 0;
const data = (red << 16) | (green << 8) | blue;

const App = () => {
  return (
    <>
      <Dot index={1} data={data} />
      <Dot index={5} data={data} />
    </>
  );
};

(async () => {
  const board = new Board({
    leds: 4 * 8,
    brightness: 50,
    dma: 10,
    stripType: "grb",
    gpio: 18,
  });

  const container = ReactWs281x.createContainer(board, 0, false, null);
  ReactWs281x.updateContainer(<App />, container, null, noop);

  await new Promise((resolve) => {
    setTimeout(resolve, 1000 * 60);
  });

  board.$clear();
})();
