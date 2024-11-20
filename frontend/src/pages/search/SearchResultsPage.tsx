import { useEffect, useState } from "react";
import { recipes } from "../../utils/recipes";
import { Recipe } from "../../types/Recipe";
import { useParams } from "react-router-dom";
import NotFound from "../../components/NotFound";
import DynamicSwiper from "../../components/DynamicSwiper";
import SectionPlaceHolder from "../profile/SectionPlaceHolder";
import { SentimentDissatisfied } from "@mui/icons-material";
import { configurations } from "../../app-configurations";
import { Helmet } from "react-helmet";

type RecipeType = "Main Course" | "Appetizer" | "Dessert" | "Beverage";

const initialResults: Record<RecipeType, Recipe[]> = {
    "Main Course": [],
    Appetizer: [],
    Dessert: [],
    Beverage: [],
};

function SearchResultsPage() {
    const { searchTerm: term } = useParams();
    const [matchedRecipes, setMatchedRecipes] = useState(initialResults);

    if (!term) return <NotFound />;

    useEffect(() => {
        if (term.trim() === "") {
            setMatchedRecipes(initialResults); // Reset if term is empty
            return;
        }

        // Filter and organize recipes
        const results = recipes.reduce<Record<RecipeType, Recipe[]>>(
            (acc, recipe) => {
                if (recipe.name.toLowerCase().includes(term.toLowerCase())) {
                    acc[recipe.type].push(recipe); // Add recipe to the category
                }
                return acc;
            },
            {
                "Main Course": [],
                Appetizer: [],
                Dessert: [],
                Beverage: [],
            }
        );

        setMatchedRecipes(results);
    }, [term]);

    // Filter out categories with no items
    const nonEmptyCategories = Object.entries(matchedRecipes).filter(
        ([, items]) => items.length > 0
    );

    return (
        <div className="flex px-7 pb-6 w-full justify-center">
            <Helmet>
            <title>Search Results for: {term}</title>
            <meta name="description" content={configurations.appDescription} />
         </Helmet>
            <div className="flex flex-col gap-4 w-full max-w-[1200px]">
                <h1 className="text-3xl font-bold text-black/80">
                    Search results for: "{term}"
                </h1>
                {nonEmptyCategories.length > 0 ? (
                    nonEmptyCategories.map(([type, items]) => (
                        <div key={type} className="mb-2">
                            <DynamicSwiper title={type as RecipeType} items={items} />
                        </div>
                    ))
                ) : (
                    <SectionPlaceHolder description="Try searching for something else!" Icon={SentimentDissatisfied} title="" subTitle={`No results found for ${term}`}/>
                )}
            </div>
        </div>
    );
}

export default SearchResultsPage;

