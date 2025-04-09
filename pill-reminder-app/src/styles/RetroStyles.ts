import { StyleSheet } from 'react-native';

const PIXEL_COLORS = {
  background: '#ffffff',
  primary: '#2c9e3e',    // Softer green for better contrast
  secondary: '#b4169b',  // Darker magenta
  accent: '#ffa500',     // Orange instead of yellow for better visibility
  text: '#1a1a1a',       // Softer black
};

const PIXEL_BORDERS = {
  borderWidth: 3,
  borderStyle: 'solid' as const,
};

export const retroStyles = StyleSheet.create({
  container: {
    backgroundColor: PIXEL_COLORS.background,
    padding: 8,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pixelBox: {
    ...PIXEL_BORDERS,
    backgroundColor: PIXEL_COLORS.background,
    borderColor: PIXEL_COLORS.primary,
    padding: 16,
    margin: 8,
    // 8-bit style shadow
    shadowColor: PIXEL_COLORS.primary,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 0,
  },
  pixelTitle: {
    color: PIXEL_COLORS.primary,
    fontSize: 24,
    fontFamily: 'PressStart2P',
    textAlign: 'center',
    textShadowColor: PIXEL_COLORS.primary,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 0,
    marginBottom: 8,
  },
  pixelText: {
    color: PIXEL_COLORS.text,
    fontSize: 16,
    fontFamily: 'PressStart2P',
    textAlign: 'center',
    lineHeight: 24,
  },
  pixelButton: {
    ...PIXEL_BORDERS,
    backgroundColor: PIXEL_COLORS.primary,
    borderColor: PIXEL_COLORS.text,
    padding: 12,
    margin: 8,
    minWidth: 200,
    // 8-bit style shadow
    shadowColor: '#000000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 0,
  },
  pixelButtonText: {
    color: PIXEL_COLORS.background,
    fontSize: 16,
    fontFamily: 'PressStart2P',
    textAlign: 'center',
  },
  nextDoseContainer: {
    ...PIXEL_BORDERS,
    backgroundColor: PIXEL_COLORS.background,
    borderColor: PIXEL_COLORS.secondary,
    padding: 16,
    margin: 16,
    minWidth: 280,
    // 8-bit style shadow
    shadowColor: PIXEL_COLORS.secondary,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 0,
  },
  nextDoseLabel: {
    color: PIXEL_COLORS.secondary,
    fontSize: 16,
    fontFamily: 'PressStart2P',
    marginBottom: 8,
  },
  nextDoseTime: {
    color: PIXEL_COLORS.accent,
    fontSize: 20,
    fontFamily: 'PressStart2P',
  },
});