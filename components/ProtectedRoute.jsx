import { useUser } from '../hooks/useUser';
import { useRouter, useSegments } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';

export default function ProtectedRoute({ children }) {
  const { user, loading } = useUser();
  const router = useRouter();
  const segments = useSegments();

  const inAuthGroup = segments[0] === '(auth)'; // Adjust if your auth is in a group route

  useEffect(() => {
    if (!loading) {
      if (!user && !inAuthGroup) {
        router.replace('/login');
      }
    }
  }, [user, loading]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }

  return children;
}
