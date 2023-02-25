import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import SafeView from '../components/safeView'
import * as Location from 'expo-location';
import * as Sensors from 'expo-sensors';
import Compass from '../components/compass';

const Qiblat = () => {
    return (
        <SafeView className="flex-1 bg-white flex w-full h-full">
            {/* <Text>Qiblat</Text>÷ */}

            <View className="flex items-center justify-center">
                {/* <Text>{accelerometerData}</Text> */}
                <Compass />
            </View>
        </SafeView>
    )
}

export default Qiblat