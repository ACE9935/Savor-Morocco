import { collection, query, where, getDocs, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "./firebase";

async function addRecipeToFavorites(userId: string, recipeId: string): Promise<void> {
    try {
        // Query to find the user document with the specified `id` field
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("id", "==", userId));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            // If user exists, update their document
            const userDoc = querySnapshot.docs[0].ref;
            await updateDoc(userDoc, {
                favRecipes: arrayUnion(recipeId),
            });

            console.log("Recipe added to favorites successfully!");
        } else {
            console.log("User does not exist. No changes were made.");
        }
    } catch (error) {
        console.error("Error adding recipe to favorites:", error);
        throw new Error("Failed to add recipe to favorites");
    }
}

export default addRecipeToFavorites;

