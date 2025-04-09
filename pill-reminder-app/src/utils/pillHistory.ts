import AsyncStorage from '@react-native-async-storage/async-storage';

const PILL_HISTORY_KEY = 'pill_history';

interface PillTaken {
  timestamp: number;
  date: string;
}

export async function savePillTaken(): Promise<void> {
  try {
    const now = new Date();
    const newEntry: PillTaken = {
      timestamp: now.getTime(),
      date: now.toISOString(),
    };

    const existingHistory = await getPillHistory();
    existingHistory.push(newEntry);
    
    await AsyncStorage.setItem(PILL_HISTORY_KEY, JSON.stringify(existingHistory));
  } catch (error) {
    console.error('Error saving pill history:', error);
  }
}

export async function getPillHistory(): Promise<PillTaken[]> {
  try {
    const history = await AsyncStorage.getItem(PILL_HISTORY_KEY);
    return history ? JSON.parse(history) : [];
  } catch (error) {
    console.error('Error getting pill history:', error);
    return [];
  }
}

export async function wasPillTakenToday(): Promise<boolean> {
  const history = await getPillHistory();
  const today = new Date().setHours(0, 0, 0, 0);
  
  return history.some(entry => {
    const entryDate = new Date(entry.timestamp).setHours(0, 0, 0, 0);
    return entryDate === today;
  });
}