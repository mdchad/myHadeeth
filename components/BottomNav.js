import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";

import Hadeeth from "./Hadeeth";
import HadeethHome from "./HadeethHome";
import Home from "./Home";
import Prayer from "./Prayer";
import Qibla from "./Qibla";
import { useContext, useEffect } from "react";
import { GlobalContext } from "./GlobalContext";
import Settings from "./Settings";

const Tab = createBottomTabNavigator();

export default function BottomNav({ route }) {
  const { authDispatch, authState } = useContext(GlobalContext);

  useEffect(() => {
    if (!authState) {
      authDispatch({ full_name: route.params.name })
    }
  }, [])

  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Hadeeth"
        component={HadeethHome}
        options={{
          title: "Hadeeth",
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require("../assets/book.png")}
              style={{ width: 16, height: 20 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Prayers"
        component={Prayer}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require("../assets/prayer-nav.png")}
              style={{ width: 16, height: 20 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require("../assets/nav-logo.png")}
              style={{ marginTop: 15, width: 30, height: 30 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Qibla"
        component={Qibla}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require("../assets/compass.png")}
              style={{ width: 20, height: 20 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        initialParams={{ session: route.params.session }}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require("../assets/settings.png")}
              style={{ width: 16, height: 20 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
