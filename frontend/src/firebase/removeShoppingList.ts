import { collection, query, where, getDocs, updateDoc } from "firebase/firestore";
import { db } from "./firebase";
import { ShoppingList } from "../types/ShoppingList";

// Function to remove a shopping list from the shoppingList array based on its ID
export async function removeShoppingList(
    userId: string,
    shoppingListId: string
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

            // Filter out the shopping list with the specified ID
            const updatedShoppingLists = shoppingLists.filter((list) => list.id !== shoppingListId);

            // Update the user's document with the new shopping list array
            await updateDoc(userDocRef, {
                shoppingList: updatedShoppingLists,
            });

            console.log(`Shopping list with ID "${shoppingListId}" removed successfully!`);
        } else {
            console.error("User not found");
            throw new Error("User not found");
        }
    } catch (error) {
        console.error("Error removing shopping list:", error);
        throw new Error("Failed to remove shopping list");
    }
}
