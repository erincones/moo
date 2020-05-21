import { Cow, Options } from "./shared";

export default {
  name: `cower`,
  cow: ({ action = `\\` }: Options): string => (
    `     ${action}
      ${action}
        ,__, |    |
        (oo)\\|    |___
        (__)\\|    |   )\\_
             |    |_w |  \\
             |    |  ||   *
             Cower....`
  )
} as Cow;
