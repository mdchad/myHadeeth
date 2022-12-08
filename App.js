import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Auth from "./components/Auth";
import { Component, useEffect, useLayoutEffect, useState } from "react";
import { supabase } from "./lib/supabase";
import Account from "./components/Account";
import Home from "./components/Home";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import BottomNav from "./components/BottomNav";
import {SafeAreaProvider} from "react-native-safe-area-context";

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

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/*<View className="flex-1 justify-center px-4 bg-white">*/}
        {/*<Text className="text-red-800">Hello!</Text>*/}
        {/*{session && session.user ? <Home key={session.user.id} session={session} /> : <Auth />}*/}
        {/*{session && session.user ? null : <Auth />}*/}
        {session && session.user ? (
          <BottomNav key={session.user.id} session={session} />
        ) : (
          <Auth />
        )}
        <StatusBar style="auto" />
        {/*</View>*/}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
