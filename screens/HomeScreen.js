import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <Text>Test</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "start",
    alignItems: "flex-end",
    color: "#FFFFFF",
    backgroundColor: "#655074",
  },
});
