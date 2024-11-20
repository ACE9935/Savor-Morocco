const RecipeSectionTitle = ({title,color}:{title:string,color?:string})=><h2 style={{color}} className="text-xl font-semibold"><div className="relative w-fit uppercase">{title}<div className="w-[100%] max-w-[4rem] h-1 bg-amber-500 mt-1"></div></div></h2>

export default RecipeSectionTitle;