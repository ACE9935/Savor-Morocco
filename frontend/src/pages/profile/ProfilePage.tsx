import { useEffect, useState } from "react";
import { useUser } from "../../context/auth-context";
import getFirebaseDateValue from "../../utils/getFirebaseDateValue";
import { IconButton, Tooltip } from "@mui/material";
import { CameraAlt, Delete, Edit } from "@mui/icons-material";
import ProfileTab from "./ProfileTab";
import AccountRecipeBooksSlider from "./AccountRecipeBooksSlider";
import UserFavorites from "./UserFavorites";
import ShoppingListSection from "./ShoppingListSection";
import ProfileSkeleton from "./ProfileSkeleton";

function ProfilePage() {

    const {user, loading:isLoadingUser}=useUser()

    return ( 
        
               <>
               {isLoadingUser?
               <ProfileSkeleton/>
               :
               <div className="w-full max-w-[1100px]">
                <AccountRecipeBooksSlider/>
                <UserFavorites/>
                <ShoppingListSection/>
               </div>}
               </>
     );
}

export default ProfilePage;