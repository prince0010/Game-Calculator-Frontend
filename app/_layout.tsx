import { useEffect } from 'react'
import { useRouter } from 'expo-router'
import { Stack } from 'expo-router'

export default function Layout() {
  const router = useRouter()

  useEffect(() => {
    // Ensure navigation happens after layout is mounted
    router.replace('/screens/loginScreen')
  }, [router])

  return <Stack screenOptions={{ headerShown: false}} />
}
