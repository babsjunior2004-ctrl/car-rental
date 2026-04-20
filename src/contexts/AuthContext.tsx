import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  password: string; // Pour la simulation de réinitialisation
}

interface UserWithoutPassword {
  id: number;
  name: string;
  email: string;
}

interface AuthContextType {
  user: UserWithoutPassword | null;
  login: (email: string, password: string) => boolean;
  register: (name: string, email: string, password: string) => boolean;
  logout: () => void;
  resetPassword: (email: string) => boolean;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  // Charger l'utilisateur depuis localStorage au démarrage
  const [user, setUser] = useState<UserWithoutPassword | null>(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Stocker les utilisateurs inscrits (simulation d'une base de données)
  const [users, setUsers] = useState<User[]>(() => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers
      ? JSON.parse(savedUsers)
      : [
          {
            id: 1,
            name: "Test User",
            email: "test@example.com",
            password: "password",
          },
        ];
  });

  const login = (email: string, password: string): boolean => {
    const foundUser = users.find(
      (u) => u.email === email && u.password === password,
    );
    if (foundUser) {
      const userWithoutPassword: UserWithoutPassword = {
        id: foundUser.id,
        name: foundUser.name,
        email: foundUser.email,
      };
      setUser(userWithoutPassword);
      localStorage.setItem("user", JSON.stringify(userWithoutPassword));
      return true;
    }
    return false;
  };

  const register = (name: string, email: string, password: string): boolean => {
    // Vérifier si l'utilisateur existe déjà
    if (users.some((u) => u.email === email)) {
      return false;
    }

    const newUser = { id: Date.now(), name, email, password };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    const userWithoutPassword: UserWithoutPassword = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    };
    setUser(userWithoutPassword);
    localStorage.setItem("user", JSON.stringify(userWithoutPassword));
    return true;
  };

  const resetPassword = (email: string): boolean => {
    const userIndex = users.findIndex((u) => u.email === email);
    if (userIndex !== -1) {
      // Générer un nouveau mot de passe temporaire
      const tempPassword = Math.random().toString(36).slice(-8);
      const updatedUsers = [...users];
      updatedUsers[userIndex].password = tempPassword;
      setUsers(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers));

      // Simulation d'envoi d'email
      console.log(`Nouveau mot de passe pour ${email}: ${tempPassword}`);
      alert(
        `Un nouveau mot de passe temporaire a été envoyé à ${email}. Nouveau mot de passe: ${tempPassword}`,
      );
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const isAuthenticated = user !== null;

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout, resetPassword, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};
