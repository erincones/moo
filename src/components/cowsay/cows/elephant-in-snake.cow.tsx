import { Cow, Options } from "./shared";

export default {
  name: `elephant-in-snake`,
  cow: ({ action = `\\` }: Options): string => (
    `   ${action}
    ${action}              ....
           ........    .
          .            .
         .             .
.........              .......
..............................
Elephant inside ASCII snake`
  )
} as Cow;
