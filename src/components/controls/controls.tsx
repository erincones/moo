import React, { useState } from "react";
import { Checkable } from "./checkable";
import { Spinbox } from "./spinbox";
import { Mode, getMode, getFace, modes } from "./modes";
import { ClassName } from "../types";
import { Options, Face } from "../cow";

interface Props extends ClassName {
  readonly options: Options;
  readonly onChange: (value: Options) => void;
};

export const Controls = ({ options, className = ``, onChange: setOptions }: Props): JSX.Element => {
  const [ wrap, setWrap ] = useState(String(options.wrap || ``));
  const noWrap = options?.wrap === false;

  const face: Face = { eyes: options.eyes, tongue: options.tongue };
  const mode = getMode(face);

  const handleCow = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setOptions({ ...options, cow: e.target.value });
  };

  const handleSay = (): void => {
    setOptions({ ...options, action: `say` });
  };

  const handleThink = (): void => {
    setOptions({ ...options, action: `think` });
  };

  const handleMode = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setOptions({ ...options, ...getFace(e.target.value as Mode) });
  };

  const handleEyes = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setOptions({ ...options, eyes: e.target.value.slice(0, 2) });
  };

  const handleTongue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setOptions({ ...options, tongue: e.target.value.slice(0, 2) });
  };

  const handleUpdateWrap = (value: number): void => {
    setWrap(String(value));
    setOptions({ ...options, wrap: value });
  }

  const handleWrap = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!/^\d*$|^0x[\dA-Fa-f]+$/.test(e.target.value)) {
      return;
    }

    const value = parseInt(e.target.value);
    if (value >= 0) {
      setWrap(String(value));
      setOptions({ ...options, wrap: value });
    }
    else if (!e.target.value.length) {
      setWrap(``);
      setOptions({ ...options, wrap: undefined });
    }
  };

  const toggleNoWrap = (): void => {
    setOptions({ ...options, wrap: noWrap ? parseInt(wrap) || undefined : false });
  };

  return (
    <div className={`grid row-gap-2 col-gap-4 grid-cols-12 leading-none p-2 ${className && (` ` + className)}`}>
      {/* First row */}
      <fieldset className="col-span-5">
        <legend>Cow</legend>
        <select value={options?.cow} className="w-full arrows-white focus:arrows-black focus:bg-white focus:text-black focus:outline-none focus:no-focusring" onChange={handleCow}>
          <option>Default</option>
          <option>Turtle</option>
          <option>Dragon</option>
        </select>
      </fieldset>
      <fieldset className="col-span-7">
        <legend>Action</legend>
        <div className="grid gap-1 grid-cols-7">
          <div className="col-span-3">
            <Checkable id="say" exclusive checked={options?.action === `say`} onChange={handleSay} />
            <label htmlFor="say" className="cursor-pointer">Say</label>
          </div>
          <div className="col-span-4">
            <Checkable id="think" exclusive checked={options?.action === `think`} onChange={handleThink} />
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
        <input type="text" value={face.eyes} className="w-full" onChange={handleEyes} />
      </fieldset>
      <fieldset className="col-span-4">
        <legend>Tongue</legend>
        <input type="text" value={face.tongue} className="w-full" onChange={handleTongue} />
      </fieldset>
      {/* Third row */}
      <fieldset className="col-span-12">
        <legend>Wrap length</legend>
        <div className="grid gap-4 grid-cols-12">
          <div className="col-span-5 pr-2">
            <Spinbox value={wrap} disabled={noWrap} onUpdate={handleUpdateWrap} onChange={handleWrap} />
          </div>
          <div className="col-span-7 pl-2">
            <Checkable id="nowrap" checked={noWrap} onChange={toggleNoWrap} />
            <label htmlFor="nowrap" className="cursor-pointer">No wrap</label>
          </div>
        </div>
      </fieldset>
    </div>
  );
};
