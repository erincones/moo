import { Cow, Options } from "./shared";

export default {
  name: `flaming-sheep`,
  cow: ({ action = `\\`, eyes = `oo` }: Options): string => (
    `  ${action}            .    .     .
   ${action}      .  . .     \`  ,
    ${action}    .; .  : .' :  :  : .
     ${action}   i..\`: i\` i.i.,i  i .
      ${action}   \`,--.|i |i|ii|ii|i:
           U${eyes}U\\.'\@\@\@\@\@\@\`.||'
           \\__/(\@\@\@\@\@\@\@\@\@\@)'
                (\@\@\@\@\@\@\@\@)
                \`YY~~~~YY'
                 ||    ||     `
  )
} as Cow;
