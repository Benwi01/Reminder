# Pill Reminder App

## Overview
The Pill Reminder App is a mobile application designed to help users manage their medication schedules effectively. With an engaging 8-bit graphic style, the app provides reminders for taking medications during designated time windows in the morning and evening.

## Features
- **Two Notification Windows**: Users receive notifications during two 4-hour windows each day—one in the morning and one in the evening.
- **Push Notifications**: The app sends push notifications to remind users to take their pills.
- **Confirmation System**: Users can confirm when they have taken their medication, and if they forget, the app will send a follow-up notification at the end of each window.
- **Pixel Art Graphics**: The app features charming 8-bit graphics to enhance the user experience.

## Project Structure
```
pill-reminder-app
├── src
│   ├── app.ts
│   ├── components
│   │   ├── HomeScreen.tsx
│   │   ├── NotificationWindow.tsx
│   │   └── PixelArtAssets.tsx
│   ├── services
│   │   ├── NotificationService.ts
│   │   └── MedicationTracker.ts
│   ├── styles
│   │   └── RetroStyles.ts
│   ├── utils
│   │   ├── TimeWindow.ts
│   │   └── Constants.ts
│   └── types
│       └── index.ts
├── tests
│   └── __tests__
│       └── MedicationTracker.test.ts
├── app.json
├── package.json
├── tsconfig.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd pill-reminder-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
To start the application, run:
```
npm start
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.