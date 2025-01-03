import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'


interface ButtonProps {
    title: string
    onPress: () => void
}

const Button = ({title, onPress}: ButtonProps) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};



const styles = StyleSheet.create({
    button: {
      backgroundColor: '#007bff',
      padding: 10,
      borderRadius: 5,
      marginTop: 10,
    },
    buttonText: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 16,
    },
  });


export default Button