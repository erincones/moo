import { Cow, Options } from "./shared";

export default {
  name: `bong`,
  cow: ({ action = `\\`, eyes = `oo` }: Options): string => (
    `         ${action}
          ${action}
            ^__^
    _______/(${eyes})
/\\/(       /(__)
   | W----|| |~|
   ||     || |~|  ~~
             |~|  ~
             |_| o
             |#|/
            _+#+_`
  )
} as Cow;
