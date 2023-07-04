import { SwView, createStyleSweet } from "stylesweet";
import { SwVariants } from "stylesweet/types";

type MMButtonProps = {
  variants?: SwVariants<typeof styles.button.variants>;
};

export function MMButton({ variants }: MMButtonProps) {
  return <SwView sw={styles.button} variants={variants} />;
}

const styles = createStyleSweet({
  button: {
    height: 48,
    width: "100%",

    variants: {
      primary: {
        backgroundColor: "red",
      },
      secondary: {
        backgroundColor: "blue",
      },
    },
  },
});
