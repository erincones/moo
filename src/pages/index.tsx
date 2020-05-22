import React, { useState } from "react";
import { Controls } from "../components/controls";
import { Terminal } from "../components/terminal";
import { Position } from "../components/shared";

const mouse: Position = { x: NaN, y: NaN };

const handleMouseDown = (e: React.MouseEvent): void => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
};

const handleMouseUp = (e: React.MouseEvent<HTMLPreElement>): void => {
  if ((mouse.x !== e.clientX) || (mouse.y !== e.clientY)) {
    return;
  }

  if (window.getSelection) {
    e.preventDefault();
    e.stopPropagation();

    const selection = window.getSelection();
    const range = document.createRange();

    range.selectNodeContents(e.currentTarget);
    selection?.removeAllRanges();
    selection?.addRange(range);
  }
}

const Home = (): JSX.Element => {
  const [ cow, setCow ] = useState(``);

  const handleCow = (value: string): void => setCow(value);

  return (
    <div className="scrolling-touch grid grid-flow-row md:grid-flow-col md:grid-cols-12 md:h-screen">
      <Controls className="md:col-start-8 md:col-span-5 md:h-full" onChange={handleCow} />
      <Terminal className="cursor-text md:col-start-1 md:col-span-7">
        <pre onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>{cow}</pre>
      </Terminal>
    </div>
  );
};

export default Home;
