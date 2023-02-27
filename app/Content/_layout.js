import { Slot, Stack, Tabs } from "expo-router";
import Search, { SearchBar } from "../search";
import { Keyboard, SafeAreaView, Text, TouchableWithoutFeedback, View } from "react-native";
import Page from '../components/page'

export default function Layout() {
    return (
        <View className="flex-1 bg-white">
            <SafeAreaView style={{}}>

                <Search />

            </SafeAreaView>
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