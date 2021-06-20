import { Dot } from './components/Dot';
import { Container } from './renderer/container';
import { ReactWs281x } from './renderer/ReactWs281x';

const noop = (): void => void {};

const red = 255;
const green = 0;
const blue = 0;
const color = (red << 16) | (green << 8)| blue

const App = () => {
  return (
    <>
      <Dot index={1} data={color} />
      <Dot index={5} data={color} />
    </>
  );
}

(async () => {
  const ctn = new Container(new Uint32Array(), {
    leds: 4 * 8,
    brightness: 255,
    dma: 10,
    stripType: 'rgb',
    gpio: 18,
  });

  const container = ReactWs281x.createContainer(ctn, 0, false, null);
  ReactWs281x.updateContainer(App(), container, null, noop);
})();
