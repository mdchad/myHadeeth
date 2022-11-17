import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Auth from "./components/Auth";
import {Component, useEffect, useState} from "react";
import {supabase} from "./lib/supabase";
import Account from "./components/Account";
import Home from "./components/Home";

export default function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <View className="flex-1 justify-center px-4 bg-white">
      {/*<Text className="text-red-800">Hello!</Text>*/}
      {session && session.user ? <Home key={session.user.id} session={session} /> : <Auth />}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
