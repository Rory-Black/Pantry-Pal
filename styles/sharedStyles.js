import { StyleSheet } from 'react-native';

export const sharedStyles = StyleSheet.create({
  mealsContainer: {
    gap: 12,
  },
  mealCard: {
    width: 140,
    height: 100, 
    borderRadius: 12,
    elevation: 3,
    justifyContent: 'center',
    flexShrink: 0, 
  },

  horizontalScroll: {
    maxHeight: 120,
    flexGrow: 0,
    marginBottom: 16,
    marginHorizontal: -20, // Cancels out container padding
    paddingHorizontal: 20, // Re-applies inner spacing
  },

  title: {
    textAlign: 'center',
    marginBottom: 16,
  },
});
