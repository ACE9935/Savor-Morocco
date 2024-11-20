import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useUser } from "../../context/auth-context";

function ShoppingListNavTab() {
  
    const navigate = useNavigate();
    const location=useLocation()
    const {user}=useUser()
    const [numIngredients, setNumIngredients]=useState(0)
    const selectedStyle="bg-amber-500 border-2 border-primary-color text-white"
    const nonSelectedStyle="bg-gray-300/50 hover:bg-gray-400/50 text-black/80 transition-all"
  
    useEffect(()=>{
     if(user){
      const ItemNames=user.shoppingList.map((list)=>list.items).flat().filter(item=>!item.notIncluded).map(item=>item.name)
  
      setNumIngredients([...new Set(ItemNames)].length)
     }
    },[user])

    return ( 
        <div className="flex gap-4 px-2 py-1">
        <div onClick={()=>navigate("/profile/shopping-list")} className={`${!location.pathname.split('/').filter(Boolean).includes("all")?selectedStyle:nonSelectedStyle} text-xl font-semibold p-2 rounded-full px-4 cursor-pointer`}>{user?.shoppingList.length} Recipes</div>
        <div onClick={()=>navigate("/profile/shopping-list/all")} className={`${location.pathname.split('/').filter(Boolean).includes("all")?selectedStyle:nonSelectedStyle} text-xl font-semibold p-2 rounded-full px-4 cursor-pointer`}>{numIngredients} Ingredients</div>
      </div>
     );
}

export default ShoppingListNavTab;