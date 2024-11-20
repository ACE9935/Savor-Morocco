import { useParams } from "react-router-dom";
import { Recipe } from "../../types/Recipe";
import { recipes } from "../../utils/recipes";
import styled from '@emotion/styled';
import { ExpandMore, Microwave, Paid, People, SoupKitchen, Speed } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import resolveConfig from 'tailwindcss/resolveConfig';
import Config from '../../../tailwind.config';
import IngredientsTab from "./IngredientsTab";
import RelatedRecipes from "./RelatedRecipes";
import RecipeSectionTitle from "./RecipeSectionTitle";
import RecipeComments from "./RecipeComments";
import RecipeRatingComponent from "./RecipeRatingComponent";
import { fetchRecipeMetaData } from "./utils/fetchRecipeMetaData";
import { useQuery } from "@tanstack/react-query";
import AddToFavRecipes from "./AddToFavRecipes";
import AddRecipeToBook from "./AddRecipeToBook";
import NotFound from "../../components/NotFound";
import { Helmet } from "react-helmet";

const tailwindConfig = resolveConfig(Config);
const colors = tailwindConfig.theme?.colors as unknown as { [key: string]: string };

const styledRecipeText = (text:string,name:string)=><p>
{text.split(new RegExp(`(${name})`, 'gi')).map((part, index) =>
  part === name ? <strong key={index}>{part}</strong> : part
)}
</p>

const StyledRecipeInfo = styled("div")`
  display:flex;
  gap:1rem;
  span{
   font-weight:bold;
  }
  svg{
   color:${colors.amber[500]}
   }
`;

const StyledNutritionValues = styled("div")`
 border-bottom: 1px solid white;
 display:flex;
 justify-content:space-between;
 color:white;
 div{
  font-weight:bold
 }
`;

