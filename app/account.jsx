import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useUser } from '../hooks/useUser';
import { useRouter } from 'expo-router';

export default function AccountScreen() {
  const { user, logout } = useUser();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      router.replace('/login'); // Redirect to login
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.header}>Account</Text>
      <Text>Email: {user?.email || 'Not logged in'}</Text>

      <Button
        mode="contained"
        onPress={handleLogout}
        style={styles.logoutButton}
      >
        Logout
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  header: { marginBottom: 20 },
  logoutButton: { marginTop: 24 },
});
