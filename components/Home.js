import { StatusBar } from "expo-status-bar";
import {Button, Pressable, SafeAreaView, StyleSheet, Text, View} from "react-native";
import { useEffect, useLayoutEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigation } from "@react-navigation/native";
import { zonedTimeToUtc, utcToZonedTime, format } from 'date-fns-tz'
import fromUnixTime from 'date-fns/fromUnixTime'
import { ChevronRightIcon, ChevronLeftIcon } from "react-native-heroicons/solid";

let prayers = ['Subuh', 'Syuruk', 'Zohor', 'Asar', 'Maghrib', 'Isyak']

export default function Home() {
  const navigation = useNavigation();
  const [prayerTimes, setPrayerTimes] = useState([])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    fetchPrayer()
  }, [])

  async function fetchPrayer() {
    try {
      const response = await fetch(
        'http://mpt.i906.my/mpt.json?code=kdh-4&filter=1'
      );
      const { response: { times} } = await response.json();

      let prayers = [...prayerTimes]
      times.forEach((time) => {
        const result = fromUnixTime(time)

        const zonedDate = utcToZonedTime(result, 'Asia/Kuala_Lumpur')

        const result1 = format(new Date(zonedDate), "hh:mm a")
        prayers.push(result1)
      })
      if (!prayerTimes.length) {
        setPrayerTimes(prayers)
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <SafeAreaView>
      <View className="h-full w-full pt-16 px-14 bg-[#EDEEC0]">
        <View className="w-64 flex flex-row items-center justify-between">
          <ChevronLeftIcon height={20} width={20} color={"#000"} />
          <View>
            <Text className="mb-1">{format(new Date(), 'cccc, d LLL')}</Text>
            <Text>{format(new Date(), 'cccc')}</Text>
          </View>
          <ChevronRightIcon height={20} width={20} color={"#000"} />
        </View>
        <Text className="text-2xl font-bold mb-4">Prayer Times</Text>
        {prayerTimes.map((prayer, i) => (
          <Text key={i} className="">{prayers[i]}: {prayer}</Text>
        ))}
        {/*<SparklesIconOutline />*/}
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}
