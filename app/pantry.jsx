import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, DataTable, Card } from 'react-native-paper';

const PantryScreen = () => {
  const placeholderIngredients = [
    { name: 'Rice', quantity: '2 cups', category: 'Grains' },
    { name: 'Black Beans', quantity: '1 can', category: 'Canned Goods' },
    { name: 'Olive Oil', quantity: '250 ml', category: 'Condiments' },
    { name: 'Chicken Breast', quantity: '500 g', category: 'Meat' },
  ];

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>
        My Pantry
      </Text>

      <Card style={styles.card}>
        <Card.Content>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Name</DataTable.Title>
              <DataTable.Title numeric>Quantity</DataTable.Title>
              <DataTable.Title>Category</DataTable.Title>
            </DataTable.Header>

            {placeholderIngredients.map((item, index) => (
              <DataTable.Row key={index}>
                <DataTable.Cell>{item.name}</DataTable.Cell>
                <DataTable.Cell numeric>{item.quantity}</DataTable.Cell>
                <DataTable.Cell>{item.category}</DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable>
        </Card.Content>
      </Card>
    </View>
  );
};

export default PantryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    marginBottom: 16,
    textAlign: 'center',
  },
  card: {
    borderRadius: 12,
    elevation: 2,
  },
});
