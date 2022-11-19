import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Account from "./Account";
import Home from "./Home";
import { SparklesIcon } from "react-native-heroicons/outline";
import { AntDesign, Entypo } from "@expo/vector-icons";

import Qibla from "./Qibla";

const Tab = createBottomTabNavigator();

export default function BottomNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Qibla"
        component={Qibla}
        options={{
          tabBarIcon: () => (
            <Entypo name="direction" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: () => (
            <AntDesign name="setting" size={24} color="black" />
          ),
        }}
      />
      {/*<Tab.Screen name="Yo" component={Account} />*/}
      {/*<Tab.Screen name="Budi" component={Account} />*/}
    </Tab.Navigator>
  );
}
