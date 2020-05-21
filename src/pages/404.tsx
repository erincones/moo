import React from "react";
import { Link } from "gatsby";
import { cowsay } from "../components/cowsay";
import { Prompt } from "../components/terminal/prompt";

const HTTP404 = (): JSX.Element => {
  const output = cowsay(`404 - not found`, {
    cow: `default`,
    eyes: `oo`,
    tongue: `  `,
    wrap: 30
  });

  return (
    <>
      <pre>{output}</pre>
      <Prompt dir="404" />
      <Link to="/" replace className="text-white">back to home</Link>
    </>
  );
};

export default HTTP404;
