import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import SafeView from '../components/safeView'
import * as Location from 'expo-location';
import * as Sensors from 'expo-sensors';
import Compass from '../components/compass';

const Qiblat = () => {
    const [compassHeading, setCompassHeading] = useState(0);
    const [sensorData, setData] = useState({ x: 0, y: 0, z: 0 });
    const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);
    const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
        'loading...'
    );

    useEffect(() => {
        CheckIfLocationEnabled();
        GetCurrentLocation();
    }, []);

    const GetCurrentLocation = async () => {
        let { status } = await Location.requestBackgroundPermissionsAsync();

        if (status !== 'granted') {
            Alert.alert(
                'Permission not granted',
                'Allow the app to use location service.',
                [{ text: 'OK' }],
                { cancelable: false }
            );
        }

        let { coords } = await Location.getCurrentPositionAsync();

        if (coords) {
            const { latitude, longitude } = coords;
            let response = await Location.reverseGeocodeAsync({
                latitude,
                longitude
            });

            for (let item of response) {
                // change the address format as per your need
                let address = `${item.name}, ${item.street}, ${item.postalCode}, ${item.city}`;

                setDisplayCurrentAddress(address);
            }
        }
    };

    const CheckIfLocationEnabled = async () => {
        let enabled = await Location.hasServicesEnabledAsync();

        if (!enabled) {
            Alert.alert(
                'Location Service not enabled',
                'Please enable your location services to continue',
                [{ text: 'OK' }],
                { cancelable: false }
            );
        } else {
            setLocationServiceEnabled(enabled);
        }
    };

    const qiblat = {
        latitude: 21.422487,
        longitude: 39.826206
    }

    // compare qiblat with current location and rotate the compass

    return (
        <SafeView className="flex-1 bg-white p-5 flex gap-3">
            <Text>Qiblat</Text>

            <View className="flex items-center justify-center">
                {/* <Text>{accelerometerData}</Text> */}
                <Compass />
            </View>
        </SafeView>
    )
}

export default Qiblat