import { NativeNavigation } from 'app/navigation/native'
import { Provider } from 'app/provider'
import React, { useCallback, useEffect } from 'react'
import * as SplashScreen from 'expo-splash-screen'

import { useFonts } from 'expo-font'
import * as Inter from '@expo-google-fonts/inter'
import * as Lexend from '@expo-google-fonts/lexend'


export default function App() {
  const {__metadata__:a, useFonts:b, ...InterFonts} =  Inter
  const {__metadata__:c, useFonts:d, ...LexendFonts} =  Lexend
  const [fontsLoaded, fontError] = useFonts({
    ...InterFonts,
    ...LexendFonts
  });

  useEffect(() => {
    (async()=>{ await SplashScreen.preventAutoHideAsync() })()
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) await SplashScreen.hideAsync();
    if (fontError) console.warn(fontError)
  }, [fontsLoaded, fontError]);

  useEffect(() => { onLayoutRootView() }, [fontsLoaded])
  if (!fontsLoaded) return null;

  return (
    <Provider>
      <NativeNavigation />
    </Provider>
  )
}
