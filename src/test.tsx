import React from "react";

import { SwView } from "./SwView";
import { createStyleSweet } from "./createStyleSweet";

const styles = createStyleSweet({
  container: {
    backgroundColor: ["red", "blue", "red"],
    alignContent: "center",
    width: [100, 500],

    variants: {
      foo: {
        alignItems: "center",
      },
      bar: {
        alignContent: "flex-end",
      },
    },
  },
});

export function MyComponent() {
  return (
    <SwView
      sw={styles.container}
      variants={{
        bar: true,
        foo: true,
      }}
    />
  );
}
