import React from "react";
import { Prompt } from "./prompt";
import { ClassName, mergeClasses } from "../shared";

interface Props extends ClassName {
  readonly output?: string;
}

export const Terminal = ({ output = ``, className }: Props): JSX.Element => (
  <div className={mergeClasses(`px-px` , className)}>
    <pre className="whitespace-pre-wrap">{output}</pre>
    <Prompt dir="moo" />
  </div>
);
