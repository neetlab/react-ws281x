import React from "react";

export interface DotProps {
  readonly index: number;
  readonly data: number;
}

export const Dot = 'Dot' as any as React.FC<DotProps>;
