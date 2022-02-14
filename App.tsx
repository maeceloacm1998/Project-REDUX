import { View, StatusBar } from "react-native";
import { Provider } from "react-redux";

import { store } from "./src/redux";
import Navigation from "./src/routes";

export default function App() {
  return (
    <Provider store={store}>
      <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <StatusBar
          translucent={true}
          barStyle="dark-content"
          backgroundColor="#FFF"
        />
        <Navigation />
      </View>
    </Provider>
  );
}
