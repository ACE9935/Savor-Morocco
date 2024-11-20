import { collection, query, where, getDocs, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "./firebase";
import { Ingredient } from "../types/Recipe";

// Function to add recipe to shopping list based on the `id` field
export async function addRecipeToShoppingList(userId: string, recipeId: string,items:Ingredient[]): Promise<void> {
    try {
        // Query to find the user document with the specified `id` field
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("id", "==", userId));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            // If user exists, get the reference of the first document
            const userDocRef = querySnapshot.docs[0].ref;

            // Update the user's shopping list by adding the recipeId
            await updateDoc(userDocRef, {
                shoppingList: arrayUnion({id:recipeId,items}),  // Add recipeId to shoppingList array
            });
            console.log("Recipe added to shopping list successfully!");
        } else {
            console.error("User not found");
            throw new Error("User not found");
        }
    } catch (error) {
        console.error("Error adding recipe to shopping list:", error);
        throw new Error("Failed to add recipe to shopping list");
    }
}
