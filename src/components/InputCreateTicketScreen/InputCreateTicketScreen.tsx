import React from "react";
import {
  TextInput,
  StyleSheet,
  StyleProp,
  ViewStyle,
  KeyboardTypeOptions,
} from "react-native";

import { Control, Controller } from "react-hook-form";
import { ControllerRenderType } from "../../utils/types";
import colors from "../../theme/colors";

interface InputCreateTicketScreen {
  control: Control;
  name: string;
  placeholder?: string;
  placeholderTextColor?: string;
  keyboardType?: KeyboardTypeOptions;
  multiline?: boolean;
  customStyle?: StyleProp<ViewStyle>;
}

const translate = (props: InputCreateTicketScreen) => ({
  control: props.control,
  name: props.name ? props.name : "default",
  placeholder: props.placeholder ? props.placeholder : "",
  placeholderTextColor: props.placeholderTextColor
    ? props.placeholderTextColor
    : colors.primary,
  keyboardType: props.keyboardType ? props.keyboardType : "default",
  multiline: props.multiline ? props.multiline : false,
  customStyle: props.customStyle ? props.customStyle : undefined,
});

const InputCreateTicketScreen = (props: InputCreateTicketScreen) => {
  const {
    control,
    name,
    customStyle,
    placeholder,
    placeholderTextColor,
    multiline,
    keyboardType,
  } = translate(props);

  const renderItem = ({ field: { onChange, value } }: ControllerRenderType) => {
    return (
      <TextInput
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
        multiline={multiline}
        placeholderTextColor={placeholderTextColor}
        autoCapitalize="none"
        style={[styles.input, customStyle]}
      />
    );
  };

  const styles = StyleSheet.create({
    input: {
      width: "100%",
      height: 45,
      paddingHorizontal: 10,
      borderBottomWidth: 3,
      borderBottomColor: colors.primary,
      fontSize: 17,
      backgroundColor: colors.backgroundPrimaryLight,
    },
  });

  return <Controller control={control} render={renderItem} name={name} />;
};

export default InputCreateTicketScreen;
