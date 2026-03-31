import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';

const ProfileScreen = () => {
  const horseProfile = {
    id: 1,
    name: "Thunderbolt",
    age: 8,
    breed: "Warmblood x Thoroughbred",
    height: "16.2 hh",
    location: "Lexington, Kentucky",
    gender: "Gelding",
    bio: "Hey there! I'm a spirited gelding who loves long trail rides at sunset and jumping anything that looks fun. Looking for a confident rider who appreciates a good gallop and carrot rewards. Not a fan of arena work every day — I need adventure! 🐎✨",
    temperament: ["Energetic", "Affectionate", "Bold"],
    disciplines: ["Jumping", "Trail Riding", "Dressage Basics"],
    tags: ["Trail Lover", "Good with Kids", "Needs Experienced Rider"],
    images: [
      "https://picsum.photos/id/1015/800/600",
      "https://picsum.photos/id/102/800/600",
      "https://picsum.photos/id/133/800/600",
    ],
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <SafeAreaView className="flex-1 bg-[#F5EDE0] dark:bg-[#2C1F14]">
      <StatusBar barStyle="dark-content" backgroundColor="#F5EDE0" />

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Hero Image Section */}
        <View className="relative">
          <Image
            source={{ uri: horseProfile.images[currentImageIndex] }}
            className="w-full h-[420px] object-cover"
            resizeMode="cover"
          />

          {/* Image Pagination Dots */}
          <View className="absolute bottom-6 left-0 right-0 flex-row justify-center gap-2">
            {horseProfile.images.map((_, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === currentImageIndex ? 'bg-amber-600 scale-110' : 'bg-white/70'
                  }`}
              />
            ))}
          </View>

          {/* Top Navigation Bar */}
          <View className="absolute top-8 left-4 right-4 flex-row justify-between items-center z-10">
            <TouchableOpacity
              className="bg-black/40 p-3 rounded-full active:bg-black/60"
              onPress={() => {/* go back */ }}
            >
              <Text className="text-white text-3xl font-light">←</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="bg-black/40 p-3 rounded-full active:bg-black/60"
              onPress={() => {/* open settings */ }}
            >
              <Text className="text-white text-2xl">⚙️</Text>
            </TouchableOpacity>
          </View>

          {/* UNIWIND Logo - Now properly spaced and centered */}
          <View className="absolute top-8 left-1/2 -translate-x-1/2 bg-white/95 px-6 py-2 rounded-full shadow-md">
            <Text className="text-[#8B4513] font-bold text-2xl tracking-widest">
              UNIWIND 🐎
            </Text>
          </View>
        </View>

        {/* Profile Content - Starts after hero image with nice curve */}
        <View className="bg-white dark:bg-[#3A2A1F] rounded-t-3xl -mt-8 px-6 pt-8 pb-12">

          {/* Name & Edit Button */}
          <View className="flex-row justify-between items-start">
            <View className="flex-1 pr-4">
              <Text className="text-4xl font-bold text-[#2C1F14] dark:text-white">
                {horseProfile.name}
              </Text>
              <Text className="text-2xl text-[#8B4513] dark:text-amber-400 mt-1">
                {horseProfile.age} • {horseProfile.breed}
              </Text>
            </View>

            <TouchableOpacity className="bg-amber-600 px-7 py-3.5 rounded-2xl active:bg-amber-700 mt-1">
              <Text className="text-white font-semibold text-base">Edit Profile</Text>
            </TouchableOpacity>
          </View>

          {/* Quick Stats */}
          <View className="flex-row gap-3 mt-8">
            <View className="flex-1 bg-[#F5EDE0] dark:bg-[#4A3728] p-5 rounded-2xl">
              <Text className="text-xs uppercase tracking-widest text-[#8B4513] dark:text-amber-300">Height</Text>
              <Text className="text-2xl font-semibold text-[#2C1F14] dark:text-white mt-1">{horseProfile.height}</Text>
            </View>

            <View className="flex-1 bg-[#F5EDE0] dark:bg-[#4A3728] p-5 rounded-2xl">
              <Text className="text-xs uppercase tracking-widest text-[#8B4513] dark:text-amber-300">Gender</Text>
              <Text className="text-2xl font-semibold text-[#2C1F14] dark:text-white mt-1">{horseProfile.gender}</Text>
            </View>

            <View className="flex-1 bg-[#F5EDE0] dark:bg-[#4A3728] p-5 rounded-2xl">
              <Text className="text-xs uppercase tracking-widest text-[#8B4513] dark:text-amber-300">Location</Text>
              <Text className="text-base font-medium text-[#2C1F14] dark:text-white mt-1 leading-tight">
                {horseProfile.location}
              </Text>
            </View>
          </View>

          {/* Bio */}
          <View className="mt-10">
            <Text className="text-2xl font-semibold text-[#2C1F14] dark:text-white mb-4">About Me</Text>
            <Text className="text-[#4A3728] dark:text-[#D4C3A8] leading-relaxed text-[17px]">
              {horseProfile.bio}
            </Text>
          </View>

          {/* Temperament */}
          <View className="mt-10">
            <Text className="text-2xl font-semibold text-[#2C1F14] dark:text-white mb-4">Temperament</Text>
            <View className="flex-row flex-wrap gap-2">
              {horseProfile.temperament.map((item, i) => (
                <View key={i} className="bg-amber-100 dark:bg-amber-900/50 px-6 py-2.5 rounded-full">
                  <Text className="text-amber-800 dark:text-amber-200 font-medium">🐴 {item}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Disciplines */}
          <View className="mt-10">
            <Text className="text-2xl font-semibold text-[#2C1F14] dark:text-white mb-4">Disciplines</Text>
            <View className="flex-row flex-wrap gap-2">
              {horseProfile.disciplines.map((item, i) => (
                <View key={i} className="bg-emerald-100 dark:bg-emerald-900/50 px-6 py-2.5 rounded-full">
                  <Text className="text-emerald-800 dark:text-emerald-200 font-medium">🏇 {item}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Looking For Tags */}
          <View className="mt-10">
            <Text className="text-2xl font-semibold text-[#2C1F14] dark:text-white mb-4">Looking For</Text>
            <View className="flex-row flex-wrap gap-2">
              {horseProfile.tags.map((tag, i) => (
                <View key={i} className="border border-[#8B4513] dark:border-amber-400 px-6 py-2.5 rounded-full">
                  <Text className="text-[#8B4513] dark:text-amber-300 font-medium">{tag}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* More Photos */}
          <View className="mt-12">
            <Text className="text-2xl font-semibold text-[#2C1F14] dark:text-white mb-5">More Photos</Text>
            <View className="flex-row flex-wrap justify-between gap-3">
              {horseProfile.images.map((img, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => setCurrentImageIndex(index)}
                  className="w-[31%] aspect-square rounded-3xl overflow-hidden border border-[#EDE0C8] dark:border-[#5C4630]"
                >
                  <Image
                    source={{ uri: img }}
                    className="w-full h-full"
                    resizeMode="cover"
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;