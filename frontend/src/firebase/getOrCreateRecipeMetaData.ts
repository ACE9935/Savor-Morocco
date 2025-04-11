import { getDoc, getFirestore, setDoc, doc } from "firebase/firestore";
import { RecipeMetaData } from "../types/RecipeMetaData";

const getOrCreateRecipeMetaData = async (recipeId: string): Promise<RecipeMetaData> => {
  if (!recipeId) throw new Error("recipeId is required");

  const db = getFirestore();
  const docRef = doc(db, "recipe-meta-data", recipeId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data() as RecipeMetaData;
  } else {
    const newRecipeMetaData: RecipeMetaData = {
      recipeId,
      comments: [],
      ratings: []
    };
    await setDoc(docRef, newRecipeMetaData);
    return newRecipeMetaData;
  }
};

export default getOrCreateRecipeMetaData;
