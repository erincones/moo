import React, { useState } from "react";
import { Controls } from "../components/controls";
import { CowOptions, defaultCow } from "../cowsay";

const Home: React.FC = (): JSX.Element => {
  const [ options, setOptions ] = useState(defaultCow);

  const handleOptions = (value: CowOptions): void => {
    setOptions(value);
  }

  return (
    <div className="grid grid-flow-col md:grid-cols-12">
      <Controls options={options} className="w-full md:col-start-8 md:col-span-5" onChange={handleOptions} />
      <div className="w-full md:col-start-1 md:col-span-7"></div>
    </div>
  );
};

export default Home;
