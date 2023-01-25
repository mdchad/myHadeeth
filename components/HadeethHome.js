import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Hadeeth from "./Hadeeth";
import SMuslim from "./SMuslim";

export default function HadeethHome() {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaProvider>
      <Stack.Navigator initialRouteName="HadeethScreen">
        <Stack.Screen
          name="HadeethScreen"
          component={Hadeeth}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SMuslim"
          component={SMuslim}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>

      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