function RecipeContainer() {

    const { recipeId } = useParams()
    const recipe:Recipe|undefined=recipes.find((o)=>o.id==recipeId)

    if(!recipe) return <NotFound/>

    const { isPending, isError, data, error, isFetching, refetch } = useQuery({
        queryKey: ['recipe-meta-data', recipe.id],
        refetchOnWindowFocus:false,
        queryFn: () => fetchRecipeMetaData(recipe.id),
      })
    

    const RecipeSection = ({text,title}:{text:string,title:string})=>
        <div className="flex flex-col gap-4">
        <RecipeSectionTitle title={title}/>
        {styledRecipeText(text,recipe?.name!)}
        </div>

    return ( 
        <div>
          <Helmet>
               <title>{recipe.title}</title>
               <meta name="description" content={recipe.presentation} />
             </Helmet>
        <div className="w-full flex justify-center">
         <div className="flex flex-col max-w-[1150px] w-full gap-8 p-6">
            <div className="flex justify-between gap-4 flex-col lg:flex-row">
            <div className="flex flex-col gap-3 md:px-5 max-w-[800px]">
             <span className="font-semibold text-md text-amber-500/80">{recipe?.type.toUpperCase()}</span>
             <h1 className="text-4xl font-bold text-black/80">{recipe?.title}</h1>
             </div>
             <RecipeRatingComponent recipeId={recipeId!} recipeMetaData={data!} recipeDataIsLoading={isFetching} fetchRecipeMetaData={refetch}/>
            </div>
            <div className="flex gap-6 lg:flex-row flex-col">
            <img 
             src={recipe?.imgUrl} 
             className="w-full max-w-[45rem] rounded-2xl shadow-lg object-contain h-fit"
             alt={`Recipe-${recipe?.name}`}
            />
          
            <div className="flex flex-col gap-4 w-full max-w-[22rem]">
            <div>
            <Accordion className="!shadow-md !rounded-xl !bg-green-600">
             <AccordionSummary
              expandIcon={<ExpandMore/>}
              className="font-bold !text-white"
              aria-controls="panel1-content"
              id="panel1-header"
             >
             <span className="font-bold !text-black bg-amber-500 px-1 mr-2">{recipe?.nutritionalValue.calories} Kcal</span>Calories per serving
            </AccordionSummary>
            <AccordionDetails>
             <div className="flex flex-col gap-2 pb-4">
              <StyledNutritionValues><span>Energy</span><div>{recipe?.nutritionalValue.values.energy} Kcal</div></StyledNutritionValues>
              <StyledNutritionValues><span>Carbohydrates</span><div>{recipe?.nutritionalValue.values.carbohydrates} g</div></StyledNutritionValues>
              <StyledNutritionValues><span>Protein</span><div>{recipe?.nutritionalValue.values.protein} g</div></StyledNutritionValues>
              <StyledNutritionValues><span>Fats</span><div>{recipe?.nutritionalValue.values.fats} g</div></StyledNutritionValues>
              <StyledNutritionValues><span>Fiber</span><div>{recipe?.nutritionalValue.values.fiber} g</div></StyledNutritionValues>
              <StyledNutritionValues><span>Cholesterol</span><div>{recipe?.nutritionalValue.values.cholesterol} mg</div></StyledNutritionValues>
              <StyledNutritionValues><span>Sodium</span><div>{recipe?.nutritionalValue.values.sodium} mg</div></StyledNutritionValues>
              </div>
            </AccordionDetails>
           </Accordion>

            </div>
            <div className="rounded-xl bg-white p-6 flex flex-col gap-3 shadow-lg h-full">
              <StyledRecipeInfo><Speed/> <div>Difficulty: <span>{recipe?.difficulty}</span></div></StyledRecipeInfo>
              <StyledRecipeInfo><SoupKitchen/> <div>Prep time: <span>{recipe?.prepTime}</span></div></StyledRecipeInfo>
              <StyledRecipeInfo><Microwave/> <div>Cook time: <span>{recipe?.cookTime}</span></div></StyledRecipeInfo>
              <StyledRecipeInfo><People/> <div>Serving: <span>{recipe?.serving}</span></div></StyledRecipeInfo>
              <StyledRecipeInfo><Paid/> <div>Cost: <span>{recipe?.cost}</span></div></StyledRecipeInfo>
            </div>
            </div>
            </div>
            <div className="w-full max-w-[750px] flex flex-col gap-6">
            <RecipeSection text={recipe?.presentation!} title="presentation"/>
            <IngredientsTab ingredients={recipe?.ingredients!} recipeId={recipeId!}/>
            <div className="flex flex-col gap-3">
                <RecipeSectionTitle title="preparation"/>
                <h3 className="uppercase text-sm font-semibold text-gray-500">How to prepare {recipe?.name}</h3>
                <div>
                 {styledRecipeText(recipe?.preparationInfos!,recipe?.name!)}
                </div>
            </div>
            <RecipeSection text={recipe?.storageInfos!} title="Storage"/>
            <div className="flex flex-col gap-3">
                <RecipeSectionTitle title="tips"/>
                <ol>
                 {recipe?.tips.map((o,i)=><li key={i}>{i+1}- {o}</li>)}
                </ol>
            </div>
            <div className="flex justify-end mt-4">
              <div className="flex items-center gap-5">
              <AddRecipeToBook recipeImg={recipe.imgUrl} recipeId={recipe.id}/>
              <div className="w-[0.3px] h-[30px] bg-black"></div>
              <AddToFavRecipes recipeId={recipe.id}/>
              <div className="w-[0.3px] h-[30px] bg-black"></div>
              <RecipeRatingComponent recipeId={recipeId!} recipeMetaData={data!} recipeDataIsLoading={isFetching} fetchRecipeMetaData={refetch}/>
              </div>
            </div>
    
          </div>
          
         </div>
         
        </div>
        
        <div className="bg-primary-color flex justify-center">
        <div className="max-w-[1150px] w-full flex-col-reverse lg:flex-row flex justify-between">
         <div className="p-6 flex flex-col gap-5">
         <RecipeSectionTitle title="RELATED RECIPES" color="white"/>
          <RelatedRecipes id={recipeId!} type={recipe?.type!}/>
         </div>
         <RecipeComments recipeId={recipeId!} recipeMetaData={data!} recipeDataIsLoading={isPending} fetchRecipeMetaData={refetch}/>
         </div>
        </div>
        </div>
     );
}

export default RecipeContainer;