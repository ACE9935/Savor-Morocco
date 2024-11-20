import { doc, getDoc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "./firebase";

export async function addRecipeRating(recipeId: string, newRating: {rating:number,userId:string}): Promise<void> {
    try {
        const recipeRef = doc(db, "recipe-meta-data", recipeId);
        const recipeDoc = await getDoc(recipeRef);

        if (recipeDoc.exists()) {
            // Update existing document by adding to the ratings array
            await updateDoc(recipeRef, {
                ratings: arrayUnion(newRating),
            });
        } else {
            // If the document does not exist, create it with initial values
            await setDoc(recipeRef, {
                recipeId: recipeId,
                comments: [],
                ratings: [newRating],
            });
        }

        console.log("Rating added successfully!");
    } catch (error) {
        console.error("Error adding rating:", error);
        throw new Error("Failed to add rating");
    }
}