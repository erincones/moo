import { Cow, Options } from "./shared";

export default {
  name: `default`,
  cow: ({ action = `\\`, eyes = `oo`, tongue = `  ` }: Options): string => (
    `        ${action}   ^__^
         ${action}  (${eyes})\\_______
            (__)\\       )\\/\\
             ${tongue} ||----w |
                ||     ||`
  )
} as Cow;
