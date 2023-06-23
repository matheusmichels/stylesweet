import { ImageStyle, TextStyle, ViewStyle } from "react-native";
import { SwBreakpoint, SwProps } from "./types";
import { useMemo, useRef } from "react";
import { useBreakpoint } from "./store";
import isEqual from "react-fast-compare";

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
>(config: T): V {
  const breakpoint = useBreakpoint();

  const previousConfig = useRef<T>();
  const previousBreakpoint = useRef<SwBreakpoint>();
  const previousStyles = useRef<V>();

  const styles = useMemo(() => {
    if (
      isEqual(previousConfig.current, config) &&
      previousBreakpoint.current === breakpoint &&
      previousStyles.current
    ) {
      return previousStyles.current;
    }

    previousConfig.current = config;
    previousBreakpoint.current = breakpoint;

    const { sw, variants } = config;

    const swStylesVariants = sw?.variants;
    const styles = { ...sw };
    delete styles.variants;

    let newStyles = flattenStyles(styles ?? {}, breakpoint);

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

    previousStyles.current = newStyles as V;
    return previousStyles.current;
  }, [config, breakpoint]);

  return styles;
}
