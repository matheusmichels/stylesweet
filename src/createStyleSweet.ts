import { ImageStyle, TextStyle, ViewStyle } from "react-native";
import { SwBaseStyle, SwStyle } from "./types";

export function createStyleSweet<
  T extends ViewStyle | TextStyle | ImageStyle,
  V extends Record<string, SwBaseStyle<T>>,
  S extends Record<string, SwStyle<T, V>>
>(styles: S): S {
  return styles;
}
