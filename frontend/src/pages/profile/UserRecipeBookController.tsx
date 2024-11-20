import { CancelOutlined, Delete, Edit, MoreVert } from "@mui/icons-material";
import { Alert, IconButton, Modal, Snackbar } from "@mui/material";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { RecipeBook } from "../../types/RecipeBook";
import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { useUser } from "../../context/auth-context";
import BasicButton from "../../components/form/BasicButton";
import AppSpinner from "../../components/AppSpinner";
import { deleteRecipeBook } from "../../firebase/deleteRecipeBook";
import { useToast } from "../../context/ToastContext";
import BasicInput from "../../components/form/BasicInput";
import { recipes } from "../../utils/recipes";
import { updateRecipeBookName } from "../../firebase/updateRecipeBookName";
import { useNavigate } from "react-router-dom";

function UserRecipeBookController({ recipeBook }: { recipeBook: RecipeBook }) {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen:isOpen2, onOpen:onOpen2, onClose:onClose2 } = useDisclosure();
  const [newRecipeBookName, setNewRecipeBookName]=useState(recipeBook.name)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const navigate=useNavigate()
  const { showToast } = useToast();
  const [loading, setLoading]=useState(false)
  const {user,updateUser}=useUser()
  const open = Boolean(anchorEl);

  const recipeImages = recipeBook.recipes
  .slice(0, 4) // Take only the first 4 recipes
  .map(recipeId => {
      const recipe = recipes.find(r => r.id === recipeId);
      return recipe?.imgUrl||"";
  });

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSubmit = async ()=>{

    if(!user || loading || !newRecipeBookName.length) return;
    try{
        setLoading(true);
        await updateRecipeBookName(user.id, recipeBook.id, newRecipeBookName);
        await updateUser()
        console.log("Recipe book name edited successfully!");
        showToast({
            text: "Recipe book name edited successfully!",
            severity: "success",
          });
        onClose2();
    }
    catch(e){
        console.log(e)
    }
    finally{
     setLoading(false)
    }

  }

  const handleRecipeBookDelete = async ()=>{

    if(!user || loading) return;
    try{
        setLoading(true);
        await deleteRecipeBook(user.id,recipeBook.id);
        await updateUser()
        console.log("Comment deleted successfully.");
        showToast({
            text: "Recipe book deleted successfully!",
            severity: "success",
            icon: <Delete />,
          });
        onClose();
        navigate("/profile/overview")
    }
    catch(e){
        console.log(e)
    }
    finally{
     setLoading(false)
    }

  }

  return (
    <>
      <Modal open={isOpen2} onClose={onClose2} disableAutoFocus>
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
          <div className="flex justify-end w-full"><IconButton onClick={onClose2} disableRipple><CancelOutlined fontSize="large"/></IconButton></div>
            <div className={`flex gap-2 flex-col`}>
            <h2 className="text-xl font-semibold pb-3">Edit recipe book</h2>
          </div>

            <div className="flex flex-col gap-3">
             <div className="flex justify-center">
                <div className="grid grid-cols-2 grid-rows-2 w-[10rem] h-[8rem] gap-1 rounded-md overflow-hidden">
                 <div style={{backgroundImage:`url(${recipeImages[0]})`}} className="bg-gray-200 bg-cover bg-center"></div>
                 <div style={{backgroundImage:`url(${recipeImages[1]})`}} className="bg-gray-200 bg-cover bg-center"></div>
                 <div style={{backgroundImage:`url(${recipeImages[2]})`}} className="bg-gray-200 bg-cover bg-center"></div>
                 <div style={{backgroundImage:`url(${recipeImages[3]})`}} className="bg-gray-200 bg-cover bg-center"></div>
                </div>
             </div>
             
             <form className="flex flex-col gap-2" onSubmit={(e)=>{e.preventDefault();handleSubmit()}}>
                <BasicInput placeholder="Enter a name..." value={newRecipeBookName} onChange={(e)=>setNewRecipeBookName(e.currentTarget.value)} maxLength={30} label="Recipe book name*"/>
                <BasicButton type="submit" disabled={loading} onClick={handleSubmit}>{loading?<AppSpinner size={25} variant="DARK"/>:<Edit/>}Edit recipe book name</BasicButton>
             </form>
            </div>
            
            </div>
        </div>
       </Modal>
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
                <p className="text-md text-slate-600">Permanently delete recipe book?</p>
              </div>
              <div className="flex gap-3 justify-end">
                <button
                  className="font-bold text-black rounded-lg hover:bg-gray-200 transition-all p-3"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <BasicButton disabled={loading} onClick={handleRecipeBookDelete}>
                  {loading && <AppSpinner variant="DARK" size={26} />}
                  Delete
                </BasicButton>
              </div>
            </div>
          </Modal>
      <IconButton
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreVert />
      </IconButton>

      {/* The Menu is separate and controlled by the anchorEl state */}
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={onOpen2}>Edit name</MenuItem>
        <MenuItem onClick={onOpen}>Delete</MenuItem>
      </Menu>
    </>
  );
}

export default UserRecipeBookController;
