import { Cow, Options } from "./shared";

export default {
  name: `three-eyes`,
  cow: ({ action = `\\`, eyes = `oo`, tongue = `  ` }: Options): string => (
    `        ${action}  ^___^
         ${action} (${eyes}${eyes[1] || ``})\\_______
           (___)\\       )\\/\\
            ${tongue}  ||----w |
                ||     ||`
  )
} as Cow;
