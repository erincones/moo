import React from "react";

interface Props {
  user?: string;
  host?: string;
  dir?: string;
  root?: boolean;
  output?: string;
}

interface Details {
  id: string;
  dir: string;
  prompt: string;
  dirClass: string;
  promptClass: string;
}

const buildPrompt = ({ user = `user`, host = `localhost`, dir = `~`, root }: Props): Details => {
  return root ? {
    id: `[${host}`,
    dir: dir,
    prompt: `]#`,
    dirClass: `text-cyan-light font-bold`,
    promptClass: `text-red-light font-bold`
  } : {
    id: `[${user}@${host}`,
    dir: dir,
    prompt: `]$`,
    dirClass: `font-bold`,
    promptClass: `text-green-light font-bold`
  };
}

export const Prompt = (props: Props): JSX.Element => {
  const { id, dir, prompt, dirClass, promptClass } = buildPrompt(props);

  return (
    <span>
      <span className={promptClass}>{id}</span>
      <span className={dirClass}> {dir}</span>
      <span className={promptClass}>{prompt}</span>
      &nbsp;
      {props.output && `${props.output}\n`}
    </span>
  );
};
