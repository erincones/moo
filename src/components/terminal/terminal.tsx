import React, { useRef, useState, useEffect } from "react";
import { Prompt } from "./prompt";
import { Output } from "./output";
import { ClassName, mergeClasses } from "../shared";

interface Props extends ClassName {
  readonly children?: React.ReactNode;
}

export const Terminal = ({ className, children }: Props): JSX.Element => {
  const input = useRef<HTMLSpanElement>(null);
  const [ root, setRoot ] = useState(false);
  const [ output, setOutput ] = useState<JSX.Element[]>([]);

  const handlePaste = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    e.stopPropagation();
  }

  const handleFocus = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    e.stopPropagation();
    input.current?.focus();
  };

  const handleInput = (): void => {
    if (!input.current || !/(?:\n|<br>).+$/.test(input.current.innerHTML)) {
      return;
    }

    const text = input.current.innerHTML.replace(/(?:\n|<br>)/g, ``);
    if (/^\s*(?:sudo\s+)*clear(?:\s+.*)?$/.test(text)) {
      setOutput([]);
      input.current.innerHTML = `<br>`;
      return;
    }

    const key = output.length;
    const nodes: JSX.Element[] = [
      <Prompt key={key} root={root} dir="moo" />,
      <Output key={key + 1}>{text}</Output>
    ];

    let match: RegExpMatchArray | null = null;

    if ((match = text.match(/^\s*(?:sudo\s+)*echo(\s+.+)?$/))) {
      if (match[1]) {
        nodes.push(<Output key={key + 2}>{match[1].trim()}</Output>);
      }
    }
    else if (/^\s*(?:sudo\s+)*ls(?:\s+.*)?$/.test(text)) {
      nodes.push(
        <Output key={key + 2}>
          <span className="font-bold text-blue-light">.</span>
          &nbsp;&nbsp;
          <span className="font-bold text-blue-light">..</span>
        </Output>
      );
    }
    else if (/^\s*(sudo\s+)+su(?:\s+.*)?$/.test(text)) {
      setRoot(true);
    }
    else if (/^(?:sudo\s+)*exit(?:\s+.*)?$/.test(text)) {
      setRoot(false);

      if (root) {
        nodes.push(
          <Output key={key + 2}>
            exit
          </Output>
        );
      }
    }
    else if (/^(?:sudo\s+)*help(?:\s+.*)?$/.test(text)) {
      const date = new Date();
      nodes.push(
        <Output key={key + 2}>
          Moo! Developed by Erick Rincones
          <br />
          under the MIT license, {date.getFullYear()}.
          <br />
          <br />
          Type `help&apos; to see this list.
          <br />
          <br />
          clear
          <br />
          echo [STRING]
          <br />
          ls
          <br />
          sudo [COMMAND]
        </Output>
      );
    }
    else if ((match = text.match(/^\s*(?:sudo\s+)*((?!sudo\b)\S+)(?:\s+.*)?$/))) {
      nodes.push(
        <Output key={key + 2}>
          moo!: {match[1]}: command not found
        </Output>
      );
    }

    setOutput([ ...output, ...nodes ]);
    input.current.innerHTML = `<br>`;
  };

  useEffect(() => {
    document?.execCommand(`defaultParagraphSeparator`, undefined, `br`);

    if (input.current) {
      input.current.innerHTML = `help<br><br>`;
      handleInput();
    }
  }, []);

  return (
    <div className={mergeClasses(`flex flex-col overflow-x-auto max-w-full px-px`, className)}>
      {children}
      <pre className="block flex-grow w-full" onPaste={handlePaste} onClick={handleFocus}>
        {output}
        <Prompt root={root} dir="moo" />
        <span ref={input} autoCapitalize="off" spellCheck={false} contentEditable suppressContentEditableWarning className="whitespace-pre outline-none" onFocus={handleFocus} onInput={handleInput}>
          <br />
        </span>
      </pre>
    </div>
  );
};
