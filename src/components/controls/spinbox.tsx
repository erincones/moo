import React from "react";
import { ClassName } from "../types";

interface Props extends ClassName {
  value?: string;
  onStepUp?: () => void;
  onStepDown?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>): void => {
  e.preventDefault();

  const number = parseInt(e.clipboardData.getData(`text`));
  if (!Number.isNaN(number)) {
    e.currentTarget.value = String(number);
  }
}

const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
  if (e.altKey || e.ctrlKey || e.shiftKey || e.metaKey || e.key.length > 1) {
    return;
  }

  if (!/\d/.test(e.key)) {
    e.preventDefault();

    switch (e.key) {
      case `+`: e.currentTarget.stepUp(); return;
      case `-`: e.currentTarget.stepDown();
    }
  }
}

export const Spinbox = ({ value, className, disabled, onStepUp: handleStepUp, onStepDown: handleStepDown, onChange: handleChange }: Props): JSX.Element =>
  <span className={`grid grid-flow-col ${className}`}>
    <input type="number" value={value} inputMode="numeric" className="w-full" disabled={disabled} onKeyDown={handleKeyDown} onPaste={handlePaste} onChange={handleChange} />
    <div>
      <button className="block w-char up-arrow-white focus:up-arrow-black focus:bg-white focus:outline-none leading-half h-2" disabled={disabled} onClick={handleStepUp} />
      <button className="block w-char down-arrow-white focus:down-arrow-black focus:bg-white focus:outline-none leading-half h-2" disabled={disabled} onClick={handleStepDown} />
    </div>
  </span>
