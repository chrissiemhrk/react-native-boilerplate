import { useState } from "react";
import { Provider } from "react-redux";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import Navigation from "./src/components/navigation";
import { store } from "./src/redux/store";

const getFonts = () =>
  Font.loadAsync({
    Inter: require("./assets/fonts/Inter-Regular.ttf"),
    Inter_Bold: require("./assets/fonts/Inter-Bold.ttf"),
    Inter_Medium: require("./assets/fonts/Inter-Medium.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState<boolean>(false);

  if (fontsLoaded) {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }
}
