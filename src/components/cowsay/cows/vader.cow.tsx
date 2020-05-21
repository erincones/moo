import { Cow, Options } from "./shared";

export default {
  name: `vader`,
  cow: ({ action = `\\` }: Options): string => (
    `        ${action}    ,-^-.
         ${action}   !oYo!
          ${action} /./=\\.\\______
               ##        )\\/\\
                ||-----w||
                ||      ||
               Cowth Vader`
  )
} as Cow;
