import { Cow, Options } from "./shared";

export default {
  name: `satanic`,
  cow: ({ action = `\\` }: Options): string => (
    `     ${action}
      ${action}  (__)
         (\\/)
  /-------\\/
 / | 666 ||
*  ||----||
   ~~    ~~      `
  )
} as Cow;
