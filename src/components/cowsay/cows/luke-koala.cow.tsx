import { Cow, Options } from "./shared";

export default {
  name: `luke-koala`,
  cow: ({ action = `\\` }: Options): string => (
    `  ${action}
   ${action}          .
       ___   //
     {~._.~}//
      ( Y )K/
     ()~*~()
     (_)-(_)
     Luke
     Sywalker
     koala   `
  )
} as Cow;
