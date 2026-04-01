import { Button, StyleSheet, View } from "react-native";
import { useAuth } from "../../context/AuthContext";

export default function Home() {

  const { logout } = useAuth();
  return (
    <View style={styles.container}>
      <Button title="LogOut" onPress={logout} />
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
