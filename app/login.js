import { View, Text } from 'react-native'
import React from 'react'
import SafeView from './components/safeView'
import { Link } from 'expo-router'

const login = () => {

    return (
        <SafeView>
            <Text>Login</Text>
            <Link href="/Content">Content</Link>
        </SafeView>
    )
}

export default login