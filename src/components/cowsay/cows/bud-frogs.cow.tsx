import { Cow, Options } from "./shared";

export default {
  name: `bud-frogs`,
  cow: ({ action = `\\` }: Options): string => (
    `     ${action}
      ${action}
          oO)-.                       .-(Oo
         /__  _\\                     /_  __\\
         \\  \\(  |     ()~()         |  )/  /
          \\__|\\ |    (-___-)        | /|__/
          '  '--'    ==\`-'==        '--'  '`
  )
} as Cow;
