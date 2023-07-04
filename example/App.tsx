import { useState } from "react";
import { Button } from "react-native";
import { SwProvider, SwText, SwView, createStyleSweet } from "stylesweet";
import { MMButton } from "./src/components/MMButton";

export default function App() {
  const [textVisible, setTextVisible] = useState(false);

  return (
    <SwProvider>
      <SwView sw={styles.container} variants={["centered"]}>
        <SwView sw={styles.card} variants={["rounded", "bordered"]} />

        <Button
          title="Toggle visibility"
          onPress={() => setTextVisible((previous) => !previous)}
        />

        <MMButton variants={textVisible ? "primary" : "secondary"} />

        <SwText sw={styles.text} variants={{ visible: textVisible }}>
          Hello World
        </SwText>
      </SwView>
    </SwProvider>
  );
}

const styles = createStyleSweet({
  container: {
    backgroundColor: "#333",
    flex: 1,

    variants: {
      centered: {
        alignItems: "center",
        justifyContent: "center",
      },
    },
  },
  card: {
    backgroundColor: "blue",
    width: [100, 300, 500],
    height: [100, 300, 500],

    variants: {
      rounded: {
        borderRadius: 50,
      },
      bordered: {
        borderWidth: 4,
        borderColor: "lightgreen",
      },
    },
  },
  text: {
    fontSize: 24,
    color: "white",
    opacity: 0,

    variants: {
      visible: {
        opacity: 1,
      },
    },
  },
});
