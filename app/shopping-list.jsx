import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Card, Text, List } from 'react-native-paper';
import { sharedStyles } from '../styles/sharedStyles';
import { router } from 'expo-router';

export default function ShoppingListScreen() {
  const [shoppingListItems] = useState(['Milk', 'Eggs', 'Pasta', 'Tomato Sauce']);
  const [meals] = useState([
    { name: 'Spaghetti Bolognese' },
    { name: 'Omelette' },
    { name: 'Tomato Soup' },
  ]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text variant="headlineMedium" style={sharedStyles.title}>Shopping List</Text>

      {/* Horizontal scroll of meals */}
      {/* TODO: add links to all the recipe pages */}
      {/* TODO: add an icon with a number for missing ingredients */}
      <Text variant="titleMedium" style={styles.sectionTitle}>
        Meals In List
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={sharedStyles.horizontalScroll}
        contentContainerStyle={sharedStyles.mealsContainer}
      >
        {meals.map((meal, index) => (
          <Card
            style={sharedStyles.mealCard}
            onPress={() => router.push('/meals/(hidden)/meal-info')}
          >
            <Card.Content>
              <Text style={styles.mealText}>{meal.name}</Text>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>

      {/* Shopping list items */}
      <Card style={styles.card}>
        <Card.Title title="Items to Buy" />
        <Card.Content>
          {shoppingListItems.length > 0 ? (
            shoppingListItems.map((item, index) => (
              <List.Item
                key={index}
                title={item}
                left={(props) => <List.Icon {...props} icon="cart-outline" />}
              />
            ))
          ) : (
            <Text>No items in shopping list.</Text>
          )}
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 20,
    backgroundColor: '#fff',
  },
  card: {
    borderRadius: 12,
    elevation: 2,
  },
});
