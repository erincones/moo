import { Cow, Options } from "./shared";

export default {
  name: `beavis.zen`,
  cow: ({ action = `\\` }: Options): string => (
    `   ${action}         __------~~-,
    ${action}      ,'            ,
          /               \\
         /                :
        |                  '
        |                  |
        |                  |
         |   _--           |
         _| =-.     .-.   ||
         o|/o/       _.   |
         /  ~          \\ |
       (____\@)  ___~    |
          |_===~~~.\`    |
       _______.--~     |
       \\________       |
                \\      |
              __/-___-- -__
             /            _ \\`
  )
} as Cow;
