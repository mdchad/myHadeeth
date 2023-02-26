import { View, Text } from 'react-native'
import React from 'react'
import SafeView from './../components/safeView'
import { Link } from 'expo-router'
import { useAuth } from './../context/auth'

const Signin = () => {
    const { signIn } = useAuth();
    return (
        <SafeView>
            <Text>Login</Text>
            <Link href="/Content">Content</Link>
            <Text onPress={() => signIn()}>Sign In</Text>
        </SafeView>
    )
}

export default Signin