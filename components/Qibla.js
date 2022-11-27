import { useState, useEffect, useLayoutEffect } from "react";
import { supabase } from "../lib/supabase";
import {
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { Button, Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import CompassHeading from "react-native-compass-heading";
import Geolocation from "react-native-geolocation-service";

export default function Qibla({ session }) {
  const navigation = useNavigation();
  const [compassHeading, setCompassHeding] = useState(0);
  const [qiblad, setQiblad] = useState(0);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    getLocation();
    const degree_update_rate = 3;

    CompassHeading.start(degree_update_rate, (degree) => {
      setCompassHeding(degree);
    });

    return () => {
      CompassHeading.stop();
    };
  }, []);

  function calculate(latitude, longitude) {
    const PI = Math.PI;
    let latk = (21.4225 * PI) / 180.0;
    let longk = (39.8264 * PI) / 180.0;
    let phi = (latitude * PI) / 180.0;
    let lambda = (longitude * PI) / 180.0;
    let qiblad =
      (180.0 / PI) *
      Math.atan2(
        Math.sin(longk - lambda),
        Math.cos(phi) * Math.tan(latk) -
          Math.sin(phi) * Math.cos(longk - lambda)
      );
    setQiblad(qiblad);
  }

  function getLocation() {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log(latitude, longitude);
        calculate(latitude, longitude);
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/kompas.png")}
        style={[
          styles.image,
          { transform: [{ rotate: `${360 - compassHeading}deg` }] },
        ]}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            transform: [{ rotate: `${qiblad}deg` }],
          }}
        >
          <Image
            source={require("../assets/kakbah.png")}
            style={{ marginBottom: "45%", resizeMode: "contain", flex: 0.7 }}
          />
        </View>
      </ImageBackground>
    </View>
  );

  // return (
  //   <SafeAreaView>
  //     <View className="mb-6 flex-row py-3 justify-center space-x-2 bg-amber-700">
  //       <Text className="text-xl font-bold text-white">
  //         MyHadeeth
  //       </Text>
  //     </View>
  //   </SafeAreaView>
  // );
}

const styles = StyleSheet.create({
  image: {
    width: "90%",
    flex: 0.5,
    resizeMode: "contain",
    alignSelf: "center",
  },
  container: { backgroundColor: "#fff", flex: 1 },
});
