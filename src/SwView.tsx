import React from "react";
import { View, ViewProps, ViewStyle } from "react-native";

import { SwProps } from "./types";
import { useParsedStyleSweet } from "./useParsedStyleSweet";

export type SwViewProps<V = object> = ViewProps & SwProps<ViewStyle, V>;

export function SwView<V = object>({
  sw,
  variants,
  style,
  ...props
}: SwViewProps<V>) {
  const swStyle = useParsedStyleSweet({ sw, variants });
  return <View style={[style, swStyle]} {...props} />;
}
