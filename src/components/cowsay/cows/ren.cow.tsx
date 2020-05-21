import { Cow, Options } from "./shared";

export default {
  name: `ren`,
  cow: ({ action = `\\` }: Options): string => (
    `   ${action}
    ${action}
    ____
   /# /_\\_
  |  |/o\\o\\
  |  \\\\_/_/
 / |_   |
|  ||\\_ ~|
|  ||| \\/
|  |||_
 \\//  |
  ||  |
  ||_  \\
  \\_|  o|
  /\\___/
 /  ||||__
    (___)_)`
  )
} as Cow;
