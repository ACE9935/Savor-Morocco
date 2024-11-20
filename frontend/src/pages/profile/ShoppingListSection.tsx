import { useEffect, useState } from "react";
import { useUser } from "../../context/auth-context";
import { recipes } from "../../utils/recipes";
import { Recipe } from "../../types/Recipe";
import { ShoppingBasket } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import SectionPlaceHolder from "./SectionPlaceHolder";

function ShoppingListSection() {

  const navigate = useNavigate()
  const { user } = useUser();
  const [displayedRecipes, setDisplayedRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    if (user) {
      const selectedRecipes = user.shoppingList
        .slice(0, 4)
        .map((o) => recipes.find((recipe) => recipe.id === o.id))
        .filter((recipe): recipe is Recipe => recipe !== undefined); // Filter out undefined values
      setDisplayedRecipes(selectedRecipes);
    }
  }, [user]);

  // Determine grid rows and columns based on the number of items
  const calculateGridDimensions = (itemCount: number) => {
    if (itemCount <= 1) return { rows: 1, cols: 1 };
    if (itemCount === 2) return { rows: 1, cols: 2 };
    if (itemCount <= 4) return { rows: 2, cols: 2 };
    const cols = Math.ceil(Math.sqrt(itemCount));
    const rows = Math.ceil(itemCount / cols);
    return { rows, cols };
  };

  const { rows, cols } = calculateGridDimensions(displayedRecipes.length);

  return (
    <>{!user?.shoppingList.length?
    <SectionPlaceHolder Icon={ShoppingBasket} title="Shopping list" subTitle="Your shopping list" description="Ingredients to buy"/>
    :<div>
         <div className="flex pb-4 gap-3 items-center">
        <h2 className="text-xl font-semibold text-slate-600">Shopping list</h2>
        <div className="w-[0.3px] h-[30px] bg-black"></div>
        <h3 className="text-amber-500 font-semibold text-xl">{user?.shoppingList.length} Recipes</h3>
        </div>
      <div
        className="relative grid rounded-lg overflow-hidden w-[22rem] aspect-[1.5] shadow-lg"
        style={{
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
        }}
      >
         <div className="absolute w-full h-full bg-black/30 grid place-items-center backdrop-blur-[2px]">
          <div className="flex flex-col gap-2 items-center">
            <ShoppingBasket className="!text-7xl" sx={{color:"white"}}/>
            <button onClick={()=>navigate("/profile/shopping-list")} className="rounded-lg text-white font-bold px-4 py-2 bg-green-500 transition-all hover:bg-green-600">See list</button>
          </div>
         </div>
        {displayedRecipes.map((o, index) => (
          <div
            key={o.id}
            className={`bg-cover bg-center ${displayedRecipes.length === 3 && index === 2 ? "col-span-2" : ""}`}
            style={{ backgroundImage: `url(${o.imgUrl})` }}
          ></div>
        ))}
      </div>
    </div>}
    </>
  );
}

export default ShoppingListSection;


