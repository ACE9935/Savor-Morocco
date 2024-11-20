import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase"; // Ensure you have firebase setup here
import { collection, query, getDocs, where} from "firebase/firestore";
import { Alert, Modal, Popover, Snackbar } from "@mui/material";
import { Comment } from "../../firebase/addCommentToRecipeAndUser";
import { Timestamp } from "firebase/firestore"; // Import Firestore Timestamp
import { ArrowCircleDown, Delete, Sort } from "@mui/icons-material";
import { useUser } from "../../context/auth-context";
import deleteCommentFromRecipeAndUser from "../../firebase/deleteCommentFromRecipeAndUser";
import { useDisclosure } from "@chakra-ui/react";
import AppSpinner from "../../components/AppSpinner";
import BasicButton from "../../components/form/BasicButton";
import { configurations } from "../../app-configurations";

function RecipeCommentsTable({
  recipeId,
  recipeComments,
  recipeMetaDataIsLoading,
  fetchRecipeMetaData
}: {
  recipeId: string;
  recipeComments: Comment[];
  recipeMetaDataIsLoading: boolean;
  fetchRecipeMetaData:()=>void
}) {

  const [comments, setComments] = useState<{
    comment: string;
    userName: string;
    date: string;
    userId: string;
    userPic: string;
    id: string;
  }[]>([]);

  const { user } = useUser();
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"newest" | "oldest">("newest");
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [commentToDelete, setCommentToDelete] = useState<string | null>(null);
  const { isOpen: isOpenToast, onOpen: onOpenToast, onClose: onCloseToast } = useDisclosure();
  
  const [displayedComments, setDisplayedComments] = useState(5); // Limit to the number of comments shown initially

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  useEffect(() => {

    async function fetchComments() {
      
      try {
        setLoading(true);

        if (recipeComments) {
          const commentsWithUserNames = await Promise.all(
            recipeComments.map(async (comment) => {
              const userQuery = query(
                collection(db, "users"),
                where("id", "==", comment.userId)
              );
              const userQuerySnapshot = await getDocs(userQuery);

              let userName = "Unknown User";
              let userPic = configurations.userDefaultPic;
              let userId = "";
              if (!userQuerySnapshot.empty) {
                const userDoc = userQuerySnapshot.docs[0];
                userName = userDoc.data().userName;
                userPic = userDoc.data().photoUrl;
                userId = userDoc.data().id;
              }

              const timestamp = comment.date instanceof Timestamp ? comment.date.toDate() : new Date();
              const formattedDate = timestamp.toLocaleString("en-US", {
                dateStyle: "medium",
                timeStyle: "short",
              });

              return {
                comment: comment.text,
                date: formattedDate,
                userPic,
                userName,
                userId,
                id: comment.id,
                timestamp,
              };
            })
          );

          const sortedComments = commentsWithUserNames.sort((a, b) => {
            if (filter === "newest") {
              return b.timestamp.getTime() - a.timestamp.getTime();
            } else {
              return a.timestamp.getTime() - b.timestamp.getTime();
            }
          });

          setComments(sortedComments);
        } else {
          console.log("No recipe-meta-data found for this recipe.");
        }
      } catch (error) {
        console.error("Error fetching comments:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchComments();

  }, [recipeId, recipeComments, filter]);

  const handleFilterChange = (filterOption: "newest" | "oldest") => {
    setFilter(filterOption);
  };

  const handleDeleteComment = async (commentId: string | null) => {
    if (!user) throw Error("User needs to sign in to perform this action");
    if (!commentId) return;
    try {
      setLoading(true);
      await deleteCommentFromRecipeAndUser(recipeId, user?.id, commentId);
      await fetchRecipeMetaData();
      console.log("Comment deleted successfully.");
      onClose();
      onOpenToast()
    } catch (error) {
      console.error("Error deleting comment:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadMoreComments = () => {
    setDisplayedComments((prev) => prev + 5);
  };

  return (
        <div>

          <Snackbar open={isOpenToast} autoHideDuration={5000} onClose={onCloseToast}>
            <Alert
              onClose={onCloseToast}
              severity="success"
              variant="filled"
              icon={<Delete />}
              sx={{ width: "100%" }}
            >
              Comment deleted successfully!
            </Alert>

          </Snackbar>
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
                <h2 className="text-xl font-semibold">Delete the comment</h2>
                <p className="text-md text-slate-600">Permanently delete your comment?</p>
              </div>
              <div className="flex gap-3 justify-end">
                <button
                  className="font-bold text-black rounded-lg hover:bg-gray-200 transition-all p-3"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <BasicButton disabled={loading} onClick={() => handleDeleteComment(commentToDelete)}>
                  {loading && <AppSpinner variant="DARK" size={26} />}
                  Delete
                </BasicButton>
              </div>
            </div>
          </Modal>
          
          <div className="mb-4">
            <button
              className="p-2 flex gap-2 hover:bg-slate-200/70 transition-all rounded-lg font-semibold"
              aria-describedby={id}
              onClick={handleClick}
            >
              <Sort />
              Order by
            </button>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <div className="py-2">
                <button
                  onClick={() => {
                    handleFilterChange("newest");
                    handleClose();
                  }}
                  className={`px-4 block py-2 ${
                    filter === "newest" ? "bg-black/80 text-white" : "hover:bg-gray-200"
                  }`}
                >
                  Newest to Oldest
                </button>
                <button
                  onClick={() => {
                    handleFilterChange("oldest");
                    handleClose();
                  }}
                  className={`px-4 py-2 ${
                    filter === "oldest" ? "bg-black/80 text-white" : "hover:bg-gray-200"
                  }`}
                >
                  Oldest to Newest
                </button>
              </div>
            </Popover>

          </div>
          {comments.length ? (
            <>
              {comments.slice(0, displayedComments).map((comment, index) => (
                <div
                  key={index}
                  className={`p-2 border-b border-black flex gap-2 items-start ${
                    user?.id === comment.userId && "bg-amber-200"
                  }`}
                >
                  <div
                    style={{ backgroundImage: `url(${comment.userPic})` }}
                    className="w-[2.6rem] aspect-square bg-cover bg-center rounded-full"
                  ></div>
                  <div className="flex flex-col gap-1 w-full">
                    <div className="flex gap-2 justify-between">
                      <div className="flex gap-2 items-start">
                        <div className={`font-semibold`}>
                          {comment.userName}
                          {user?.id === comment.userId && " (You)"}
                        </div>
                        <div className="text-slate-600 text-xs sm:text-sm mt-[2px]">{comment.date}</div>
                      </div>
                    </div>
                    <div
                      className="break-all"
                      dangerouslySetInnerHTML={{
                        __html: comment.comment.replace(/\n/g, "<br />"),
                      }}
                    />
                    {user?.id === comment.userId && (
                      <button
                        onClick={() => {
                          setCommentToDelete(comment.id);
                          onOpen();
                        }}
                        className="text-red-400 font-semibold text-sm mt-2 self-end py-1 px-2 flex items-center gap-1 hover:bg-red-200 rounded-lg transition-all"
                      >
                        <Delete fontSize="small"/> Delete
                      </button>
                    )}
                  </div>
                </div>
              ))}
              {displayedComments < comments.length && (
                <div className="flex justify-center">
                 <div
                  onClick={loadMoreComments}
                  className="mt-4 p-2 cursor-pointer w-fit font-semibold flex flex-col items-center gap-2 text-black/80 rounded-lg transition-all"
                 >
                  <ArrowCircleDown fontSize="large" className="text-amber-500"/>
                  Load More Comments
                 </div>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-3">No comments found</div>
          )}

        </div>

  );
}

export default RecipeCommentsTable;




