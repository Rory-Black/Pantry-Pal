import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Pressable } from 'react-native';
import { Text, Divider, Card, FAB, IconButton, Modal, Portal, Button } from 'react-native-paper';
import { format, addDays, startOfWeek } from 'date-fns';
import { Picker } from '@react-native-picker/picker';
import { router } from 'expo-router';

export default function CalendarPage() {
  const today = new Date();
  const weekStart = startOfWeek(today, { weekStartsOn: 1 }); // Monday start
  const daysOfWeek = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));
  const meals = ['Breakfast', 'Lunch', 'Dinner'];

  const [peopleCounts, setPeopleCounts] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedKey, setSelectedKey] = useState(null);
  const [tempValue, setTempValue] = useState(1);

  const openPickerModal = (key) => {
    setSelectedKey(key);
    setTempValue(peopleCounts[key] || 1);
    setModalVisible(true);
  };

  const confirmPicker = () => {
    if (selectedKey !== null) {
      setPeopleCounts((prev) => ({ ...prev, [selectedKey]: tempValue }));
    }
    setModalVisible(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text variant="headlineMedium" style={styles.header}>
          Weekly Meal Planner
        </Text>

        {daysOfWeek.map((day, dayIndex) => (
          <View
            key={dayIndex}
            style={[
              styles.daySection,
              dayIndex % 2 === 0 ? styles.dayEven : styles.dayOdd,
            ]}
          >
            <Text variant="titleMedium" style={styles.dayHeader}>
              {format(day, 'EEEE, MMMM do')}
            </Text>
            <Divider style={styles.redDivider} />

            {meals.map((meal, mealIndex) => {
              const key = `${dayIndex}-${mealIndex}`;
              return (
                <React.Fragment key={key}>
                  <View style={styles.cardHeaderRow}>
                    <Text style={styles.cardTitle}>{meal}</Text>
                    <View style={styles.peopleInputRow}>
                      <IconButton icon="account" size={20} />
                      <Pressable
                        onPress={() => openPickerModal(key)}
                        style={styles.peopleSelector}
                      >
                        <Text>{peopleCounts[key] || 1} people</Text>
                      </Pressable>
                    </View>
                  </View>

                  <Divider style={styles.divider} />

                  <Card
                    style={styles.mealCard}
                    onPress={() => router.push('/meals/(hidden)/meal-info')}
                  >
                    <Card.Content>
                      <Text>Meal: Placeholder</Text>
                    </Card.Content>
                  </Card>
                </React.Fragment>
              );

            })}
          </View>
        ))}
      </ScrollView>

      {/* Floating Optimise Button */}
      <FAB
        icon="lightbulb-on-outline"
        label="Optimise"
        onPress={() => console.log('Optimise pressed')}
        style={styles.fab}
      />

      {/* Picker Modal */}
      <Portal>
        <Modal visible={modalVisible} onDismiss={() => setModalVisible(false)} contentContainerStyle={styles.modal}>
          <Text style={{ textAlign: 'center', marginBottom: 8 }}>Select number of people</Text>
          <Picker
            selectedValue={tempValue}
            onValueChange={(value) => setTempValue(value)}
          >
            {[...Array(10)].map((_, i) => (
              <Picker.Item key={i + 1} label={`${i + 1}`} value={i + 1} />
            ))}
          </Picker>
          <Button mode="contained" onPress={confirmPicker} style={{ marginTop: 12 }}>
            Confirm
          </Button>
        </Modal>
      </Portal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    paddingBottom: 100,
  },
  header: {
    textAlign: 'center',
    marginBottom: 24,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingTop: 8,
  },
  daySection: {
    padding: 12,
    borderRadius: 12,
    marginBottom: 16,
  },
  dayEven: {
    backgroundColor: '#f9f9f9',
  },
  dayOdd: {
    backgroundColor: '#ffffff',
  },
  dayHeader: {
    fontWeight: '600',
    marginBottom: 8,
  },
  divider: {
    height: 2,
    marginBottom: 12,
  },
  redDivider: {
    height: 2,
    backgroundColor: 'red',
    marginBottom: 12,
  },
  mealCard: {
    marginBottom: 12,
    borderRadius: 12,
    elevation: 2,
  },
  peopleInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  peopleSelector: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#f0f0f0',
  },
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    zIndex: 10,
  },
  modal: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 12,
  },
});
