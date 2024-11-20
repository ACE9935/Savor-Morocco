import { collection, query, where, getDocs, updateDoc } from "firebase/firestore";
import { db } from "./firebase";
import { Ingredient } from "../types/Recipe";
import { ShoppingList } from "../types/ShoppingList";

// Function to remove the `notIncluded` flag from an ingredient
export async function removeIngredientNotIncluded(
    userId: string,
    shoppingListId: string,
    ingredientName: string
): Promise<void> {
    try {
        // Query to find the user document with the specified `id` field
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("id", "==", userId));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            // If user exists, get the reference of the first document
            const userDocRef = querySnapshot.docs[0].ref;

            // Get the user's current shopping lists
            const userData = querySnapshot.docs[0].data();
            const shoppingLists: ShoppingList[] = userData.shoppingList || [];

            // Find the target shopping list by ID
            const targetShoppingList = shoppingLists.find((list) => list.id === shoppingListId);

            if (targetShoppingList) {
                // Remove the `notIncluded` flag of the specified ingredient
                const updatedItems = targetShoppingList.items.map((item) =>
                    item.name === ingredientName
                        ? { ...item, notIncluded: false } // Remove `notIncluded` flag
                        : item
                );

                // Update the user's shopping list with the modified ingredients
                const updatedShoppingLists = shoppingLists.map((list) =>
                    list.id === shoppingListId ? { ...list, items: updatedItems } : list
                );

                await updateDoc(userDocRef, {
                    shoppingList: updatedShoppingLists,
                });

                console.log(`Ingredient "${ingredientName}" flag removed successfully!`);
            } else {
                console.error("Shopping list not found");
                throw new Error("Shopping list not found");
            }
        } else {
            console.error("User not found");
            throw new Error("User not found");
        }
    } catch (error) {
        console.error("Error removing ingredient flag:", error);
        throw new Error("Failed to update ingredient");
    }
}
