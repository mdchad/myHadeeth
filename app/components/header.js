import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { FontAwesome5, AntDesign } from '@expo/vector-icons';

const header = ({ user }) => {

    return (
        <View className="bg-[#EDEEC0] flex flex-row justify-between items-center px-8 py-8 rounded-b-2xl rounded-bl-2xl shadow-sm">
            <View>
                <Text className="mb-1">
                    Assalamualaikum,
                </Text>
                <Text className="font-bold uppercase">
                    {user}
                </Text>
            </View>
            <Link href="/modal">
                <View className="flex flex-row items-center">
                    <AntDesign name="search1" size={16} color="black" />
                    {/* <Image source={require("@assets/search.png")} style={{ width: 16, height: 20 }} /> */}
                </View>
            </Link>
        </View>
    )
}

export default header