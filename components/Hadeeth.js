import React, {useLayoutEffect, useState} from "react";
import { Alert, Image, Pressable, Text, TextInput, View } from "react-native";
import { supabase } from "../lib/supabase";
import {useNavigation} from "@react-navigation/native";

export default function Hadeeth() {
  const [email, setEmail] = useState("");
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  // rotate-45 relative
  // transform: [{ rotate: "-45deg" }],
  return (
    <View className="flex items-center justify-center px-4 mt-16 sm:mx-auto sm:w-full sm:max-w-md py-8 px-4 sm:rounded-lg sm:px-10 w-full">
      <Image source={require("../assets/hadeeth-logo.png")} style={{ width: 170, height: 150}} />
      <Text>Hadeeth</Text>
    </View>
  );
}
