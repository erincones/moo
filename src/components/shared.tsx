export interface ClassName {
  readonly className?: string;
}

export interface Position {
  x: number;
  y: number;
}

export const mergeClasses = (own: string, inherited?: string): string => {
  return inherited ? `${own} ${inherited}` : own;
};
