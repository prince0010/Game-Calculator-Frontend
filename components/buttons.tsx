import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'


interface ButtonProps {
    title: string
    onPress: () => void
}

const ButtonLogin = ({title, onPress}: ButtonProps) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};



const styles = StyleSheet.create({
    button: {
      backgroundColor: '#52873D',
    //   padding: 10,
      width: 164,
      padding: 10,
      borderRadius: 23,
      marginTop: 10,
      alignSelf: 'center',
      
    },
    buttonText: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 16,
    },
  });


export default ButtonLogin