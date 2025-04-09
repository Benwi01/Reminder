export const MEDICATION_WINDOWS = {
    morning: {
      start: 8, // 8 AM
      end: 12,  // 12 PM
      label: 'Morning'
    },
    evening: {
      start: 18, // 6 PM
      end: 22,   // 10 PM
      label: 'Evening'
    }
  };
  
  export function getNextMedicationWindow() {
    const now = new Date();
    const currentHour = now.getHours();
  
    if (currentHour < MEDICATION_WINDOWS.morning.start) {
      return {
        window: MEDICATION_WINDOWS.morning.label,
        time: `${MEDICATION_WINDOWS.morning.start}:00 AM`
      };
    } else if (currentHour < MEDICATION_WINDOWS.evening.start) {
      return {
        window: MEDICATION_WINDOWS.evening.label,
        time: `${MEDICATION_WINDOWS.evening.start}:00 PM`
      };
    } else {
      // Next day morning
      return {
        window: MEDICATION_WINDOWS.morning.label,
        time: `${MEDICATION_WINDOWS.morning.start}:00 AM Tomorrow`
      };
    }
  }