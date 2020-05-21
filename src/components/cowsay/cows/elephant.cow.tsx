import { Cow, Options } from "./shared";

export default {
  name: `elephant`,
  cow: ({ action = `\\` }: Options): string => (
    ` ${action}     /\\  ___  /\\
  ${action}   // \\/   \\/ \\\\
     ((    O O    ))
      \\\\ /     \\ //
       \\/  | |  \\/
        |  | |  |
        |  | |  |
        |   o   |
        | |   | |
        |m|   |m|  `
  )
} as Cow;
