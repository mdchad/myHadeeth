import { Slot, Stack, Tabs } from "expo-router";
import { Keyboard, Text, TouchableWithoutFeedback, View } from "react-native";

export default function Layout() {
    return (
        <Stack screenOptions={{ headerShown: false }} />
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