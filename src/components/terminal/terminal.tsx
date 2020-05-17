import React from "react";
import { ClassName } from "../types";
import { Cow, Options } from "../cow";

interface Props extends ClassName {
  readonly options?: Options;
}

export const Terminal = ({ options, className }: Props): JSX.Element => {
  return (
    <Cow {...options} className={className} />
  );
};
