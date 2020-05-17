import React, { useState } from "react";
import { Controls } from "../components/controls";
import { Terminal } from "../components/terminal";
import { Options, defaults } from "../components/cow";

const Home = (): JSX.Element => {
  const [ options, setOptions ] = useState(defaults);

  const handleOptions = (value: Options): void => setOptions(value);

  return (
    <div className="grid grid-flow-row md:grid-flow-col md:grid-cols-12">
      <Controls options={options} className="md:col-start-8 md:col-span-5" onChange={handleOptions} />
      <Terminal options={options} className="md:col-start-1 md:col-span-7" />
    </div>
  );
};

export default Home;
