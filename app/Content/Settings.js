import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import Page from '../components/page'

const Settings = () => {
  return (
    <Page className="flex-1 bg-white p-5">
      <Text>Settings</Text>
      <Link href="_sitemap">sitemap</Link>
    </Page>
  )
}

export default Settings