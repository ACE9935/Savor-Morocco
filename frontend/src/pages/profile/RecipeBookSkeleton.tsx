import Skeleton from "react-loading-skeleton";

function RecipeBookSkeleton() {
    return ( 
        <div className="w-full max-w-[1100px]">
            <div className="mb-6">
            <Skeleton height={40} width={320} className="!rounded-lg !mb-4"/>
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-[60rem] gap-4">
            <Skeleton height={280} className="!rounded-lg"/>
            <Skeleton height={280} className="!rounded-lg"/>
            <Skeleton height={280} className="!rounded-lg"/>
            <Skeleton height={280} className="!rounded-lg"/>
            </div>
            </div>
        </div>
     );
}

export default RecipeBookSkeleton;