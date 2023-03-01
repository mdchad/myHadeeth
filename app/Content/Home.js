import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import Page from '../components/page'

const Home = () => {
    return (
        <Page>
            <Text>Home</Text>
            <Link href='/Pages/search'>search page</Link>
        </Page>
    )
}

export default Home