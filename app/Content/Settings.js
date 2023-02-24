import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import SafeView from '../components/safeView'

const Settings = () => {
  return (
    <SafeView className="flex-1 bg-white p-5">
      <Text>Settings</Text>
      <Link href="_sitemap">sitemap</Link>
    </SafeView>
  )
}

export default Settings