import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Account from "./Account";
import Settings from "./Settings";
import Home from "./Home";
import { SparklesIcon } from "react-native-heroicons/outline";
import {Text} from "react-native";

const Tab = createBottomTabNavigator();

export default function BottomNav() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: () => (
                        <Text>
                            oi
                        </Text>

                    )
                }}
            />
            <Tab.Screen name="Account" component={Settings} />
            {/*<Tab.Screen name="Yo" component={Account} />*/}
            {/*<Tab.Screen name="Yo" component={Account} />*/}
            {/*<Tab.Screen name="Budi" component={Account} />*/}
        </Tab.Navigator>
    );
}