import { collection, query, where, getDocs, updateDoc, arrayUnion, Timestamp, setDoc, doc } from "firebase/firestore";
import { db } from "./firebase";
import generateRandomId from "../utils/generateRandomId";

export interface Comment {
  id: string;
  date: Date;
  userId?: string;
  recipeId?: string;
  text: string;
}

async function addCommentToRecipeAndUser(recipeId: string, userId: string, commentText: string): Promise<void> {
  const newComment: Comment = {
    id: generateRandomId(5),
    date: new Date(),
    userId: userId,
    text: commentText,
  };

  const recipeMetaDataQuery = query(
    collection(db, "recipe-meta-data"),
    where("recipeId", "==", recipeId)
  );

  try {
    const recipeMetaDataSnapshot = await getDocs(recipeMetaDataQuery);

    // If recipe metadata exists, update it
    if (!recipeMetaDataSnapshot.empty) {
      const recipeMetaDataDoc = recipeMetaDataSnapshot.docs[0].ref;
      await updateDoc(recipeMetaDataDoc, {
        comments: arrayUnion({
          ...newComment,
          date: Timestamp.fromDate(newComment.date),
        }),
      });
    } else {
      // If the recipe metadata does not exist, create it
      const newRecipeMetaDataDocRef = doc(collection(db, "recipe-meta-data"));
      await setDoc(newRecipeMetaDataDocRef, {
        recipeId: recipeId,
        comments: [
          {
            ...newComment,
            date: Timestamp.fromDate(newComment.date),
          },
        ],
        ratings: [],
      });
    }

    // Query the `users` collection to find the user based on the `id` field
    const userQuery = query(collection(db, "users"), where("id", "==", userId));
    const userSnapshot = await getDocs(userQuery);

    if (!userSnapshot.empty) {
      // If the user document exists, update it
      const userDocRef = userSnapshot.docs[0].ref;
      await updateDoc(userDocRef, {
        comments: arrayUnion({
          recipeId,
          ...newComment,
          date: Timestamp.fromDate(newComment.date),
        }),
      });
    } else {
      // Create a new user document if it doesn't exist
      const newUserDocRef = doc(collection(db, "users"));
      await setDoc(newUserDocRef, {
        id: userId,
        comments: [
          {
            recipeId,
            ...newComment,
            date: Timestamp.fromDate(newComment.date),
          },
        ],
        ratings: [],
      });
    }

    console.log("Comment added to recipe and user successfully!");
  } catch (error) {
    console.error("Error adding comment to recipe and user:", error);
    throw new Error("Failed to add comment to recipe and user");
  }
}

export default addCommentToRecipeAndUser;
