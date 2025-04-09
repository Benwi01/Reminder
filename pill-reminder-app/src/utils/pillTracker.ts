import AsyncStorage from '@react-native-async-storage/async-storage';

const MORNING_PILL_KEY = 'morning_pill_taken';
const EVENING_PILL_KEY = 'evening_pill_taken';

// Define time windows
const MORNING_START = 6; // 6 AM
const MORNING_END = 12;  // 12 PM
const EVENING_START = 18; // 6 PM
const EVENING_END = 23;  // 11 PM

export const isMorningWindow = () => {
    const hour = new Date().getHours();
    return hour >= MORNING_START && hour < MORNING_END;
};

export const isEveningWindow = () => {
    const hour = new Date().getHours();
    return hour >= EVENING_START && hour < EVENING_END;
};

export const getCurrentWindow = () => {
    if (isMorningWindow()) return 'morning';
    if (isEveningWindow()) return 'evening';
    return 'outside';
};

export const savePillTaken = async (window: 'morning' | 'evening') => {
    const key = window === 'morning' ? MORNING_PILL_KEY : EVENING_PILL_KEY;
    const today = new Date().toDateString();
    await AsyncStorage.setItem(key, today);
};

export const checkPillTaken = async (window: 'morning' | 'evening') => {
    const key = window === 'morning' ? MORNING_PILL_KEY : EVENING_PILL_KEY;
    const lastTaken = await AsyncStorage.getItem(key);
    const today = new Date().toDateString();
    return lastTaken === today;
};

export const getNextDoseTime = () => {
    const now = new Date();
    const hour = now.getHours();
    
    if (hour < MORNING_START) {
        return `${MORNING_START}:00 AM`;
    } else if (hour < EVENING_START) {
        return `${EVENING_START}:00 PM`;
    } else {
        // Next day morning
        return `${MORNING_START}:00 AM tomorrow`;
    }
};