import React from "react";
import { Prompt } from "./prompt";
import { ClassName, mergeClasses } from "../shared";

interface Props extends ClassName {
  readonly children?: React.ReactNode;
}

export const Terminal = ({ className, children }: Props): JSX.Element => (
  <div className={mergeClasses(`overflow-x-auto max-w-full px-px` , className)}>
    {children}
    <Prompt dir="moo" />
  </div>
);
