import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/loginScreen';
import HomeScreen from '../screens/homeScreen';
import BottomTabNavigator from './bottomTabNavigator'
import SearchScreen from '../screens/searchScreen'

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: true, headerTitle: 'Search' }}/> */}
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="Game Calculator" component={BottomTabNavigator} options={{ headerLeft: () => null}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
