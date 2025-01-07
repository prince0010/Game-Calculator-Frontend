import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, Animated, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { HapticTab } from '@/components/HapticTab';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

type TabConfig = {
  name: string;
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
};

const tabConfig: TabConfig[] = [
  { name: 'homeScreen', icon: 'home', title: 'Home' },
  { name: 'gameScreen', icon: 'game-controller', title: 'Game' },
  { name: 'addGame', icon: 'add-circle-outline', title: 'Add Game' },
  { name: 'betScreen', icon: 'wallet', title: 'Bet' },
  { name: 'profileScreen', icon: 'person', title: 'Profile' },
];

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const translateY = new Animated.Value(0);

  const handleTabChange = (isFocused: boolean) => {
    Animated.timing(translateY, {
      toValue: isFocused ? -40 : 0, 
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: 'white', 
          borderTopWidth: 0,
          height: 70,
          position: 'absolute',
        },
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      {tabConfig.map((tab, index) => (
        <Tabs.Screen
          key={index}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ color, focused }) => {
              handleTabChange(focused);

              return (
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Animated.View
                    style={{
                      transform: [{ translateY: focused ? -18 : 0 }],
                      backgroundColor: focused ? 'white' : 'transparent',
                      borderRadius: 50, 
                      padding: focused ? 40 : 0,
                      shadowColor: focused ? 'black' : 'transparent',
                      shadowOffset: { width: 0, height: 3 },
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Ionicons
                      name={tab.icon}
                      size={focused ? 45 : 32} 
                      color={focused ? 'green' : color} 
                      style={{
                        position: 'absolute', 
                      }}
                    />
                  </Animated.View>
                </View>
              );
            },
          }}
        />
      ))}
    </Tabs>
  );
}
