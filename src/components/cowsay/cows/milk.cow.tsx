import { Cow, Options } from "./shared";

export default {
  name: `milk`,
  cow: ({ action = `\\` }: Options): string => (
    ` ${action}     ____________
  ${action}    |__________|
      /           /\\
     /           /  \\
    /___________/___/|
    |          |     |
    |  ==\\ /== |     |
    |   O   O  | \\ \\ |
    |     <    |  \\ \\|
   /|          |   \\ \\
  / |  \\_____/ |   / /
 / /|          |  / /|
/||\\|          | /||\\/
    -------------|
        | |    | |
       <__/    \\__>`
  )
} as Cow;
