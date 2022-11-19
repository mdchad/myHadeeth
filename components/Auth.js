import React, { useState } from "react";
import { Alert, Button, Pressable, Text, TextInput, View } from "react-native";
import { supabase } from "../lib/supabase";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  return (
    <View className="flex-1 justify-center px-4 mt-8 sm:mx-auto sm:w-full sm:max-w-md py-8 px-4 sm:rounded-lg sm:px-10">
      <Text className="text-5xl text-center font-bold mb-6">MyHadeeth</Text>
      <View>
        <TextInput
          label="Email"
          leftIcon={{ type: "font-awesome", name: "envelope" }}
          onChangeText={(text) => setEmail(text)}
          value={email}
          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          placeholder="email@address.com"
          autoCapitalize={"none"}
        />
      </View>
      <View className="mt-1">
        <TextInput
          label="Password"
          leftIcon={{ type: "font-awesome", name: "lock" }}
          onChangeText={(text) => setPassword(text)}
          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize={"none"}
        />
      </View>
      <View className="mt-6 mb-4">
        <Pressable
          className="p-2 bg-amber-800 border-transparent rounded"
          disabled={loading}
          onPress={() => signInWithEmail()}
        >
          <Text className="text-center text-lg text-white">Sign in</Text>
        </Pressable>
      </View>
      {/*<View>*/}
      {/*  <Button*/}
      {/*    title="Sign up"*/}
      {/*    disabled={loading}*/}
      {/*    onPress={() => signUpWithEmail()}*/}
      {/*  />*/}
      {/*</View>*/}
    </View>
  );
}
