import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import HeaderTicketList from "../components/HeaderTicketsLIst/HeaderTicketList";
import TicketCard from "../components/TicketCard/TicketCard";

import colors from "../theme/colors";
import { ScreenProps, Ticket } from "../utils/types";
import { ApplicationReducer } from "../redux";

export default function TicketsScreen({ navigation }: ScreenProps) {
  const createTicket = () => navigation.navigate("CriarTicket");
  const pressTicketCard = () => console.log("press card");
  const listTickets = useSelector(
    (state: ApplicationReducer) => state.dataTicket.listTickets
  );

  useEffect(() => {
    console.log(listTickets);
  }, []);

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
        {listTickets.map((item: Ticket) => (
          <TicketCard
            item={item}
            onPressCard={pressTicketCard}
            onPressRemove={removeTicket}
          />
        ))}
      </View>
    </View>
  );
}
