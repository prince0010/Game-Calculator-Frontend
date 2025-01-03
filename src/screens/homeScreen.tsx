import React, { useState } from 'react'
import { View, Text, Button, Alert } from 'react-native'

const HomeScreen = ({ navigation }: any) => {
    const [isLoggedIn, setIsLoggedIn] = useState(true)

    const handleLogout = () => {
        setIsLoggedIn(false)
        Alert.alert('Logout Success')
        navigation.navigate('Login')
    }

    return (
        <View style={{ padding: 16 }}>
            <Text style={{ fontSize: 24, marginBottom: 16 }}>Home Screen</Text>
            {isLoggedIn ? (
                <Button title="Logout" onPress={handleLogout} />
            ) : (
                <Button
                    title="Go to Login"
                    onPress={() => navigation.navigate('Login')}
                />
            )}
        </View>
    )
}

export default HomeScreen
