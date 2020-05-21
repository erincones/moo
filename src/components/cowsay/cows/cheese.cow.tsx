import { Cow, Options } from "./shared";

export default {
  name: `cheese`,
  cow: ({ action = `\\` }: Options): string => (
    `   ${action}
    ${action}
      _____   _________
     /     \\_/         |
    |                 ||
    |                 ||
   |    ###\\  /###   | |
   |     0  \\/  0    | |
  /|                 | |
 / |        <        |\\ \\
| /|                 | | |
| |     \\_______/   |  | |
| |                 | / /
/||                 /|||
   ----------------|
        | |    | |
        ***    ***
       /___\\  /___\\`
  )
} as Cow;
