import { RecipeMetaData } from "../types/RecipeMetaData";
import { getFirestore, collection, query, where, getDocs, setDoc, doc } from "firebase/firestore";

const getOrCreateRecipeMetaData = async (recipeId: string): Promise<RecipeMetaData> => {
    if (!recipeId) throw new Error("recipeId is required");
  
    const db = getFirestore();
    const recipeMetaDataCollection = collection(db, "recipe-meta-data");
  
    try {
      // Query the collection for the document with the given recipeId
      const q = query(recipeMetaDataCollection, where("recipeId", "==", recipeId));
      const querySnapshot = await getDocs(q);
  
      if (!querySnapshot.empty) {
        // If the document exists, return the first result (assuming unique recipeId)
        const docSnapshot = querySnapshot.docs[0];
        return docSnapshot.data() as RecipeMetaData;
      } else {
        // If not found, create a new document with an empty structure and return it
        const newRecipeMetaData: RecipeMetaData = {
          recipeId,
          comments: [],
          ratings: []
        };
  
        await setDoc(doc(recipeMetaDataCollection, recipeId), newRecipeMetaData);
        return newRecipeMetaData;
      }
    } catch (error) {
      console.error("Error retrieving or creating RecipeMetaData:", error);
      throw error;
    }
  };
  
  export default getOrCreateRecipeMetaData;