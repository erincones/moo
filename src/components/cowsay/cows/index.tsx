import React from "react";
import { Name, Action, Options, names } from "./shared";

export type { Name as Cow, Action as ActionSymbol, Options };

export { names };

export const cows: readonly JSX.Element[] = [
  <option key={0} value="default">Default</option>,
  ...names.filter(name => name !== `default`).map((name, i) => (
    <option key={i + 1} value={name}>{name[0].toUpperCase()}{name.slice(1).replace(/[\.-]/g, ` `)}</option>
  ))
];

export const buildCow = (name: Name, { action, eyes = ``, tongue = ``}: Options): string => {
  if ((name === `small`) && (eyes === ``)) {
    eyes = `..`;
  }

  return require(`./${name}.cow`).default.cow({ action, eyes, tongue });
};
