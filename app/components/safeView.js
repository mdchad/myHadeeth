import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const safeView = ({ children }) => {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <View>
                {children}
            </View>
        </SafeAreaView>
    )
}

export default safeView