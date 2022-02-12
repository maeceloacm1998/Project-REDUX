import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { useForm } from "react-hook-form";
import InputCreateTicketScreen from "../components/InputCreateTicketScreen/InputCreateTicketScreen";

export default function CreateTicketScreen() {
  const { control, handleSubmit } = useForm();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
  });

  return (
    <View style={styles.container}>
      <InputCreateTicketScreen control={control} name="Teste" />
      <Text>Essa daqui ea tela de criar o ticket</Text>
    </View>
  );
}
