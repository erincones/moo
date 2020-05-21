import { Cow, Options } from "./shared";

export default {
  name: `vader-koala`,
  cow: ({ action = `\\` }: Options): string => (
    `   ${action}
    ${action}        .
     .---.  //
    Y|o o|Y//
   /_(i=i)K/
   ~()~*~()~
    (_)-(_)
     Darth
     Vader
     koala        `
  )
} as Cow;
