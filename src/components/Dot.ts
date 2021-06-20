import { createElement } from "react";

export interface DotProps {
  readonly index: number;
  readonly rgb: [number, number, number];
}

export const Dot = (props: DotProps): JSX.Element => {
  const { index, rgb } = props;

  const [red, green, blue] = rgb;
  const data = (red << 16) | (green << 8) | blue;

  return createElement('Dot', { index, data });
}
