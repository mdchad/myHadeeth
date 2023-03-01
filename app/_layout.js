import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { Text } from "react-native";

export default function Layout() {
    return (
        <>
            <Stack screenOptions={{
                headerShown: false,
                gestureEnabled: false
            }}>
                <Stack.Screen name="Content" options={{ headerShown: false }} />
                <Stack.Screen
                    name="modal"
                    options={{
                        presentation: "fullScreenModal",
                    }}
                />
            </Stack>
            <StatusBar style="auto" />
        </>
    )
}