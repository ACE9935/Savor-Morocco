import { useEffect, useState } from "react";
import { Recipe, RecipeType } from "../../types/Recipe";
import { recipes } from "../../utils/recipes";
import RecipeCard from "./RecipeCard";
import { useQuery } from "@tanstack/react-query";
import getTopRecipesByRatings from "../../firebase/getTopRecipesByRatings";
import Skeleton from "react-loading-skeleton";

function RelatedRecipes({id,type}:{id:string, type:RecipeType}) {

   const [sortedRecipes, setSortedRecipes]=useState<Recipe[]>([])
   const [loading, setLoading]=useState(false)
   const { isPending, isError, data, error, isFetching, refetch } = useQuery({
      queryKey: ["top-recipe-meta-data-by-type"],
      refetchOnWindowFocus: false,
      queryFn: () => getTopRecipesByRatings(type),
    });

   useEffect(()=>{

    if(data?.length){
      const topRecipes=data.map(o=>recipes.find(recipe=>recipe.id==o.recipeId)!)

      setSortedRecipes(topRecipes)
    }

   },[data])

    return ( 
          <div className="flex flex-col gap-5">
           {isPending?
           <div className="flex flex-col gap-3">
            <Skeleton height={250} width={400} className="!rounded-lg"/>
            <Skeleton height={250} width={400} className="!rounded-lg"/>
            <Skeleton height={250} width={400} className="!rounded-lg"/>
           </div>
           :sortedRecipes.map((o,i)=><RecipeCard key={i} recipe={o}/>)}
        </div>
     );
}

export default RelatedRecipes;