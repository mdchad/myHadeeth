import { Slot, Tabs } from "expo-router";
import Search, { SearchBar } from "../search";
import { Keyboard, Text, TouchableWithoutFeedback, View } from "react-native";
import Page from '../components/page'

export default function Layout() {
    return (
        <View className="flex-1 bg-white">

            <Search />

            <Page>
                <Tabs
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    <Tabs.Screen name="Hadeeth" />
                    <Tabs.Screen name="Prayers" />
                </Tabs>
            </Page>
        </View>
    )
}