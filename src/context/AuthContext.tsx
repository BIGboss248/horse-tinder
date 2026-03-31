/* file AuthContext.tsx */
import { useRouter } from "expo-router";
import { createContext, ReactNode, useContext, useState } from "react";

interface UserValue {
  name: string;
  email: string;
  id: string;
}

// Step1 define what data is meant to be shared
interface AuthContextValue {
  user: UserValue | null;
  login: () => void;
  logout: () => void;
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
  const login = () => {
    setUser({
      name: "Jhon Doe",
      email: "example@gmail.com",
      id: "789456123"
    }
    )
    router.replace("/(tabs)/about");
  }
  const logout = () => {
    setUser(null);
    router.replace("/(auth)/login");
  }

  // The value object that all consumers will receive
  const value = {
    user,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
