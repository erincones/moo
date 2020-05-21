import { Cow, Options } from "./shared";

export default {
  name: `tux`,
  cow: ({ action = `\\` }: Options): string => (
    `   ${action}
    ${action}
        .--.
       |o_o |
       |:_/ |
      //   \\ \\
     (|     | )
    /'\\_   _/\`\\
    \\___)=(___/`
  )
} as Cow;
