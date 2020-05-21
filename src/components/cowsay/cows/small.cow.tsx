import { Cow, Options } from "./shared";

export default {
  name: `small`,
  cow: ({ action = `\\`, eyes = `oo`, tongue = `  ` }: Options): string => (
    `       ${action}   ,__,
        ${action}  (${eyes.length ? eyes : `..`})____
           (__)    )\\
            ${tongue}||--|| *`
  )
} as Cow;
