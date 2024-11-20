import { Add } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useUser } from "../../context/auth-context";
import { useToast } from "../../context/ToastContext";
import { removeIngredientNotIncluded } from "../../firebase/removeIngredientNotIncluded";
import { useState } from "react";
import AppSpinner from "../../components/AppSpinner";

function ReincludeItemBtn({id,name}:{id:string,name:string}) {

   const {user, updateUser}=useUser()
   const {showToast}=useToast()
   const [loading,setLoading]=useState(false)

   const handleInclusion = async () => {
    if (!user || !user.id) return; // Ensure user is available
    try {
        setLoading(true);
        await removeIngredientNotIncluded(user.id, id, name)
        await updateUser()
        showToast({
            text: "Item added successfully!",
            severity: "success",
          });

        console.log("Ingredients marked as not included successfully!");
    } catch (error) {
        console.error("Failed to update ingredients:", error);
    } finally {
        setLoading(false);// Clear selection after update
    }
};

    return ( 
    <IconButton 
     disabled={loading}
     onClick={handleInclusion}>
        <div className="rounded-full w-[2rem] aspect-square border-amber-500 border-2 bg-amber-400 grid place-items-center">
            {loading?<AppSpinner size={30} variant="DARK"/>:<Add className="text-white" />}
        </div>
    </IconButton>
     );
    
}

export default ReincludeItemBtn;