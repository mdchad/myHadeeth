import React, {useContext} from "react";
import {Image, Pressable, SafeAreaView, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {GlobalContext} from "./GlobalContext";

export default function Hadeeth() {
  const {
    authState,
  } = useContext(GlobalContext);

  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View className="h-full w-full">
        <View className="pt-11 px-10 justify-between flex-row pb-6 space-x-2 bg-[#EDEEC0] rounded-b-2xl">
          <View>
            <Text className="mb-1">
              Assalamualaikum,
            </Text>
            <Text className="font-bold uppercase">{authState?.full_name}</Text>
          </View>
          <View className="flex flex-row items-center">
            <Image source={require("../assets/search.png")} style={{ width: 16, height: 20, marginRight: 20 }}/>
            <Image source={require("../assets/man.png")} style={{ width: 16, height: 20 }}/>
          </View>
        </View>

        <View className="my-auto flex items-center justify-center px-4 sm:mx-auto sm:w-full sm:max-w-md sm:rounded-lg sm:px-10 w-full">
          <Pressable onPress={() => navigation.navigate('SMuslim')}>
            <View className="flex items-center mb-2">
              <Image source={require("../assets/book.png")} style={{ width: 16, height: 20}} />
              <Text>Sahih Muslim</Text>
            </View>
          </Pressable>
          <Image source={require("../assets/hadeeth-logo.png")} style={{ width: 170, height: 150}} />
        </View>
      </View>
    </SafeAreaView>
  );
}
