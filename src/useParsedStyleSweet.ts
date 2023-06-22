import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { SwBreakpoint, SwProps } from "./types";
import { useMemo, useRef } from "react";
import { useBreakpoint } from "./store";

function flattenStyles(styles: any, breakpoint: SwBreakpoint) {
  const breakpointIndex = breakpoint === "S" ? 0 : breakpoint === "M" ? 1 : 2;

  return Object.entries(styles).reduce((current, [key, value]) => {
    return {
      ...current,
      [key]: Array.isArray(value)
        ? value[Math.min(breakpointIndex, value.length - 1)]
        : value,
    };
  }, {});
}

export function useParsedStyleSweet<
  V extends ViewStyle | TextStyle | ImageStyle,
  T extends SwProps<V>
>({ sw, variants }: T): V {
  const breakpoint = useBreakpoint();

  const styles = useMemo(() => {
    const swStylesVariants = sw?.variants;
    delete sw?.variants;

    let newStyles = flattenStyles(sw ?? {}, breakpoint);

    if (variants) {
      const newVariantStyles = Object.entries(variants).reduce(
        (current, [key, value]) => {
          return {
            ...current,
            ...(!!value ? swStylesVariants?.[key] : {}),
          };
        },
        {}
      );

      const flattenedVariantStyles = flattenStyles(
        newVariantStyles,
        breakpoint
      );

      newStyles = {
        ...newStyles,
        ...flattenedVariantStyles,
      };
    }

    return newStyles;
  }, [sw, variants]);

  return styles as V;
}
