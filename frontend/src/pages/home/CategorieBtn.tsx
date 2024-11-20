import { RecipeType } from "../../types/Recipe";

function CategorieBtn({type, selected, setSelected}:{type:RecipeType | "All", selected:boolean, setSelected:any}) {

    const selectedStyle="border-2 bg-amber-300 border-amber-500 !text-white "

    return ( 
        <button onClick={()=>setSelected(type)} className={`${selected&&selectedStyle} uppercase text-gray-500 font-bold rounded-full px-4 py-1`}>{type}</button>
     );
}

export default CategorieBtn;