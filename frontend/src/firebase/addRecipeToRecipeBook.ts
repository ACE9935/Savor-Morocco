import { collection, query, where, getDocs, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "./firebase";
import { User } from "../types/UserInterface"; // Assuming you have a User interface file.
import generateRandomId from "../utils/generateRandomId";

export async function addRecipeToRecipeBook(
    userId: string,
    recipeId: string,
    recipeBookId?: string | null,
    recipeBookName?: string | null
): Promise<void> {
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

            if (recipeBookId) {
                // Add the recipe to the existing recipeBook identified by recipeBookId
                const updatedBooks = userData.recipesBooks.map(book =>
                    book.id === recipeBookId
                        ? { ...book, recipes: [...new Set([...book.recipes, recipeId])] } // Ensure no duplicates
                        : book
                );

                await updateDoc(userDocRef, {
                    recipesBooks: updatedBooks,
                });

                console.log(`Recipe added to recipeBook with ID: ${recipeBookId}`);
            } else if (recipeBookName) {
                // Create a new recipeBook and add the recipe to it
                const newRecipeBook = {
                    id: generateRandomId(5), // Generate a unique ID for the new recipeBook
                    name: recipeBookName,
                    recipes: [recipeId],
                };

                await updateDoc(userDocRef, {
                    recipesBooks: arrayUnion(newRecipeBook),
                });

                console.log(`New recipeBook created with name: ${recipeBookName}`);
            } else {
                throw new Error("Either recipeBookId or recipeName must be provided.");
            }
        } else {
            console.error("User not found");
            throw new Error("User not found");
        }
    } catch (error) {
        console.error("Error adding recipe to recipeBook:", error);
        throw new Error("Failed to add recipe to recipeBook");
    }
}

