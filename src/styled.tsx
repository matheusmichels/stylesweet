import React, { ComponentType } from "react";
import { StyleProp, TouchableOpacity, createElement } from "react-native";
import { SwProps } from "./types";
import { useParsedStyleSweet } from "./useParsedStyleSweet";

export function styled<V extends object, T extends { style?: StyleProp<any> }>(
  Component: ComponentType<T>
): ComponentType<T & SwProps<T["style"], V>> {
  function Styled({ style, sw, variants, ...props }: any) {
    const parsedStyleSweet = useParsedStyleSweet({ sw, variants });
    const StyledComponent = createElement(Component, {
      ...props,
      style: [style, parsedStyleSweet],
    });

    return StyledComponent;
  }

  return Styled as any;
}

const StyledTouchableOpacity = styled(TouchableOpacity);
<StyledTouchableOpacity sw={{ variants: { foo: {} } }} variants={{}} />;
