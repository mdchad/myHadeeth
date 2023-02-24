import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import SafeView from '../components/safeView'

const Home = () => {
  return (
    <SafeView>
      <Text>Home</Text>
      <Link href='/Pages/search'>search page</Link>
    </SafeView>
  )
}

export default Home