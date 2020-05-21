import { Cow, Options } from "./shared";

export default {
  name: `stimpy`,
  cow: ({ action = `\\` }: Options): string => (
    `  ${action}     .    _  .
   ${action}    |\\_|/__/|
       / / \\/ \\  \\
      /__|O||O|__ \\
     |/_ \\_/\\_/ _\\ |
     | | (____) | ||
     \\/\\___/\\__/  //
     (_/         ||
      |          ||
      |          ||\\
       \\        //_/
        \\______//
       __ || __||
      (____(____)`
  )
} as Cow;
