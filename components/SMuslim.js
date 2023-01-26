import React, { useContext } from "react";
import { Image, Pressable, SafeAreaView, Text, View } from "react-native";

import { GlobalContext } from "./GlobalContext";
import { useNavigation } from "@react-navigation/native";

export default function SMuslim() {
  const navigation = useNavigation();
  const { authState } = useContext(GlobalContext);

  return (
    <SafeAreaView>
      <View className="h-full w-full bg-white">
        <View className="pt-4 px-10 pb-6 space-x-2 bg-[#EDEEC0] rounded-b-2xl">
          <Pressable
            className="w-64 mb-2"
            onPress={() => navigation.navigate("HadeethScreen")}
          >
            <Image
              source={require("../assets/back-arrow.png")}
              style={{ width: 20, height: 20 }}
            />
          </Pressable>
          <View className="flex flex-row justify-between">
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
        <View className="flex self-start mx-10 mt-4">
          <View className="flex flex-row justify-between w-full">
            <View className="flex items-center">
              <View className="rounded-2xl border border-[#433E0E] flex items-center justify-center mt-4 w-16 h-16">
                <Image
                  source={require("../assets/one.png")}
                  style={{ width: 30, height: 50 }}
                />
              </View>
              <Text className="text-center w-11/12 mt-1 uppercase text-xs">Chapter 1</Text>
            </View>
            <View className="flex items-center">
              <View className="rounded-2xl border border-[#433E0E] flex items-center justify-center mt-4 w-16 h-16">
                <Image
                  source={require("../assets/two.png")}
                  style={{ width: 30, height: 50 }}
                />
              </View>
              <Text className="text-center w-11/12 mt-1 uppercase text-xs">Chapter 2</Text>
            </View>
            <View className="flex items-center">
              <View className="rounded-2xl border border-[#433E0E] flex items-center justify-center mt-4 w-16 h-16">
                <Image
                  source={require("../assets/three.png")}
                  style={{ width: 30, height: 50 }}
                />
              </View>
              <Text className="text-center w-11/12 mt-1 uppercase text-xs">Chapter 3</Text>
            </View>
            <View className="flex items-center">
              <View className="rounded-2xl border border-[#433E0E] flex items-center justify-center mt-4 w-16 h-16">
                <Image
                  source={require("../assets/four.png")}
                  style={{ width: 30, height: 50 }}
                />
              </View>
              <Text className="text-center w-11/12 mt-1 uppercase text-xs">Chapter 4</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
