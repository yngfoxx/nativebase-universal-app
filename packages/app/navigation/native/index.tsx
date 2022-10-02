import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { AuthScreen } from 'app/features/auth/screen'
import { HomeScreen } from 'app/features/home/screen'
import { UserDetailScreen } from 'app/features/user/detail-screen'

const Stack = createNativeStackNavigator<{
  auth: undefined
  'vendor-dashboard': { vendor: string }
  'user-detail': { id: string }
}>()

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='auth'
        component={AuthScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='vendor-dashboard'
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='user-detail'
        component={UserDetailScreen}
        options={{ title: 'User' }}
      />
    </Stack.Navigator>
  )
}
