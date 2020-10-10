import React from 'react';
import { AppLoading } from 'expo';
import Landing from './src/pages/landing';

import { Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins';

export default function App() {
  let [fontsLoaded] = useFonts([
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  ])

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Landing />
  );
}
