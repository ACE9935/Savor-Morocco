import { collection, query, where, getDocs, updateDoc, arrayRemove, doc } from "firebase/firestore";
import { db } from "./firebase";
import { Comment } from "./addCommentToRecipeAndUser";

async function deleteCommentFromRecipeAndUser(recipeId: string, userId: string, commentId: string): Promise<void> {
  try {
    // Query the recipe-meta-data collection
    const recipeMetaDataQuery = query(
      collection(db, "recipe-meta-data"),
      where("recipeId", "==", recipeId)
    );

    const recipeMetaDataSnapshot = await getDocs(recipeMetaDataQuery);

    // If recipe metadata exists, update it
    if (!recipeMetaDataSnapshot.empty) {
      const recipeMetaDataDoc = recipeMetaDataSnapshot.docs[0].ref;
      const recipeData = recipeMetaDataSnapshot.docs[0].data();

      // Find the comment to remove
      const commentToRemove = recipeData.comments.find(
        (comment: Comment) => comment.id === commentId
      );

      if (commentToRemove) {
        await updateDoc(recipeMetaDataDoc, {
          comments: arrayRemove(commentToRemove),
        });
      } else {
        console.log("Comment not found in recipe-meta-data.");
      }
    } else {
      console.log("Recipe metadata not found for the given recipeId.");
    }

    // Reference the user's document
    const userRef = doc(db, "users", userId);
    const userSnapshot = await getDocs(query(collection(db, "users"), where("userId", "==", userId)));

    if (!userSnapshot.empty) {
      const userData = userSnapshot.docs[0].data();

      // Find the comment to remove from user's comments
      const userCommentToRemove = userData.comments.find(
        (comment: Comment) => comment.id === commentId && comment.recipeId === recipeId
      );

      if (userCommentToRemove) {
        await updateDoc(userRef, {
          comments: arrayRemove(userCommentToRemove),
        });
      } else {
        console.log("Comment not found in user's data.");
      }
    } else {
      console.log("User not found for the given userId.");
    }

    console.log("Comment deleted from recipe and user successfully!");
  } catch (error) {
    console.error("Error deleting comment from recipe and user:", error);
    throw new Error("Failed to delete comment from recipe and user.");
  }
}

export default deleteCommentFromRecipeAndUser;
