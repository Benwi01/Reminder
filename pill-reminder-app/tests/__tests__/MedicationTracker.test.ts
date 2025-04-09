import { MedicationTracker } from '../../src/services/MedicationTracker';

describe('MedicationTracker', () => {
    let medicationTracker: MedicationTracker;

    beforeEach(() => {
        medicationTracker = new MedicationTracker();
    });

    test('should initialize with no medications taken', () => {
        expect(medicationTracker.hasTakenMedication()).toBe(false);
    });

    test('should allow marking medication as taken', () => {
        medicationTracker.markMedicationAsTaken();
        expect(medicationTracker.hasTakenMedication()).toBe(true);
    });

    test('should reset medication status', () => {
        medicationTracker.markMedicationAsTaken();
        medicationTracker.resetMedicationStatus();
        expect(medicationTracker.hasTakenMedication()).toBe(false);
    });

    test('should track medication schedule correctly', () => {
        const schedule = medicationTracker.getMedicationSchedule();
        expect(schedule).toEqual(expect.arrayContaining([
            expect.objectContaining({
                time: expect.any(String),
                medication: expect.any(String),
            }),
        ]));
    });
});