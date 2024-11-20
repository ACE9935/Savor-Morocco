import { collection, query, where, getDocs, updateDoc } from "firebase/firestore";
import { db } from "./firebase";
import { ShoppingList } from "../types/ShoppingList";

// Function to set the `notIncluded` flag for ingredients specified by id and name
export async function setIngredientsNotIncludedByList(
    userId: string,
    ingredients: { id: string; name: string }[]
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

            // Update each relevant shopping list
            const updatedShoppingLists = shoppingLists.map((list) => {
                // Find all ingredients for the current list
                const ingredientsForList = ingredients.filter((ingredient) => ingredient.id === list.id);

                if (ingredientsForList.length > 0) {
                    // Update the `notIncluded` flag for relevant ingredients in this shopping list
                    const updatedItems = list.items.map((item) =>
                        ingredientsForList.some((ingredient) => ingredient.name === item.name)
                            ? { ...item, notIncluded: true }
                            : item
                    );
                    return { ...list, items: updatedItems };
                }
                return list; // Return unmodified list if no relevant ingredients
            });

            // Update the user's shopping list in Firestore
            await updateDoc(userDocRef, {
                shoppingList: updatedShoppingLists,
            });

            console.log(`Ingredients updated to not included: ${JSON.stringify(ingredients)}`);
        } else {
            console.error("User not found");
            throw new Error("User not found");
        }
    } catch (error) {
        console.error("Error setting ingredients to not included:", error);
        throw new Error("Failed to update ingredients");
    }
}
