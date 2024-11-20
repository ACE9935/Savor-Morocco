import React, { createContext, useContext } from "react";
import { AccessTime, Comment, Star } from "@mui/icons-material";
import { Recipe } from "../../types/Recipe";
import { useNavigate } from "react-router-dom";
import AddToFavRecipes from "./AddToFavRecipes";
import AddRecipeToBook from "./AddRecipeToBook";
import { fetchRecipeMetaData } from "./utils/fetchRecipeMetaData";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import { typeColors } from "./utils/typeColors";

// Create a Context for Recipe Book
const RecipeBookContext = createContext<string | undefined>(undefined);

// Hook to use RecipeBookContext
export const useRecipeBookContext = () => useContext(RecipeBookContext);

function RecipeCard({
  recipe,
  recipeBookContext,
}: {
  recipe: Recipe;
  recipeBookContext?: string;
}) {
  const navigate = useNavigate();
  const { isPending, isError, data, error, isFetching, refetch } = useQuery({
    queryKey: ["recipe-meta-data", recipe.id],
    refetchOnWindowFocus: false,
    queryFn: () => fetchRecipeMetaData(recipe.id),
  });

  // Wrap content in RecipeBookContext.Provider if recipeBookContext is provided
  const content = (
    <div className="max-w-full w-[24rem] h-fit p-4 rounded-xl transition-all bg-white flex flex-col gap-2 shadow-md">
      <div className="relative shadow-md rounded-xl">
      <div
          style={{backgroundImage:`url(${recipe.imgUrl})`}}
          onClick={(e) =>{navigate("/recipes/" + recipe.id!)}}
          className="aspect-[2] cursor-pointer w-full bg-center bg-cover rounded-xl"
        ></div>
        <div className="absolute top-0 right-0 m-2 flex gap-1">
          <AddRecipeToBook recipeImg={recipe.imgUrl} recipeId={recipe.id} />
          <AddToFavRecipes recipeId={recipe.id} />
        </div>
        <div className="absolute flex items-center gap-1 text-sm left-0 bottom-0 m-2 bg-amber-500 rounded-full p-1 px-2 font-bold text-white">
          <AccessTime />
          <span>{recipe.cookTime}</span>
        </div>
      </div>
      <div>
        <h3
          onClick={() => navigate("/recipes/" + recipe.id!)}
          className="text-xl cursor-pointer hover:underline pb-0 font-bold text-black/90 w-fit"
        >
          {recipe.name}
        </h3>
        <h4 className="text-black/40 font-semibold text-sm">{recipe.title}</h4>
      </div>
      <div className="flex justify-between items-center">
        <div className={`${typeColors[recipe.type]} px-2 py-1 rounded-lg text-slate-100 w-fit font-semibold text-sm`}>
          {recipe.type}
        </div>
        {isPending ? (
          <Skeleton width={130} height={30} className="!rounded-full" />
        ) : (
          <div className="flex gap-2 font-semibold text-slate-600/80 px-1">
            <div className="flex items-center gap-1">
              <Comment className="text-black/70" />
              {data?.comments?.length || 0}
            </div>
            <div className="flex items-center gap-1">
              <Star className="text-amber-500" />
              {data?.ratings && data?.ratings.length > 0 
              ? (data.ratings.reduce((sum, rating) => sum + rating.rating, 0) / data.ratings.length).toFixed(1) 
              : 0}

            </div>
          </div>
        )}
      </div>
    </div>
  );

  return recipeBookContext ? (
    <RecipeBookContext.Provider value={recipeBookContext}>
      {content}
    </RecipeBookContext.Provider>
  ) : (
    content
  );
}

export default RecipeCard;
