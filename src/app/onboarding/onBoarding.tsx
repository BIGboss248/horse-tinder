import { Alert, Pressable, Text, TextInput, TouchableOpacity, View, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeSwitcher } from "../../components/ThemeSwitcher";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { StatusBar } from 'expo-status-bar';
import { Image } from "expo-image";

export default function OnBoarding() {

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission denied", "We need permission to select a profile image");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"], // Note: Newer versions use ['images'], old use ImagePicker.MediaTypeOptions.Images
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8
    });

    if (!result.canceled && result.assets && result.assets[0]) {
      setProfileImage(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission denied", "We need permission to use the camera");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8
    });

    if (!result.canceled && result.assets && result.assets[0]) {
      setProfileImage(result.assets[0].uri);
    }
  };
  const userChoice = () => {
    Alert.alert(
      "Profile image",
      "Choose an option",
      [
        {
          text: "Gallery",
          onPress: pickImage,
          isPreferred: true
        },
        {
          text: "Camera",
          onPress: takePhoto,
        },
        {
          text: "Cancel",
          style: "cancel"
        }
      ]
    )
  }

  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <View className="bg-background h-screen justify-center pr-4 pl-4">
        <Text className="text-foreground font-black text-2xl mb-4 ">Complete your profile</Text>
        <Text className="text-foreground text-md">Add your information to get started</Text>
        <TouchableOpacity
          className="size-24 rounded-full self-center border-dashed border border-primary mb-4 mt-4 items-center justify-center overflow-hidden"
          onPress={userChoice}
        >
          {profileImage ? (
            <Image
              source={profileImage} // expo-image can take the string directly
              style={{ width: '100%', height: '100%' }} // Ensure it fills the Touchable
              className="size-24"
              contentFit="cover"
            />
          ) : (
            <Text className="text-2xl text-foreground">+</Text>
          )}
          {/* Rest of your label */}
        </TouchableOpacity>
        <View className="mb-2">
          <Text className="text-muted">Name</Text>
          <TextInput
            className="border border-border-main" /* Uniwind */
            placeholder="Enter your name"
            value={name}  /* This with onPress function will save the value to name state */
            onChangeText={setName}
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
            onChangeText={setLastName}
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
    </SafeAreaView >
  )
}
