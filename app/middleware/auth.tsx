import { Stack, useRouter, useSegments } from 'expo-router';
import { useEffect } from 'react';

const useAuth = () => {
  const segments = useSegments();
  const router = useRouter();
  const isLoggedIn = false; 

  useEffect(() => {
    if (!isLoggedIn && segments[0] !== 'screens' || segments[1] !== 'loginScreen') {
      router.replace('/screens/loginScreen');
    }
  }, [segments, isLoggedIn]);
};

export default function AuthLayout() {
  useAuth();
  return <Stack />;
}
