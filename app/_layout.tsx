import React, { useEffect, useState } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { useRouter, Stack } from 'expo-router'
import { ApolloProvider } from '@apollo/client' 
import client from './graphql/apolloClient'
import { loadFonts } from '@/constants/fonts'
import { Colors } from '@/constants/Colors'

export default function Layout() {
  const router = useRouter()
  const [fontLoaded, setFontLoaded] = useState(false)

  useEffect(() => {
    const initialize = async () => {
      await loadFonts() 
      setFontLoaded(true) 
      router.replace('/screens/loginScreen')
    }

    initialize()
  }, [router])

  return (
    <ApolloProvider client={client}>
      <Stack screenOptions={{ headerShown: false }} />
    </ApolloProvider>
  )
}
