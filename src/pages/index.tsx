import React, { useState } from "react";
import { Controls } from "../components/controls";
import { CowOptions, defaultCow } from "../cowsay";

const Home: React.FC = (): JSX.Element => {
  const [ options, setOptions ] = useState(defaultCow);

  const handleOptions = (value: CowOptions): void => {
    setOptions(value);
  }

  return (
    <div className="flex flex-col md:flex-row-reverse">
      <Controls options={options} className="md:w-3/12" onChange={handleOptions} />
      <div className="md:w-9/12"></div>
    </div>
  );
};

export default Home;
