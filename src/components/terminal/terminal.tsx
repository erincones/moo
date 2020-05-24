import React, { useRef, useState, useEffect } from "react";
import { Prompt } from "./prompt";
import { Position, ClassName, mergeClasses } from "../shared";

interface Props extends ClassName {
  readonly children?: React.ReactNode;
}

interface History {
  command: string;
  root: boolean;
}

const history: History[] = [];
let historyIndex = 0;

const mouse: Position = { x: NaN, y: NaN };

const handlePaste = (e: React.SyntheticEvent): void => {
  e.preventDefault();
  e.stopPropagation();
};

const handleMouseDown = (e: React.MouseEvent): void => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
};

export const Terminal = ({ className, children }: Props): JSX.Element => {
  const input = useRef<HTMLSpanElement>(null);
  const [ root, setRoot ] = useState(false);
  const [ output, setOutput ] = useState<JSX.Element[]>([]);

  const handleMouseUp = (e: React.MouseEvent): void => {
    if ((mouse.x !== e.clientX) || (mouse.y !== e.clientY)) {
      return;
    }

    e.preventDefault();
    e.stopPropagation();
    input.current?.focus();
  };

  const handleKey = (e: React.KeyboardEvent<HTMLSpanElement>): void => {
    switch (e.keyCode) {
      case 38:
        if (historyIndex > history.length) {
          historyIndex = history.length;
        }

        const current = historyIndex;

        do {
          historyIndex--;
        }
        while ((historyIndex >= 0) && (history[historyIndex].root !== root));

        if (historyIndex < 0) {
          historyIndex = current;
        }
        break;

      case 40:
        if (historyIndex < -1) {
          historyIndex = -1;
        }

        do {
          historyIndex++;
        } while ((historyIndex < history.length) && (history[historyIndex].root !== root));
        break;

      default: return;
    }

    e.preventDefault();
    e.stopPropagation();

    const remember = (historyIndex >= 0) && (historyIndex < history.length);
    e.currentTarget.innerHTML = `${remember ? history[historyIndex].command : ``}<br>`;
  };

  const handleInput = (e: React.SyntheticEvent<HTMLSpanElement>): void => {
    if (!/(?:\n|<br>).+$/.test(e.currentTarget.innerHTML)) {
      return;
    }

    const text = e.currentTarget.innerHTML.replace(/(?:\n|<br>)/g, ``);
    if (text.trim()) {
      history.push({ command: text, root });
      historyIndex = history.length;
    }

    if (/^\s*(?:sudo\s+)*clear(?:\s+.*)?$/.test(text)) {
      setOutput([]);
      e.currentTarget.innerHTML = `<br>`;
      return;
    }

    const key = output.length;
    const nodes: JSX.Element[] = [
      <Prompt key={key} root={root} dir="moo" output={text} />
    ];

    let match: RegExpMatchArray | null = null;
    if ((match = text.match(/^\s*(?:sudo\s+)*echo(\s+.+)?$/))) {
      if (match[1]) {
        nodes.push(<span key={key + 1}>{match[1].trim()}{`\n`}</span>);
      }
    }
    else if (/^(?:sudo\s+)*exit(?:\s+.*)?$/.test(text)) {
      setRoot(false);

      if (root) {
        nodes.push(
          <span key={key + 1}>
            exit{`\n`}
          </span>
        );
      }
    }
    else if (/^(?:sudo\s+)*help(?:\s+.*)?$/.test(text)) {
      nodes.push(
        <span key={key + 1} className="break-normal">
          Moo! Developed by Erick Rincones.{`\n`}
          Special thanks to Aury Rincones.{`\n`}
          Licensed under the <a href="https://github.com/erincones/moo/blob/master/LICENSE" className="underline">MIT license</a>.{`\n`}
          {`\n`}
          These shell commands are defined internally. Type `help&apos; to see this list.{`\n`}
          {`\n`}
          <ul className="cols-2 gap-0 max-w-content">
            <li className="truncate">clear</li>
            <li className="truncate">echo [STRING]</li>
            <li className="truncate">help</li>
            <li className="truncate">history [-c]</li>
            <li className="truncate">ls</li>
            <li className="truncate">sudo [COMMAND]</li>
          </ul>
        </span>
      );
    }
    else if ((match = text.match(/^\s*(?:sudo\s+)*history(\s+-c)?(?:\s+.+)?$/))) {
      if (match[1]) {
        history.splice(0, history.length, ...history.filter(({ root: su }) => (
          su !== root
        )));
      }
      else {
        const list: string[] = [];
        history.filter(({ root: su }) => (
          su === root
        )).forEach(({ command }) => {
          list.push(command);
        });

        if (list) {
          nodes.push(<span key={key + 1}>{list.join(`\n`)}{`\n`}</span>);
        }
      }
    }
    else if (/^\s*(?:sudo\s+)*ls(?:\s+.*)?$/.test(text)) {
      nodes.push(
        <span key={key + 1}>
          <span className="font-bold text-blue-light">.</span>
          &nbsp;&nbsp;
          <span className="font-bold text-blue-light">..</span>
          {`\n`}
        </span>
      );
    }
    else if (/^\s*(sudo\s+)+su(?:\s+.*)?$/.test(text)) {
      setRoot(true);
    }
    else if ((match = text.match(/^\s*(?:sudo\s+)*((?!sudo\b)\S+)(?:\s+.*)?$/))) {
      nodes.push(
        <span key={key + 1}>
          moo!: {match[1]}: command not found{`\n`}
        </span>
      );
    }

    setOutput([ ...output, ...nodes ]);
    e.currentTarget.innerHTML = `<br>`;
  };

  useEffect(() => {
    document?.execCommand(`defaultParagraphSeparator`, undefined, `br`);

    if (input.current) {
      input.current.innerHTML = `help<br><br>`;
      input.current.dispatchEvent(new InputEvent(`input`, { bubbles: true }));
    }
  }, []);

  return (
    <div className={mergeClasses(`flex flex-col overflow-x-hidden max-w-full px-px`, className)}>
      {children}
      <pre className="block whitespace-pre-wrap break-all flex-grow" onPaste={handlePaste} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
        {output}
        <Prompt root={root} dir="moo" />
        <span ref={input} autoCapitalize="off" spellCheck={false} contentEditable suppressContentEditableWarning className="outline-none" onKeyDown={handleKey} onInput={handleInput}>
          <br />
        </span>
      </pre>
    </div>
  );
};
