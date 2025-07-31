import { Stack } from 'expo-router';

export const unstable_settings = {
  navigationBar: {
    visible: false,
  },
};

export default function AuthLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
