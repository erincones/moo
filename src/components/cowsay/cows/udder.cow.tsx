import { Cow, Options } from "./shared";

export default {
  name: `udder`,
  cow: ({ action = `\\`, eyes = `oo`, tongue = `  ` }: Options): string => (
    `  ${action}
   ${action}    (__)
        ${eyes[0] || ``} ${eyes[1] || ``}\\
       ('') \\---------
        ${tongue}\\           \\
           |          |\\
           ||---(  )_|| *
           ||    UU  ||
           ==        ==    `
  )
} as Cow;
