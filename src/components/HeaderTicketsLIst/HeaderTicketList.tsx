import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import colors from "../../theme/colors";

interface HeaderTicketList {
  onPressButton: () => void;
}

const translate = (props: HeaderTicketList) => ({
  onPressButton: props.onPressButton ? props.onPressButton : () => {},
});

const HeaderTicketList = (props: HeaderTicketList) => {
  const { onPressButton } = translate(props);

  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: 60,
      paddingVertical: 10,
      paddingHorizontal: 20,
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: colors.primary,
      flexDirection: "row",
    },
    title: {
      fontSize: 20,
      color: colors.textLight,
    },
    pressNewTicket: {
      height: 30,
      width: 60,
      backgroundColor: colors.background,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
    },
    text: {
      fontSize: 15,
      fontWeight: "bold",
      color: colors.primary,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Redux Project</Text>
      <Pressable onPressIn={onPressButton} style={styles.pressNewTicket}>
        <Text style={styles.text}>Criar</Text>
      </Pressable>
    </View>
  );
};

export default HeaderTicketList;
