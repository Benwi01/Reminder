export interface Medication {
    id: string;
    name: string;
    dosage: string;
    frequency: number; // times per day
    lastTaken: Date | null;
}

export interface Notification {
    id: string;
    message: string;
    time: Date;
}

export interface UserSettings {
    notificationsEnabled: boolean;
    morningWindowStart: Date;
    morningWindowEnd: Date;
    eveningWindowStart: Date;
    eveningWindowEnd: Date;
}