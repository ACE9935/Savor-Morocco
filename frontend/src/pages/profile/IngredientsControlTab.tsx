import { Add, Done, ShoppingBasket } from "@mui/icons-material";
import { Ingredient } from "../../types/Recipe";
import { Checkbox, IconButton } from "@mui/material";
import { useUser } from "../../context/auth-context";
import { useEffect, useState } from "react";
import { setIngredientsNotIncluded } from "../../firebase/setIngredientsNotIncluded";
import AppSpinner from "../../components/AppSpinner";
import { useToast } from "../../context/ToastContext";
import ReincludeItemBtn from "./ReincludeItemBtn";
import SectionPlaceHolder from "./SectionPlaceHolder";

function IngredientsControlTab({ shoppingListId,ingredients }: { shoppingListId:string,ingredients: Ingredient[] }) {

    const { user, updateUser } = useUser();
    const [loading, setLoading] = useState(false);
    const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
    const {showToast}=useToast()

    const handleCheckboxChange = (ingredientName: string) => {
        setSelectedIngredients((prevSelected) =>
            prevSelected.includes(ingredientName)
                ? prevSelected.filter((name) => name !== ingredientName) // Uncheck
                : [...prevSelected, ingredientName] // Check
        );

    };

    const handleRemoveItems = async () => {
        if (!user || !user.id) return; // Ensure user is available
        try {
            setLoading(true);
            await setIngredientsNotIncluded(user.id, shoppingListId, selectedIngredients)
            await updateUser()
            showToast({
                text: "Item removed successfully!",
                severity: "success",
              });

            console.log("Ingredients marked as not included successfully!");
        } catch (error) {
            console.error("Failed to update ingredients:", error);
        } finally {
            setLoading(false);
            setSelectedIngredients([]); // Clear selection after update
        }
    };

    return (
        <>
        {!user?.shoppingList.length?
        <SectionPlaceHolder Icon={ShoppingBasket} title="" subTitle="Your shopping list" description="Ingredients to buy"/>
        :<div className="bg-white p-8 shadow-lg rounded-lg">
            <div>
                {ingredients?.filter((o) => !o.notIncluded).map((ingredient) => (
                    <div className="flex py-4 border-b items-center" key={ingredient.name}>
                        <div className={`${selectedIngredients.some(o=>o==ingredient.name)?"opacity-60 line-through":""} font-semibold text-black/80 w-[50%]`}>{ingredient.name}</div>
                        <div className={`${selectedIngredients.some(o=>o==ingredient.name)?"opacity-60 line-through":""} text-slate-600 w-[50%]`}>
                            {ingredient.quantity.split(",")[0]}
                        </div>
                        <Checkbox
                            onChange={() => handleCheckboxChange(ingredient.name)}
                            checked={selectedIngredients.includes(ingredient.name)}
                            icon={
                                <div className="rounded-full w-[2rem] aspect-square border-amber-500 border-2 bg-amber-400"></div>
                            }
                            checkedIcon={
                                <div className="rounded-full w-[2rem] aspect-square border-amber-500 border-2 bg-amber-400 grid place-items-center">
                                    <Done className="text-white" />
                                </div>
                            }
                        />
                    </div>
                ))}
            </div>
            <div className="flex justify-end">
            <button
                disabled={!selectedIngredients.length || loading}
                onClick={handleRemoveItems}
                className={`mt-4 px-4 py-2 font-bold text-white rounded-full flex gap-2 ${
                    !selectedIngredients.length
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-amber-500 hover:bg-amber-600"
                }`}
            >
                {loading ? <AppSpinner variant="DARK" size={25}/> :""}Remove items from list
            </button>
            </div>
            <div className="py-5 flex flex-col gap-4">
            <div className="bg-gray-200/80 font-semibold text-center text-black/50 p-2 rounded-md">recipe ingredients not listed</div>
            <div>
                {ingredients?.filter((o) => o.notIncluded).map((ingredient) => (
                    <div className="flex py-4 border-b items-center" key={ingredient.name}>
                        <div className={`${selectedIngredients.some(o=>o==ingredient.name)?"opacity-60 line-through":""} font-semibold text-black/80 w-[50%]`}>{ingredient.name}</div>
                        <div className={`${selectedIngredients.some(o=>o==ingredient.name)?"opacity-60 line-through":""} text-slate-600 w-[50%]`}>
                            {ingredient.quantity.split(",")[0]}
                        </div>
                    <ReincludeItemBtn id={shoppingListId} name={ingredient.name}/>
                    </div>
                ))}
            </div>
            </div>
        </div>}</>
    );
}

export default IngredientsControlTab;
