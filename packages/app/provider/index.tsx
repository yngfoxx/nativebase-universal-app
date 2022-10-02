import React from 'react'
import { NativeBaseProvider } from 'native-base'
import { NavigationProvider } from './navigation'

import { extendTheme } from 'native-base'
import colors from 'app/provider/theme/colors'
import components from 'app/provider/theme/components'
import { fontConfig, fonts } from 'app/provider/theme/fonts'

// extend theme
export const Theme = extendTheme({
  fonts,
  fontConfig,
  colors,
  components,
  config: {
    useSystemColorMode: true
  }
})
type AppTheme = typeof Theme
declare module "native-base" {
  interface ICustomTheme extends AppTheme {}
}

// provider
export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <NavigationProvider>
      <NativeBaseProvider theme={Theme}>{children}</NativeBaseProvider>
    </NavigationProvider>
  )
}
