import React, { useState, ChangeEvent } from "react";
import { CowOptions, Face, appearances, getFace, getMode } from "../../cowsay";

interface Props {
  options: Readonly<CowOptions>;
  className?: string;
  onChange: (value: CowOptions) => void;
};

const modes = [
  <option key="c" value="c" hidden disabled>Custom</option>,
  <option key="u" value="u">Default</option>,
  ...appearances.map(({ id, name }) =>
    <option key={id} value={id}>{name[0].toUpperCase() + name.slice(1)}</option>
  )
];

const getCowMode = ({ eyes, tongue }: Face): string => {
  if ((eyes === `oo`) && !tongue?.trim().length) {
    return `u`;
  }

  const mode = getMode({ eyes, tongue });
  return mode ? mode : `c`;
}

export const Controls: React.FC<Props> = ({ options, className, onChange: setOptions }: Props): JSX.Element => {
  const [ wrap, setWrap ] = useState(options?.wrap || 0);
  const noWrap = options?.wrap === false;

  const face: Readonly<Face> = { eyes: options.eyes, tongue: options.tongue };
  const mode = getCowMode(face);


  const handleCow = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setOptions({ ...options, cow: e.target.value });
  };

  const handleAction = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // eslint-disable-next-line
    // @ts-ignore
    setOptions({ ...options, action: e.target.value });
  };

  const handleMode = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const unknowns = [ `u`, `c` ];
    const mode = unknowns.includes(e.target.value) ? undefined : e.target.value;

    // eslint-disable-next-line
    // @ts-ignore
    setOptions({ ...options, mode, ...getFace(mode) });
  };

  const handleEyes = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setOptions({ ...options, eyes: e.target.value.slice(0, 2) });
  };

  const handleTongue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setOptions({ ...options, tongue: e.target.value.slice(0, 2) });
  };

  const handleWrap = (e: React.ChangeEvent<HTMLInputElement>): void => {
    switch (e.target.id) {
      case `wrap`:
        const value = parseInt(e.target.value);
        if ((value >= 0) || (e.target.value.trim().length === 0)) {
          setWrap(value);
          setOptions({ ...options, wrap: value });
        }
        return;

      case `nowrap`:
        setOptions({ ...options, wrap: options.wrap ? false : wrap });
    }
  }


  return (
    <div className={`grid row-gap-2 col-gap-4 grid-cols-12 px-4 py-2 ${className}`}>
      {/* First row */}
      <fieldset className="col-span-5">
        <legend>Cow</legend>
        <select id="cow" value={options?.cow} className="w-full" onChange={handleCow}>
          <option>Default</option>
          <option>Turtle</option>
          <option>Dragon</option>
        </select>
      </fieldset>
      <fieldset className="col-span-7">
        <legend>Action</legend>
        <div className="grid gap-1 grid-cols-7">
          <div className="col-span-3">
            <span>(</span>
            <input id="say" type="radio" value="say" checked={options?.action === `say`} onChange={handleAction} />
            <span>)</span>
            <label htmlFor="say">Say</label>
          </div>
          <div className="col-span-4">
            <span>(</span>
            <input id="think" type="radio" value="think" checked={options?.action === `think`} onChange={handleAction} />
            <span>)</span>
            <label htmlFor="think">Think</label>
          </div>
        </div>
      </fieldset>
      {/* Second row */}
      <fieldset className="col-span-5">
        <legend>Mode</legend>
        <select id="mode" value={mode} className="w-full" onChange={handleMode}>
          { modes }
        </select>
      </fieldset>
      <fieldset className="col-span-3">
        <legend>Eyes</legend>
        <input type="text" value={face.eyes} className="w-full" onChange={handleEyes} />
      </fieldset>
      <fieldset className="col-span-4">
        <legend>Tongue</legend>
        <input id="tongue" type="text" value={face.tongue} className="w-full" onChange={handleTongue} />
      </fieldset>
      {/* Third row */}
      <fieldset className="col-span-12">
        <legend>Wrap length</legend>
        <div className="grid gap-4 grid-cols-12">
          <div className="col-span-5 pr-2">
            <input id="wrap" type="text" value={wrap >= 0 ? wrap : ``} pattern="\d*" inputMode="numeric" className="w-full" onChange={handleWrap} disabled={noWrap} />
          </div>
          <div className="col-span-7 pl-2">
            <span>[</span>
            <input id="nowrap" type="checkbox" checked={noWrap} onChange={handleWrap} />
            <span>]</span>
            <label htmlFor="nowrap">No wrap</label>
          </div>
        </div>
      </fieldset>
    </div>
  );
};
