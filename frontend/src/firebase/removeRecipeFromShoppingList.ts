import { collection, query, where, getDocs, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

// Function to remove a shopping list item based on the `id` field value
export async function removeShoppingListItem(userId: string, itemId: string): Promise<void> {
    try {
        // Query to find the user document with the specified `id` field
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("id", "==", userId));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            // If user exists, get the reference of the first document
            const userDocRef = querySnapshot.docs[0].ref;

            // Get the user's current shopping list
            const userData = querySnapshot.docs[0].data();
            const shoppingList = userData.shoppingList || [];

            // Filter out the item with the matching `id` field
            const updatedShoppingList = shoppingList.filter((item: { id: string }) => item.id !== itemId);

            // Update the user's document with the new shopping list
            await updateDoc(userDocRef, {
                shoppingList: updatedShoppingList,
            });

            console.log("Shopping list item removed successfully!");
        } else {
            console.error("User not found");
            throw new Error("User not found");
        }
    } catch (error) {
        console.error("Error removing shopping list item:", error);
        throw new Error("Failed to remove shopping list item");
    }
}
