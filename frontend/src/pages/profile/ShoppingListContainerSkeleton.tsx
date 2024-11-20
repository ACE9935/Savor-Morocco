import Skeleton from "react-loading-skeleton";

function ShoppingListContainerSkeleton() {
    return ( 
        <div className="w-full max-w-[1100px]">
        <div className="mb-6">
        <Skeleton height={40} width={320} className="!rounded-lg !mb-4"/>
        <div className="w-[80%] md:w-[50%]"><Skeleton height={200} className="!rounded-lg !w-full"/></div>
        </div>
        <div className="mb-6">
        <Skeleton height={300} width={"100%"} className="!rounded-lg"/>
        </div>
    </div>
     );
}

export default ShoppingListContainerSkeleton;