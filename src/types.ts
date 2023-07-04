export type SwBaseStyle<T> = {
  [K in keyof T]: T[K] | [T[K]] | [T[K], T[K]] | [T[K], T[K], T[K]];
};

export type SwStyle<T, V = object> = SwBaseStyle<T> & {
  variants?: Record<keyof V, SwBaseStyle<T>>;
};

export type SwVariants<V> =
  | {
      [K in keyof V]?: boolean | undefined | null;
    }
  | (keyof V & {})
  | Array<keyof V | undefined | null>
  | null;

export type SwProps<T, V = object> = {
  sw?: SwStyle<T, V> | null;
  variants?: SwVariants<V>;
};

export type SwBreakpoint = "S" | "M" | "L";
