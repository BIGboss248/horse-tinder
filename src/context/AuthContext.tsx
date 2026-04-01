/* file AuthContext.tsx */
import { useRouter } from "expo-router";
import { createContext, ReactNode, useContext, useState } from "react";
import { supabase } from "../lib/supabase/client";

interface UserValue {
  name: string;
  email: string;
  id: string;
}

// Step1 define what data is meant to be shared
interface AuthContextValue {
  user: UserValue | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  signUp: (email: string, password: string) => void;
}

// Step2 Create context with undefined default value forcing provider usage
const AuthContext = createContext<AuthContextValue | undefined>(undefined);

// Step3 Create custom hook (optional, recommended)
export function useAuth() {
  const context = useContext(AuthContext);
  // Safety check: make sure someone didn't forget to wrap with Provider
  if (context === undefined) {
    throw new Error("useAuth must be used inside a AuthProvider");
  }
  return context;
}

// Step4 The provider component which holds the state and provides the value
type AuthProviderProps = {
  children: ReactNode;
}

export function AuthProvider({ children }: Readonly<AuthProviderProps>) {
  // We keep the user in state
  const [user, setUser] = useState<UserValue | null>(null);
  const router = useRouter();
  const login = async (email: string, password: string) => {
    // TODO Remove after testing
    if (email === password && password === "a") {
      setUser({
        name: "Jhon Doe",
        email: "example@gmail.com",
        id: "789456123",
      }
      )
      router.replace("/(tabs)/profile")
      return;
    }
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) {
      throw error;
    }
    if (data.user) {
      console.log(`User logged in`);
      setUser({
        name: data.user.email!,
        email: data.user.email!,
        id: data.user.id,
      })
    }
    router.replace("/(tabs)/about");
  }
  const logout = () => {
    setUser(null);
    router.replace("/(auth)/login");
  }

  const signUp = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp(
      {
        email,
        password
      }
    );
    if (error) {
      throw error;
    }
    if (data.user) {
      setUser({
        name: data.user.email!,
        email: data.user.email!,
        id: data.user.id,
      })
      router.replace("/(tabs)/prfile");
      console.log("User" + data.user.email + "signed up");
    }
  }
  // The value object that all consumers will receive
  const value = {
    user,
    login,
    logout,
    signUp
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
