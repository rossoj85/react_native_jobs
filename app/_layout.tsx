import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';


import { useColorScheme } from '@/components/useColorScheme';

import {View, ScrollView, SafeAreaView, Text} from 'react-native';
import { useRouter} from 'expo-router';
import {COLORS, icons, images, SIZES} from '../constants'

import { useCallback } from 'react';  


export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '/',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    DMBold: require('../assets/fonts/DMSans-Bold.ttf'), 
    DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
    DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),

    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    // <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    //   {/* <Text> Home is here home is here </Text> */}
    //   <Stack>
    //     <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    //     <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
    //   </Stack>
    // </ThemeProvider>

    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }} >
      {/* <Text>Hello</Text> */}
      <Stack></Stack>
      {/* <Stack.Screen
        options = {{
          headerStyle: {backgroundColor: COLORS.lightWhite},
          headerLeft: () => (
            < ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            < ScreenHeaderBtn iconUrl={icons.menu} dimension="100%" />
          ),
        }} /> */}
    </SafeAreaView>
  );
}
