import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import './global.css';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
          contentStyle: { backgroundColor: '#F1F8E9' },
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="login" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="hasil-analisis" options={{ animation: 'slide_from_bottom' }} />
        <Stack.Screen name="detail-resep" />
        <Stack.Screen name="detail-buah" />
        <Stack.Screen name="riwayat" />
      </Stack>
    </>
  );
}
