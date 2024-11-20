import { CameraAlt } from "@mui/icons-material";
import { useUser } from "../../context/auth-context";
import { updateUserField } from "../../firebase/updateUserField";
import { ChangeEvent, useState } from "react";
import { handleUploadOfImage } from "../../firebase/handleUploadOfImage";
import { useToast } from "../../context/ToastContext";
import AppSpinner from "../../components/AppSpinner";
import { configurations } from "../../app-configurations";
import { deleteImage } from "../../firebase/deleteImage";

function EditDisplayImageBtn() {

    const {user,updateUser}=useUser()
    const [loading, setLoading]=useState(false)
    const {showToast}=useToast()

    return ( 
        <div className="mt-[-2rem]">
            <input onChange={async (e: ChangeEvent<HTMLInputElement>) => {
                if (!loading && e.target.files && e.target.files[0]) {
                 setLoading(true)
                 const selectedImage = e.target.files[0];
                 const newUrl=await handleUploadOfImage(selectedImage, "users-pics")
                 if(user?.photoUrl!=configurations.userDefaultPic) await deleteImage(user?.photoUrl!)
                 await updateUserField("id",user?.id!,"photoUrl",newUrl)
                 .then(async ()=>{
                    await updateUser()
                    showToast({
                        text: "Display image edited successfully!",
                        severity: "success",
                      });
                 }).finally(()=>setLoading(false))
               }
              }} 
             type="file" id="logoInputUser" className='opacity-0 w-0 h-0'/>
            <label htmlFor="logoInputUser" className="flex justify-center gap-2 rounded-full p-2 px-4 font-bold border-2 hover:bg-primary-color hover:text-white transition-all border-primary-color text-primary-color items-center"> {loading?<AppSpinner variant="DARK" size={25}/>:<CameraAlt/>} Edit display image</label>
        </div>
       
     );
}

export default EditDisplayImageBtn;