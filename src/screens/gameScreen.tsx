import React from "react"
import { Text, View } from "react-native"

const GameScreen = () => {
    return (
        <View style ={{
            flex: 1, justifyContent: 'center', alignItems: 'center'
        }}> 
        <Text style={{fontSize: 24, marginBottom: 16}}>Game Screen</Text>
        </View>
    )
}

export default GameScreen