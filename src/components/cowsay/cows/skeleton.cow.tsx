import { Cow, Options } from "./shared";

export default {
  name: `skeleton`,
  cow: ({ action = `\\`, eyes = `oo` }: Options): string => (
    `          ${action}      (__)
           ${action}     /${eyes}|
            ${action}   (_"_)*+++++++++*
                   //I#\\\\\\\\\\\\\\\\I\\
                   I[I|I|||||I I \`
                   I\`I'///'' I I
                   I I       I I
                   ~ ~       ~ ~
                     Scowleton`
  )
} as Cow;
