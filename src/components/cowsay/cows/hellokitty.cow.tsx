import { Cow, Options } from "./shared";

export default {
  name: `hellokitty`,
  cow: ({ action = `\\` }: Options): string => (
    `  ${action}
   ${action}
      /\\_)o<
     |      \\
     | O . O|
      \\_____/`
  )
} as Cow;
