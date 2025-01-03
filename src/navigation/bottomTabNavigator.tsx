import React, { useState } from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Ionicons from "react-native-vector-icons/Ionicons"
import { Animated, StyleSheet } from "react-native"
import HomeScreen from "../screens/homeScreen"
import GameScreen from "../screens/gameScreen"
import ProfileScreen from "../screens/profileScreen"

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderRadius: 20,
          margin: 10,
          height: 60,
          backgroundColor: 'black',
        },
        tabBarActiveTintColor: 'green', 
        tabBarInactiveTintColor: 'white', 
        tabBarLabelStyle: { display: 'none' }, 
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
            title: 'Home',
          tabBarIcon: ({ focused, color }) => {
            const scale = new Animated.Value(focused ? 1.3 : 1);
            const translateY = new Animated.Value(focused ? -10 : 0);

            Animated.spring(scale, {
              toValue: focused ? 1.1 : 1,
              friction: 4,
              tension: 40,
              useNativeDriver: true,
            }).start();

            Animated.spring(translateY, {
              toValue: focused ? -5 : 0,
              friction: 4,
              tension: 40,
              useNativeDriver: true,
            }).start();

            return (
              <Animated.View
                style={[
                  styles.iconContainer,
                  focused && styles.focusedContainer,
                  {
                    transform: [{ scale }, { translateY }],
                  },
                ]}
              >
                <Ionicons name="home" size={30} color={color} />
              </Animated.View>
            );
          },
        }}
      />
      <Tab.Screen
        name= "Game"
        component={GameScreen}
        options={{
            title: 'Game',
          tabBarIcon: ({ focused, color }) => {
            const scale = new Animated.Value(focused ? 1.3 : 1);
            const translateY = new Animated.Value(focused ? -10 : 0);

            Animated.spring(scale, {
              toValue: focused ? 1.1 : 1,
              friction: 4,
              tension: 40,
              useNativeDriver: true,
            }).start();

            Animated.spring(translateY, {
              toValue: focused ? -5 : 0,
              friction: 4,
              tension: 40,
              useNativeDriver: true,
            }).start();

            return (
              <Animated.View
                style={[
                  styles.iconContainer,
                  focused && styles.focusedContainer,
                  {
                    transform: [{ scale }, { translateY }],
                  },
                ]}
              >
                <Ionicons name="football" size={30} color={color} />
              </Animated.View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
            title: 'Profile',
          tabBarIcon: ({ focused, color }) => {
            const scale = new Animated.Value(focused ? 1.3 : 1);
            const translateY = new Animated.Value(focused ? -10 : 0);

            Animated.spring(scale, {
              toValue: focused ? 1.1 : 1,
              friction: 4,
              tension: 40,
              useNativeDriver: true,
            }).start();

            Animated.spring(translateY, {
              toValue: focused ? -5 : 0,
              friction: 4,
              tension: 40,
              useNativeDriver: true,
            }).start();

            return (
              <Animated.View
                style={[
                  styles.iconContainer,
                  focused && styles.focusedContainer,
                  {
                    transform: [{ scale }, { translateY }],
                  },
                ]}
              >
                <Ionicons name="person" size={30} color={color} />
              </Animated.View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  focusedContainer: {
    backgroundColor: 'black',
  },
});