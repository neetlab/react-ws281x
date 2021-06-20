import { useState } from "react";
import { Dot } from "./components/Dot";
import { useInterval } from "./hooks/useInterval";
import { Board } from "./renderer/board";
import { ReactWs281x } from "./renderer/ReactWs281x";

const noop = (): void => void {};

const App = () => {
  const [index, setIndex] = useState(0);

  useInterval(() => {
    setIndex((idx) => {
      if (idx >= 4 * 8) return 0;
      return idx + 1;
    });
  }, 100);

  return (
    <>
      <Dot index={index} rgb={[255, 0, 0]} />
      <Dot index={index+2} rgb={[0, 255, 0]} />
      <Dot index={index+2} rgb={[0, 0, 255]} />
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
