import React, { PropsWithChildren, useEffect } from "react";
import { Dimensions } from "react-native";
import { throttle } from "throttle-debounce";
import { SwBreakpoint } from "./types";
import { setBreakpoint, useHasBreakpoint } from "./store";

// export const defaultBreakpoints = [576, 768, 992, 1200]

export function SwProvider({ children }: PropsWithChildren<unknown>) {
  const hasBreakpoint = useHasBreakpoint();

  useEffect(() => {
    const handleDimensionsChange = throttle(
      125,
      (size: { height: number; width: number }) => {
        let newBreakpoint: SwBreakpoint = "S";

        if (size.width > 576) {
          newBreakpoint = "M";
        } else if (size.width > 768) {
          newBreakpoint = "L";
        }

        setBreakpoint(newBreakpoint);
      }
    );

    const size = Dimensions.get("window");
    handleDimensionsChange({
      height: size.height,
      width: size.width,
    });

    const listener = Dimensions.addEventListener("change", ({ window }) => {
      handleDimensionsChange({
        height: window.height,
        width: window.width,
      });
    });

    return () => listener.remove();
  }, []);

  if (!hasBreakpoint) {
    return null;
  }

  return <>{children}</>;
}
