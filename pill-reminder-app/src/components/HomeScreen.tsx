import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { getNextMedicationWindow } from '../utils/MedicationSchedule';
import { retroStyles } from '../styles/RetroStyles';

type RootStackParamList = {
  Home: undefined;
  Notifications: { time: string; onConfirm: () => void };
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [nextMedication, setNextMedication] = useState(getNextMedicationWindow());

  useEffect(() => {
    const timer = setInterval(() => {
      setNextMedication(getNextMedicationWindow());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <View style={retroStyles.container}>
      <Text style={retroStyles.pixelTitle}>PILL REMINDER</Text>
      
      <View style={retroStyles.nextDoseContainer}>
        <Text style={retroStyles.nextDoseLabel}>NEXT DOSE:</Text>
        <Text style={retroStyles.nextDoseTime}>
          {nextMedication.window.toUpperCase()}
          {'\n'}
          {nextMedication.time}
        </Text>
      </View>

      <TouchableOpacity 
        style={retroStyles.pixelButton}
        onPress={() => navigation.navigate('Notifications', {
          time: new Date().toLocaleTimeString(),
          onConfirm: () => console.log('Pills taken')
        })}
      >
        <Text style={retroStyles.pixelButtonText}>TAKE PILLS NOW</Text>
      </TouchableOpacity>
    </View>
  );
}