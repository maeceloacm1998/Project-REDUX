import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function CreateTicketScreen() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      justifyContent: "center",
      alignItems: "center",
    },
  });

  return (
    <View style={styles.container}>
      <Text>Essa daqui ea tela de criar o ticket</Text>
    </View>
  );
}
