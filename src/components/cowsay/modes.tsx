import React from "react";

type Mode = `b` | `d` | `g` | `p` | `s` | `t` | `w` | `y` | undefined;

interface Face {
  readonly eyes: string;
  readonly tongue: string;
}

interface Appearance extends Face {
  readonly id: Mode | `u`;
  readonly name: string;
}

const appearances: readonly Appearance[] = [
  { id: `u`, name: `default`,  eyes: `oo`, tongue: ``  },
  { id: `b`, name: `borg`,     eyes: `==`, tongue: ``  },
  { id: `d`, name: `dead`,     eyes: `xx`, tongue: `U` },
  { id: `g`, name: `greedy`,   eyes: `$$`, tongue: ``  },
  { id: `p`, name: `paranoia`, eyes: `@@`, tongue: ``  },
  { id: `s`, name: `stoned`,   eyes: `**`, tongue: `U` },
  { id: `t`, name: `tired`,    eyes: `--`, tongue: ``  },
  { id: `w`, name: `wired`,    eyes: `OO`, tongue: ``  },
  { id: `y`, name: `youthful`, eyes: `..`, tongue: ``  },
] as const;

const defaultFace: Face = {
  eyes: appearances[0].eyes,
  tongue: appearances[0].tongue
};

export type { Mode, Face };

export const getMode = ({ eyes, tongue }: Face): Mode | `u` | `c` => {
  tongue = tongue.trim();

  for (const face of appearances) {
    if ((eyes === face.eyes) && (tongue === face.tongue)) {
      return face.id;
    }
  }

  return `c`;
};

export const getFace = (mode: Mode): Face => {
  for (const { id, name, eyes, tongue } of appearances) {
    if ((mode === id) || (mode === name)) {
      return { eyes, tongue };
    }
  }

  return defaultFace;
};

export const modes: readonly JSX.Element[] = [
  <option key="c" value="c" hidden disabled>Custom</option>,
  ...appearances.map(({ id, name }) =>
    <option key={id} value={id}>{name[0].toUpperCase()}{name.slice(1)}</option>
  )
];
