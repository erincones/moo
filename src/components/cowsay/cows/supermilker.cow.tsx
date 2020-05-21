import { Cow, Options } from "./shared";

export default {
  name: `supermilker`,
  cow: ({ action = `\\`, eyes = `oo`, tongue = `  ` }: Options): string => (
    `  ${action}   ^__^
   ${action}  (${eyes})\\_______        ________
      (__)\\       )\\/\\    |Super |
       ${tongue} ||----W |       |Milker|
          ||    UDDDDDDDDD|______|`
  )
} as Cow;
