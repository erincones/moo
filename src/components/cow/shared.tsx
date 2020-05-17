export interface Face {
  readonly eyes?: string;
  readonly tongue?: string;
}

export interface Options extends Face {
  readonly cow?: string;
  readonly action?: `say` | `think`;
  readonly wrap?: number | false;
};

export const defaults: Options = {
  cow: `default`,
  action: `say`,
  eyes: `oo`,
  tongue: ``,
  wrap: 40
} as const;
