import { useNavigate, useParams } from "react-router-dom";
import { RecipeBook } from "../../types/RecipeBook";
import { useUser } from "../../context/auth-context";
import { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import { ArrowBack, SentimentVeryDissatisfied } from "@mui/icons-material";
import RecipeCard from "../recipes/RecipeCard";
import { recipes } from "../../utils/recipes";
import UserRecipeBookController from "./UserRecipeBookController";
import RecipeBookSkeleton from "./RecipeBookSkeleton";
import SectionPlaceHolder from "./SectionPlaceHolder";

function RecipeBookContainer() {

  const navigate=useNavigate()
  const { recipeBookId } = useParams();
  const { user, loading: isLoadingUser } = useUser();
  const [recipeBook, setRecipeBook] = useState<RecipeBook | null>(null);

  useEffect(() => {
    if (user && recipeBookId) {
      const foundRecipeBook = user.recipesBooks.find((o) => o.id === recipeBookId);
      setRecipeBook(foundRecipeBook || null); // If not found, set to null
    }
  }, [recipeBookId, user]);

  return (
    <>
    {isLoadingUser?
    <RecipeBookSkeleton/>
    :<div>
      {/* You can render the recipe book details here */}
      {recipeBook ? (
        <div className="flex flex-col gap-4">
          {/* Render recipe book details */}
          <div className="flex gap-3 items-center">
           <IconButton onClick={()=>navigate("/profile/overview")}><ArrowBack fontSize="large" className="text-primary-color"/></IconButton>
           <div className="w-[0.3px] h-[30px] bg-black"></div>
           <h2 className="font-semibold text-2xl text-black/80 pl-2">{recipeBook.name}</h2>
           <UserRecipeBookController recipeBook={recipeBook}/>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-fit">
            {recipeBook.recipes.map(o=><RecipeCard recipeBookContext={recipeBook.id} recipe={recipes.find((recipe=>recipe.id==o))!}/>)}
          </div>
        </div>
      ) : (
        <SectionPlaceHolder Icon={SentimentVeryDissatisfied} title="" subTitle="Recipe Book not found" description="Please verify the url"/>
      )}
    </div>}
    </>
  );
}

export default RecipeBookContainer;
