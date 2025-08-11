import React, { useEffect, useState } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useMeals } from '../../../hooks/useMeals';
import MealForm from './form';

export default function UpdateMealScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { getMealById, updateMeal } = useMeals();

  const [meal, setMeal] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getMealById(id);
      setMeal(data);
    })();
  }, [id]);

  const handleUpdate = async (data) => {
    try {
      await updateMeal(id, data);
      router.back();
    } catch (err) {
      console.error('Update meal failed:', err);
    }
  };

  if (!meal) return null; // Could show a loading indicator

  return (
    <MealForm
      initialValues={meal}
      onSubmit={handleUpdate}
      submitLabel="Update Meal"
    />
  );
}
