import { StackNavigationProp } from "@react-navigation/stack"
import { ControllerFieldState, ControllerRenderProps, FieldValues } from "react-hook-form";

export type ScreenNavigationProp = StackNavigationProp<StackParamsList>

export type StackParamsList = {
  Tickets: undefined,
  CriarTicket: undefined
}

export type ControllerRenderType = {
  field: ControllerRenderProps<FieldValues, string>;
  fieldState: ControllerFieldState;
};