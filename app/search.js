import { View, Text, StyleSheet, TextInput, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from "expo-router";

import {
    HeaderSearchBar,
    HeaderClassicSearchBar
} from "react-native-header-search-bar";
import { useAuth } from "./context/auth";

const Search = () => {
    const router = useRouter();
    const [value, setValue] = useState('');
    const { user } = useAuth()

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

    const highlightText = (text, query) => {
        if (!query.trim()) {
            return text;
        }

        const regex = new RegExp(`(${query})`, 'gi');
        const parts = text.split(regex);

        return (
            <Text>
                {parts.map((part, i) =>
                    regex.test(part) ? (
                        <Text key={i} style={{ backgroundColor: 'yellow' }}>
                            {part}
                        </Text>
                    ) : (
                        part
                    )
                )}
            </Text>
        );
    };

    const renderItem = ({ item }) => {
        const highlightedText = highlight(item.name, value);
        return <Text>{highlightedText}</Text>;
    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View className="relative">
                <HeaderSearchBar
                    onChangeText={value => setValue(value)}
                    searchBoxText="Search..."
                    backgroundColor={"#EDEEC0"}
                    className="block"
                    firstTitle="Assalamualaikum"
                    // firstTitleFontSize={16}
                    firstTitleColor={"#000"}
                    secondTitle={user.full_name}
                    // secondTitleFontSize={18}
                    secondTitleColor={"#000"}
                />
                {value.length > 0 && (
                    // <FlatList
                    //     className="bg-white w-full h-full"
                    //     // data={countries.filter((country) => country.name.toLowerCase().includes(value.toLowerCase()))}
                    //     data={countries}
                    //     renderItem={renderItem}
                    //     keyExtractor={item => item.name}
                    // />

                    <FlatList
                        className="bg-white w-full h-full"
                        data={countries.filter((country) =>
                            country.name.toLowerCase().includes(value.toLowerCase())
                        )}
                        renderItem={({ item }) => <Text>{highlightText(item.name, value)}</Text>}
                        keyExtractor={(item) => item.name}
                    />
                )}
            </View >
        </TouchableWithoutFeedback>
    )
}

export default Search
