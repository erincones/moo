import { Cow, Options } from "./shared";

export default {
  name: `head-in`,
  cow: ({ action = `\\`, eyes = `oo`, tongue = `  ` }: Options): string => (
    `    ${action}
     ${action}
    ^__^         /
    (${eyes})\\_______/  _________
    (__)\\       )=(  ____|_ \\_____
   ${tongue}   ||----w |  \\ \\     \\_____ |
        ||     ||   ||           ||`
  )
} as Cow;
