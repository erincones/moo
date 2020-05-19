import React from "react";
import { ClassName } from "../types";
import { Cow, Options } from "../cow";
import { Prompt } from "./prompt";

interface Props extends ClassName {
  readonly options?: Options;
}

export const Terminal = ({ options, className }: Props): JSX.Element => (
  <div className={`px-px${className && (` ` + className)}`}>
    <Cow {...options} />
    <Prompt dir="moo" />
  </div>
);
