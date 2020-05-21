import { Cow, buildCow } from "./cows";
import { Face } from "./modes";

type Action = `say` | `think`;
type Wrap = number | false;

interface Options extends Face {
  cow: Cow;
  wrap: Wrap;
}

const limits = {
  say: [ `< `, ` >`, `/ `, ` \\`, `\\ `, ` /`, `| `, ` |` ],
  think: [ `( `, ` )`, `( `, ` )`, `( `, ` )`, `( `, ` )` ]
};

const split = (message: string, wrap: Wrap): string[] => {
  return message.split(`\n`);
};

const buildTextBox = (action: Action, message: string, wrap: Wrap): string => {
  const lines = split(message, wrap);
  const width = Math.max(1, ...lines.map(line => line.length));
  const spaner = new Array(message.length ? width + 3 : 2);
  const limit = limits[action];
  const last = lines.length - 1;

  const textBox = [ ` ${spaner.join(`_`)}` ];

  if (lines.length === 1) {
    textBox.push(`${limit[0]}${lines[0].padEnd(width)}${limit[1]}`);
  }
  else {
    lines.forEach((line, i) => {
      switch (i) {
        case 0:    textBox.push(`${limit[2]}${line.padEnd(width)}${limit[3]}`); break;
        case last: textBox.push(`${limit[4]}${line.padEnd(width)}${limit[5]}`); break;
        default:   textBox.push(`${limit[6]}${line.padEnd(width)}${limit[7]}`); break;
      }
    });
  }

  textBox.push(` ${spaner.join(`-`)}`);

  return textBox.join(`\n`);
};

export type { Action, Options };

export const cowsay = (message: string, { cow, eyes, tongue, wrap }: Options): string => (
  `${buildTextBox(`say`, message, wrap)}\n${buildCow(cow, { action: `\\`, eyes, tongue })}`
);

export const cowthink = (message: string, { cow, eyes, tongue, wrap }: Options): string => (
  `${buildTextBox(`think`, message, wrap)}\n${buildCow(cow, { action: `o`, eyes, tongue })}`
);
