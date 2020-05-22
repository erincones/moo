import React, { useState } from "react";
import { Controls } from "../components/controls";
import { Terminal } from "../components/terminal";

const Home = (): JSX.Element => {
  const [ cow, setCow ] = useState(``);

  const handleCow = (value: string): void => setCow(value);

  return (
    <div className="scrolling-touch grid grid-flow-row md:grid-flow-col md:grid-cols-12 md:h-screen">
      <Controls className="md:col-start-8 md:col-span-5 md:h-full" onChange={handleCow} />
      <Terminal className="md:col-start-1 md:col-span-7">
        <pre>{cow}</pre>
      </Terminal>
    </div>
  );
};

export default Home;
