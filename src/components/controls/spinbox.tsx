import React from "react";
import { ClassName, mergeClasses } from "../shared";

interface Props extends ClassName {
  value: number;
  onChange: (value: number) => void;
  disabled: boolean;
}

export const Spinbox = ({ value, className = ``, disabled, onChange: setValue }: Props): JSX.Element => {
  const stepUp = (): void => {
    setValue(value + 1);
  };

  const stepDown = (): void => {
    setValue(value ? value - 1 : 0);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.altKey || e.ctrlKey || e.shiftKey || e.metaKey || e.key.length > 1) {
      return;
    }

    if (!/^\d$/.test(e.key)) {
      e.preventDefault();

      switch (e.key) {
        case `+`: stepUp(); return;
        case `-`: stepDown();
      }
    }
  };

  const handleScroll = (e: React.WheelEvent<HTMLInputElement>): void => {
    e.deltaY > 0 ? stepDown() : stepUp();
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!/^\d*$|^0x[\dA-Fa-f]+$/.test(e.target.value)) {
      return;
    }

    const value = parseInt(e.target.value);
    if (value >= 0) {
      setValue(value);
    }
    else if (!e.target.value.length) {
      setValue(0);
    }
  };

  return (
    <span className={mergeClasses(`flex`, className)}>
      <input type="text" value={value} inputMode="numeric" className="min-w-0 flex-grow" disabled={disabled} onKeyDown={handleKeyDown} onWheel={handleScroll} onChange={handleChange} />
      <div>
        <button className="block up-arrow-white focus:up-arrow-black focus:bg-white focus:outline-none leading-half w-4 h-2" disabled={disabled} onClick={stepUp} />
        <button className="block down-arrow-white focus:down-arrow-black focus:bg-white focus:outline-none leading-half w-4 h-2" disabled={disabled} onClick={stepDown} />
      </div>
    </span>
  );
};
