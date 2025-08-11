import { FlatList, Pressable, ScrollView, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { sharedStyles } from '../../styles/sharedStyles';
import { router } from 'expo-router';
import { useMeals } from '../../hooks/useMeals';

export default function MyMeals() {
  const {meals} = useMeals()
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.$id}
        contentContainerStyle={styles.list}
        renderItem={({item}) => (
          <Pressable onPress={() => router.push(`/meals/(hidden)/meal-info?id=${item.$id}`)}>
            <Card style={styles.mealCard}>
              <Card.Title title={item.name} />
            </Card>
          </Pressable>
        )}
      />
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
