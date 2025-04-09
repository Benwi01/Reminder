export class MedicationTracker {
    private static morningWindow = {
      start: 8, // 8 AM
      end: 12,  // 12 PM
    };
  
    private static eveningWindow = {
      start: 18, // 6 PM
      end: 22,   // 10 PM
    };
  
    static isWithinMedicationWindow(): boolean {
      const currentHour = new Date().getHours();
      return (
        (currentHour >= this.morningWindow.start && currentHour < this.morningWindow.end) ||
        (currentHour >= this.eveningWindow.start && currentHour < this.eveningWindow.end)
      );
    }
  
    static getCurrentWindow(): string {
      const currentHour = new Date().getHours();
      if (currentHour >= this.morningWindow.start && currentHour < this.morningWindow.end) {
        return 'morning';
      } else if (currentHour >= this.eveningWindow.start && currentHour < this.eveningWindow.end) {
        return 'evening';
      }
      return 'outside';
    }
  }