import { ScrollView, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';

const communityMeals = [
  { name: 'Vegan Chili' },
  { name: 'Beef Tacos' },
  { name: 'Quinoa Salad' },
];

export default function DiscoverMeals() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {communityMeals.map((meal, index) => (
        <Card key={index} style={styles.card}>
          <Card.Title title={meal.name} subtitle="Shared by the community" />
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
    elevation: 2,
  },
});
