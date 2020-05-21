import { Cow, Options } from "./shared";

export default {
  name: `moose`,
  cow: ({ action = `\\`, eyes = `oo`, tongue = `  ` }: Options): string => (
    `  ${action}
   ${action}   \\_\\_    _/_/
    ${action}      \\__/
           (${eyes})\\_______
           (__)\\       )\\/\\
            ${tongue} ||----w |
               ||     ||`
  )
} as Cow;
