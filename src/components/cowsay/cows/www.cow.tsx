import { Cow, Options } from "./shared";

export default {
  name: `www`,
  cow: ({ action = `\\`, eyes = `oo`, tongue = `  ` }: Options): string => (
    `        ${action}   ^__^
         ${action}  (${eyes})\\_______
            (__)\\       )\\/\\
             ${tongue} ||--WWW |
                ||     ||`
  )
} as Cow;
