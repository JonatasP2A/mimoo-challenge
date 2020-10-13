import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";

import Landing from "../pages/landing";
import Prancheta from "../pages/Prancheta";
import Products from "../pages/Products";
import Scan from "../pages/Scan";
import Confirmation from "../pages/Confirmation";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Prancheta" component={Prancheta} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="Scan" component={Scan} />
        <Stack.Screen name="Confirmation" component={Confirmation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
