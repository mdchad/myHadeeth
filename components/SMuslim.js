import React, { useContext } from "react";
import { Image, SafeAreaView, Text, View } from "react-native";

import { GlobalContext } from "./GlobalContext";

export default function SMuslim() {
  const { authState } = useContext(GlobalContext);

  return (
    <SafeAreaView>
      <View className="h-full w-full bg-white">
        <View className="pt-11 px-10 justify-between flex-row pb-6 space-x-2 bg-[#EDEEC0] rounded-b-2xl">
          <View>
            <Text className="mb-1">Assalamualaikum,</Text>
            <Text className="font-bold uppercase">{authState?.full_name}</Text>
          </View>
          <View className="flex flex-row items-center">
            <Image
              source={require("../assets/search.png")}
              style={{ width: 16, height: 20, marginRight: 20 }}
            />
            <Image
              source={require("../assets/man.png")}
              style={{ width: 16, height: 20 }}
            />
          </View>
        </View>
        <View className="mx-10">
          <View className="mt-8 flex justify-center items-center">
            <Text className="text-[24px] font-bold">Sahih Muslim</Text>
          </View>
          <Text className="mt-4 font-bold text-[20px] mb-5">Kitab Faraid</Text>
          <Image
            source={require("../assets/SMuslim1.png")}
            style={{ width: 290, height: 208 }}
          />
          <View className="flex items-end">
            <Image
              source={require("../assets/volume.png")}
              style={{ width: 16, height: 16 }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
