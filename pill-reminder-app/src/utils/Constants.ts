export const NOTIFICATION_MESSAGES = {
    MORNING_REMINDER: "Time to take your morning pills!",
    EVENING_REMINDER: "Don't forget your evening pills!",
    CONFIRMATION: "Have you taken your pills?",
    NOT_TAKEN: "You haven't confirmed taking your pills yet!",
};

export const TIME_INTERVALS = {
    MORNING_WINDOW: { start: "08:00", end: "12:00" },
    EVENING_WINDOW: { start: "18:00", end: "22:00" },
};

export const NOTIFICATION_DELAY = 15 * 60 * 1000; // 15 minutes in milliseconds