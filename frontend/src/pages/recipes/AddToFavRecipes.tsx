import { Favorite, FavoriteBorder, HeartBroken } from "@mui/icons-material";
import { Tooltip, Checkbox } from "@mui/material";
import { useUser } from "../../context/auth-context";
import { useEffect, useState } from "react";
import removeRecipeFromFavorites from "../../firebase/removeRecipeFromFavorites";
import addRecipeToFavorites from "../../firebase/addRecipeToFavorites";
import AppSpinner from "../../components/AppSpinner";
import { useToast } from "../../context/ToastContext"; // Import the useToast hook
import { useSigninModal } from "../../components/SigninModal";

function AddToFavRecipes({ recipeId, addTitle }: { recipeId: string; addTitle?: boolean }) {
  const { user, updateUser, loading: userLoading } = useUser();
  const {showSigninModal}=useSigninModal()
  const [loading, setLoading] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const { showToast } = useToast(); // Access the useToast hook

  // Sync favorite state when user or recipeId changes
  useEffect(() => {
    if (user) {
      setFavorite(user.favRecipes.includes(recipeId));
    }
  }, [user, recipeId]);

  const handleFavAction = async () => {
    if (!user) return showSigninModal();
    try {
      setLoading(true);

      if (favorite) {
        await removeRecipeFromFavorites(user.id, recipeId);
        showToast({
          text: "Recipe removed from favorites successfully!",
          severity: "success",
          icon: <HeartBroken/>,
        });
      } else {
        await addRecipeToFavorites(user.id, recipeId);
        showToast({
          text: "Recipe added to favorites successfully!",
          severity: "success",
          icon: <Favorite/>,
        });
      }

      // Update the user state to reflect the changes
      await updateUser();

      // Toggle the local favorite state
      setFavorite((prev) => !prev);
    } catch (e) {
      console.error("Error updating favorites:", e);
      showToast({
        text: "An error occurred while updating favorites.",
        severity: "error",
        icon: "Error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Tooltip title={favorite ? "Remove from favorites" : "Add to favorites"} arrow>
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (!loading && !userLoading) handleFavAction();
          }}
          className={`!bg-white hover:!bg-slate-300 rounded-full border flex items-center h-fit ${
            addTitle && "px-3"
          }`}
        >
          {(loading || userLoading) ? (
            <AppSpinner size={40} variant="DARK" />
          ) : (
            <Checkbox
              icon={<FavoriteBorder />}
              checked={favorite}
              disableRipple
              checkedIcon={<Favorite className="text-red-500" />}
              disabled={loading || userLoading}
            />
          )}
          {addTitle && (
            <p className="font-bold">{favorite ? "Remove from favorites" : "Add to favorites"}</p>
          )}
        </button>
      </Tooltip>
    </>
  );
}

export default AddToFavRecipes;


