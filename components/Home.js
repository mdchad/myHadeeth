import { StatusBar } from "expo-status-bar";
import {Button, Pressable, SafeAreaView, StyleSheet, Text, View} from "react-native";
import { useEffect, useLayoutEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigation } from "@react-navigation/native";
import { zonedTimeToUtc, utcToZonedTime, format } from 'date-fns-tz'
import fromUnixTime from 'date-fns/fromUnixTime'

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

      let a = [...prayerTimes]
      times.forEach((time) => {
        const result = fromUnixTime(time)

        const zonedDate = utcToZonedTime(result, 'Asia/Kuala_Lumpur')

        const result1 = format(new Date(zonedDate), "hh:mm a")
        a.push(result1)
      })
      setPrayerTimes(a)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <SafeAreaView>
      <View className="mb-6 flex-row py-3 justify-center space-x-2 bg-amber-700">
        <Text className="text-xl font-bold text-white">
          MyHadeeth
        </Text>
      </View>
      <View className="px-4">
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
