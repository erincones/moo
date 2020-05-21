import React from "react";
import { Prompt } from "./prompt";
import { ClassName, mergeClasses } from "../shared";

interface Props extends ClassName {
  readonly output?: string;
}

export const Terminal = ({ output = ``, className }: Props): JSX.Element => (
  <div className={mergeClasses(`overflow-x-auto max-w-full px-px` , className)}>
    <pre>{output}</pre>
    <Prompt dir="moo" />
  </div>
);
