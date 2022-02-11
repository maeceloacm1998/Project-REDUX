import { StyleSheet, Text, View, StatusBar } from "react-native";
import Navigation from "./src/routes";

export default function App() {
  return (
    <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <StatusBar
        translucent={true}
        barStyle="dark-content"
        backgroundColor="#FFF"
      />
      <Navigation />
    </View>
  );
}
