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

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#282c34',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Pill Reminder' }}
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