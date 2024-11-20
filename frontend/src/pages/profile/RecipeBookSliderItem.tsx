import { IconButton } from "@mui/material";
import { RecipeBook } from "../../types/RecipeBook";
import { recipes } from "../../utils/recipes";
import { MoreVert } from "@mui/icons-material";
import UserRecipeBookController from "./UserRecipeBookController";
import { useNavigate } from "react-router-dom";

function RecipeBookSliderItem({recipeBook}:{recipeBook:RecipeBook}) {

    const navigate=useNavigate()

    const recipeImages = recipeBook.recipes
    .slice(0, 4) // Take only the first 4 recipes
    .map(recipeId => {
        const recipe = recipes.find(r => r.id === recipeId);
        return recipe?.imgUrl||"";
    });

    return ( 
        <div className="flex items-center flex-col overflow-hidden relative shadow-lg bg-white rounded-md cursor-pointer">
        <div onClick={()=>navigate(`/profile/recipe-book/${recipeBook.id}`)} className="grid cursor-pointer grid-cols-2 grid-rows-2 w-[16rem] aspect-[1.5] gap-1 rounded-md overflow-hidden relative">
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
        <div className="flex flex-col gap-2 p-3 w-full">
         <div className="text-black/80 font-bold text-xl">{recipeBook.name}</div>
         <div className="flex justify-between items-center">
         <div className="font-semibold text-slate-600">{recipeBook.recipes.length} Recipes</div>
         <UserRecipeBookController recipeBook={recipeBook}/>
         </div>
        </div>
        </div>
     );
}

export default RecipeBookSliderItem;