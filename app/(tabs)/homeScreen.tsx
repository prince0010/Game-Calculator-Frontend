import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Animated, { Layout } from 'react-native-reanimated';

interface User {
  id: number;
  name: string;
}

export default function HomeScreen() {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 3' },
    { id: 4, name: 'User 4' },
    { id: 5, name: 'User 5' },
    { id: 6, name: 'User 6' },
    { id: 7, name: 'User 7' },
    { id: 8, name: 'User 8' },
    { id: 9, name: 'User 9' },
    { id: 10, name: 'User 10' },
    { id: 11, name: 'User 11' },
    { id: 12, name: 'User 12' },
  ]);

  const addUsers = () => {
    setUsers((prevUsers) => [
      ...prevUsers,
      { id: prevUsers.length + 1, name: `User ${prevUsers.length + 1}` },
      { id: prevUsers.length + 2, name: `User ${prevUsers.length + 2}` },
    ]);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.title}>Game Match</Text>
        <View style={styles.iconsContainer}>
          <TouchableOpacity style={styles.icon}>
            <Ionicons name="search" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Ionicons name="ellipsis-vertical" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.subtitleContainer}>
        <View style={styles.subtitleWithCircle}>
          <View style={styles.liveCircle} />
          <Text style={styles.text1}>Today's Game</Text>
        </View>
      </View>

      <TouchableOpacity onPress={addUsers} style={styles.addButton}>
        <Text style={{ color: 'white' }}>Add Users</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.cardsContainer}>
        {users.reduce((acc, user, index) => {
          if (index % 4 === 0) acc.push(users.slice(index, index + 4));
          return acc;
        }, [] as User[][]).map((userPair, idx) => (
          <Animated.View
            key={idx}
            style={styles.card}
            layout={Layout.springify()}  // Smooth transition if naay new card ma add
          >
            <View style={styles.cardContent}>
              <View style={styles.userColumn}>
                {userPair.slice(0, 2).map((user) => (
                  <Text key={user.id} style={styles.userText}>
                    {user.name}
                  </Text>
                ))}
              </View>

              <View style={styles.userColumn}>
                {userPair.slice(2, 4).map((user) => (
                  <Text key={user.id} style={styles.userText}>
                    {user.name}
                  </Text>
                ))}
              </View>
            </View>
          </Animated.View>
        ))}
      </ScrollView>

      <View style={styles.content}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'zilla-slab-bold',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 12,
  },
  subtitleContainer: {
    backgroundColor: 'black',
    paddingHorizontal: 16,
    paddingVertical: 15,
    marginTop: 25,
    borderWidth: 1,
    borderBottomColor: 'white',
    width: 190,
    alignSelf: 'center',
  },
  subtitleWithCircle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    color: 'white',
    fontSize: 21,
    fontFamily: 'zilla-slab',
    textAlign: 'center',
  },
  liveCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'red',
    marginRight: 8,
  },
  addButton: {
    marginVertical: 20,
  },
  cardsContainer: {
    paddingBottom: 50, // Ensuring na naa pay space ang bottom part para sa pag scroll 
  },
  card: {
    marginTop: 20,
    backgroundColor: '#002F06',
    borderRadius: 10,
    padding: 16,
    marginHorizontal: 16,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userColumn: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  userText: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
    fontFamily: 'zilla-slab',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
