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

export default function Login() {
  const { login } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    setLoading(true);
    try {
      login(email, password); // assuming login is async
    } catch (error: any) {
      Alert.alert(
        'Login Failed',
        error.message || 'Invalid email or password'
      );
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
          contentContainerClassName="flex-grow justify-center px-6 py-10"
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Header / Branding */}
          <View className="items-center mb-12">
            <View className="bg-white dark:bg-[#3A2A1F] w-24 h-24 rounded-3xl items-center justify-center mb-6 shadow-sm">
              <Text className="text-5xl">🐎</Text>
            </View>

            <Text className="text-4xl text-center font-bold text-[#2C1F14] dark:text-white tracking-tight">
              Welcome Back
            </Text>
            <Text className="text-[#8B4513] dark:text-amber-400 text-lg mt-2">
              Sign in to continue to Horse Tinder!
            </Text>
          </View>

          {/* Form */}
          <View className="space-y-6">
            {/* Email Field */}
            <View>
              <Text className="text-[#4A3728] dark:text-[#D4C3A8] text-sm font-semibold mb-2 ml-1">
                Email
              </Text>
              <TextInput
                className="bg-white dark:bg-[#3A2A1F] border border-[#E5D5B8] dark:border-[#5C4630] rounded-2xl px-5 py-4 text-base text-[#2C1F14] dark:text-white"
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                placeholderTextColor="#9C8A6F"

              />
            </View>

            {/* Password Field */}
            <View>
              <Text className="text-[#4A3728] dark:text-[#D4C3A8] text-sm font-semibold mb-2 ml-1">
                Password
              </Text>
              <View className="bg-white dark:bg-[#3A2A1F] border border-[#E5D5B8] dark:border-[#5C4630] rounded-2xl flex-row items-center px-5">
                <TextInput
                  className="flex-1 py-4 text-base text-[#2C1F14] dark:text-white"
                  placeholder="Enter your password"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  placeholderTextColor="#9C8A6F"
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  className="p-2"
                >
                  <Text className="text-2xl">
                    {showPassword ? '🙈' : '👁️'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Forgot Password */}
            <TouchableOpacity className="self-end mt-1">
              <Text className="text-amber-600 dark:text-amber-400 font-medium text-sm">
                Forgot Password?
              </Text>
            </TouchableOpacity>

            {/* Login Button */}
            <TouchableOpacity
              className={`mt-4 py-4 rounded-2xl items-center justify-center ${loading
                ? 'bg-amber-400'
                : 'bg-amber-600 active:bg-amber-700'
                }`}
              onPress={handleLogin}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color="#fff" size="small" />
              ) : (
                <Text className="text-white font-semibold text-lg tracking-wide">
                  Login
                </Text>
              )}
            </TouchableOpacity>
          </View>

          {/* Footer */}
          <View className="flex-row justify-center mt-12">
            <Text className="text-[#4A3728] dark:text-[#D4C3A8] text-base">
              Don't have an account?{' '}
            </Text>
            <TouchableOpacity onPress={() => router.replace("/(auth)/signUp")}>
              <Text className="text-amber-600 dark:text-amber-400 font-semibold text-base">
                Sign up
              </Text>
            </TouchableOpacity>
          </View>

          {/* App Branding at Bottom */}
          <View className="items-center mt-16 opacity-75">
            <Text className="text-[#8B4513] dark:text-amber-500 font-bold text-xl tracking-widest">
              HORSE TINDER 🐎
            </Text>
            <Text className="text-xs text-[#8B4513] dark:text-amber-600/70 mt-1">
              Find your perfect horse match
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
