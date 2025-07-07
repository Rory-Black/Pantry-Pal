import { ScrollView, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { sharedStyles } from '../../styles/sharedStyles';
import { router } from 'expo-router';

const meals = [
  { name: 'Spaghetti Bolognese' },
  { name: 'Avocado Toast' },
  { name: 'Chicken Stir Fry' },
];

export default function MyMeals() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {meals.map((meal, index) => (
        <Card
          style={styles.mealCard}
          onPress={() => router.push('/meals/(hidden)/meal-info')}
        >
          <Card.Title title={meal.name} />
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 16,
  },
  card: {
    borderRadius: 12,
    elevation: 3,
  },
});
