import { StatusBar } from "expo-status-bar";
import Login from "./components/Login";
import React, { useEffect, useState } from "react";
import { supabase } from "./lib/supabase";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import BottomNav from "./components/BottomNav";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ResetPassword from "./components/ResetPassword";
import Signup from "./components/Signup";
import { RootSiblingParent } from "react-native-root-siblings";
import GlobalProvider from "./components/GlobalContext";

export default function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

  }, []);

  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaProvider>
      <GlobalProvider>
        <RootSiblingParent>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
              {session && session.user ? (
                <>
                  <Stack.Screen
                    name="Bottom"
                    component={BottomNav}
                    options={{ headerShown: false }}
                    initialParams={{ userId: session.user.id }}
                  />
                </>
              ) : (
                <>
                  <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Reset"
                    component={ResetPassword}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Signup"
                    component={Signup}
                    options={{ headerShown: false }}
                  />
                </>
              )}
            </Stack.Navigator>
            <StatusBar style="auto" />
          </NavigationContainer>
        </RootSiblingParent>
      </GlobalProvider>
    </SafeAreaProvider>
  );
}
