import { Cow, Options } from "./shared";

export default {
  name: `sodomized`,
  cow: ({ action = `\\`, eyes = `oo`, tongue = `  ` }: Options): string => (
    `      ${action}                _
       ${action}              (_)
        ${action}   ^__^       / \\
         ${action}  (${eyes})\\_____/_\\ \\
            (__)\\       ) /
             ${tongue} ||----w ((
                ||     ||>> `
  )
} as Cow;
