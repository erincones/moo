import { Cow, Options } from "./shared";

export default {
  name: `bunny`,
  cow: ({ action = `\\` }: Options): string => (
    `  ${action}
   ${action}   \\
        \\ /\\
        ( )
      .( o ).`
  )
} as Cow;
