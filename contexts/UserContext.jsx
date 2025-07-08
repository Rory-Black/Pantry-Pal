import {createContext, useEffect, useState} from 'react'
import { account } from '../lib/appwrite';
import { ID } from 'react-native-appwrite';

export const UserContext = createContext()

export function UserProvider({ children }){
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user session exists on mount
  useEffect(() => {
    getCurrentUser();
  }, []);

  async function getCurrentUser() {
    try {
      const currentUser = await account.get();
      setUser(currentUser);
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  async function login(email, password) {
    try {
      await account.createEmailPasswordSession(email, password);
      await getCurrentUser(); // Update user state
    } catch (error) {
      throw error;
    }
  }

  async function register(email, password, confirmPassword) {
    if (password !== confirmPassword) {
      throw new Error("Passwords don't match");
    }
    try {
      const newUser = await account.create(ID.unique(), email, password);
      // Optionally auto-login after registration
      await login(email, password);
      return newUser;
    } catch (error) {
      throw error;
    }
  }

  async function logout() {
    try {
      await account.deleteSession('current');
      setUser(null);
    } catch (error) {
      throw error;
    }
  }

  return (
    <UserContext.Provider value={{ user, loading, login, register, logout, getCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
}