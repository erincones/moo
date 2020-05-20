import React, { useRef } from "react";
import { ClassName, dummy } from "../shared";

interface Props extends ClassName {
  readonly id?: string;
  readonly exclusive?: boolean;
  readonly checked?: boolean;
  readonly onChange?: () => void;
}

export const Checkable = ({ id, exclusive, checked, className, onChange = dummy }: Props): JSX.Element => {
  const input = useRef<HTMLInputElement>(null);

  const { type, open, close } = exclusive ?
    { type: `radio`,    open: `(`, close: `)` } :
    { type: `checkbox`, open: `[`, close: `]` };

  const focus = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    input.current?.focus();
  };

  return (
    <span className={className}>
      <span className="cursor-pointer" onClick={onChange} onMouseDown={focus}>{open}</span>
      <input ref={input} id={id} type={type} checked={checked} className="focus:bg-white focus:text-black focus:font-bold focus:outline-none" onChange={onChange} />
      <span className="cursor-pointer" onClick={onChange} onMouseDown={focus}>{close}</span>
    </span>
  );
};
