import React from "react";
import { ClassName } from "../types";

interface Props extends ClassName {
  value?: string;
  onUpdate?: (value: number) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const dummy = (): void => { return; };

export const Spinbox = ({ value, className = ``, disabled, onUpdate: setValue = dummy, onChange: handleChange }: Props): JSX.Element => {
  const stepUp = (): void => {
    setValue(value ? parseInt(value) + 1 : 1);
  }

  const stepDown = (): void => {
    setValue(value && (value !== `0`) ? parseInt(value) - 1 : 0);
  }

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

  return (
    <span className={`flex${className && (` ` + className)}`}>
      <input type="text" value={value} inputMode="numeric" className="min-w-0 flex-grow" disabled={disabled} onKeyDown={handleKeyDown} onChange={handleChange} />
      <div>
        <button className="block up-arrow-white focus:up-arrow-black focus:bg-white focus:outline-none leading-half w-4 h-2" disabled={disabled} onClick={stepUp} />
        <button className="block down-arrow-white focus:down-arrow-black focus:bg-white focus:outline-none leading-half w-4 h-2" disabled={disabled} onClick={stepDown} />
      </div>
    </span>
  );
};
