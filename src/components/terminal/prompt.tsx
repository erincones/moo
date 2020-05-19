import React from "react";

interface Props {
  user?: string;
  host?: string;
  dir?: string;
  root?: boolean;
}

export const Prompt = ({ user = `user`, host = `localhost`, dir = `~`, root = false }: Props): JSX.Element => {
  return root ? (
    <span className="font-bold">
      <span className="text-red-light">[{host}</span>
      <span className="text-cyan-light">&nbsp;{dir}</span>
      <span className="text-red-light">]#</span>
      &nbsp;
    </span>
  ) : (
    <span className="font-bold">
      <span className="text-green-light">[{user}@{host}</span>
      &nbsp;{dir}
      <span className="text-green-light">]$</span>
      &nbsp;
    </span>
  );
};
