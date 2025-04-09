import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { getCurrentWindow, checkPillTaken, savePillTaken, getNextDoseTime } from '../utils/pillTracker';
import { retroStyles } from '../styles/RetroStyles';

export default function HomeScreen() {
    const [morningTaken, setMorningTaken] = useState(false);
    const [eveningTaken, setEveningTaken] = useState(false);
    const [currentWindow, setCurrentWindow] = useState<'morning' | 'evening' | 'outside'>('outside');
    const [nextDose, setNextDose] = useState('');

    useEffect(() => {
        checkStatus();
        const interval = setInterval(checkStatus, 60000); // Update every minute
        return () => clearInterval(interval);
    }, []);

    const checkStatus = async () => {
        const window = getCurrentWindow();
        setCurrentWindow(window);
        setMorningTaken(await checkPillTaken('morning'));
        setEveningTaken(await checkPillTaken('evening'));
        setNextDose(getNextDoseTime());
    };

    const handlePillTaken = async () => {
        if (currentWindow === 'outside') return;
        await savePillTaken(currentWindow);
        await checkStatus();
    };

    const getButtonText = () => {
        if (currentWindow === 'outside') return 'Wait for next dose window';
        if (currentWindow === 'morning' && morningTaken) return 'Morning Pills Taken!';
        if (currentWindow === 'evening' && eveningTaken) return 'Evening Pills Taken!';
        return 'I took them!';
    };

    const isButtonDisabled = () => {
        if (currentWindow === 'outside') return true;
        if (currentWindow === 'morning') return morningTaken;
        return eveningTaken;
    };

    return (
        <View style={retroStyles.container}>
            <View style={retroStyles.nextDoseContainer}>
                <Text style={retroStyles.nextDoseLabel}>Next Dose:</Text>
                <Text style={retroStyles.nextDoseTime}>{nextDose}</Text>
            </View>

            <View style={retroStyles.statusContainer}>
                <Text style={retroStyles.statusText}>
                    Morning: {morningTaken ? '✓' : '⨯'}
                </Text>
                <Text style={retroStyles.statusText}>
                    Evening: {eveningTaken ? '✓' : '⨯'}
                </Text>
            </View>

            <TouchableOpacity 
                style={[
                    retroStyles.pixelButton,
                    isButtonDisabled() && retroStyles.pixelButtonDisabled
                ]}
                onPress={handlePillTaken}
                disabled={isButtonDisabled()}
            >
                <Text style={retroStyles.pixelButtonText}>
                    {getButtonText()}
                </Text>
            </TouchableOpacity>
        </View>
    );
}