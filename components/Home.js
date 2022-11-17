import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useEffect, useState} from "react";
import {supabase} from "../lib/supabase";

export default function Home() {
  async function logout() {
    const { error } = await supabase.auth.signOut()
  }

  return (
      <View className="">
        <Text>Hello world</Text>
        <Button title="Logout" onPress={() => logout()}/>
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
