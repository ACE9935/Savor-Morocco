import { Done } from "@mui/icons-material";
import { useUser } from "../../context/auth-context";
import { RecipeBook } from "../../types/RecipeBook";
import { recipes } from "../../utils/recipes"; // Import global recipes array
import { useEffect, useState } from "react";
import removeRecipeFromRecipeBook from "../../firebase/removeRecipeFromRecipeBook";
import { addRecipeToRecipeBook } from "../../firebase/addRecipeToRecipeBook";
import AppSpinner from "../../components/AppSpinner";

function RecipeBookDisplay({ recipeBook,recipeToCheck, handleOpenToast }: { recipeBook: RecipeBook,recipeToCheck?:string,handleOpenToast:(arg0: string)=>void }) {

    const { user, updateUser, loading: userLoading } = useUser();
    const [loading, setLoading] = useState(false);
    const [isInBook,setIsInBook]=useState(recipeToCheck&&recipeBook?.recipes.includes(recipeToCheck))

    const handleAction = async ()=>{
        if (loading||!user||!recipeToCheck) return;
        try {
            setLoading(true);

            if (isInBook) {
                await removeRecipeFromRecipeBook(user.id, recipeBook.id,recipeToCheck);
                handleOpenToast("Recipe removed from recipe book");
            } else {
                await addRecipeToRecipeBook(user.id,recipeToCheck, recipeBook.id,null);
                handleOpenToast("Recipe added to recipe book");
            }

            // Update the user state to reflect the changes
            await updateUser();

            // Toggle the local favorite state
            setIsInBook((prev) => !prev);
            
        } catch (e) {
            console.error("Error updating recipe-book:", e);
        } finally {
            setLoading(false);
        }
    }

    // Extract the first 4 recipe images from the recipeBook
    const recipeImages = recipeBook.recipes
        .slice(0, 4) // Take only the first 4 recipes
        .map(recipeId => {
            const recipe = recipes.find(r => r.id === recipeId);
            return recipe?.imgUrl||"";
        });

    return (
        <div className="flex items-center flex-col gap-2 overflow-hidden relative">
        <div onClick={handleAction} className="grid cursor-pointer grid-cols-2 grid-rows-2 w-[10rem] h-[8rem] gap-1 rounded-md overflow-hidden relative">
        {loading&&<div className="bg-amber-500/60 w-full h-full flex justify-center items-center absolute text-white"><AppSpinner size={45} variant="DARK"/></div>}
        {!loading&&recipeToCheck&&isInBook&&<div className="bg-amber-500/60 w-full h-full flex justify-center items-center absolute text-white"><Done fontSize="large"/></div>}
            {recipeImages.map((imgSrc, index) => (
                <div
                    key={index}
                    style={{ backgroundImage: `url(${imgSrc})` }}
                    className="bg-cover bg-center"
                ></div>
            ))}

            {/* Fill empty slots if less than 4 recipes */}
            {Array.from({ length: 4 - recipeImages.length }).map((_, index) => (
                <div key={`empty-${index}`} className="bg-gray-200"></div>
            ))}
        </div>
        <div className="font-bold">{recipeBook.name}</div>
        </div>
    );
}

export default RecipeBookDisplay;
