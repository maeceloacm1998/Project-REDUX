import React from "react";
import { View, Text, StyleSheet } from "react-native";

import HeaderTicketList from "../components/HeaderTicketsLIst/HeaderTicketList";
import TicketCard from "../components/TicketCard/TicketCard";

import colors from "../theme/colors";
import { ScreenNavigationProp } from "../utils/types";

type TicketScreenProps = {
  navigation: ScreenNavigationProp;
};

export default function TicketsScreen({ navigation }: TicketScreenProps) {
  const createTicket = () => navigation.navigate("CriarTicket");
  const pressTicketCard = () => console.log("press card");

  const removeTicket = () => {
    console.log("remove ticket");
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    containerTicketsList: {
      flex: 1,
      alignItems: "center",
      paddingHorizontal: 20,
    },
  });

  return (
    <View style={styles.container}>
      <HeaderTicketList onPressButton={createTicket} />
      <View style={styles.containerTicketsList}>
        <TicketCard
          onPressCard={pressTicketCard}
          onPressRemove={removeTicket}
        />
      </View>
    </View>
  );
}
