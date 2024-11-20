import { IconButton, Modal } from "@mui/material";
import BasicButton from "../../components/form/BasicButton";
import { useUser } from "../../context/auth-context";
import { Add, ArrowBack, CancelOutlined, Done } from "@mui/icons-material";
import { useState } from "react";
import BasicInput from "../../components/form/BasicInput";
import { addRecipeToRecipeBook } from "../../firebase/addRecipeToRecipeBook";
import AppSpinner from "../../components/AppSpinner";
import RecipesBookSlider from "./RecipesBookSlider";
import { useToast } from "../../context/ToastContext"; // Import useToast hook

function RecipeBookModal({
  isOpen,
  onClose,
  recipeImg,
  recipeId,
}: {
  isOpen: boolean;
  onClose: () => void;
  recipeImg: string;
  recipeId: string;
}) {
  const { user, updateUser } = useUser();
  const [createMode, setCreateMode] = useState(false);
  const [newRecipeName, setNewRecipeName] = useState("");
  const [loading, setLoading] = useState(false);

  const { showToast } = useToast(); // Access useToast hook

  const handleClose = () => {
    setCreateMode(false); // Reset create mode
    setNewRecipeName(""); // Clear input
    setLoading(false); // Reset loading state
    onClose(); // Call the parent's onClose to close the modal
  };

  const handleSubmit = async () => {
    if (!user || !newRecipeName.length) return;
    try {
      setLoading(true);

      await addRecipeToRecipeBook(user.id, recipeId, null, newRecipeName);

      showToast({
        text: "Recipe was added to new recipe book successfully!",
        severity: "success",
      });

      // Update the user state to reflect the changes
      await updateUser();

      handleClose(); // Close the modal
    } catch (e) {
      console.error("Error adding recipe to book:", e);
      showToast({
        text: "An error occurred while adding the recipe book.",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal open={isOpen} onClose={handleClose} disableAutoFocus>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        className="bg-white rounded-md p-6 flex gap-6 flex-col sm:w-[25rem] w-[90%]"
      >
        <div className="flex flex-col gap-2">
          <div
            className={`flex ${
              !createMode ? "justify-end" : "justify-between"
            }`}
          >
            {createMode && (
              <IconButton onClick={() => setCreateMode(false)} disableRipple>
                <ArrowBack fontSize="large" />
              </IconButton>
            )}
            <IconButton onClick={handleClose} disableRipple>
              <CancelOutlined fontSize="large" />
            </IconButton>
          </div>
          <h2 className="text-xl font-semibold">
            {!createMode ? "Choose the recipe book" : "New recipe book"}
          </h2>
          {!createMode &&
            user?.recipesBooks?.length !== 0 &&
            user?.recipesBooks?.length! <= 2 && (
              <p className="text-md text-slate-600">
                Choose a recipe book
              </p>
            )}
        </div>

        {!createMode ? (
          <div>
            {user?.recipesBooks?.length ? (
              <RecipesBookSlider
                handleOpenToast={(message) =>
                  showToast({
                    text: message,
                    severity: "success",
                  })
                }
                recipeId={recipeId}
                recipeBooks={user.recipesBooks}
              />
            ) : (
              <div className="text-center text-xl py-4">
                No recipe books were created yet
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <div className="flex justify-center">
              <div className="grid grid-cols-2 grid-rows-2 w-[10rem] h-[8rem] gap-1 rounded-md overflow-hidden">
                <div
                  style={{ backgroundImage: `url(${recipeImg})` }}
                  className="bg-cover bg-center"
                ></div>
                <div className="bg-gray-200"></div>
                <div className="bg-gray-200"></div>
                <div className="bg-gray-200"></div>
              </div>
            </div>
            <form
              className="flex flex-col gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <BasicInput
                placeholder="Enter a name..."
                value={newRecipeName}
                onChange={(e) => setNewRecipeName(e.currentTarget.value)}
                maxLength={30}
                label="Recipe book name*"
              />
              <BasicButton
                type="submit"
                disabled={loading}
                onClick={handleSubmit}
              >
                {loading ? (
                  <AppSpinner size={25} variant="DARK" />
                ) : (
                  <Done />
                )}
                Add recipe book
              </BasicButton>
            </form>
          </div>
        )}

        {!createMode && (
          <BasicButton onClick={() => setCreateMode(true)}>
            <Add />
            Create a new recipe book
          </BasicButton>
        )}
      </div>
    </Modal>
  );
}

export default RecipeBookModal;
