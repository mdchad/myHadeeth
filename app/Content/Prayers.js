import { View, Text } from 'react-native'
import React from 'react'
import SafeView from '../components/safeView'
import Audio from '../components/audio'

const Prayers = () => {
  return (
    <SafeView className="flex-1 bg-white p-5">
      <Text>Prayers</Text>

        <Audio />
    </SafeView>
  )
}

export default Prayers