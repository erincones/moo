import { Cow, Options } from "./shared";

export default {
  name: `mutilated`,
  cow: ({ action = `\\`, eyes = `oo`, tongue = `  ` }: Options): string => (
    `       ${action}   \\_______
 v__v   ${action}  \\   O   )
 (${eyes})      ||----w |
 (__)      ||     ||  \\/\\
  ${tongue}`
  )
} as Cow;
