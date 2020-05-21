import { Cow, Options } from "./shared";

export default {
  name: `moofasa`,
  cow: ({ action = `\\`, eyes = `oo` }: Options): string => (
    `       ${action}    ____
        ${action}  /    \\
          | ^__^ |
          | (${eyes}) |______
          | (__) |      )\\/\\
           \\____/|----w |
                ||     ||
	         Moofasa`
  )
} as Cow;
