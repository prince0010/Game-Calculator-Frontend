import React, { useState } from "react";
import { Text, View, TextInput, FlatList, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import StackNavigator from "../navigation/StackNavigator";

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([
    { id: '1', name: 'Meiji', game: '2 Games' },
    { id: '2', name: 'Micko', game: '4 Games' },
    { id: '3', name: 'Becky', game: '2 Games' },
    { id: '4', name: 'Bayoy', game: '2 Games' },
  ]);

  const filteredData = data.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input}
          placeholder="Search Users..."
          value={searchQuery}
          onChangeText={text => setSearchQuery(text)}
        />
        <Ionicons name="search" size={20} color="#888" style={styles.icon} />
      </View>

      <View style={styles.labelsContainer}>
        <Text style={[styles.label, styles.nameColumn]}>Name</Text>
        <Text style={[styles.label, styles.gameColumn]}>Game</Text>
      </View>

      <FlatList
        data={filteredData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}> 
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.game}>{item.game}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>No results found</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  inputContainer: {
    position: "relative",
    marginBottom: 15,
    marginTop: 10,
  },
  icon: {
    position: "absolute",
    left: 15,
    top: "50%",
    transform: [{ translateY: -10 }],
  },
  input: {
    height: 50,
    fontSize: 16,
    paddingLeft: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
  },
  labelsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#555",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  name: {
    fontSize: 16,
    flex: 2,
  },
  game: {
    fontSize: 16,
    color: "#888",
    textAlign: "right",
    flex: 1,
  },
  empty: {
    marginTop: 20,
    textAlign: "center",
    color: "#888",
  },
  nameColumn: {
    flex: 2,
    textAlign: "left",
  },
  gameColumn: {
    flex: 1,
    textAlign: "right",
  },
});

export default SearchScreen;
