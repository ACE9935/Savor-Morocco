import Skeleton from "react-loading-skeleton";
import { useUser } from "../context/auth-context";
import { Link, useNavigate } from "react-router-dom";
import { ArrowCircleRight, ArrowForward } from "@mui/icons-material";

function ProfileLink() {
    
    const {user, loading}=useUser()
    const navigate=useNavigate()

    return ( 
        <>{loading?
            <Skeleton width={100} height={34} className="!rounded-full"/>
            :
            <div>

            {user?
            <div onClick={()=>navigate("/profile/overview")} className="flex cursor-pointer items-center gap-2 border-green-500 border-2 rounded-full pr-2 bg-amber-500">
             <div className="w-[2.5rem] aspect-square rounded-full bg-center bg-cover relative" style={{backgroundImage:`url(${user?.photoUrl})`}}></div>
             <div className="text-black/90 font-bold">Profile <ArrowCircleRight/></div>
            </div>
            :
            <Link to={"/login"} className="rounded-md bg-white py-2 px-4 font-bold">Signin</Link>}
        </div>}</>
     );
}

export default ProfileLink;