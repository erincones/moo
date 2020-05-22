import React, { useState, useEffect } from "react";
import { Checkable } from "./checkable";
import { Spinbox } from "./spinbox";
import { Cow, Action, Mode, cows, modes, getMode, getFace, cowsay, cowthink } from "../cowsay";
import { ClassName, mergeClasses } from "../shared";

interface Props extends ClassName {
  readonly onChange: (value: string) => void;
};

const clamp = (input: HTMLInputElement): string => {
  if (input.value.length < 3) {
    return input.value;
  }

  if ((input.selectionStart || 0) > 2) {
    return input.value.slice(input.value.length - 2, input.value.length);
  }
  else {
    return input.value.slice(0, 2);
  }
};

export const Controls = ({ className = ``, onChange: changeValue }: Props): JSX.Element => {
  const [ message, setMessage ] = useState(`moo!`);
  const [ cow, setCow ] = useState<Cow>(`default`);
  const [ action, setAction ] = useState<Action>(`say`);
  const [ mode, setMode ] = useState<Mode | `u` | `c`>();
  const [ eyes, setEyes ] = useState(`oo`);
  const [ tongue, setTongue ] = useState(``);
  const [ wrap, setWrap ] = useState(30);
  const [ noWrap, setNoWrap ] = useState(false);

  const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setMessage(e.target.value);
  }

  const handleCow = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setCow(e.target.value as Cow);
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
    const eyes = clamp(e.target);
    const mode = getMode({ eyes, tongue });
    setEyes(eyes);
    setMode(mode);
  };

  const handleTongue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const tongue = clamp(e.target);
    const mode = getMode({ eyes, tongue });
    setTongue(tongue);
    setMode(mode);
  };

  const handleNoWrap = (): void => {
    setNoWrap(!noWrap);
  };

  useEffect(() => {
    const options = {
      cow,
      eyes: (cow === `small`) && !eyes.length ? `..` : eyes.padEnd(2),
      tongue: tongue.padEnd(2),
      wrap: (noWrap ? false : wrap) as number | false
    };

    changeValue(action === `say` ? cowsay(message, options) : cowthink(message, options));
  });

  return (
    <div className={mergeClasses(`flex flex-col p-2`, className)}>
      <div className="grid row-gap-2 col-gap-4 grid-cols-12 leading-none mb-2">
        {/* First row */}
        <fieldset className="col-span-5">
          <legend>Cow</legend>
          <select value={cow} className="w-full arrows-white focus:arrows-black focus:bg-white focus:text-black focus:outline-none focus:no-focusring" onChange={handleCow}>
            {cows}
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
          <input type="text" value={eyes} autoCapitalize="off" spellCheck={false} className="outline-none w-full" onChange={handleEyes} />
        </fieldset>
        <fieldset className="col-span-4">
          <legend>Tongue</legend>
          <input type="text" value={tongue} autoCapitalize="off" spellCheck={false} className="outline-none w-full" onChange={handleTongue} />
        </fieldset>
        {/* Third row */}
        <fieldset className="col-span-12">
          <legend>Wrap column</legend>
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
      </div>
      {/* Fourth row */}
      <fieldset className="md:flex-grow">
        <legend>Message</legend>
        <textarea value={message} autoCapitalize="off" spellCheck={false} className="bg-black outline-none w-full h-full min-h-2 resize-y md:min-h-full" onChange={handleMessage} />
      </fieldset>
    </div>
  );
};
