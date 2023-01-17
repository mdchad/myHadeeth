import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Account from "./Account";
import Prayer from "./Prayer";

import Qibla from "./Qibla";
import {Image} from "react-native";
import Home from "./Home";

const Tab = createBottomTabNavigator();

export default function BottomNav() {
  return (
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen
        name="Hadeeth"
        component={Prayer}
        options={{
          tabBarIcon: () => (
            <Image source={require("../assets/book.png")} style={{ width: 16, height: 20 }}/>
          )
        }}
      />
      {/*<Tab.Screen*/}
      {/*  name="Qibla"*/}
      {/*  component={Qibla}*/}
      {/*  options={{*/}
      {/*    tabBarIcon: () => (*/}
      {/*      <Entypo name="direction" size={24} color="black" />*/}
      {/*    ),*/}
      {/*  }}*/}
      {/*/>*/}
      <Tab.Screen
        name="Prayers"
        component={Prayer}
        options={{
          tabBarIcon: () => (
            <Image source={require("../assets/prayer-nav.png")} style={{ width: 16, height: 20 }}/>
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: '',
          tabBarIcon: () => (
            <Image source={require("../assets/nav-logo.png")} style={{ marginTop: 15, width: 30, height: 30 }}/>
          ),
        }}
      />
      <Tab.Screen
        name="Qibla"
        component={Qibla}
        options={{
          tabBarIcon: () => (
            <Image source={require("../assets/compass.png")} style={{ width: 20, height: 20 }}/>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Account}
        options={{
          tabBarIcon: () => (
            <Image source={require("../assets/settings.png")} style={{ width: 16, height: 20 }}/>
          ),
        }}
      />
      {/*<Tab.Screen name="Yo" component={Account} />*/}
      {/*<Tab.Screen name="Budi" component={Account} />*/}
    </Tab.Navigator>
  );
}
