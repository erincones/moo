import React from "react";
import { ClassName } from "../types";
import { Options } from "./shared";

interface Props extends Options, ClassName {}

export const Cow = ({ cow, action, eyes, tongue, wrap, className }: Props): JSX.Element => (
  <pre className={`${className && (` ` + className)}`}>
    cow: {cow}<br />
    action: {action}<br />
    eyes: {eyes}<br />
    tongue: {tongue}<br />
    wrap: {wrap}
  </pre>
);
