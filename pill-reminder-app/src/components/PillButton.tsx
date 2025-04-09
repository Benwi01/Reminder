import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { retroStyles } from '../styles/RetroStyles';

const PILL_HISTORY_KEY = 'pill_history';

export const PillButton = () => {
    const [taken, setTaken] = useState(false);

    useEffect(() => {
        checkPillStatus();
    }, []);

    const checkPillStatus = async () => {
        try {
            const history = await AsyncStorage.getItem(PILL_HISTORY_KEY);
            if (history) {
                const pillHistory = JSON.parse(history);
                const today = new Date().setHours(0, 0, 0, 0);
                const takenToday = pillHistory.some((entry: number) => {
                    const entryDate = new Date(entry).setHours(0, 0, 0, 0);
                    return entryDate === today;
                });
                setTaken(takenToday);
            }
        } catch (error) {
            console.error('Error checking pill status:', error);
        }
    };

    const handlePress = async () => {
        try {
            const now = new Date().getTime();
            const history = await AsyncStorage.getItem(PILL_HISTORY_KEY);
            const pillHistory = history ? JSON.parse(history) : [];
            pillHistory.push(now);
            await AsyncStorage.setItem(PILL_HISTORY_KEY, JSON.stringify(pillHistory));
            setTaken(true);
        } catch (error) {
            console.error('Error saving pill status:', error);
        }
    };

    return (
        <View>
            <TouchableOpacity 
                style={[
                    retroStyles.pixelButton,
                    taken && { backgroundColor: '#b4169b' } // Use secondary color when taken
                ]}
                onPress={handlePress}
                disabled={taken}
            >
                <Text style={retroStyles.pixelButtonText}>
                    {taken ? "Pills Taken Today!" : "I took them!"}
                </Text>
            </TouchableOpacity>
            {taken && (
                <Text style={retroStyles.pixelText}>
                    Great job! Come back tomorrow.
                </Text>
            )}
        </View>
    );
};