import getOrCreateRecipeMetaData from "../../../firebase/getOrCreateRecipeMetaData";

export const fetchRecipeMetaData = async (recipeId:string) => {
    try {
        const recipeMetaData = await getOrCreateRecipeMetaData(recipeId);
        return recipeMetaData

    } catch (error) {
        console.error("Error fetching recipe metadata:", error);
    }
};