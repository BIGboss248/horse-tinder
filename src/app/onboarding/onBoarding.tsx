import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeSwitcher } from "../../components/ThemeSwitcher";
import { useState } from "react";

export default function OnBoarding() {
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  return (
    <SafeAreaView>
      <View className="bg-background h-screen justify-center pr-4 pl-4">
        <Text className="text-foreground font-black text-2xl mb-4 ">Complete your profile</Text>
        <Text className="text-foreground text-md">Add your information to get started</Text>
        <View className="size-24 rounded-[48] self-center border-dashed border border-primary mb-4 mt-4 items-center justify-center">
          <Text className="text-2xl text-foreground">+</Text>
        </View>
        <View className="mb-2">
          <Text className="text-muted">Name</Text>
          <TextInput
            className="border border-border-main" /* Uniwind */
            placeholder="Enter your name"
            value={name}  /* This with onPress function will save the value to name state */
            onPress={() => setName}
            keyboardType="default"
            autoCapitalize="sentences"
            autoCorrect={false}
            placeholderTextColor="#9C8A6F"
          />
        </View>
        <View>
          <Text className="text-muted">Last name</Text>
          <TextInput
            className="border border-border-main" /* Uniwind */
            placeholder="Enter your last name"
            value={lastName}
            onPress={() => setLastName}
            keyboardType="default"
            autoCapitalize="sentences"
            autoCorrect={false}
            placeholderTextColor="#9C8A6F"
          />
        </View>
        <Pressable className="bg-background-secondary pt-1 pb-1 m-2">
          <Text className="text-foreground text-center">Complete Setup</Text>
        </Pressable>
        <ThemeSwitcher />
      </View>
    </SafeAreaView>
  )
}
