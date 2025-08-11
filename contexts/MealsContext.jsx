import { createContext, useEffect, useState } from "react";
import { databases } from "../lib/appwrite";
import { useUser } from "../hooks/useUser";
import { ID, Permission, Query, Role } from "react-native-appwrite";

const DATABASE_ID = "687a836d00395cded6c2"
const COLLECTION_ID = "687a839a0027fcbc0bd1"

export const MealsContext = createContext()

export function MealsProvider({children}){
  const [ meals, setMeals ] = useState([])
  const { user } = useUser()

  async function fetchMeals() {
    try{
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID,
        [
          Query.equal('authorId', user.$id)
        ]
      )

      setMeals(response.documents)
      //console.log(response.documents)
    } catch (error){
      console.error(error.message)
    }
  }

  async function fetchMealById(id) {
    try{
      const response = await databases.getDocument(
        DATABASE_ID,
        COLLECTION_ID,
        id
      )
      console.log(response)
      return response
    } catch (error){
      console.error(error.message)
    }
  }

  async function createMeal(data) {
    try{
      const newMeal = await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        {...data, authorId: user.$id},
        [
          Permission.read(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id)),
        ]
      )
    } catch (error){
      console.error(error.message)
    }
  }

  async function deleteMeal(id) {
    try{

    } catch (error){
      console.error(error.message)
    }
  }

  useEffect(() => {
    if (user) {
      fetchMeals()
    }
    else{
      setMeals([])
    }
  }, [user])

  return (
    <MealsContext.Provider
      value={{meals, fetchMeals, fetchMealById, createMeal, deleteMeal}}
    >
      {children}
    </MealsContext.Provider>
  )
}