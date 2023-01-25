import React, { useContext } from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import { BookmarkIcon } from "react-native-heroicons/outline";

import { GlobalContext } from "./GlobalContext";

export default function Home() {
  const { authState } = useContext(GlobalContext);

  return (
    <SafeAreaView>
      <View className="h-full w-full">
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
        <View className="flex items-center justify-center w-full">
          <Text className="my-4 text-center font-bold text-[36px] w-44">
            Hadeeth of the Day
          </Text>
          <View className="py-5 px-8 mx-10 bg-[#D9D9D9] rounded-md">
            <Text>
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
              mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus..
            </Text>
          </View>
          <View className="flex flex-row self-end items-center mx-10 mt-2">
            <Text className="text-xs mr-2">Bookmark this Hadeeth</Text>
            <BookmarkIcon height={20} width={20} color={"#000"} />
          </View>
          <View className="flex self-start mx-10 mt-4">
            <Text className="ml-2 text-lg">EXPLORE RELATED HADEETH</Text>
            <View className="flex flex-row justify-between w-full">
              <View className="flex items-center">
                <View className="mt-4 w-16 h-16 bg-[#D9D9D9] rounded-md"></View>
                <Text className="mt-1 uppercase text-xs">Sadqah</Text>
              </View>
              <View className="flex items-center">
                <View className="mt-4 w-16 h-16 bg-[#D9D9D9] rounded-md"></View>
                <Text className="mt-1 uppercase text-xs">Prayer</Text>
              </View>
              <View className="flex items-center">
                <View className="mt-4 w-16 h-16 bg-[#D9D9D9] rounded-md"></View>
                <Text className="mt-1 uppercase text-xs">Family</Text>
              </View>
              <View className="flex items-center">
                <View className="mt-4 w-16 h-16 bg-[#D9D9D9] rounded-md"></View>
                <Text className="mt-1 uppercase text-xs">Lifestyle</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      {/*<View className="h-full w-full pt-16 px-14 bg-[#EDEEC0]">*/}
      {/*  <Text>hello</Text>*/}
      {/*</View>*/}
    </SafeAreaView>
  );
}
