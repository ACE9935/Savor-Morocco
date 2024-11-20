import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/auth-context";
import { useEffect, useState } from "react";
import { IconButton, Modal } from "@mui/material";
import { ArrowBack, Delete, OpenInNew } from "@mui/icons-material";
import { recipes } from "../../utils/recipes";
import { Recipe } from "../../types/Recipe";
import IngredientsControlTab from "./IngredientsControlTab";
import { useDisclosure } from "@chakra-ui/react";
import BasicButton from "../../components/form/BasicButton";
import AppSpinner from "../../components/AppSpinner";
import { useToast } from "../../context/ToastContext";
import { removeShoppingList } from "../../firebase/removeShoppingList";
import ShoppingListNavTab from "./ShoppingListNavTab";
import ShoppingListContainerSkeleton from "./ShoppingListContainerSkeleton";

function ShoppingListContainer() {

  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading]=useState(false)
  const { user, updateUser, loading:isLoadingUser } = useUser();
  const {showToast}=useToast()
  const [shoppingListRecipes, setShoppingListRecipes] = useState<Recipe[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const handleDelete = async () => {
    if (!user || !user.id) return; // Ensure user is available
    try {
        setLoading(true);
        await removeShoppingList(user.id, selectedRecipe?.id!)
        await updateUser()
        showToast({
            text: "Recipe removed successfully!",
            severity: "success",
            icon:<Delete/>
          });
          onClose()

        console.log("Ingredients marked as not included successfully!");
    } catch (error) {
        console.error("Failed to update ingredients:", error);
    } finally {
        setLoading(false);// Clear selection after update
    }
};

  useEffect(() => {
    if (user) {
      const selectedRecipes = user?.shoppingList
        ?.map((item) => recipes.find((recipe) => recipe.id === item.id))
        .filter((recipe): recipe is Recipe => recipe !== undefined); // Filter out undefined values

      // Only update if the new array is different
      if (
        selectedRecipes.length !== shoppingListRecipes.length ||
        !selectedRecipes.every((recipe, index) => recipe.id === shoppingListRecipes[index]?.id)
      ) {
        setShoppingListRecipes(selectedRecipes);
        if (selectedRecipes.length > 0) {
          setSelectedRecipe(selectedRecipes[0]);
        }
      }
    }
  }, [user]);

  return (
    <>
    {isLoadingUser?
    <ShoppingListContainerSkeleton/>
    :<div className="flex flex-col gap-4 w-full max-w-[1100px]">

       <Modal open={isOpen} onClose={onClose} disableAutoFocus>
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
              className="bg-white rounded-md p-6 flex gap-10 flex-col sm:w-[25rem] w-[90%]"
            >
              <div className="flex flex-col gap-3">
                <h2 className="text-xl font-semibold">Delete recipe book</h2>
                <p className="text-md text-slate-600">Remove recipe from shopping list?</p>
              </div>
              <div className="flex gap-3 justify-end">
                <button
                  className="font-bold text-black rounded-lg hover:bg-gray-200 transition-all p-3"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <BasicButton disabled={loading} onClick={handleDelete}>
                  {loading && <AppSpinner variant="DARK" size={26} />}
                  Delete
                </BasicButton>
              </div>
            </div>
          </Modal>

      {/* Render recipe book details */}
      <div className="flex gap-3 items-center">
        <IconButton onClick={() => navigate("/profile/overview")}>
          <ArrowBack fontSize="large" className="text-primary-color" />
        </IconButton>
        <div className="w-[0.3px] h-[30px] bg-black"></div>
        <h2 className="font-semibold text-2xl text-black/80 pl-2">Your Shopping List</h2>
      </div>

      <ShoppingListNavTab/>

      <div className="flex flex-col gap-6 w-full">
        <div className="flex gap-4 flex-wrap">
          {shoppingListRecipes?.map((recipe) => (
            <div
              key={recipe.id}
              onClick={() => setSelectedRecipe(recipe)}
              style={{ backgroundImage: `url(${recipe.imgUrl})` }}
              className={`bg-center relative transition-all cursor-pointer flex items-end bg-cover w-[12rem] aspect-[1.6] rounded-md shadow-md 
              ${selectedRecipe?.id !== recipe.id ? "bg-gray-400/70 hover:bg-transparent" : "bg-transparent origin-left scale-110 mr-4"} bg-blend-multiply`}
            >
              {selectedRecipe?.id === recipe.id && (
                <div className="absolute w-full h-full bg-amber-500/30"></div>
              )}
              <div className="font-bold text-white relative z-1 p-3 flex flex-col gap-1">
                {recipe.name}
                {selectedRecipe?.id === recipe.id && (
                  <div className="rounded-full bg-amber-500 w-full h-1"></div>
                )}
              </div>
            </div>
          ))}
        </div>
        <IngredientsControlTab shoppingListId={selectedRecipe?.id!} ingredients={user?.shoppingList.find(o=>o.id==selectedRecipe?.id)?.items!}/>
      </div>
      {user?.shoppingList.length?<div className="flex justify-end gap-3">
        <button onClick={onOpen} className="rounded-full border-2 transition-all hover:text-white hover:bg-red-500 border-red-500 text-red-500 flex gap-1 items-center py-1 px-2 text-sm font-semibold"><Delete fontSize="small"/>Delete Recipe</button>
        <button onClick={()=>navigate(`/recipes/${selectedRecipe?.id}`)} className="rounded-full transition-all hover:bg-green-600 bg-green-500 text-white flex gap-1 items-center py-1 px-2 text-sm font-semibold"><OpenInNew fontSize="small"/>Open recipe</button>
      </div>:<></>}
    </div>}
    </>
  );
}

export default ShoppingListContainer;

