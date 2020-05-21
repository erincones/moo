import { Cow, Options } from "./shared";

export default {
  name: `kosh`,
  cow: ({ action = `\\` }: Options): string => (
    `    ${action}
     ${action}
      ${action}
  ___       _____     ___
 /   \\     /    /|   /   \\
|     |   /    / |  |     |
|     |  /____/  |  |     |
|     |  |    |  |  |     |
|     |  | {} | /   |     |
|     |  |____|/    |     |
|     |    |==|     |     |
|      \\___________/      |
|                         |
|                         |`
  )
} as Cow;
