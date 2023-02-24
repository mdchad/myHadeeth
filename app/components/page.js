import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'

// this component is used to wrap the content of each page 
// with keyboard dismiss and to prevent code repetition

const page = ({ children }) => {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View className="h-full flex-1">
                {children}
            </View>
        </TouchableWithoutFeedback>
    )
}

export default page