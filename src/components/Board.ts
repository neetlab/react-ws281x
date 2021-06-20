import { useEffect, useRef } from "react";
import Ws281x from "rpi-ws281x";
import { Container } from "../renderer/container";
import { Dot } from "../renderer/dot";
import { ReactWs281x } from "../renderer/ReactWs281x";

const noop = (): void => void {};

export interface BoardProps extends Ws281x.ConfigureParams {
  readonly children: Dot;
};

export const Board = (props: BoardProps) => {
  const { children, ...rest } = props;
  const containerRef = useRef<Container | null>(null)

  useEffect(() => {
    const container = new Container(new Uint32Array(), rest);
    containerRef.current = ReactWs281x.createContainer(container, 0, false, null);
    ReactWs281x.updateContainer(children, containerRef.current, null, noop);

    return (): void => {
      ReactWs281x.updateContainer(null, containerRef.current, null, noop);
      container.$clear();
    };
  }, []);

  useEffect(() => {
    ReactWs281x.updateContainer(children, containerRef.current, null, noop);
  });

  return null;
}
