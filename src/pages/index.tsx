import React, { useState } from "react";
import { Controls } from "../components/controls";
import { Terminal } from "../components/terminal";

const Home = (): JSX.Element => {
  const [ cow, setCow ] = useState(``);

  const handleCow = (value: string): void => setCow(value);

  return (
    <div className="grid grid-flow-row md:grid-flow-col md:grid-cols-12">
      <Controls className="md:col-start-8 md:col-span-5" onChange={handleCow} />
      <Terminal output={cow} className="md:col-start-1 md:col-span-7" />
    </div>
  );
};

export default Home;
