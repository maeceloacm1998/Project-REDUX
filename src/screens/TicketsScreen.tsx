import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import HeaderTicketList from "../components/HeaderTicketsLIst/HeaderTicketList";
import TicketCard from "../components/TicketCard/TicketCard";

import colors from "../theme/colors";
import { ScreenProps, Ticket } from "../utils/types";
import { ApplicationReducer, getListTickets } from "../redux";
import { Alert } from "react-native";

export default function TicketsScreen({ navigation }: ScreenProps) {
  const dispatch = useDispatch();
  const createTicket = () => navigation.navigate("CriarTicket");
  const pressTicketCard = () => console.log("press card");
  const listTickets: Array<Ticket> = useSelector(
    (state: ApplicationReducer) => state.dataTicket.listTickets
  );

  const alertRemoveTicket = (ticketID: string) => {
    Alert.alert("Atenção!", "Deseja deletar esse ticket?", [
      {
        text: "DELETAR",
        onPress: () => {
          removeTicket(ticketID);
        },
      },
      {
        text: "CANCELAR",
        onPress: () => {
          console.log("Onpress cancel.");
        },
      },
    ]);
  };

  const removeTicket = (ticketID: string) => {
    const newListTicket = listTickets.filter((item) => item.id !== ticketID);
    dispatch(getListTickets(newListTicket));
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    containerTicketsList: {
      flex: 1,
      paddingHorizontal: 20,
    },
  });

  return (
    <View style={styles.container}>
      <HeaderTicketList onPressButton={createTicket} />
      <ScrollView style={styles.containerTicketsList}>
        {listTickets.map((item) => (
          <TicketCard
            item={item}
            onPressCard={pressTicketCard}
            onPressRemove={alertRemoveTicket}
          />
        ))}
      </ScrollView>
    </View>
  );
}
