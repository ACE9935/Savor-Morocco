import { useNavigate } from "react-router-dom";
import { IconButton, Modal } from "@mui/material";
import { ArrowBack} from "@mui/icons-material";
import IngredientsAllControlTab from "./IngredientsAllTab";
import { useUser } from "../../context/auth-context";
import { useEffect, useState } from "react";
import ShoppingListNavTab from "./ShoppingListNavTab";
import ShoppingListContainerSkeleton from "./ShoppingListContainerSkeleton";

function ShoppingListAllContainer() {

  const navigate = useNavigate();
  const {user, loading:isLoadingUser}=useUser()

  return (
    <>{isLoadingUser?
    <ShoppingListContainerSkeleton/>
    :<div className="flex flex-col gap-4 w-full max-w-[1100px]">

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
       <IngredientsAllControlTab/>
      </div>
    </div>}</>
  );
}

export default ShoppingListAllContainer;