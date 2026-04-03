import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'expo-router';

export default function SignIn() {
  const { signUp } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    setLoading(true);
    try {
      await signUp(email, password); // Update this based on your auth function
    } catch (error: any) {
      Alert.alert("Signup Failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-[#F5EDE0] dark:bg-[#2C1F14]">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <ScrollView
          contentContainerClassName="flex-grow justify-center px-6 py-12"
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Header with Branding */}
          <View className="items-center mb-10">
            <View className="w-28 h-28 bg-white dark:bg-[#3A2A1F] rounded-3xl items-center justify-center shadow-lg mb-6">
              <Text className="text-6xl">🐎</Text>
            </View>
            <Text className="text-4xl font-bold text-[#2C1F14] dark:text-white text-center tracking-tight">
              Horse Tinder!
            </Text>
            <Text className="text-4xl font-bold text-[#2C1F14] dark:text-white text-center tracking-tight">
              Adventure awaits
            </Text>
            <Text className="text-[#8B4513] dark:text-amber-400 text-lg mt-3 text-center">
              Find your perfect equine match
            </Text>
          </View>

          {/* Form Container */}
          <View className="space-y-6">
            {/* Email Input */}
            <View>
              <Text className="ml-1 mb-2 text-sm font-semibold text-[#4A3728] dark:text-[#D4C3A8]">
                Email Address
              </Text>
              <TextInput
                className="bg-white dark:bg-[#3A2A1F] border border-[#E5D5B8] dark:border-[#5C4630] rounded-2xl px-6 py-4 text-base text-[#2C1F14] dark:text-white"
                placeholder="your@email.com"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                placeholderTextColor="#9C8A6F"
              />
            </View>

            {/* Password Input */}
            <View>
              <Text className="ml-1 mb-2 text-sm font-semibold text-[#4A3728] dark:text-[#D4C3A8]">
                Password
              </Text>
              <View className="bg-white dark:bg-[#3A2A1F] border border-[#E5D5B8] dark:border-[#5C4630] rounded-2xl flex-row items-center px-6">
                <TextInput
                  className="flex-1 py-4 text-base text-[#2C1F14] dark:text-white"
                  placeholder="••••••••"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  placeholderTextColor="#9C8A6F"
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  className="p-3"
                >
                  <Text className="text-2xl">
                    {showPassword ? '🙈' : '👁️'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Forgot Password */}
            <TouchableOpacity className="self-end">
              <Text className="text-amber-600 dark:text-amber-400 font-medium text-sm">
                Forgot your password?
              </Text>
            </TouchableOpacity>

            {/* Sign In Button */}
            <TouchableOpacity
              className={`mt-6 py-4 rounded-2xl items-center justify-center shadow-sm ${loading
                ? 'bg-amber-400'
                : 'bg-[#8B4513] active:bg-[#6F370F]'
                }`}
              onPress={handleSignUp}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color="#fff" size="small" />
              ) : (
                <Text className="text-white font-semibold text-lg tracking-wider">
                  Sign Up
                </Text>
              )}
            </TouchableOpacity>
          </View>

          {/* Social / Divider (Optional) */}
          <View className="my-10 flex-row items-center">
            <View className="flex-1 h-px bg-[#E5D5B8] dark:bg-[#5C4630]" />
            <Text className="px-4 text-[#8B4513] dark:text-amber-500 text-sm">OR</Text>
            <View className="flex-1 h-px bg-[#E5D5B8] dark:bg-[#5C4630]" />
          </View>

          {/* Sign Up Link */}
          <View className="flex-row justify-center items-center">
            <Text className="text-[#4A3728] dark:text-[#D4C3A8] text-base">
              New to Horse Tinder?{' '}
            </Text>
            <TouchableOpacity onPress={() => router.replace("/(auth)/login")}>
              <Text className="text-[#8B4513] dark:text-amber-400 font-semibold text-base">
                Create Account
              </Text>
            </TouchableOpacity>
          </View>

          {/* Footer Branding */}
          <View className="items-center mt-16">
            <Text className="text-[#8B4513] dark:text-amber-500 font-bold text-2xl tracking-[3px]">
              HORSE TINDER 🐎
            </Text>
            <Text className="text-xs text-[#8B4513]/70 dark:text-amber-600/70 mt-1">
              Connecting horses & riders
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
