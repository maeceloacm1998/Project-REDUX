import { RouteProp } from "@react-navigation/native";
import { StackNavigationOptions } from "@react-navigation/stack";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HeaderTicketList from "../components/HeaderTicketsLIst/HeaderTicketList";
import colors from "../theme/colors";
import { ScreenNavigationProp } from "../utils/types";

type TicketScreenProps = {
  navigation: ScreenNavigationProp;
};

export default function TicketsScreen({ navigation }: TicketScreenProps) {
  const createTicket = () => navigation.navigate("CriarTicket");

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
  });

  return (
    <View style={styles.container}>
      <HeaderTicketList onPressButton={createTicket} />
    </View>
  );
}
