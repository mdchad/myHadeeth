import React from "react";
import {Alert, Image, Pressable, SafeAreaView, Text, TextInput, View} from "react-native";
import {NavigationContainer, useNavigation} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {SafeAreaProvider} from "react-native-safe-area-context";
import BottomNav from "./BottomNav";
import SMuslim from "./SMuslim";
import Login from "./Login";
import ResetPassword from "./ResetPassword";
import {StatusBar} from "expo-status-bar";
import Hadeeth from "./Hadeeth";

export default function HadeethHome() {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaProvider>
        <Stack.Navigator initialRouteName="HadeethScreen">
            <Stack.Screen name="HadeethScreen" component={Hadeeth} options={{ headerShown: false }}/>
            <Stack.Screen name="SMuslim" component={SMuslim} options={{ headerShown: false }}/>
        </Stack.Navigator>

        <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
