import { Cow, Options } from "./shared";

export default {
  name: `sheep`,
  cow: ({ action = `\\`, eyes = `oo` }: Options): string => (
    `  ${action}
   ${action}
       __
      U${eyes}U\\.'\@\@\@\@\@\@\`.
      \\__/(\@\@\@\@\@\@\@\@\@\@)
           (\@\@\@\@\@\@\@\@)
           \`YY~~~~YY'
            ||    ||`
  )
} as Cow;
