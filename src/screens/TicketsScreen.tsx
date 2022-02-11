import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HeaderTicketList from "../components/HeaderTicketsLIst/HeaderTicketList";

export default function TicketsScreen() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
  });

  return (
    <View style={styles.container}>
      <HeaderTicketList
        onPressButton={() => {
          console.log("deu");
        }}
      />
      <Text style={{ color: "#000" }}> Essa dauqi e a tela do ticket</Text>
    </View>
  );
}
