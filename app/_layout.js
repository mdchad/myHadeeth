import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';

export default function Layout() {
    return (
        <>
            <Stack screenOptions={{
                headerShown: false,
                gestureEnabled: false
            }}>
                <Stack.Screen name="Content" options={{ headerShown: false }} />
            </Stack>
            <StatusBar style="auto" />
        </>
    )
}