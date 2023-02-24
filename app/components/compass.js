// import React, { useState, useEffect } from 'react';
// import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { Accelerometer } from 'expo-sensors';

// export default function App({ compass }) {
//     const [{ x, y, z }, setData] = useState({
//         x: 0,
//         y: 0,
//         z: 0,
//     });
//     const [subscription, setSubscription] = useState(null);

//     const _slow = () => Accelerometer.setUpdateInterval(1000);
//     const _fast = () => Accelerometer.setUpdateInterval(16);

//     const _subscribe = () => {
//         setSubscription(
//             Accelerometer.addListener(setData)
//         );
//     };

//     const _unsubscribe = () => {
//         subscription && subscription.remove();
//         setSubscription(null);
//     };

//     useEffect(() => {
//         _subscribe();
//         return () => _unsubscribe();
//     }, []);

//     // find the compass heading
//     const compassHeading = Math.atan2(y, x) * (180 / Math.PI) + 180;
//     console.log(compassHeading);

//     return (
//         <View style={styles.container}>
//             <Text style={styles.text}>Accelerometer: (in gs where 1g = 9.81 m/s^2)</Text>
//             <Text style={styles.text}>x: {x}</Text>
//             <Text style={styles.text}>y: {y}</Text>
//             <Text style={styles.text}>z: {z}</Text>

// <Image
//     className="w-64 h-64"
//     style={[
//         { transform: [{ rotate: `${360 - compassHeading}deg` }] },
//     ]}
//     resizeMode="contain"
//     source={require('./../../assets/compass-qibla.png')}
// />

//             <View style={styles.buttonContainer}>
//                 <TouchableOpacity onPress={subscription ? _unsubscribe : _subscribe} style={styles.button}>
//                     <Text>{subscription ? 'On' : 'Off'}</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={_slow} style={[styles.button, styles.middleButton]}>
//                     <Text>Slow</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={_fast} style={styles.button}>
//                     <Text>Fast</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//     }
// });

import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import { Accelerometer } from 'expo-sensors';
import { useSegments } from 'expo-router';

const QiblaCompass = () => {
    const [compassHeading, setCompassHeading] = useState(0);
    const [qiblaDirection, setQiblaDirection] = useState(0);
    const [phoneRotationDegree, setPhoneRotationDegree] = useState(0);

    const route = useSegments();

    const qiblaLatitude = 21.422487;
    const qiblaLongitude = 39.826206;

    useEffect(() => {
        Location.watchHeadingAsync((data) => {
            setCompassHeading(data.trueHeading);
        });
    }, []);

    const [{ x, y, z }, setData] = useState({
        x: 0,
        y: 0,
        z: 0,
    });
    const [subscription, setSubscription] = useState(null);

    const _slow = () => Accelerometer.setUpdateInterval(1000);
    const _fast = () => Accelerometer.setUpdateInterval(16);

    const _subscribe = () => {
        if (route === 'Content' || route === 'Qiblat') {
            console.log('subscribed');
            
            setSubscription(
                Accelerometer.addListener((accelerometerData) => {
                    const { x, y, z } = accelerometerData;
                    const radians = Math.atan2(y, x);
                    let degree = radians * (180 / Math.PI);
                    if (degree < 0) {
                        degree += 360;
                    }
                    setPhoneRotationDegree(degree);
                    setData({ x, y, z });
                })
            );
        }
    };

    const _unsubscribe = () => {
        subscription && subscription.remove();
        setSubscription(null);
    };

    useEffect(() => {
        _subscribe();
        return () => _unsubscribe();
    }, []);

    useEffect(() => {
        async function fetchQiblaDirection() {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status === 'granted') {
                const location = await Location.getCurrentPositionAsync();
                const { latitude, longitude } = location.coords;
                const qiblaDirection = Math.atan2(
                    qiblaLongitude - longitude,
                    qiblaLatitude - latitude
                ) * (180 / Math.PI);
                setQiblaDirection(qiblaDirection);
            }
        }
        fetchQiblaDirection();
    }, [qiblaLatitude, qiblaLongitude]);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Compass Heading: {compassHeading}°</Text>
            <Image
                source={require('./../../assets/compass-qibla.png')}
                style={[
                    styles.compass,
                    {
                        transform: [
                            { rotate: `${360 - compassHeading}deg` },
                            { rotateZ: `${phoneRotationDegree.toFixed(2)}deg` },
                        ],
                    },
                ]}
            />
            <Text style={styles.text}>Qibla Direction: {qiblaDirection.toFixed(2)}°</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
    text: {
        fontSize: 20,
        marginVertical: 10,
    },
    compass: {
        width: 250,
        height: 250,
    },
});

export default QiblaCompass;
