import { View } from "react-native";

import { SwProvider, SwText, SwView, createStyleSweet } from "stylesweet";

export default function App() {
  return (
    <SwProvider>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SwView
          sw={styles.container}
          variants={{
            bordered: true,
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
      </View>
    </SwProvider>
  );
}

const styles = createStyleSweet({
  container: {
    backgroundColor: "blue",
    width: [100, 300, 500],
    height: [100, 300, 500],

    variants: {
      rounded: {
        borderRadius: 24,
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
