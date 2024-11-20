import { useEffect, useState } from "react";
import getOrCreateRecipeMetaData from "../../firebase/getOrCreateRecipeMetaData";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Star, StarBorder } from "@mui/icons-material";
import { AnimatePresence, motion } from "motion/react";
import { Rating } from "@mui/material";
import { useUser } from "../../context/auth-context";
import { addRecipeRating } from "../../firebase/addRecipeRating";
import { useDisclosure } from "@chakra-ui/react";
import addUserRating from "../../firebase/addUserRating";
import { RecipeMetaData } from "../../types/RecipeMetaData";
import { useToast } from "../../context/ToastContext";
import { useSigninModal } from "../../components/SigninModal";

function RecipeRatingComponent({
  recipeId,
  recipeMetaData,
  fetchRecipeMetaData,
  recipeDataIsLoading,
}: {
  recipeId: string;
  recipeMetaData: RecipeMetaData | null;
  fetchRecipeMetaData: () => void;
  recipeDataIsLoading?: boolean;
}) {
  const [toRate, setToRate] = useState(false);
  const [globalRating, setGlobalRating] = useState(0);
  const { user, updateUser, loading: isLoadingUser } = useUser();
  const [loading, setLoading] = useState(false);
  const {showSigninModal}=useSigninModal()
  const {showToast} = useToast();

  useEffect(() => {
    if (!recipeMetaData) return;
    else if (recipeMetaData.ratings.length > 0) {
      const totalRating = recipeMetaData.ratings.reduce((sum, rating) => sum + rating.rating, 0);
      setGlobalRating(totalRating / recipeMetaData.ratings.length);
    } else {
      setGlobalRating(0); // No ratings, set to 0 or any default value
    }
  }, [recipeMetaData]);

  const rateRecipe = async (rating: number) => {
    if (!user) {
      return showSigninModal()
    }

    try {
      setLoading(true);
      await addRecipeRating(recipeId, { userId: user.id, rating: rating });
      await addUserRating(user.id, { recipeId, rating });
      await fetchRecipeMetaData();
      await updateUser();

      showToast({
        text: "Recipe rating submitted successfully!",
        severity: "success",
        icon: <Star sx={{ color: "white" }} />,
      });
    } catch (error) {
      console.error("Error submitting rating:", error);
      showToast({
        text: "Failed to submit rating. Please try again later.",
        severity: "error",
      });
    } finally {
      setLoading(false); // Set loading to false after submission
    }
  };

  return (
    <div>
      {(isLoadingUser || loading || recipeDataIsLoading) ? (
        <Skeleton width={200} height={40} className="!rounded-full" /> // Display spinner when loading
      ) : (
        <div className="flex gap-2 items-center p-2 px-4 pl-0">
          <div className="flex gap-1">
            <Star className="text-amber-500" />
            <div className="text-lg font-semibold">
              {globalRating.toFixed(1)}
              <span className="text-slate-400">/5</span>
            </div>
          </div>
          {!user?.ratings?.some((recipe) => recipe.recipeId === recipeId) && (
            <div
              className={`${
                toRate ? "bg-amber-500 text-white" : "bg-amber-400 hover:bg-amber-500"
              } h-10 transition-all overflow-hidden font-bold p-2 px-4 rounded-full items-center gap-2 flex`}
            >
              <AnimatePresence>
                {toRate && (
                  <motion.div
                    className="translate-y-[2px]"
                    initial={{ width: 0, opacity: 0 }}
                    exit={{ width: 0, opacity: 0 }}
                    animate={{ width: "fit-content", opacity: 1 }}
                  >
                    <Rating
                      onChange={(e, value) => rateRecipe(value!)}
                      emptyIcon={<StarBorder sx={{ color: "white" }} />}
                      icon={<Star sx={{ color: "white" }} />}
                      defaultValue={0}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              <span
                aria-label="rating-button"
                className="cursor-pointer relative z-2"
                onClick={() => setToRate((prev) => !prev)}
              >
                Rate
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default RecipeRatingComponent;

