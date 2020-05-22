import React from "react";

interface Props {
  user?: string;
  host?: string;
  dir?: string;
  root?: boolean;
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
    dir: `\u00A0${dir}`,
    prompt: `]#`,
    dirClass: `text-cyan-light font-bold`,
    promptClass: `text-red-light font-bold`
  } : {
    id: `[${user}@${host}`,
    dir: `\u00A0${dir}`,
    prompt: `]$`,
    dirClass: `font-bold`,
    promptClass: `text-green-light font-bold`
  };
}

export const Prompt = (props: Props): JSX.Element => {
  const { id, dir, prompt, dirClass, promptClass } = buildPrompt(props);

  return (
    <span contentEditable={false}>
      <span className={promptClass}>{id}</span>
      <span className={dirClass}>{dir}</span>
      <span className={promptClass}>{prompt}</span>
      &nbsp;
    </span>
  );
};
