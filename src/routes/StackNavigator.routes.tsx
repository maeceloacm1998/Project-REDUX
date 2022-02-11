import { createStackNavigator } from "@react-navigation/stack";

import CreateTicketScreen from "../screens/CreateTicketScreen";
import TicketsScreen from "../screens/TicketsScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tickets"
        component={TicketsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Criar-Ticket"
        component={CreateTicketScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
