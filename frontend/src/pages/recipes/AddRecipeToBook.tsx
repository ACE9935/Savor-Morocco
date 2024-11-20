import { Tooltip } from "@mui/material";
import { useState } from "react";
import { useUser } from "../../context/auth-context";
import { useDisclosure } from "@chakra-ui/react";
import { Add } from "@mui/icons-material";
import RecipeBookModal from "./RecipeBookModal";
import AppSpinner from "../../components/AppSpinner";
import { useSigninModal } from "../../components/SigninModal";

function AddRecipeToBook({recipeId,recipeImg}:{recipeId:string,recipeImg:string}) {

    const { isOpen: isOpenModal, onOpen: onOpenModal, onClose: onCloseModal } = useDisclosure();
    const {showSigninModal}=useSigninModal()
    const {user,loading:isLoadingUser}=useUser()

    return ( 
        <>
        <RecipeBookModal recipeId={recipeId} recipeImg={recipeImg} isOpen={isOpenModal} onClose={onCloseModal}/>
        <Tooltip title={"Save"} arrow>
        <button
            onClick={(e) => {
                e.stopPropagation();
                if(user) onOpenModal()
                else showSigninModal()
            }}
            className={`!bg-white hover:!bg-slate-300 rounded-full border flex items-center h-fit ${!isLoadingUser&&"p-2"}`}
        >
            {isLoadingUser?<AppSpinner size={40} variant="DARK" />:<Add/>}
        </button>
      </Tooltip>
      </>
     );
}

export default AddRecipeToBook;