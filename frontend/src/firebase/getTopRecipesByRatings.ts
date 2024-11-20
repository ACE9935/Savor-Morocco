import { RecipeMetaData } from "../types/RecipeMetaData";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { recipes } from "../utils/recipes";

const getTopRecipesByRatings = async (recipeType?: string): Promise<RecipeMetaData[]> => {
  const db = getFirestore();
  const recipeMetaDataCollection = collection(db, "recipe-meta-data");

  try {
    // Fetch all recipe-meta-data documents
    const querySnapshot = await getDocs(recipeMetaDataCollection);
    const recipeMetaDataList: { recipe: RecipeMetaData; totalRatingSum: number }[] = [];

    // Calculate the sum of ratings for each recipe and filter by type (if provided)
    querySnapshot.forEach((docSnapshot) => {
      const data = docSnapshot.data() as RecipeMetaData;

      // Ensure data.ratings exists and is an array
      if (!Array.isArray(data.ratings)) return;

      // Skip recipes that don't match the given type
      const recipeTypeMatch = recipeType 
        ? recipes.find(recipe => recipe.id === data.recipeId)?.type?.toLowerCase() === recipeType.toLowerCase()
        : true;

      if (!recipeTypeMatch) return;

      const totalRatingSum = data.ratings.reduce((sum, ratingObj) => sum + (ratingObj.rating || 0), 0);
      recipeMetaDataList.push({ recipe: data, totalRatingSum });
    });

    // Sort by totalRatingSum in descending order and select the top 5
    const topRecipes = recipeMetaDataList
      .sort((a, b) => b.totalRatingSum - a.totalRatingSum)
      .slice(0, 5)
      .map(({ recipe }) => recipe); // Return only the RecipeMetaData

    return topRecipes;
  } catch (error) {
    console.error("Error retrieving top recipes by ratings:", error);
    throw error;
  }
};

export default getTopRecipesByRatings;

