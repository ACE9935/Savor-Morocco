import { collection, query, where, getDocs, setDoc, updateDoc, arrayUnion, doc } from "firebase/firestore";
import { db } from "./firebase";

async function addUserRating(userId: string, newRating: {recipeId: string; rating: number}): Promise<void> {
    try {
        // Query to find the user document with the specified `id` field
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("id", "==", userId));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            // If user exists, update their document
            const userDoc = querySnapshot.docs[0].ref;
            await updateDoc(userDoc, {
                ratings: arrayUnion(newRating),
            });
        } else {
            // If user document does not exist, create a new one
            const newUserRef = doc(usersRef);
            await setDoc(newUserRef, {
                id: userId,
                comments: [],
                ratings: [newRating],
            });
        }

        console.log("Rating added to user successfully!");
    } catch (error) {
        console.error("Error adding rating to user:", error);
        throw new Error("Failed to add rating to user");
    }
}

export default addUserRating;
