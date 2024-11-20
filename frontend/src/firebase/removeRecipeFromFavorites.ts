import { collection, query, where, getDocs, updateDoc, arrayRemove } from "firebase/firestore";
import { db } from "./firebase";

async function removeRecipeFromFavorites(userId: string, recipeId: string): Promise<void> {
    try {
        // Query to find the user document with the specified `id` field
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("id", "==", userId));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            // If user exists, update their document
            const userDoc = querySnapshot.docs[0].ref;
            await updateDoc(userDoc, {
                favRecipes: arrayRemove(recipeId),
            });

            console.log("Recipe removed from favorites successfully!");
        } else {
            console.log("User does not exist. No changes were made.");
        }
    } catch (error) {
        console.error("Error removing recipe from favorites:", error);
        throw new Error("Failed to remove recipe from favorites");
    }
}

export default removeRecipeFromFavorites;
