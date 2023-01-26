import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Pressable, SafeAreaView, Text, View } from "react-native";
import { useFonts } from "expo-font";

export default function Welcome() {
  const [fontsLoaded] = useFonts({
    Langar: require("../assets/fonts/Langar-Regular.ttf"),
  });

  const navigation = useNavigation();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView>
      <View className="h-full w-full bg-[#EDEEC0]">
        <View className="mt-12 flex items-center">
          <Image
            source={require("../assets/hadeeth-logo.png")}
            style={{ width: 176, height: 150 }}
          />
          <Text
            className="mt-5 text-[32px] text-center"
            style={{ fontFamily: "Langar" }}
          >
            Ahlan Wa Sahlan !Welcome !
          </Text>
          <Text
            className="mt-5 text-[24px] text-center w-[200px]"
          >
            Learn more about our collection of Hadeeth
          </Text>
          <Pressable
            className="shadow-2xl rounded-3xl mt-10 flex flex-row items-center justify-center py-3 px-5 w-[160px] bg-[#1EAB53] border-transparent"
            onPress={() => navigation.navigate("Login")}
          >
            <Text className="text-sm font-bold text-center text-white uppercase basis-11/12">
              Get started
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
