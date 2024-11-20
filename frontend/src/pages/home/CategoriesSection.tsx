import { useEffect, useState } from "react";
import { Recipe, RecipeType } from "../../types/Recipe";
import CategorieBtn from "./CategorieBtn";
import { recipes } from "../../utils/recipes";
import RecipeCard from "../recipes/RecipeCard";
import { Star } from "@mui/icons-material";
import { useQuery } from "@tanstack/react-query";
import getTopRecipesByRatings from "../../firebase/getTopRecipesByRatings";
import BasicButton from "../../components/form/BasicButton";
import RecipeSectionTitle from "../recipes/RecipeSectionTitle";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const types:(RecipeType | "All")[]=["All", "Appetizer", "Main Course", "Dessert", "Beverage"]

function CatergoriesSection() {

    const [selectedType, setSelectedType]=useState<RecipeType | "All">("All")
    const [categorieRecipes, setCategorieRecipes]=useState<Recipe[]>([])
    const navigate=useNavigate()
    const [sortedRecipes, setSortedRecipes]=useState<Recipe[]>([])
    const { isPending, isError, data, error, isFetching, refetch } = useQuery({
        queryKey: ["top-recipe-meta-data"],
        refetchOnWindowFocus: false,
        queryFn: () => getTopRecipesByRatings(),
      });

      useEffect(()=>{

        if(data?.length){
          const topRecipes=data.map(o=>recipes.find(recipe=>recipe.id==o.recipeId)!)
    
          setSortedRecipes(topRecipes)
        }
    
       },[data])

    useEffect(()=>{
     const selectedRecipes=selectedType=="All"?recipes:recipes.filter(recipe=>recipe.type==selectedType)
     setCategorieRecipes(selectedRecipes)
    },[selectedType])

    return ( 
        <div className="p-6 flex justify-around w-full gap-10">
            <div className="w-full max-w-[800px] flex-col gap-10 flex">
            <div className="bg-white shadow-lg rounded-full flex md:justify-between gap-2 py-2 px-6 flex-wrap">
                {types.map(t=><CategorieBtn setSelected={setSelectedType} selected={selectedType==t} type={t}/>)}   
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {categorieRecipes.map(recipe=><RecipeCard recipe={recipe}/>)}
            </div>
            </div>
            <div className="hidden lg:block">
                <h2 className="font-bold text-2xl flex items-start gap-2 pb-4"><Star className="mt-[2px]"/><RecipeSectionTitle title="Top rated"/></h2>
                {isPending?
                <div className="flex flex-col gap-4">
                    <Skeleton width={300} height={140} className="!rounded-lg"/>
                    <Skeleton width={300} height={140} className="!rounded-lg"/>
                    <Skeleton width={300} height={140} className="!rounded-lg"/>
                    <Skeleton width={300} height={140} className="!rounded-lg"/>
                </div>
                :<div className="flex flex-col gap-4 w-[22rem]">{sortedRecipes.map(recipe=>
                <div>
                <div className="flex gap-2 bg-white rounded-lg shadow-md">
                 <div className="w-[7rem] bg-center bg-cover rounded-lg p-1 grid place-items-center bg-gray-300 bg-blend-multiply" style={{backgroundImage:`url(${recipe.imgUrl})`}}>
                 <div className="font-bold grid place-items-center gap-1 text-sm relative w-[4rem] aspect-square p-2 bg-amber-700/60 rounded-full border-2 border-amber-600"><Star className="text-amber-500/80 absolute !text-[4rem]"/>
                <div className="relative z-[2] text-white">{data?.find(d=>d.recipeId==recipe.id)!.ratings && data?.find(d=>d.recipeId==recipe.id)!.ratings.length > 0 
                ? (data?.find(d=>d.recipeId==recipe.id)!.ratings.reduce((sum, rating) => sum + rating.rating, 0) / data?.find(d=>d.recipeId==recipe.id)!.ratings.length).toFixed(1) 
                : 0}</div></div>
                 </div>
                 <div className="flex flex-col py-4 px-1">
                    <h2 className="font-bold text-md text-black/80 pb-2">{recipe.name}</h2>
                    <BasicButton onClick={() => navigate("/recipes/" + recipe.id!)} style={{width:"fit-content", fontSize:"0.8rem"}}>Cook!</BasicButton>
                 </div>
                 </div>
                 </div>
                 )}
                </div>}
            </div>
        </div>
     );
}

export default CatergoriesSection;