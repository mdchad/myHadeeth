import React, {useLayoutEffect, useState} from "react";
import {View, Text, SafeAreaView, Image, Pressable, TextInput} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {
  BookmarkIcon,
} from "react-native-heroicons/outline";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      <View className="w-full h-full">
        <Pressable
          className="m-6 w-64"
          onPress={() => navigation.navigate('Login')}
        >
          <Image source={require("../assets/back-arrow.png")} style={{ width: 20, height: 20}}/>
        </Pressable>
        <View className="flex items-center justify-center sm:mx-auto sm:w-full sm:max-w-md w-full my-10">
          <Text className="font-bold text-[36px] w-52 text-center mb-8">Reset Password</Text>
          <TextInput
            label="Email"
            leftIcon={{ type: "font-awesome", name: "envelope" }}
            onChangeText={(text) => setEmail(text)}
            value={email}
            className="mb-10 block w-64 appearance-none rounded-xl border border-gray-300 px-5 py-3 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Email"
            autoCapitalize={"none"}
          />
          <Pressable
            className="mb-10 flex flex-row items-center justify-center py-3 px-5 w-64 rounded-xl bg-[#1EAB53]"
          >
            <Text className="font-bold text-sm text-white text-center mr-2 uppercase">Reset Now</Text>
          </Pressable>
          <Text className="w-48 text-center">Check your inbox and use new password to login</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}