import { StatusBar } from "expo-status-bar";
import {
  Button, Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { zonedTimeToUtc, utcToZonedTime, format } from "date-fns-tz";
import { isAfter, differenceInMinutes, formatDistanceToNow } from 'date-fns';
import fromUnixTime from "date-fns/fromUnixTime";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
} from "react-native-heroicons/solid";

let prayerNames = ["Subuh", "Syuruk", "Zohor", "Asar", "Maghrib", "Isyak"];
let prayerIcon = [require("../assets/prayer-fajr.png"), require("../assets/prayer-fajr.png"), require("../assets/prayer-dhuhr.png"), require("../assets/prayer-asr.png"), require("../assets/prayer-maghrib.png"), require("../assets/prayer-isha.png")];

const options = { year: "numeric", month: "long", day: "numeric" }
const formatHijri = new Intl.DateTimeFormat("ms-MY-u-ca-islamic-nu-latn", options)

export default function Prayer() {
  const navigation = useNavigation();
  const [prayerTimes, setPrayerTimes] = useState([]);
  const [nextPrayer, setNextPrayer] = useState(null)

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    fetchPrayer();
  }, []);

  async function fetchPrayer() {
    try {
      const response = await fetch(
        "http://mpt.i906.my/mpt.json?code=kdh-4&filter=1"
      );
      const {
        response: { times },
      } = await response.json();

      let prayers = [...prayerTimes];
      times.forEach((time, i) => {
        const result = fromUnixTime(time);

        const zonedDate = utcToZonedTime(result, "Asia/Kuala_Lumpur");

        const formattedPrayer = format(new Date(zonedDate), "hh:mm a");

        const now = new Date();

        const prayerMeta = {
          name: prayerNames[i],
          timezoneDate: zonedDate,
          prayerTime: formattedPrayer,
          hasElapsed: isAfter(now, zonedDate),
          icon: prayerIcon[i]
        }

        prayers.push(prayerMeta);
      });
      if (!prayerTimes.length) {
        const nextAvailablePrayer = prayers.find(prayer => prayer.hasElapsed === false)

        setPrayerTimes(prayers);
        setNextPrayer(nextAvailablePrayer)
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <SafeAreaView>
      <View className="h-full w-full pt-16 px-14 bg-[#EDEEC0]">
        <View className="w-64 flex flex-row items-center justify-between mb-5">
          <ChevronLeftIcon height={20} width={20} color={"#000"} />
          <View className="flex items-center">
            <Text className="mb-1 text-md">{format(new Date(), "cccc, d LLL")}</Text>
            <Text>{formatHijri.format(new Date())}</Text>
          </View>
          <ChevronRightIcon height={20} width={20} color={"#000"} />
        </View>
        {/*<Text className="text-2xl font-bold mb-4">Prayer Times</Text>*/}
        <View className="mx-6 flex flex-row justify-between">
          <Image
            source={require("../assets/muslim-prayer.png")}
            style={{
              resizeMode: "contain",
              height: 78,
              width: 77,
              display: "flex",
              alignItems: "center",
              alignContent: "center",
              justifyContent: "center",
            }}
          />
          {!!nextPrayer && (
              <View className="flex items-end">
                <Text className="mb-3">{nextPrayer.name} Prayer</Text>
                <View className="flex flex-row mb-3">
                  <Image source={nextPrayer.icon} style={{ width: 22, height: 22 }}/>
                  <Text className="text-sm ml-1">{nextPrayer.prayerTime}</Text>
                </View>
                <Text className="text-[10px]">Countdown {formatDistanceToNow(nextPrayer.timezoneDate, { addSuffix: true })}</Text>
              </View>
            )
          }
        </View>
        <View className="my-6 flex flex-row items-center justify-center">
          <Text className="text-center mr-2">Kuala Lumpur, Malaysia</Text>
          <Image source={require("../assets/pin.png")} style={{ width: 14, height: 16 }} />
        </View>
        <View>
          {!!prayerTimes.length ? prayerTimes.map((prayer, i) => (
            <View key={i} className={`flex flex-row justify-between pt-4 pb-4 border-0 border-b border-[#7C9082] ${i + 1 === prayerTimes.length && "border-b-0"} ${i === 0 && "pt-0"}`}>
              <Text className="text-sm">
                {prayer.name}
              </Text>
              <Image source={prayer.icon} style={{ width: 22, height: 22 }}/>
              <Text>
                {prayer.prayerTime}
              </Text>
            </View>
          )) : null}
        </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}
