import { useEffect, useState } from "react";
import { useUser } from "../../context/auth-context";
import getFirebaseDateValue from "../../utils/getFirebaseDateValue";
import Skeleton from "react-loading-skeleton";
import EditDisplayName from "./EditDisplayNameBtn";
import EditDisplayImageBtn from "./EditDisplayImageBtn";
import DangerousDeleteAccountBtn from "./DangerousDeleteAccountBtn";
import { auth } from "../../firebase/firebase";
import { Logout } from "@mui/icons-material";

export function ProfileTabSkeleton(){

  return (
    <div className="w-full md:w-[30rem] h-[20rem] md:h-[30rem]">
     <Skeleton height={"100%"} width={"100%"} className="!rounded-lg"/>
    </div>
  )
}

function ProfileTab() {

    const {user,loading:isLoadingUser,updateUser}=useUser()
    const [formattedJoinDate,setFormattedJoinDate]=useState<string|null>(null)
    const [globalRating, setGlobalRating] = useState(0);

    useEffect(() => {
      if (!user) return;
      else if (user.ratings.length > 0) {
        const totalRating = user.ratings.reduce((sum, rating) => sum + rating.rating, 0);
        setGlobalRating(totalRating / user.ratings.length);
      } else {
        setGlobalRating(0); // No ratings, set to 0 or any default value
      }
    }, [user]);

    useEffect(()=>{
      if(user) setFormattedJoinDate(getFirebaseDateValue(user.joinDate))
    },[user])

    return ( 
      <>
      {isLoadingUser?
      <ProfileTabSkeleton/>
        :
        <div className="bg-white rounded-xl shadow-lg flex flex-col items-center h-fit">
               <div className="py-5 px-6 w-full max-w-[25rem] md:max-w-[initial] md:w-[22rem] flex flex-col gap-4 h-fit">
                    <div className="flex flex-col gap-2 items-center">
                     <div className="border-4 p-1 border-green-500 rounded-full mb-1">
                      <img width={150} src={user?.photoUrl} className="rounded-full object-cover object-center aspect-square"/>
                     </div>
                     <div className="flex items-center flex-col">
                     <div className="text-lg font-bold flex gap-2 items-center">{user?.userName}
                     <EditDisplayName/>
                       
                        </div>
                        <div className="text-sm text-slate-700">@{user?.email}</div>
                        </div>
                     </div>
                     <div className="w-full flex flex-col gap-2 mt-4">
                     <EditDisplayImageBtn/>
                     <button 
                      className="px-4 py-2 hover:text-white text-blue-500 font-bold rounded-full transition-all border-2 border-blue-500 hover:bg-blue-500 flex items-center gap-1 justify-center"
                      onClick={async ()=>{auth.signOut()}}><Logout/>Logout</button>
                     </div>
                     <div className="mt-3 pb-3 border-b-2">
                     <div className="flex justify-between">Rated recipes : <span className="font-bold text-slate-600">{user?.ratings.length}</span></div>
                     <div className="flex justify-between">Recipes average rating : <span className="font-bold text-slate-600">{globalRating.toFixed(1)}</span></div>
                     <div className="flex justify-between">Comments: <span className="font-bold text-slate-600">{user?.comments.length}</span></div>
                     <div className="flex justify-between">Member since: <span className="font-bold text-slate-600">{formattedJoinDate?.split(",").slice(0, 2)}</span></div>

                     </div>
            
                     <div className="flex justify-center"><DangerousDeleteAccountBtn/></div>
                </div>
                </div>
      }</>
     );
}

export default ProfileTab;