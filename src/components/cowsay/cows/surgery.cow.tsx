import { Cow, Options } from "./shared";

export default {
  name: `surgery`,
  cow: ({ action = `\\`, eyes = `oo` }: Options): string => (
    `          ${action}           \\  /
           ${action}           \\/
               (__)    /\\
               (${eyes})   O  O
               _\\/_   //
         *    (    ) //
          \\  (\\\\    //
           \\(  \\\\    )
            (   \\\\   )   /\\
  ___[\\______/^^^^^^^\\__/) o-)__
 |\\__[=======______//________)__\\
 \\|_______________//____________|
     |||      || //||     |||
     |||      || @.||     |||
      ||      \\/  .\\/      ||
                 . .
                '.'.\`
            COW-OPERATION                           `
  )
} as Cow;
