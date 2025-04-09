import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/components/HomeScreen';
import NotificationWindow from './src/components/NotificationWindow';

type RootStackParamList = {
  Home: undefined;
  Notifications: {
    time: string;
    onConfirm: () => void;
  };
};

const Stack = createStackNavigator<RootStackParamList>();

import { useFonts, PressStart2P_400Regular } from '@expo-google-fonts/press-start-2p';

export default function App() {
  let [fontsLoaded] = useFonts({
    'PressStart2P': PressStart2P_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#9AC8EB', // Soft sky blue
          },
          headerTintColor: '#4A4A4A', // Soft gray
          headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: 'PressStart2P',
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'GETYOURPILLS' }}
        />
        <Stack.Screen 
          name="Notifications" 
          component={NotificationWindow} 
          options={{ title: 'Take Your Pills' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}