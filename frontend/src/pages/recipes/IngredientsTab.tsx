import { Ingredient } from "../../types/Recipe";
import ShoppingListButtonController from "./ShoppingListButtonController";

function IngredientsTab({recipeId,ingredients}:{recipeId:string,ingredients:Ingredient[]}) {
    return ( 
        <div className="flex flex-col gap-5 bg-white p-8 rounded-xl shadow-lg pb-12">
            <h2 className="text-xl font-semibold"><div className="relative w-fit">INGREDIENTS<div className="w-[50%] h-1 bg-amber-500 mt-1"></div></div></h2>
            <ul className="grid gap-3 grid-cols-3">
              {ingredients.map((o,i)=><li key={i} className="flex gap-2 items-start"><span className="w-2 h-2 mt-2 bg-amber-500 inline-block"></span><div><div className="font-bold underline cursor-pointer text-amber-950">{o.name}</div><div>{o.quantity}</div></div></li>)}
            </ul>
            <div className="flex justify-center mt-4">
              <ShoppingListButtonController items={ingredients} recipeId={recipeId}/>
            </div>
        </div>
     );
}

export default IngredientsTab;