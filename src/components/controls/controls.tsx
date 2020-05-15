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
    <div className={className}>
      <div>
        <label htmlFor="cow">Cow</label>
        <div className="block">
          <select id="cow" value={options?.cow} onChange={handleCow}>
            <option>Default</option>
            <option>Turtle</option>
            <option>Dragon</option>
          </select>
          <div className="inline">
            <input id="say" type="radio" value="say" checked={options?.action === `say`} onChange={handleAction} />
            <label htmlFor="say">Say</label>
          </div>
          <div className="inline">
            <input id="think" type="radio" value="think" checked={options?.action === `think`} onChange={handleAction} />
            <label htmlFor="think">Think</label>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-5/12">
          <label htmlFor="mode">Mode</label>
          <select id="mode" value={mode} className="block w-full" onChange={handleMode}>
            { modes }
          </select>
        </div>
        <div className="w-3/12">
          <label htmlFor="eyes">Eyes</label>
          <input id="eyes" type="text" value={face.eyes} className="block w-full" onChange={handleEyes} />
        </div>
        <div className="w-4/12">
          <label htmlFor="tongue">Tongue</label>
          <input id="tongue" type="text" value={face.tongue} className="block w-full" onChange={handleTongue} />
        </div>
      </div>
      <div>
        <label htmlFor="wrap">Wrap length</label>
        <div className="flex">
          <input id="wrap" type="text" value={wrap >= 0 ? wrap : ``} pattern="\d*" inputMode="numeric" className="w-1/2" onChange={handleWrap} disabled={noWrap} />
          <div className="w-1/2">
            <input id="nowrap" type="checkbox" checked={noWrap} onChange={handleWrap} />
            <label htmlFor="nowrap">No wrap</label>
          </div>
        </div>
      </div>
    </div>
  );
};
