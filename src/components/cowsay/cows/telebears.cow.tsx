import { Cow, Options } from "./shared";

export default {
  name: `telebears`,
  cow: ({ action = `\\`, eyes = `oo`, tongue = `  ` }: Options): string => (
    `      ${action}                _
       ${action}              (_)   <-- TeleBEARS
        ${action}   ^__^       / \\
         ${action}  (${eyes})\\_____/_\\ \\
            (__)\\  you  ) /
             ${tongue} ||----w ((
                ||     ||>> `
  )
} as Cow;
