import { ColorPicker } from "@expo/ui/swift-ui";
import { Platform, StyleSheet, Text, View } from "react-native";

export default function Index() {

  return (
    <View style = {styles.container}>
      {Platform.OS === "ios" && <ColorPicker selection={"#ffffff"} />}
      <Text>Edit src/app/index.tsx to edit this screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
