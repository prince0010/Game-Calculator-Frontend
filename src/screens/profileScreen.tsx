import React, { useState } from "react"
import { Alert, Text, View } from "react-native"
import Button from "../components/Button"


const ProfileScreen = ({ navigation }: any) => {


    const [isLoggedIn, setIsLoggedIn] = useState(true);
    
      const handleLogout = () => {
        setIsLoggedIn(false);
        Alert.alert('Logout Success');
        navigation.navigate('Login'); 
      };


  return (
          <View style ={{
              flex: 1, justifyContent: 'center', alignItems: 'center'
          }}> 
            <Text style={{fontSize: 24, marginBottom: 16}}>Profile</Text>

           {isLoggedIn && (
                  <Button title="Logout" onPress={handleLogout} />
                )}
        
          </View>
      )
}

export default ProfileScreen