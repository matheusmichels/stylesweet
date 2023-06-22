import React from "react";
import { TextProps, Text, TextStyle } from "react-native";

import { SwProps } from "./types";
import { useParsedStyleSweet } from "./useParsedStyleSweet";

export type SwTextProps<V = object> = TextProps & SwProps<TextStyle, V>;

export function SwText<V = object>({
  sw,
  variants,
  style,
  ...props
}: SwTextProps<V>) {
  const swStyle = useParsedStyleSweet({ sw, variants });
  return <Text style={[style, swStyle]} {...props} />;
}
