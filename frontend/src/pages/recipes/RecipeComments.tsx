import { useEffect, useState } from "react";
import { useUser } from "../../context/auth-context";
import RecipeSectionTitle from "./RecipeSectionTitle";
import { TextField } from "@mui/material";
import { RecipeMetaData } from "../../types/RecipeMetaData";
import BasicButton from "../../components/form/BasicButton";
import AppSpinner from "../../components/AppSpinner";
import addCommentToRecipeAndUser from "../../firebase/addCommentToRecipeAndUser";
import RecipeCommentsTable from "./RecipeCommentsTable";
import Skeleton from "react-loading-skeleton";
import { useToast } from "../../context/ToastContext"; // Import useToast hook
import { useSigninModal } from "../../components/SigninModal";

function RecipeComments({
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
  const { user, updateUser, loading: isLoadingUser } = useUser();
  const [loading, setLoading] = useState(false);
  const [writeMode, setWriteMode] = useState(false);
  const [commentText, setCommentText] = useState("");
  const {showSigninModal}=useSigninModal()

  const { showToast } = useToast(); // Access useToast hook

  const handleAddComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return showSigninModal();

    // Clean the comment text to allow newlines but not consecutive ones
    const cleanedCommentText = commentText
      .split("\n") // Split by newlines
      .filter((line) => line.trim() !== "") // Remove empty lines
      .join("\n"); // Join the remaining lines with a single newline

    if (!cleanedCommentText.trim()) return; // Prevent submission if empty after cleaning

    setLoading(true);
    try {
      await addCommentToRecipeAndUser(recipeId, user.id, cleanedCommentText);
      setCommentText(""); // Clear the input field
      fetchRecipeMetaData(); // Re-fetch metadata to display the new comment

      showToast({
        text: "Comment added successfully!",
        severity: "success",
      });
    } catch (error) {
      console.error("Error adding comment:", error);
      showToast({
        text: "An error occurred while adding your comment. Please try again.",
        severity: "error",
      });
    } finally {
      setLoading(false);
      setWriteMode(false);
    }
  };

  return (
    <div className="p-6 flex flex-col gap-5 w-full max-w-[36rem]">
      <RecipeSectionTitle title="COMMENTS" color="white" />

      <div className="rounded-xl shadow-lg bg-white p-6 flex flex-col gap-4">
        <h2 className="font-bold">{recipeMetaData?.comments.length} comments</h2>

        {(isLoadingUser || loading || recipeDataIsLoading) ? (
          <div className="flex flex-col gap-2">
            <Skeleton width={"100%"} height={100} />
            <Skeleton width={"100%"} height={300} />
          </div>
        ) : (
          <>
            {user && (
              <div className="flex gap-3 items-start">
                <div
                  style={{ backgroundImage: `url(${user.photoUrl})` }}
                  className="w-[3rem] aspect-square bg-cover bg-center rounded-full"
                ></div>
                <form
                  onSubmit={handleAddComment}
                  className="w-full flex flex-col gap-2"
                >
                  <TextField
                    onClick={() => setWriteMode(true)}
                    value={commentText}
                    maxRows={5}
                    onChange={(e) => setCommentText(e.target.value)}
                    className="w-full"
                    placeholder="Add comment..."
                    variant="standard"
                    multiline={true}
                    disabled={loading}
                  />
                  {writeMode && (
                    <div className="flex gap-2 justify-end">
                      <button
                        type="button"
                        onClick={() => setWriteMode(false)}
                        className="p-2 hover:bg-slate-200/70 transition-all rounded-lg font-semibold"
                      >
                        Cancel
                      </button>
                      <BasicButton type="submit" disabled={loading}>
                        Add comment{" "}
                        {loading && <AppSpinner size={25} variant="DARK" />}
                      </BasicButton>
                    </div>
                  )}
                </form>
              </div>
            )}
            <div>
              <RecipeCommentsTable
                recipeId={recipeId}
                fetchRecipeMetaData={fetchRecipeMetaData}
                recipeComments={recipeMetaData?.comments!}
                recipeMetaDataIsLoading={recipeDataIsLoading!}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default RecipeComments;



