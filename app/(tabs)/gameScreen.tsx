import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Animated, { Layout } from 'react-native-reanimated';

interface User {
  id: number;
  name: string;
}

export default function GameScreen() {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'Spongebob' },
    { id: 2, name: 'Squarepants' },
    { id: 3, name: 'Becky' },
    { id: 4, name: 'Bayoy' },
  ]);

  const addUsers = () => {
    setUsers((prevUsers) => [
      ...prevUsers,
      { id: prevUsers.length + 1, name: `User ${prevUsers.length + 1}` },
    ]);
  };    

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.title}>Game Result</Text>
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
          <Text style={styles.text1}>Today's Game Result</Text>
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
      layout={Layout.springify()}  // naay smooth transition if naay ma add na card
    >
      <View style={styles.cardContent}>
        <View style={styles.userColumn}>
          <Image source={require('@/assets/images/kiosk.png')} style={styles.image} />
          {userPair.slice(0, 2).map((user, userIndex) => (
  <Text key={user.id} style={styles.userText}>
    {userIndex === 0 && userPair[1] ? `${user.name} & ` : user.name}
  </Text>
))}
        </View>
        <Text style={styles.matchText}>Match</Text>
        
        <View style={styles.userColumn}>
          <Image source={require('@/assets/images/kiosk.png')} style={styles.image} />
          {userPair.slice(2, 4).map((user, userIndex) => (
            <Text key={user.id} style={styles.userText}>
              {userIndex === 0 && userPair[3] ? `${user.name} & ` : user.name} 
            </Text>
          ))}
        </View>
      </View>

      {/* Live Circle and Court na Icon og ang katong W -- L or L -- W */}
      <View style={styles.bottomSection}>
        {/* Still thinking kung unsaon ni siya either drop down or input text ??*/}
        <Text style={styles.statusGame}>W -- L</Text> 
        <View style={styles.row}>
    <View style={styles.liveCircle} />
    <Text style={styles.courtText}>Court 1</Text>
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
    width: 230,
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
   marginRight: 5,
  },
  addButton: {
    marginVertical: 20,
  },
  cardsContainer: {
    paddingBottom: 50, // Gina ensure ang space sa bottom part para sa pang scrolling
  },
card: {
    marginTop: 20,
    backgroundColor: '#002F06',
    borderRadius: 10,
    padding: 20, 
    marginHorizontal: 17,
    opacity: 1,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 12,
  },
  matchText: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'zilla-slab-bold',
    position: 'absolute', 
    top: '-15%', 
    left: '42%',
    padding: 8
  },
  userColumn: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 10,
    borderRadius: 30,
  },
  userText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'zilla-slab',
  },
  statusGame: {
    color: 'white',
    fontSize: 18,
    marginBottom: 5, 
  },
  bottomSection: {
    alignItems: 'center',
    marginTop: -100,
    marginBottom: 25,
    width: 'auto',
    alignSelf: 'center',
    
    flexDirection: 'column',
    justifyContent: 'center'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  courtText: {
    color: 'white',
    fontSize: 15,
    marginTop: 5,
    fontFamily: 'zilla-slab',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
