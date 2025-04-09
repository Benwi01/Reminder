import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import type { RouteProp } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { retroStyles } from '../styles/RetroStyles';

type RootStackParamList = {
  Home: undefined;
  Notifications: { time: string; onConfirm: () => void };
};

type Props = {
  route: RouteProp<RootStackParamList, 'Notifications'>;
  navigation: StackNavigationProp<RootStackParamList, 'Notifications'>;
};

export default function NotificationWindow({ route, navigation }: Props) {
  const { time, onConfirm } = route.params;

  return (
    <View style={retroStyles.container}>
      <View style={retroStyles.pixelBox}>
        <Text style={retroStyles.pixelTitle}>TIME FOR PILLS!</Text>
        <Text style={retroStyles.pixelText}>{time}</Text>
      </View>

      <TouchableOpacity 
        style={retroStyles.pixelButton}
        onPress={() => {
          onConfirm();
          navigation.goBack();
        }}
      >
        <Text style={retroStyles.pixelButtonText}>I TOOK THEM!</Text>
      </TouchableOpacity>
    </View>
  );
}