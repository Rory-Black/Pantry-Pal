import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button, Snackbar } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { useUser } from '../../hooks/useUser'; // Adjust if needed

export default function LoginScreen() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { user, login, getCurrentUser } = useUser();

  // Optional: Log user status for debug
  useEffect(() => {
    console.log('Current user in useEffect:', user);
  }, [user]);

  const handleLogin = async () => {
    try {
      await login(email, password); // Calls Appwrite or your custom login
      const currentUser = await getCurrentUser(); // Refetch user info after login
      console.log('Logged in user:', currentUser);

      router.replace('/'); // Navigate to home
    } catch (err) {
      console.error('Login error:', err);
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Login</Text>

      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        style={styles.input}
      />

      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Login
      </Button>

      <Button onPress={() => router.push('/register')} style={styles.link}>
        Don't have an account? Register
      </Button>

      <Snackbar visible={!!error} onDismiss={() => setError('')}>
        {error}
      </Snackbar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  input: { marginBottom: 16 },
  button: { marginTop: 8 },
  link: { marginTop: 8 },
});
