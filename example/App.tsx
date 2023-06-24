import { SwView, createStyleSweet } from "stylesweet";

export default function App() {
  return (
    <SwView
      sw={styles.card}
      variants={{
        rounded: true,
      }}
    />
  );
}

const styles = createStyleSweet({
  card: {
    backgroundColor: "blue",
    width: [100, 300, 500],
    height: [100, 300, 500],

    variants: {
      rounded: {
        borderRadius: 50,
      },
    },
  },
});
