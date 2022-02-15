import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import HeaderTicketList from "../components/HeaderTicketsLIst/HeaderTicketList";
import TicketCard from "../components/TicketCard/TicketCard";

import colors from "../theme/colors";
import { ScreenProps, Ticket } from "../utils/types";
import { ApplicationReducer, getListTickets } from "../redux";
import { Alert } from "react-native";

export default function TicketsScreen({ navigation }: ScreenProps) {
  const [loading, setLoading] = useState<boolean>(false);

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
    setLoading(true);
    const newListTicket = listTickets.filter((item) => item.id !== ticketID);
    dispatch(getListTickets(newListTicket));
    setLoading(false);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    containerSpinner: {
      height: Dimensions.get("window").height - 90,
      justifyContent: "center",
      alignItems: "center",
    },
    containerTicketsList: {
      flex: 1,
      paddingHorizontal: 20,
    },
    textNotFound: {
      fontSize: 17,
      fontWeight: "bold",
      color: colors.primary,
    },
  });
  return (
    <View style={styles.container}>
      <HeaderTicketList onPressButton={createTicket} />
      {loading && (
        <View style={styles.containerSpinner}>
          <ActivityIndicator size={25} color={colors.primary} />
        </View>
      )}
      {!listTickets.length && (
        <View style={styles.containerSpinner}>
          <Text style={styles.textNotFound}>Sem Tickets cadastrados</Text>
        </View>
      )}
      {!loading && (
        <ScrollView style={styles.containerTicketsList}>
          {listTickets.map((item) => (
            <TicketCard
              item={item}
              onPressCard={pressTicketCard}
              onPressRemove={alertRemoveTicket}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
}
