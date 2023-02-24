import { View, Text, StyleSheet, TextInput, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from "expo-router";

import {
    HeaderSearchBar,
    HeaderClassicSearchBar
} from "react-native-header-search-bar";

const Search = () => {
    const router = useRouter();
    const [value, setValue] = useState('');
    // const [searching, setSearching] = useState(false);

    const countries = [
        { name: "Belgium", continent: "Europe" },
        { name: "India", continent: "Asia" },
        { name: "Bolivia", continent: "South America" },
        { name: "Ghana", continent: "Africa" },
        { name: "Japan", continent: "Asia" },
        { name: "Canada", continent: "North America" },
        { name: "New Zealand", continent: "Australasia" },
        { name: "Italy", continent: "Europe" },
        { name: "South Africa", continent: "Africa" },
        { name: "China", continent: "Asia" },
        { name: "Paraguay", continent: "South America" },
        { name: "Usa", continent: "North America" },
        { name: "France", continent: "Europe" },
        { name: "Botswana", continent: "Africa" },
        { name: "Spain", continent: "Europe" },
        { name: "Senegal", continent: "Africa" },
        { name: "Brazil", continent: "South America" },
        { name: "Denmark", continent: "Europe" },
        { name: "Mexico", continent: "South America" },
        { name: "Australia", continent: "Australasia" },
        { name: "Tanzania", continent: "Africa" },
        { name: "Bangladesh", continent: "Asia" },
        { name: "Portugal", continent: "Europe" },
        { name: "Pakistan", continent: "Asia" },
    ];

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View className="relative">
                <HeaderSearchBar
                    onChangeText={value => setValue(value)}
                    searchBoxText="Search..."
                    backgroundColor={"#EDEEC0"}
                    className="block"
                    // disableTextInput={searching ? true : false}
                    firstTitle="Assalamualaikum"
                    // firstTitleFontSize={16}
                    firstTitleColor={"#000"}
                    secondTitle="Replace with name"
                    // secondTitleFontSize={18}
                    secondTitleColor={"#000"}

                />
                {value.length > 0 && (
                    // <SafeAreaView>
                    <FlatList
                        className="bg-white w-full h-full"
                        data={countries.filter((country) => country.name.toLowerCase().includes(value.toLowerCase()))}
                        renderItem={({ item }) => (
                            <Text>{item.name}</Text>
                        )}
                        keyExtractor={item => item.name}
                    />
                    // </SafeAreaView>
                )}
            </View >
        </TouchableWithoutFeedback>
    )
}

export default Search