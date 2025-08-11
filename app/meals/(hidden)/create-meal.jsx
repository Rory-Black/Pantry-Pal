import React from 'react';
import { useRouter } from 'expo-router';
import { useMeals } from '../../../hooks/useMeals';
import MealForm from './form';

export default function CreateMealScreen() {
  const router = useRouter();
  const { createMeal } = useMeals();

  const handleCreate = async (data) => {
    try {
      await createMeal(data);
      router.back(); // Go back to previous screen
    } catch (err) {
      console.error('Create meal failed:', err);
    }
  };

  return (
    <MealForm
      onSubmit={handleCreate}
      submitLabel="Create Meal"
    />
  );
}
