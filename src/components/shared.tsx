export interface ClassName {
  readonly className?: string;
}

export const mergeClasses = (own: string, inherited?: string): string => {
  return inherited ? `${own} ${inherited}` : own;
};

export const dummy = (): void => { return; };
