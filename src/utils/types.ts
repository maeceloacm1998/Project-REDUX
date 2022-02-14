import { StackNavigationProp } from "@react-navigation/stack";
import {
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
} from "react-hook-form";

export type ScreenNavigationProp = StackNavigationProp<StackParamsList>;
export type ScreenProps = {
  navigation: ScreenNavigationProp;
};

export type StackParamsList = {
  Tickets: undefined;
  CriarTicket: undefined;
};

export type Ticket = {
  id: string;
  dtCreated: string;
  name: string;
  years: number;
  description: string;
};

export type Error = {
  status: number;
  message: string;
  data: any;
};

export type ControllerRenderType = {
  field: ControllerRenderProps<FieldValues, string>;
  fieldState: ControllerFieldState;
};
