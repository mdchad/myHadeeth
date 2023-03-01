import { Slot, Stack, Tabs } from "expo-router";
import { Keyboard, Text, TouchableWithoutFeedback, View } from "react-native";
import Page from './../../components/page'

export default function Layout() {
    return (
        <Page>
            <Stack screenOptions={{ headerShown: false }} />
        </Page>
        // <View className="flex-1 bg-white">

        //     <Search />

        //     <Page>
        //         <Stack
        //             screenOptions={{
        //                 headerShown: false
        //             }}
        //         >
        //             <Stack.Screen name="Hadeeth/index" />
        //             <Stack.Screen name="Prayers" />
        //         </Stack>
        //     </Page>
        // </View>
    )
}