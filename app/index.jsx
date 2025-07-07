import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Button, Text, Card } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { sharedStyles } from '../styles/sharedStyles';

export default function HomeScreen() {
  const router = useRouter();

  // Placeholder meals selected for today
  const todaysMeals = [
    { name: 'Chicken Salad' },
    { name: 'Veggie Stir Fry' },
    { name: 'Pancakes' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>Pantry Pal</Text>

      <Text variant="titleMedium" style={styles.sectionTitle}>
        Meals Planned for Today
      </Text>
      <Text variant="bodySmall" style={styles.sectionSubtitle}>
        These are the meals you’ve selected for today.
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={true}
        style={sharedStyles.horizontalScroll}
        contentContainerStyle={sharedStyles.mealsContainer}
      >
        {todaysMeals.map((meal, index) => (
          <Card
            style={sharedStyles.mealCard}
            onPress={() => router.push('/meals/(hidden)/meal-info')}
          >
            <Card.Content>
              <Text>{meal.name}</Text>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>

      {/* Buttons */}
      <Button
        mode="contained"
        icon="clipboard-list-outline"
        style={styles.button}
        onPress={() => router.push('/callendar')}
      >
        Meal Callendar
      </Button>

      <Button
        mode="contained"
        icon="clipboard-list-outline"
        style={styles.button}
        onPress={() => router.push('/shopping-list')}
      >
        Shopping List
      </Button>

      <Button
        mode="contained"
        icon="fridge-outline"
        style={styles.button}
        onPress={() => router.push('/pantry')}
      >
        Manage Pantry
      </Button>

      <Button
        mode="contained"
        icon="silverware-fork-knife"
        style={styles.button}
        onPress={() => router.push('/meals')}
      >
        Show Meals
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 16,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  button: {
    marginTop: 10,
    borderRadius: 10,
  },
});
