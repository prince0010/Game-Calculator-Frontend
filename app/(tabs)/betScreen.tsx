import { StyleSheet, Text, View } from "react-native"

export default function BetScreen() {
    return (
        <View style={styles.container}>
        <Text style={styles.text}>Welcome to Bet Screen</Text>
            </View>
    )
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',  
      justifyContent: 'center',  
      alignItems: 'center',      
    },
    text: {
      color: 'white',          
      fontSize: 24,
    },
})