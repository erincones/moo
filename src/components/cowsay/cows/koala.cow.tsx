import { Cow, Options } from "./shared";

export default {
  name: `koala`,
  cow: ({ action = `\\` }: Options): string => (
    `  ${action}
   ${action}
       ___
     {~._.~}
      ( Y )
     ()~*~()
     (_)-(_)   `
  )
} as Cow;
