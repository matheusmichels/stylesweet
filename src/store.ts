import { create } from "zustand";
import { SwBreakpoint } from "./types";

const breakpointStore = create<SwBreakpoint | undefined>(() => undefined);

export function setBreakpoint(breakpoint: SwBreakpoint) {
  breakpointStore.setState(breakpoint);
}

export function useHasBreakpoint() {
  return breakpointStore((state) => !!state);
}

export function useBreakpoint(): SwBreakpoint {
  const breakpoint = breakpointStore();
  if (!breakpoint) {
    throw new Error("No breakpoint found");
  }

  return breakpoint;
}
