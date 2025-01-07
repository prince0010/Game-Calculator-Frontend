import * as Font from 'expo-font';

export const loadFonts = async () => {
  await Font.loadAsync({
    'zilla-slab-bold': require('@/assets/fonts/ZillaSlab-Bold.ttf'),
    'zilla-slab': require('@/assets/fonts/ZillaSlab-Regular.ttf'),
  });
};
