import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, Button, Card, Divider, Chip } from 'react-native-paper';

export default function MealInfoScreen() {
  // Placeholder data
  const meal = {
    title: 'Spaghetti Bolognese [Placeholder]',
    mealType: 'Dinner',
    time: '45 mins',
    difficulty: 'Medium',
    ingredients: [
      { name: 'Spaghetti', quantity: '200g', has: true },
      { name: 'Minced Beef', quantity: '300g', has: false },
      { name: 'Tomato Sauce', quantity: '150ml', has: true },
      { name: 'Onion', quantity: '1', has: false },
    ],
    instructions: [
      'Boil pasta until al dente.',
      'Cook minced beef until browned.',
      'Add sauce and simmer.',
      'Serve with spaghetti.',
    ],
  };

  const missingCount = meal.ingredients.filter(i => !i.has).length;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>
        {meal.title}
      </Text>

      <Button
        mode="contained"
        icon="calendar-plus"
        onPress={() => console.log('Add to plan')}
        style={styles.button}
      >
        Add to Plan
      </Button>

      {/* Info Card */}
      <Card style={styles.card}>
        <Card.Title title="Meal Details" />
        <Card.Content style={styles.infoRow}>
          <Chip icon="silverware-fork-knife" style={styles.chip}>
            {meal.mealType}
          </Chip>
          <Chip icon="clock-outline" style={styles.chip}>
            {meal.time}
          </Chip>
          <Chip icon="speedometer" style={styles.chip}>
            {meal.difficulty}
          </Chip>
        </Card.Content>
      </Card>

      {/* Ingredients Card */}
      <Card style={styles.card}>
        <Card.Title title="Ingredients" />
        <Card.Content>
          <View style={styles.missingBanner}>
            <Text style={styles.missingText}>{missingCount} missing ingredient(s)</Text>
          </View>
          <Divider style={{ marginBottom: 8 }} />
          {meal.ingredients.map((item, index) => (
            <View key={index} style={styles.ingredientRow}>
              <Text style={item.has ? styles.ingredientText : styles.ingredientMissing}>
                {item.name} — {item.quantity}
              </Text>
            </View>
          ))}
        </Card.Content>
      </Card>

      {/* Instructions Card */}
      <Card style={styles.card}>
        <Card.Title title="Instructions" />
        <Card.Content>
          {meal.instructions.map((step, index) => (
            <Text key={index} style={styles.instructionText}>
              {index + 1}. {step}
            </Text>
          ))}
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    gap: 16,
  },
  title: {
    textAlign: 'center',
    marginBottom: 8,
  },
  button: {
    marginBottom: 16,
    borderRadius: 10,
  },
  card: {
    borderRadius: 12,
    elevation: 2,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 8,
  },
  chip: {
    marginBottom: 4,
  },
  missingBanner: {
    backgroundColor: '#ffe0e0',
    padding: 8,
    borderRadius: 6,
    marginBottom: 8,
  },
  missingText: {
    color: '#b00020',
    fontWeight: '600',
  },
  ingredientRow: {
    paddingVertical: 4,
  },
  ingredientText: {
    fontSize: 16,
  },
  ingredientMissing: {
    fontSize: 16,
    color: '#b00020',
  },
  instructionText: {
    marginBottom: 6,
    fontSize: 16,
    lineHeight: 22,
  },
});
