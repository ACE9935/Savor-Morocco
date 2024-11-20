import { AddShoppingCart, RemoveShoppingCart } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import { useUser } from "../../context/auth-context";
import { useEffect, useState } from "react";
import { useToast } from "../../context/ToastContext"; // Import the useToast hook
import { removeShoppingListItem } from "../../firebase/removeRecipeFromShoppingList";
import { addRecipeToShoppingList } from "../../firebase/addRecipeToShoppingList";
import Skeleton from "react-loading-skeleton";
import { Ingredient } from "../../types/Recipe";
import { useSigninModal } from "../../components/SigninModal";

function ShoppingListButtonController({ recipeId,items }: { recipeId: string,items:Ingredient[] }) {
  const { user, updateUser, loading: userLoading } = useUser();
  const {showSigninModal}=useSigninModal()
  const [loading, setLoading] = useState(false);
  const [inList, setInList] = useState(false);

  const { showToast } = useToast(); // Access the useToast hook

  // Sync shopping list state when user or recipeId changes
  useEffect(() => {
    if (user) {
      setInList(user.shoppingList?.some(o=>o.id==recipeId));
    }
  }, [user, recipeId]);

  const handleListAction = async () => {
    if (!user) return showSigninModal();

    try {
      setLoading(true);

      if (inList) {
        await removeShoppingListItem(user.id, recipeId);
        showToast({
          text: "Recipe removed from shopping list successfully!",
          severity: "success",
          icon: <RemoveShoppingCart />,
        });
      } else {
        await addRecipeToShoppingList(user.id, recipeId,items);
        showToast({
          text: "Recipe added to shopping list successfully!",
          severity: "success",
          icon: <AddShoppingCart />,
        });
      }

      // Update the user state to reflect the changes
      await updateUser();

      // Toggle the local list state
      setInList((prev) => !prev);
    } catch (e) {
      console.error("Error updating shopping list:", e);
      showToast({
        text: "An error occurred while updating the shopping list.",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {(loading || userLoading) ? (
        <Skeleton width={240} height={40} className="!rounded-full" />
      ) : (
        <button
          disabled={loading}
          onClick={handleListAction}
          className={`flex gap-1 ${
            inList
              ? "outline-2 outline outline-red-500 hover:bg-red-500 hover:text-white text-red-500"
              : "bg-amber-500 hover:bg-amber-600 text-white"
          } font-bold rounded-full p-2 px-4 transition-all`}
        >
          {!inList ? (
            <>
              <AddShoppingCart />
              <p>Add to shopping list</p>
            </>
          ) : (
            <>
              <RemoveShoppingCart />
              <p>Remove from shopping list</p>
            </>
          )}
        </button>
      )}
    </>
  );
}

export default ShoppingListButtonController;
