import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

interface IconProps {
  focused: boolean,
  color: string,
  size: number
}

const loginIcon = ({ focused, color, size }: IconProps) => <Ionicons name={focused ? "key" : "key-outline"} color={color} size={size} />
const signUpIcon = ({ focused, color, size }: IconProps) => <Ionicons name={focused ? "add-circle" : "add-circle-outline"} color={color} size={size} />

export default function AuthLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="login" options={{ tabBarIcon: loginIcon }} />
      <Tabs.Screen name="signUp" options={{ tabBarIcon: signUpIcon }} />
    </Tabs>
  )
}
