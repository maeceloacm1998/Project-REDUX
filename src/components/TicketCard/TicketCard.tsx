import React from "react";
import {
  GestureResponderEvent,
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import colors from "../../theme/colors";
import { Ticket } from "../../utils/types";

interface TicketCardType {
  item: Ticket;
  onPressCard: (event: GestureResponderEvent) => void;
  onPressRemove: (event: GestureResponderEvent) => void;
}

const translate = (props: TicketCardType) => ({
  item: props.item ? props.item : undefined,
  onPressCard: props.onPressCard ? props.onPressCard : () => {},
  onPressRemove: props.onPressRemove ? props.onPressRemove : () => {},
});

const TicketCard = (props: TicketCardType) => {
  const { item, onPressCard, onPressRemove } = translate(props);

  const styles = StyleSheet.create({
    container: {
      width: "100%",
      padding: 15,
      marginVertical: 18,
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
      borderRadius: 5,
      backgroundColor: colors.backgroundPrimaryLight,
    },
    label: {
      fontSize: 18,
      fontWeight: "bold",
      lineHeight: 30,
      color: colors.primary,
    },
    text: {
      fontSize: 18,
      fontWeight: "600",
      lineHeight: 30,
      color: colors.text,
    },
    pressRemoveButton: {
      width: 80,
      height: 35,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
      backgroundColor: colors.backgroundRed,
    },
    textRemoveButton: {
      fontSize: 16,
      fontWeight: "600",
      color: colors.textLight,
    },
  });

  return (
    <Pressable style={styles.container} onPressIn={onPressCard}>
      <View>
        <Text style={styles.text}>
          <Text style={styles.label}>Data:</Text> {item?.dtCreated}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.label}>ID:</Text> {item?.id}
        </Text>
      </View>

      <Pressable style={styles.pressRemoveButton} onPressIn={onPressRemove}>
        <Text style={styles.textRemoveButton}>Deletar</Text>
      </Pressable>
    </Pressable>
  );
};

export default TicketCard;
