import { StyleSheet } from 'react-native';

const PIXEL_COLORS = {
  background: '#F5F5F5',    // Light gray
  primary: '#A7C7E7',      // Cool pastel blue
  secondary: '#B6D7A8',    // Muted sage green
  accent: '#A4B5C6',       // Steel blue gray
  accentBorder: '#87A2BF', // Deeper blue gray
  disabledColor: '#D3D3D3',// Light gray
  text: '#4A4A4A',         // Dark gray
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
  },
  headerContainer: {
    width: '100%',
    padding: 16,
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: PIXEL_COLORS.primary,
  },
  pixelBox: {
    ...PIXEL_BORDERS,
    backgroundColor: PIXEL_COLORS.background,
    borderColor: PIXEL_COLORS.primary,
    padding: 16,
    margin: 8,
    shadowColor: PIXEL_COLORS.primary,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.2,
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
    backgroundColor: PIXEL_COLORS.accent,
    borderColor: PIXEL_COLORS.accentBorder,
    padding: 16,
    margin: 12,
    minWidth: 220,
    borderRadius: 4,
    shadowColor: PIXEL_COLORS.accentBorder,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 0,
    elevation: 4,
  },
  pixelButtonText: {
    color: PIXEL_COLORS.text,
    fontSize: 18,
    fontFamily: 'PressStart2P',
    textAlign: 'center',
    textShadowColor: 'rgba(255, 255, 255, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 0,
  },
  pixelButtonDisabled: {
    backgroundColor: PIXEL_COLORS.disabledColor,
    borderColor: '#A9A9A9',
    opacity: 0.9,
  },
  nextDoseContainer: {
    ...PIXEL_BORDERS,
    backgroundColor: PIXEL_COLORS.background,
    borderColor: PIXEL_COLORS.secondary,
    padding: 16,
    margin: 16,
    minWidth: 280,
    shadowColor: PIXEL_COLORS.secondary,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 0,
  },
  nextDoseLabel: {
    color: PIXEL_COLORS.secondary,
    fontSize: 16,
    fontFamily: 'PressStart2P',
    marginBottom: 8,
  },
  nextDoseTime: {
    color: PIXEL_COLORS.primary,
    fontSize: 20,
    fontFamily: 'PressStart2P',
  },
  statusContainer: {
    ...PIXEL_BORDERS,
    backgroundColor: PIXEL_COLORS.background,
    borderColor: PIXEL_COLORS.secondary,
    padding: 16,
    margin: 16,
    width: '80%',
  },
  statusText: {
    color: PIXEL_COLORS.text,
    fontSize: 16,
    fontFamily: 'PressStart2P',
    textAlign: 'left',
    marginVertical: 8,
  },
});