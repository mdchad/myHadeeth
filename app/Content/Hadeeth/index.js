import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Hadeeth = () => {
    return (
        <View className="flex-1 bg-white p-5 flex gap-3">
            <Text>Hadeeth Page</Text>

            <View>
                <Text>List:</Text>
                <Link href="Content/Hadeeth/1">Hadeeth 1</Link>
                <Link href="Content/Hadeeth/2">Hadeeth 2</Link>
            </View>
        </View>
    )
}

export default Hadeeth