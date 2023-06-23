import { useState } from "react";
import { TextInput } from "react-native";
import { SwProvider, SwText, SwView, createStyleSweet } from "stylesweet";

export default function App() {
  const [text, setText] = useState("");

  return (
    <SwProvider>
      <SwView sw={styles.container}>
        <SwView
          sw={styles.card}
          variants={{
            rounded: true,
          }}
        />

        <SwText
          sw={styles.title}
          variants={{
            bigger: true,
          }}
        >
          Hello World
        </SwText>

        <TextInput
          value={text}
          onChangeText={setText}
          style={{ width: "100%", height: 40 }}
        />
      </SwView>
    </SwProvider>
  );
}

const styles = createStyleSweet({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
        borderWidth: 2,
        borderColor: "red",
      },
    },
  },

  title: {
    fontSize: 20,

    variants: {
      bigger: {
        fontSize: 32,
      },
    },
  },
});
