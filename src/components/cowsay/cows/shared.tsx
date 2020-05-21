import { Face } from "../modes";

export const names = [
  `beavis.zen`,
  `blowfish`,
  `bong`,
  `bud-frogs`,
  `bunny`,
  `cheese`,
  `cower`,
  `daemon`,
  `default`,
  `dragon-and-cow`,
  `dragon`,
  `elephant`,
  `elephant-in-snake`,
  `eyes`,
  `flaming-sheep`,
  `ghostbusters`,
  `head-in`,
  `hellokitty`,
  `kiss`,
  `kitty`,
  `koala`,
  `kosh`,
  `luke-koala`,
  `meow`,
  `milk`,
  `moofasa`,
  `moose`,
  `mutilated`,
  `ren`,
  `satanic`,
  `sheep`,
  `skeleton`,
  `small`,
  `sodomized`,
  `stegosaurus`,
  `stimpy`,
  `supermilker`,
  `surgery`,
  `telebears`,
  `three-eyes`,
  `turkey`,
  `turtle`,
  `tux`,
  `udder`,
  `vader`,
  `vader-koala`,
  `www`
] as const;

export type Name = typeof names[number];
export type Action = `\\` | `o`;

export interface Options extends Face {
  action: Action;
}

export interface Cow {
  name: Name;
  cow: (options: Options) => string;
}
