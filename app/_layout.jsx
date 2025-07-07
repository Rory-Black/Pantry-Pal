import { Stack } from 'expo-router';
import { Provider as PaperProvider } from 'react-native-paper';

export default function Layout() {
  return (
    <PaperProvider>
      <Stack>
        <Stack.Screen name="index" options={{title: 'Home'}} />
		<Stack.Screen name="pantry" options={{ title: 'My Pantry' }} />
		<Stack.Screen name="callendar" options={{ title: 'Meal Callendar' }} />
      </Stack>
    </PaperProvider>
  );
}
