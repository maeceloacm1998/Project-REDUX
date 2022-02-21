import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { ApplicationReducer, getListTickets } from "../redux";
import InputCreateTicketScreen from "../components/InputCreateTicketScreen/InputCreateTicketScreen";
import colors from "../theme/colors";
import { ScreenProps, Ticket } from "../utils/types";
import { getCurrentDate } from "../utils/CurrentDate";

export type CreateTicket = {
  name: string;
  years: number;
  description: string;
};

export default function CreateTicketScreen({ navigation }: ScreenProps) {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const getTickets = useSelector(
    (state: ApplicationReducer) => state.dataTicket.listTickets
  );

  const onSubmit = (data: any) => {
    const { description, name, years }: CreateTicket = data;

    switch (data) {
      case data.name:
        setError("name", {
          type: "manual",
          message: "Required",
        });
        return;
    }

    const newTicket: Ticket = {
      dtCreated: getCurrentDate().toString(),
      id: new Date().getTime().toString(),
      description,
      name,
      years,
    };

    dispatch(getListTickets([...getTickets, newTicket]));
    navigation.navigate("Tickets");
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      justifyContent: "space-between",
      backgroundColor: "#fff",
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      color: colors.primary,
    },
    pressButton: {
      width: "100%",
      height: 40,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
      backgroundColor: colors.primary,
    },
    textButton: {
      fontSize: 18,
      fontWeight: "600",
      color: colors.textLight,
    },
    input: {
      marginVertical: 15,
    },
    inputMultiline: {
      height: 150,
    },
  });

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Preencha os campos: </Text>
        <InputCreateTicketScreen
          control={control}
          name="name"
          placeholder="Nome"
          customStyle={styles.input}
          rules={{ required: true }}
          error={errors}
        />
        <InputCreateTicketScreen
          control={control}
          name="years"
          placeholder="Idade"
          keyboardType="number-pad"
          customStyle={styles.input}
          rules={{ required: true, maxLength: 3 }}
        />
        <InputCreateTicketScreen
          control={control}
          name="description"
          placeholder="Descrição"
          multiline={true}
          rules={{ required: true, maxLength: 200 }}
          customStyle={[styles.input, styles.inputMultiline]}
        />
      </View>

      <Pressable style={styles.pressButton} onPressIn={handleSubmit(onSubmit)}>
        <Text style={styles.textButton}>Criar Ticket</Text>
      </Pressable>
    </View>
  );
}
