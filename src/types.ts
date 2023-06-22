import { ViewProps } from "react-native";

export type SwResponsiveStyle<T> = {
  [K in keyof T]: T[K] | [T[K]] | [T[K], T[K]] | [T[K], T[K], T[K]];
};

export type SwBaseStyle<T> = SwResponsiveStyle<T>;

export type SwStyle<T, V = object> = SwBaseStyle<T> & {
  variants?: Record<keyof V, SwBaseStyle<T>>;
};

export type SwProps<T, V = object> = {
  sw?: SwStyle<T, V> | null;
  variants?:
    | {
        [K in keyof V]: boolean;
      }
    | null;
};

export type SwBreakpoint = "S" | "M" | "L";
