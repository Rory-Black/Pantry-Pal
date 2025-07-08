import { Stack } from 'expo-router';
import { Provider as PaperProvider } from 'react-native-paper';
import { UserProvider } from '../contexts/UserContext';
import ProtectedRoute from '../components/ProtectedRoute';

export default function Layout() {
  return (
    <UserProvider>
      <ProtectedRoute>
        <PaperProvider>
          <Stack>
            <Stack.Screen name="index" options={{title: 'Home'}} />
            <Stack.Screen name="pantry" options={{ title: 'My Pantry' }} />
            <Stack.Screen name="callendar" options={{ title: 'Meal Callendar' }} />
          </Stack>
        </PaperProvider>
      </ProtectedRoute>
    </UserProvider>
  );
}
