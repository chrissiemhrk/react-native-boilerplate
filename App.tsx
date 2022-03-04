import { useState } from "react";
import Navigation from "./src/components/navigation";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

const getFonts = () =>
  Font.loadAsync({
    Inter: require("./assets/fonts/Inter-Regular.ttf"),
    Inter_Bold: require("./assets/fonts/Inter-Bold.ttf"),
    Inter_Medium: require("./assets/fonts/Inter-Medium.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState<boolean>(false);

  if (fontsLoaded) {
    return <Navigation />;
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
