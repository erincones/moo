import React from "react";

interface Props {
  readonly children?: React.ReactNode;
}

export const Output = ({ children }: Props): JSX.Element => (
  <span contentEditable={false} className="whitespace-pre">
    {children}
    <br />
  </span>
);
