const modeIDs = [`b`, `d`, `g`, `p`, `s`, `t`, `w`, `y`] as const;
const modeNames = [
  `borg`,
  `dead`,
  `greedy`,
  `paranoia`,
  `stoned`,
  `tired`,
  `wired`,
  `youthful`
] as const;

type ModeID = typeof modeIDs[number];
type ModeName = typeof modeNames[number];

export type Face = {
  eyes?: string;
  tongue?: string;
};

type Appearance = {
  readonly id: ModeID;
  readonly name: ModeName;
  readonly face: Face;
};

type Action = `say` | `think`;
type Mode = ModeID | ModeName;


export type CowOptions = {
  cow?: string;
  action?: Action;
  mode?: Mode;
  eyes?: string;
  tongue?: string;
  wrap?: number | false;
};

export const defaultFace: Readonly<Face> = {
  eyes: `oo`,
  tongue: ``,
} as const;

export const defaultCow: Readonly<CowOptions> = {
  cow: `default`,
  action: `say`,
  ...defaultFace,
  wrap: 40
} as const;



export const appearances: Readonly<Appearance[]> = [
  { id: `b`, name: `borg`,     face: { eyes: `==`, tongue: ``  } },
  { id: `d`, name: `dead`,     face: { eyes: `xx`, tongue: `U` } },
  { id: `g`, name: `greedy`,   face: { eyes: `$$`, tongue: ``  } },
  { id: `p`, name: `paranoia`, face: { eyes: `@@`, tongue: ``  } },
  { id: `s`, name: `stoned`,   face: { eyes: `**`, tongue: `U` } },
  { id: `t`, name: `tired`,    face: { eyes: `--`, tongue: ``  } },
  { id: `w`, name: `wired`,    face: { eyes: `OO`, tongue: ``  } },
  { id: `y`, name: `youthful`, face: { eyes: `..`, tongue: ``  } },
] as const;


export const getFace = (mode?: Mode): Face => {
  if (mode === undefined) {
    return { ...defaultFace };
  }

  for (const { id, name, face } of appearances) {
    if ((mode === id) || (mode === name)) {
      return { ...face };
    }
  }

  console.error(`invalid mode: ${mode}`);
  return { ...defaultFace };
};

export const getMode = ({ eyes, tongue }: Face): ModeID | undefined => {
  tongue = tongue?.trim() || ``;

  for (const { id, face } of appearances) {
    if ((eyes === face.eyes) && (tongue === face.tongue)) {
      return id;
    }
  }

  return undefined;
}