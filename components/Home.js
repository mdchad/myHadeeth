import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useEffect, useLayoutEffect, useState} from "react";
import {supabase} from "../lib/supabase";
import { SparklesIcon as SparklesIconOutline } from "react-native-heroicons/outline";
import {useNavigation} from "@react-navigation/native";

export default function Home() {
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

  async function logout() {
    const { error } = await supabase.auth.signOut()
  }

  return (
      <View className="flex-1 justify-center px-4">
        <Text>Hello world</Text>
        {/*<SparklesIconOutline />*/}
        <Button title="Logout" onPress={() => logout()}/>
        <StatusBar style="auto" />
      </View>
  );
}
