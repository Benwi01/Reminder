export const morningTimeWindow = { start: '08:00', end: '12:00' };
export const eveningTimeWindow = { start: '18:00', end: '22:00' };

export function isWithinTimeWindow(currentTime: string, timeWindow: { start: string; end: string }): boolean {
    const current = new Date(`1970-01-01T${currentTime}:00`);
    const start = new Date(`1970-01-01T${timeWindow.start}:00`);
    const end = new Date(`1970-01-01T${timeWindow.end}:00`);

    return current >= start && current <= end;
}