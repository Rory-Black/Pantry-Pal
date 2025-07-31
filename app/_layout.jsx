import { Stack } from 'expo-router';
import { Provider as PaperProvider, ActivityIndicator } from 'react-native-paper';
import { UserProvider } from '../contexts/UserContext';
import { useUser } from '../hooks/useUser';
import { Slot } from 'expo-router';
import { View } from 'react-native';
import ProtectedRoute from '../components/ProtectedRoute';

function AppContent() {
  const { user, loading } = useUser();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // If no user, only render the children (no stack)
  if (!user) {
    return <Slot />;
  }

  // If user is logged in, show stack navigation
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="pantry" options={{ title: 'My Pantry' }} />
      <Stack.Screen name="callendar" options={{ title: 'Meal Calendar' }} />
    </Stack>
  );
}

export default function Layout() {
  return (
    <UserProvider>
      <ProtectedRoute>
        <PaperProvider>
          <AppContent />
        </PaperProvider>
      </ProtectedRoute>
    </UserProvider>
  );
}