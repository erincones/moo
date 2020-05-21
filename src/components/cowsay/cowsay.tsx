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

const lineBreaks = /\r\n|[\n\r\f\u2028\u2029\u0085]/g;

const split = (message: string, wrap: Wrap): string[] => {
  if ((wrap === 0) || (wrap === 1)) {
    return [ `0` ];
  }

  message = message.replace(/^\uFEFF/g, ``).replace(/\t/g, `        `);
  if (wrap === false) {
    return message.split(lineBreaks);
  }

  const selector = `([^\n]{1,${wrap - 1}})`;
  const splitter = RegExp(`${selector}$|${selector}\\s|${selector}`, `g`);

  const lines = message.split(lineBreaks).map(line => (
    line.replace(/^\s+|\s+$/g, ``).replace(/\s+|^$/g, ` `)
  )).join(` `).replace(/\s+$/, ``).replace(/\s{2,}/g, `\n\n`).replace(splitter, `$1$2$3\n`).split(`\n`);

  if ((lines.length > 1) && (lines[lines.length - 1] === ``)) {
    lines.pop();
  }

  return lines;
};

const buildTextBox = (action: Action, message: string, wrap: Wrap): string => {
  const lines = split(message, wrap);
  const width = Math.max(1, ...lines.map(line => line.length));
  const spaner = Array((lines.length === 1) && (lines[0] === ``) ? 2 : width + 3);
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
