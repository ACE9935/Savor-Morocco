import { collection, query, where, getDocs, updateDoc } from "firebase/firestore";
import { db } from "./firebase";
import { User } from "../types/UserInterface"; // Assuming you have a User interface file.

export async function deleteRecipeBook(userId: string, recipeBookId: string): Promise<void> {
    try {
        // Query to find the user document with the specified `id` field
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("id", "==", userId));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            // If user exists, get the first document reference
            const userDocRef = querySnapshot.docs[0].ref;

            // Fetch current user's recipeBooks
            const userData = querySnapshot.docs[0].data() as User;

            // Filter out the recipeBook with the specified recipeBookId
            const updatedBooks = userData.recipesBooks.filter(book => book.id !== recipeBookId);

            // Update the user's document with the new array of recipeBooks
            await updateDoc(userDocRef, {
                recipesBooks: updatedBooks,
            });

            console.log(`RecipeBook with ID: ${recipeBookId} has been deleted.`);
        } else {
            console.error("User not found");
            throw new Error("User not found");
        }
    } catch (error) {
        console.error("Error deleting recipeBook:", error);
        throw new Error("Failed to delete recipeBook");
    }
}
