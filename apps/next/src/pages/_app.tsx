import 'raf/polyfill'
import React from 'react'
import Head from 'next/head'
import { Provider } from 'app/provider'
import type { SolitoAppProps } from 'solito'

import { useFonts } from 'expo-font'
import * as Inter from '@expo-google-fonts/inter'
import * as Lexend from '@expo-google-fonts/lexend'


function NextApp({ Component, pageProps }: SolitoAppProps) {
  const {__metadata__:a, useFonts:b, ...InterFonts} =  Inter
  const {__metadata__:c, useFonts:d, ...LexendFonts} =  Lexend
  const [fontsLoaded, fontError] = useFonts({
    ...InterFonts,
    ...LexendFonts
  });

  if (fontError) console.warn(fontError)
  if (!fontsLoaded) return null

  return (
    <>
      <Head>
        <title>Solito Boilerplate</title>
        <meta name="description" content="Expo + Next.js with Solito" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default NextApp
