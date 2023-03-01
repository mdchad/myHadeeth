import { View, Text, TouchableWithoutFeedback, Keyboard, SafeAreaView } from 'react-native'
import React from 'react'

// this component is used to wrap the content of each page 
// with keyboard dismiss and to prevent code repetition

const page = ({ children }) => {
    return (
        <SafeAreaView className="flex-1 bg-[#EDEEC0]">
            {children}
        </SafeAreaView>
    )
}

export default page