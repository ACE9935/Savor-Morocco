import { collection, query, where, getDocs, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

async function removeRecipeFromRecipeBook(
    userId: string,
    recipeBookId: string,
    recipeId: string
): Promise<void> {
    try {
        // Query to find the user document with the specified `id` field
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("id", "==", userId));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            // If user exists, update their document
            const userDoc = querySnapshot.docs[0].ref;
            const userData = querySnapshot.docs[0].data();

            // Find the recipe book by its ID
            const updatedRecipeBooks = userData.recipesBooks.map((book: any) => {
                if (book.id === recipeBookId) {
                    // Remove the recipe ID from the `recipes` array
                    return {
                        ...book,
                        recipes: book.recipes.filter((id: string) => id !== recipeId),
                    };
                }
                return book;
            });

            // Update the user document with the modified `recipesBooks` array
            await updateDoc(userDoc, { recipesBooks: updatedRecipeBooks });

            console.log("Recipe removed from the recipe book successfully!");
        } else {
            console.log("User does not exist. No changes were made.");
        }
    } catch (error) {
        console.error("Error removing recipe from recipe book:", error);
        throw new Error("Failed to remove recipe from recipe book");
    }
}

export default removeRecipeFromRecipeBook;
