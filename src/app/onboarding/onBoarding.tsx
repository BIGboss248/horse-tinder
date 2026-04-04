import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeSwitcher } from "../../components/ThemeSwitcher";

export default function OnBoarding() {
  return (

    <SafeAreaView>
      <View className="bg-background h-screen justify-center pr-4 pl-4">
        <Text className="text-foreground font-bold text-center text-2xl mb-6">Complete your profile</Text>
        <Text className="text-foreground text-md">Add your information to get started</Text>
        <View className="size-24 rounded-[48] self-center border-dashed border border-primary"></View>
        <ThemeSwitcher />
      </View>
    </SafeAreaView>
  )
}
