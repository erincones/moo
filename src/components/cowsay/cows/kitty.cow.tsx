import { Cow, Options } from "./shared";

export default {
  name: `kitty`,
  cow: ({ action = `\\` }: Options): string => (
    `     ${action}
      ${action}
       ("\`-'  '-/") .___..--' ' "\`-._
         \` *_ *  )    \`-.   (      ) .\`-.__. \`)
         (_Y_.) ' ._   )   \`._\` ;  \`\` -. .-'
      _.. \`--'_..-_/   /--' _ .' ,4
   ( i l ),-''  ( l i),'  ( ( ! .-'    `
  )
} as Cow;
