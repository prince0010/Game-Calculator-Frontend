import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AddScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Add Game</Text>
        <View style={styles.iconsContainer}>
          <TouchableOpacity style={styles.icon}>
            <Ionicons name="search" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Ionicons name="ellipsis-vertical" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Subtitle */}
      <View style={styles.subtitleContainer}>
        <View style={styles.subtitleWithCircle}>
          <Ionicons name="person" size={30} color="white" style={styles.icon} />
          <Text style={styles.text1}>Add Game</Text>
        </View>
      </View>

      {/* Play Type Section */}
      <View>
        <View>
          <Text style={styles.text2}>Please Choose Play Type</Text>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.playButton}>
            <Text style={styles.buttonText}>1 v 1</Text>
          </TouchableOpacity >
          <TouchableOpacity style={styles.playButton}>
            <Text style={styles.buttonText}>2 v 2</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    backgroundColor: "black",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    fontFamily: "zilla-slab-bold",
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  subtitleContainer: {
    backgroundColor: "black",
    paddingHorizontal: 16,
    paddingVertical: 15,
    marginTop: 25,
    borderWidth: 1,
    borderBottomColor: "white",
    width: 190,
    alignSelf: "center",
  },
  subtitleWithCircle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  icon: {
    marginRight: 5,
    color: "#67C169",
  },
  text1: {
    color: "#67C169",
    fontSize: 21,
    fontFamily: "zilla-slab",
    textAlign: "center",
  },
  text2: {
    color: "#67C169",
    fontSize: 21,
    fontFamily: "zilla-slab",
    textAlign: "center",
    marginTop: 160,
    marginBottom: 40,
    borderWidth: 1,
    borderTopColor: "white",
    borderBottomColor: "white",
    width: 260,
    padding: 15,
    alignSelf: "center",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 50, 
  },
  playButton: {
    backgroundColor: "#67C169",
    paddingVertical: 18,
    paddingHorizontal: 50,
    borderRadius: 14,
    borderColor: 'white',
    borderWidth: 1,
  },
  buttonText: {
    color: "#002F06",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "zilla-slab-bold",
  },
});
