import { Done, ShoppingBasket } from "@mui/icons-material";
import { Checkbox } from "@mui/material";
import { useUser } from "../../context/auth-context";
import { useState } from "react";
import AppSpinner from "../../components/AppSpinner";
import { useToast } from "../../context/ToastContext";
import { recipes } from "../../utils/recipes";
import { setIngredientsNotIncludedByList } from "../../firebase/setIngredientsNotIncludedByList";
import SectionPlaceHolder from "./SectionPlaceHolder";

function IngredientsAllControlTab() {
    const { user, updateUser } = useUser();
    const [loading, setLoading] = useState(false);
    const [selectedIngredients, setSelectedIngredients] = useState<
        { id: string; name: string }[]
    >([]);
    const { showToast } = useToast();

    // Combine ingredients and merge their quantities with shopping list IDs
    const uniqueIngredients = user?.shoppingList
        ?.flatMap((list) =>
            list.items
                .filter((ingredient) => !ingredient.notIncluded) // Only include ingredients where notIncluded is false
                .map((ingredient) => ({
                    name: ingredient.name,
                    quantity: ingredient.quantity.split(",")[0].trim(), // Extract only the first part before the comma
                    listId: list.id, // Track the shopping list ID
                }))
        )
        .reduce(
            (
                acc: Record<
                    string,
                    { name: string; quantities: { quantity: string; listId: string }[] }
                >,
                ingredient
            ) => {
                if (!acc[ingredient.name]) {
                    acc[ingredient.name] = { name: ingredient.name, quantities: [] };
                }
                acc[ingredient.name].quantities.push({
                    quantity: ingredient.quantity,
                    listId: ingredient.listId,
                });
                return acc;
            },
            {}
        );

    const aggregatedIngredients = Object.values(uniqueIngredients || {}).map((ingredient) => ({
        name: ingredient.name,
        quantities: ingredient.quantities,
    }));

    const handleCheckboxChange = (
        ingredientName: string,
        quantity: string,
        listId: string
    ) => {
        setSelectedIngredients((prevSelected) => {
            const exists = prevSelected.some(
                (item) => item.name === ingredientName && item.id === listId
            );
            if (exists) {
                // Remove the selected ingredient
                return prevSelected.filter(
                    (item) => !(item.name === ingredientName && item.id === listId)
                );
            }
            // Add the selected ingredient
            return [...prevSelected, { id: listId, name: ingredientName }];
        });
    };

    const handleRemoveItems = async () => {
        if (!user || !user.id) return; // Ensure user is available
        try {
            setLoading(true);
            await setIngredientsNotIncludedByList(user.id, selectedIngredients);
            await updateUser();
            showToast({
                text: "Items removed successfully!",
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
                {aggregatedIngredients.map((ingredient) => {
                    const allChecked = ingredient.quantities.every((entry) =>
                        selectedIngredients.some(
                            (item) => item.name === ingredient.name && item.id === entry.listId
                        )
                    );

                    return (
                        <div className="py-4 border-b" key={ingredient.name}>
                            <div className="flex">
                                <div
                                    className={`font-semibold translate-y-3 text-black/80 w-[30%] ${
                                        allChecked ? "line-through opacity-50" : ""
                                    }`}
                                >
                                    {ingredient.name}
                                </div>
                                <div className="text-slate-600 text-sm grow">
                                    {ingredient.quantities.map((entry, index) => {
                                        const isChecked = selectedIngredients.some(
                                            (item) =>
                                                item.name === ingredient.name &&
                                                item.id === entry.listId
                                        );
                                        return (
                                            <div key={index} className="flex items-center">
                                                <div
                                                    className={`w-[40%] ${
                                                        isChecked ? "line-through opacity-50" : ""
                                                    }`}
                                                >
                                                    {entry.quantity}
                                                </div>
                                                <div
                                                    className={`w-[100%] ${
                                                        isChecked ? "line-through opacity-50" : ""
                                                    }`}
                                                >
                                                    {recipes.find(
                                                        (recipe) => recipe.id === entry.listId
                                                    )?.name || "Unknown Recipe"}
                                                </div>
                                                <Checkbox
                                                    onChange={() =>
                                                        handleCheckboxChange(
                                                            ingredient.name,
                                                            entry.quantity,
                                                            entry.listId
                                                        )
                                                    }
                                                    checked={isChecked}
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
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    );
                })}
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
                    {loading ? <AppSpinner variant="DARK" size={25} /> : ""}Remove items from list
                </button>
            </div>
        </div>}</>
    );
}

export default IngredientsAllControlTab;
