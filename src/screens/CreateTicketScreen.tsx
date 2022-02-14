import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

import { useForm } from "react-hook-form";
import InputCreateTicketScreen from "../components/InputCreateTicketScreen/InputCreateTicketScreen";
import colors from "../theme/colors";

export default function CreateTicketScreen() {
  const { control, handleSubmit } = useForm();

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
        />
        <InputCreateTicketScreen
          control={control}
          name="years"
          placeholder="Idade"
          keyboardType="number-pad"
          customStyle={styles.input}
        />
        <InputCreateTicketScreen
          control={control}
          name="description"
          placeholder="Descrição"
          multiline={true}
          customStyle={[styles.input, styles.inputMultiline]}
        />
      </View>

      <Pressable
        style={styles.pressButton}
        onPressIn={() => {
          console.log("dada");
        }}
      >
        <Text style={styles.textButton}>Criar Ticket</Text>
      </Pressable>
    </View>
  );
}
