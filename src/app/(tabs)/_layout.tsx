import { Ionicons } from "@expo/vector-icons";
import { Tabs, useRouter } from "expo-router";
import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";

interface IconProps {
  color: string;
  size: number;
  focused: boolean;
}

export const InfoIcon = ({ color, size, focused }: IconProps) => <Ionicons name={focused ? "home" : "home-outline"} color={color} size={size} />
export const aboutIcon = ({ color, size, focused }: IconProps) => <Ionicons name={focused ? "information-circle" : "information-circle-outline"} color={color} size={size} />
export const profileIcon = ({ color, size, focused }: IconProps) => <Ionicons name={focused ? "person" : "person-outline"} color={color} size={size} />

export default function TabsLayout() {

  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      router.replace("/(auth)/login")
    }
  }, [user])

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "red", headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{ tabBarIcon: InfoIcon }}
      />
      <Tabs.Screen
        name="about"
        options={{ tabBarIcon: aboutIcon }}
      />
      <Tabs.Screen
        name="profile"
        options={{ tabBarIcon: profileIcon }}
      />
    </Tabs>
  )
}
