import { formatDistanceToNow, isAfter } from "date-fns";
import fromUnixTime from "date-fns/fromUnixTime";
import { format, utcToZonedTime } from "date-fns-tz";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "react-native-heroicons/solid";
import { SafeAreaView } from "react-native-safe-area-context";

// import { useNavigation } from "@react-navigation/native";
// import CompassHeading from "react-native-compass-heading";
// import Geolocation from "react-native-geolocation-service";

const prayerNames = ["Subuh", "Syuruk", "Zohor", "Asar", "Maghrib", "Isyak"];
const prayerIcon = [
  require("../assets/prayer-fajr.png"),
  require("../assets/prayer-fajr.png"),
  require("../assets/prayer-dhuhr.png"),
  require("../assets/prayer-asr.png"),
  require("../assets/prayer-maghrib.png"),
  require("../assets/prayer-isha.png"),
];

export default function Qibla() {
  // const navigation = useNavigation();
  // const [compassHeading, setCompassHeding] = useState(0);
  // const [qiblad, setQiblad] = useState(0);

  const [prayerTimes, setPrayerTimes] = useState([]);
  const [nextPrayer, setNextPrayer] = useState(null);

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

      const prayers = [...prayerTimes];
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
          icon: prayerIcon[i],
        };

        prayers.push(prayerMeta);
      });
      if (!prayerTimes.length) {
        const nextAvailablePrayer = prayers.find(
          (prayer) => prayer.hasElapsed === false
        );

        setPrayerTimes(prayers);
        setNextPrayer(nextAvailablePrayer);
      }
    } catch (error) {
      console.error(error);
    }
  }

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerShown: false,
  //   });
  // }, []);

  // useEffect(() => {
  //   getLocation();
  //   const degree_update_rate = 3;
  //
  //   CompassHeading.start(degree_update_rate, (degree) => {
  //     setCompassHeding(degree);
  //   });
  //
  //   return () => {
  //     CompassHeading.stop();
  //   };
  // }, []);
  //
  // function calculate(latitude, longitude) {
  //   const PI = Math.PI;
  //   let latk = (21.4225 * PI) / 180.0;
  //   let longk = (39.8264 * PI) / 180.0;
  //   let phi = (latitude * PI) / 180.0;
  //   let lambda = (longitude * PI) / 180.0;
  //   let qiblad =
  //     (180.0 / PI) *
  //     Math.atan2(
  //       Math.sin(longk - lambda),
  //       Math.cos(phi) * Math.tan(latk) -
  //         Math.sin(phi) * Math.cos(longk - lambda)
  //     );
  //   setQiblad(qiblad);
  // }
  //
  // function getLocation() {
  //   Geolocation.getCurrentPosition(
  //     (position) => {
  //       const { latitude, longitude } = position.coords;
  //       console.log(latitude, longitude);
  //       calculate(latitude, longitude);
  //     },
  //     (error) => {
  //       // See error code charts below.
  //       console.log(error.code, error.message);
  //     },
  //     { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  //   );
  // }

  // return (
  //   <SafeAreaView>
  //     <View className="mb-6 flex-row py-3 justify-center space-x-2 bg-amber-700">
  //       <Text className="text-xl font-bold text-white">
  //         MyHadeeth
  //       </Text>
  //     </View>
  //     <View className="h-screen">
  //       <ImageBackground
  //         source={require("../assets/kompas.png")}
  //         style={[
  //           styles.image,
  //           { transform: [{ rotate: `${360 - compassHeading}deg` }] },
  //         ]}
  //       >
  //         <View
  //           style={{
  //             flex: 1,
  //             alignItems: "center",
  //             justifyContent: "center",
  //             transform: [{ rotate: `${qiblad}deg` }],
  //           }}
  //         >
  //           <Image
  //             source={require("../assets/kakbah.png")}
  //             style={{ marginBottom: "45%", resizeMode: "contain", flex: 0.8 }}
  //           />
  //         </View>
  //       </ImageBackground>
  //     </View>
  //   </SafeAreaView>
  // );

  return (
    <SafeAreaView>
      <View className="h-full w-full pt-16 px-14 bg-[#EDEEC0]">
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
                <Image
                  source={nextPrayer.icon}
                  style={{ width: 22, height: 22 }}
                />
                <Text className="text-sm ml-1">{nextPrayer.prayerTime}</Text>
              </View>
              <Text className="text-[10px]">
                Countdown{" "}
                {formatDistanceToNow(nextPrayer.timezoneDate, {
                  addSuffix: true,
                })}
              </Text>
            </View>
          )}
        </View>
        <View className="my-6 flex flex-row items-center justify-center">
          <Text className="text-center mr-2">Kuala Lumpur, Malaysia</Text>
          <Image
            source={require("../assets/pin.png")}
            style={{ width: 14, height: 16 }}
          />
        </View>
        <View
          className="mb-6"
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <Image source={require("../assets/compass-qibla.png")} style={{ width: 255, height: 255 }} />
        <View className="mt-8 mb-4">
          <Pressable
            className="flex flex-row items-center justify-center py-3 px-5 w-64 rounded-xl bg-[#1EAB53] border-transparent"
          >
            <Text></Text>
            <Text className="text-sm font-bold text-center text-white uppercase basis-11/12">
              Calibrate
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    flex: 0.5,
    resizeMode: "contain",
    alignSelf: "center",
  },
  container: { backgroundColor: "#fff", flex: 1, height: "100%" },
});
