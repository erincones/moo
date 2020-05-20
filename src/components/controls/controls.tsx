import React, { useState, useEffect } from "react";
import { Checkable } from "./checkable";
import { Spinbox } from "./spinbox";
import { Mode, getMode, getFace, modes } from "./modes";
import { ClassName, mergeClasses, dummy } from "../shared";

interface Props extends ClassName {
  readonly onChange: (value: string) => void;
};

type action = `say` | `think`;



export const Controls = ({ className = ``, onChange: changeValue = dummy }: Props): JSX.Element => {
  const [ message, setMessage ] = useState(`moo!`);
  const [ cow, setCow ] = useState<string>();
  const [ action, setAction ] = useState<action>(`say`);
  const [ mode, setMode ] = useState<Mode | `u` | `c`>();
  const [ eyes, setEyes ] = useState(`oo`);
  const [ tongue, setTongue ] = useState(``);
  const [ wrap, setWrap ] = useState(40);
  const [ noWrap, setNoWrap ] = useState(false);

  useEffect(() => {
    changeValue(JSON.stringify({ message, cow, action, mode, eyes, tongue, wrap, noWrap }, null, 2));
  });

  const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setMessage(e.target.value);
  }

  const handleCow = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setCow(e.target.value);
  };

  const handleSay = (): void => {
    setAction(`say`);
  };

  const handleThink = (): void => {
    setAction(`think`);
  };

  const handleMode = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const { eyes, tongue } = getFace(e.target.value as Mode);
    setEyes(eyes);
    setTongue(tongue);
    setMode(e.target.value as Mode);
  };

  const handleEyes = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const mode = getMode({ eyes: e.target.value, tongue });
    setEyes(e.target.value);
    setMode(mode);
  };

  const handleTongue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const mode = getMode({ eyes, tongue: e.target.value });
    setTongue(e.target.value);
    setMode(mode);
  };

  const handleNoWrap = (): void => {
    setNoWrap(!noWrap);
  }

  return (
    <div className={mergeClasses(`grid row-gap-2 col-gap-4 grid-cols-12 leading-none p-2`, className)}>
      {/* First row */}
      <fieldset className="col-span-5">
        <legend>Cow</legend>
        <select value={cow} className="w-full arrows-white focus:arrows-black focus:bg-white focus:text-black focus:outline-none focus:no-focusring" onChange={handleCow}>
          <option>Default</option>
          <option>Turtle</option>
          <option>Dragon</option>
        </select>
      </fieldset>
      <fieldset className="col-span-7">
        <legend>Action</legend>
        <div className="grid gap-1 grid-cols-7">
          <div className="col-span-3">
            <Checkable id="say" exclusive checked={action === `say`} onChange={handleSay} />
            <label htmlFor="say" className="cursor-pointer">Say</label>
          </div>
          <div className="col-span-4">
            <Checkable id="think" exclusive checked={action === `think`} onChange={handleThink} />
            <label htmlFor="think" className="cursor-pointer">Think</label>
          </div>
        </div>
      </fieldset>
      {/* Second row */}
      <fieldset className="col-span-5">
        <legend>Mode</legend>
        <select value={mode} className="w-full arrows-white focus:arrows-black focus:bg-white focus:text-black focus:outline-none focus:no-focusring" onChange={handleMode}>
          {modes}
        </select>
      </fieldset>
      <fieldset className="col-span-3">
        <legend>Eyes</legend>
        <input type="text" value={eyes} className="w-full" onChange={handleEyes} />
      </fieldset>
      <fieldset className="col-span-4">
        <legend>Tongue</legend>
        <input type="text" value={tongue} className="w-full" onChange={handleTongue} />
      </fieldset>
      {/* Third row */}
      <fieldset className="col-span-12">
        <legend>Wrap length</legend>
        <div className="grid gap-4 grid-cols-12">
          <div className="col-span-5 pr-2">
            <Spinbox value={wrap} disabled={noWrap} onChange={setWrap} />
          </div>
          <div className="col-span-7 pl-2">
            <Checkable id="nowrap" checked={noWrap} onChange={handleNoWrap} />
            <label htmlFor="nowrap" className="cursor-pointer">No wrap</label>
          </div>
        </div>
      </fieldset>
      {/* Fourth row */}
      <fieldset className="col-span-12">
        <legend>Message</legend>
        <textarea value={message} spellCheck={false} className="bg-black w-full min-h-2 resize-y" onChange={handleMessage} />
      </fieldset>
    </div>
  );
};
